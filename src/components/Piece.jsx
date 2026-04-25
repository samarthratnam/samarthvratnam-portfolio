const PIECE_NAMES = {
  k: "king",
  q: "queen",
  r: "rook",
  b: "bishop",
  n: "knight",
  p: "pawn",
};

function BaseBands() {
  return (
    <>
      <path className="piece__band" d="M28 70.5h44" />
      <path className="piece__band" d="M24 79h52" />
    </>
  );
}

function PawnGlyph() {
  return (
    <>
      <path
        className="piece__shape"
        d="M40 63c0-7 3-13 7-18-5-2-8-6-8-12 0-7 5-12 11-12s11 5 11 12c0 6-3 10-8 12 4 5 7 11 7 18H40Z"
      />
      <BaseBands />
    </>
  );
}

function KingGlyph() {
  return (
    <>
      <path className="piece__detail" d="M50 8v16" />
      <path className="piece__detail" d="M43 16h14" />
      <path
        className="piece__shape"
        d="M33 42c0-6 3-12 8-16 2 6 6 11 9 11s7-5 9-11c5 4 8 10 8 16 0 5-2 9-5 13H38c-3-4-5-8-5-13Z"
      />
      <rect className="piece__shape" x="35" y="57" width="30" height="9" rx="1" />
      <BaseBands />
    </>
  );
}

function QueenGlyph() {
  return (
    <>
      <circle className="piece__orb" cx="32" cy="22" r="3.5" />
      <circle className="piece__orb" cx="43" cy="14" r="3.5" />
      <circle className="piece__orb" cx="57" cy="14" r="3.5" />
      <circle className="piece__orb" cx="68" cy="22" r="3.5" />
      <path
        className="piece__shape"
        d="M29 28 35 52h30l6-24-12 8-9-17-9 17-12-8Z"
      />
      <rect className="piece__shape" x="35" y="56" width="30" height="9" rx="1" />
      <BaseBands />
    </>
  );
}

function BishopGlyph() {
  return (
    <>
      <path
        className="piece__shape"
        d="M50 14c7 6 12 12 12 20 0 6-3 11-8 16 5 4 8 9 8 15H38c0-6 3-11 8-15-5-5-8-10-8-16 0-8 5-14 12-20Z"
      />
      <path className="piece__detail" d="M50 22v17" />
      <path className="piece__detail" d="M45 27 55 17" />
      <circle className="piece__orb piece__orb--hollow" cx="50" cy="58" r="4.5" />
      <BaseBands />
    </>
  );
}

function KnightGlyph() {
  return (
    <>
      <path
        className="piece__shape"
        d="M67 20c-6 1-12 4-17 11l-7 10 5 6-12 10v8h29c5 0 9-4 9-9 0-2-1-4-3-6l-4-5 1-12c0-11-3-21-11-13Z"
      />
      <path className="piece__detail" d="M52 33c5 0 9 3 12 7" />
      <path className="piece__detail" d="M46 52 57 61" />
      <path className="piece__detail" d="M67 20l7 8" />
      <circle className="piece__orb" cx="56" cy="31" r="2.2" />
      <path className="piece__band" d="M32 79h38" />
    </>
  );
}

function RookGlyph() {
  return (
    <>
      <path
        className="piece__shape"
        d="M31 21h8v9h8v-9h6v9h8v-9h8v17H31V21Z"
      />
      <rect className="piece__shape" x="36" y="40" width="28" height="24" rx="1" />
      <path className="piece__detail" d="M36 45h28" />
      <BaseBands />
    </>
  );
}

function PieceGlyph({ type }) {
  return (
    <svg
      className="piece__art"
      viewBox="0 0 100 100"
      aria-hidden="true"
      focusable="false"
    >
      {type === "p" ? <PawnGlyph /> : null}
      {type === "k" ? <KingGlyph /> : null}
      {type === "q" ? <QueenGlyph /> : null}
      {type === "b" ? <BishopGlyph /> : null}
      {type === "n" ? <KnightGlyph /> : null}
      {type === "r" ? <RookGlyph /> : null}
    </svg>
  );
}

function Piece({ piece, style, onRef, ghost = false }) {
  const label = `${piece.color === "w" ? "White" : "Black"} ${PIECE_NAMES[piece.type]}`;

  return (
    <div
      ref={onRef}
      className={`piece piece--${piece.color} ${ghost ? "piece--ghost" : ""}`}
      style={style}
      aria-label={label}
      role="img"
    >
      <PieceGlyph type={piece.type} />
    </div>
  );
}

export default Piece;
