import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Piece from "./Piece";
import SectionIcon from "./SectionIcon";

const FILES = "abcdefgh".split("");
const RANKS = [8, 7, 6, 5, 4, 3, 2, 1];

function getSquareColor(fileIndex, rankIndex) {
  return (fileIndex + rankIndex) % 2 === 0 ? "light" : "dark";
}

function getPieceStyle(square) {
  const fileIndex = square.charCodeAt(0) - 97;
  const rankIndex = 8 - Number(square[1]);

  return {
    left: `${fileIndex * 12.5}%`,
    top: `${rankIndex * 12.5}%`,
  };
}

function ChessBoard({
  timeline,
  transitions,
  sections,
  currentPly,
  resetSignal,
}) {
  const [displayPieces, setDisplayPieces] = useState(timeline[0].pieces);
  const [overlayPieces, setOverlayPieces] = useState([]);
  const [highlightSquare, setHighlightSquare] = useState(null);
  const [animationInstruction, setAnimationInstruction] = useState(null);

  const boardRef = useRef(null);
  const previousPlyRef = useRef(currentPly);
  const pieceRefs = useRef(new Map());
  const overlayRefs = useRef(new Map());
  const squareRefs = useRef(new Map());
  const resetPendingRef = useRef(false);
  const highlightTimeoutRef = useRef(null);
  const audioContextRef = useRef(null);
  const currentSnapshot = timeline[currentPly];
  const checkmatedKingSquare = currentSnapshot.isCheckmate
    ? currentSnapshot.pieces.find(
        (piece) => piece.type === "k" && piece.color === currentSnapshot.turn,
      )?.square ?? null
    : null;
  const activeMarkers = sections
    .slice(0, currentPly)
    .map((section, index) => ({
      section,
      square: transitions[index + 1]?.to ?? null,
      isActive: index + 1 === currentPly,
    }))
    .filter((marker) => marker.square);

  useEffect(() => {
    if (resetSignal === 0) {
      return;
    }

    resetPendingRef.current = true;
    previousPlyRef.current = 0;
    setDisplayPieces(timeline[0].pieces);
    setOverlayPieces([]);
    setHighlightSquare(null);
    setAnimationInstruction(null);

    if (boardRef.current) {
      gsap.fromTo(
        boardRef.current,
        { scale: 0.97, rotateX: 2 },
        {
          scale: 1,
          rotateX: 0,
          duration: 0.45,
          ease: "power2.out",
        },
      );
    }
  }, [resetSignal, timeline]);

  useEffect(() => {
    const previousPly = previousPlyRef.current;

    if (previousPly === currentPly) {
      return;
    }

    if (resetPendingRef.current) {
      resetPendingRef.current = false;
      previousPlyRef.current = currentPly;
      setDisplayPieces(timeline[currentPly].pieces);
      return;
    }

    const distance = Math.abs(currentPly - previousPly);

    // When the scroll jumps more than one step, we snap to the derived
    // snapshot to keep the board state and React tree perfectly aligned.
    if (distance !== 1) {
      setDisplayPieces(timeline[currentPly].pieces);
      setOverlayPieces([]);
      setHighlightSquare(null);
      setAnimationInstruction(null);
      previousPlyRef.current = currentPly;
      return;
    }

    const isForward = currentPly > previousPly;
    const transition = transitions[isForward ? currentPly : previousPly];

    previousPlyRef.current = currentPly;
    setHighlightSquare(isForward ? transition.to : transition.from);
    setOverlayPieces(
      isForward && transition.capturedPiece
        ? [
            {
              key: `${transition.ply}-capture`,
              piece: transition.capturedPiece,
              square: transition.capturedSquare,
            },
          ]
        : [],
    );
    setAnimationInstruction({
      direction: isForward ? "forward" : "backward",
      transition,
    });
    setDisplayPieces(timeline[currentPly].pieces);
  }, [currentPly, timeline, transitions]);

  useEffect(() => {
    return () => {
      window.clearTimeout(highlightTimeoutRef.current);

      if (audioContextRef.current) {
        audioContextRef.current.close().catch(() => {});
      }
    };
  }, []);

  useLayoutEffect(() => {
    if (!animationInstruction) {
      return undefined;
    }

    const { direction, transition } = animationInstruction;
    const movingPieceNode = pieceRefs.current.get(transition.movedPieceId);
    const highlightNode = squareRefs.current.get(
      direction === "forward" ? transition.to : transition.from,
    );
    const captureNode = overlayRefs.current.get(`${transition.ply}-capture`);
    const restoredNode = transition.capturedPiece
      ? pieceRefs.current.get(transition.capturedPiece.id)
      : null;

    const startSquare = direction === "forward" ? transition.from : transition.to;
    const endSquare = direction === "forward" ? transition.to : transition.from;
    const startNode = squareRefs.current.get(startSquare);
    const endNode = squareRefs.current.get(endSquare);

    if (!movingPieceNode || !startNode || !endNode) {
      setAnimationInstruction(null);
      setOverlayPieces([]);
      return undefined;
    }

    const startRect = startNode.getBoundingClientRect();
    const endRect = endNode.getBoundingClientRect();

    playMoveSound(audioContextRef, Boolean(transition.capturedPiece));

    const timelineAnimation = gsap.timeline({
      defaults: { ease: "power2.out" },
      onComplete: () => {
        setAnimationInstruction(null);
        setOverlayPieces([]);
        window.clearTimeout(highlightTimeoutRef.current);
        highlightTimeoutRef.current = window.setTimeout(() => {
          setHighlightSquare(null);
        }, 120);
      },
    });

    if (highlightNode) {
      const pulse = highlightNode.querySelector(".board-square__pulse");

      if (pulse) {
        timelineAnimation.fromTo(
          pulse,
          { autoAlpha: 0, scale: 0.4 },
          { autoAlpha: 1, scale: 1, duration: 0.16 },
          0,
        );
      }
    }

    if (captureNode) {
      timelineAnimation.fromTo(
        captureNode,
        { opacity: 1, scale: 1 },
        { opacity: 0, scale: 0.68, duration: 0.2, ease: "power1.in" },
        0.06,
      );
    }

    if (direction === "backward" && restoredNode) {
      timelineAnimation.fromTo(
        restoredNode,
        { opacity: 0, scale: 0.72 },
        { opacity: 1, scale: 1, duration: 0.24 },
        0.14,
      );
    }

    // FLIP-style animation: render the new board position first, then
    // animate the moved piece from the previous square into place.
    timelineAnimation.fromTo(
      movingPieceNode,
      {
        x: startRect.left - endRect.left,
        y: startRect.top - endRect.top,
        scale: 1.06,
        zIndex: 6,
      },
      {
        x: 0,
        y: 0,
        scale: 1,
        duration: 0.4,
        clearProps: "zIndex",
      },
      0.1,
    );

    return () => {
      timelineAnimation.kill();
    };
  }, [animationInstruction, displayPieces]);

  return (
    <div className="board-frame" ref={boardRef}>
      <div className="board-grid" aria-label="Chess board">
        {RANKS.map((rank, rankIndex) =>
          FILES.map((file, fileIndex) => {
            const square = `${file}${rank}`;
            const color = getSquareColor(fileIndex, rankIndex);
            const isHighlighted = square === highlightSquare;
            const isCheckmatedKing = square === checkmatedKingSquare;
            const showFile = rank === 1;
            const showRank = file === "a";

            return (
              <div
                key={square}
                ref={(node) => {
                  if (node) {
                    squareRefs.current.set(square, node);
                  } else {
                    squareRefs.current.delete(square);
                  }
                }}
                className={`board-square board-square--${color} ${
                  isHighlighted ? "is-highlighted" : ""
                } ${isCheckmatedKing ? "is-checkmate-king" : ""}`}
              >
                <span className="board-square__pulse" />
                {showFile ? <span className="board-square__file">{file}</span> : null}
                {showRank ? <span className="board-square__rank">{rank}</span> : null}
              </div>
            );
          }),
        )}

        <div className="pieces-layer" aria-hidden="true">
          {displayPieces.map((piece) => (
            <Piece
              key={piece.id}
              piece={piece}
              style={getPieceStyle(piece.square)}
              onRef={(node) => {
                if (node) {
                  pieceRefs.current.set(piece.id, node);
                } else {
                  pieceRefs.current.delete(piece.id);
                }
              }}
            />
          ))}

          {overlayPieces.map((overlay) => (
            <Piece
              key={overlay.key}
              piece={overlay.piece}
              ghost
              style={getPieceStyle(overlay.square)}
              onRef={(node) => {
                if (node) {
                  overlayRefs.current.set(overlay.key, node);
                } else {
                  overlayRefs.current.delete(overlay.key);
                }
              }}
            />
          ))}
        </div>

        <div className="board-badges-layer" aria-hidden="true">
          {activeMarkers.map((marker) => (
            <div
              key={`${marker.section.id}-${marker.square}`}
              className="board-square-badge"
              style={getPieceStyle(marker.square)}
            >
              <div
                className={`board-square-badge__chip ${
                  marker.isActive ? "is-active" : ""
                }`}
              >
                <SectionIcon
                  id={marker.section.id}
                  className="board-square-badge__icon"
                  title={marker.section.label}
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

function playMoveSound(audioContextRef, isCapture) {
  try {
    const Context = window.AudioContext || window.webkitAudioContext;

    if (!Context) {
      return;
    }

    if (!audioContextRef.current) {
      audioContextRef.current = new Context();
    }

    const context = audioContextRef.current;

    if (context.state === "suspended") {
      context.resume().catch(() => {});
    }

    const oscillator = context.createOscillator();
    const gain = context.createGain();

    oscillator.type = "triangle";
    oscillator.frequency.setValueAtTime(
      isCapture ? 220 : 320,
      context.currentTime,
    );
    gain.gain.setValueAtTime(0.0001, context.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.03, context.currentTime + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + 0.15);

    oscillator.connect(gain);
    gain.connect(context.destination);
    oscillator.start();
    oscillator.stop(context.currentTime + 0.16);
  } catch {
    // Audio is optional, so failures should never block the UI.
  }
}

export default ChessBoard;
