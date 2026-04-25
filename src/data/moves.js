import { Chess } from "chess.js";

export const openingMoves = [
  "f3",
  "e5",
  "g4",
  "Nc6",
  "Nc3",
  "Bc5",
  "b3",
  "Qh4#",
];

export const portfolioProfile = {
  name: "Samarth V Ratnam",
  linkedin: "https://www.linkedin.com/in/samarth-v-ratnam-13456534b/",
  github: "https://github.com/samarthratnam",
  codechef: "https://www.codechef.com/users/kl2400031630",
  leetcode: "https://leetcode.com/u/samarthvratnam/",
};

const projectsRepositoryUrl = `${portfolioProfile.github}?tab=repositories`;

export const projectShowcaseProjects = [
  {
    id: "modelcraft",
    title: "ModelCraft",
    summary: "A web app to train and test ML models on custom CSVs.",
    description:
      "An end-to-end ML workspace that lets users upload datasets, choose a task, train a model, and run quick predictions from the browser.",
    tech: ["FastAPI", "Next.js", "Tailwind", "Python"],
    githubUrl: projectsRepositoryUrl,
    previewTheme: "modelcraft",
  },
  {
    id: "maia",
    title: "M.A.I.A",
    summary: "A web-based AI assistant built around useful real-world workflows.",
    description:
      "M.A.I.A focuses on practical assistance, fast interaction loops, and a clean interface for getting meaningful work done with AI.",
    tech: ["React", "Node.js", "OpenAI", "Postgres"],
    githubUrl: projectsRepositoryUrl,
    previewTheme: "maia",
  },
  {
    id: "vinyltab",
    title: "VinylTab",
    summary: "A music-focused productivity app designed around interaction and focus.",
    description:
      "VinylTab blends playback, lightweight task flow, and a polished listening experience into a productivity space with personality.",
    tech: ["React", "TypeScript", "Supabase", "Spotify API"],
    githubUrl: projectsRepositoryUrl,
    previewTheme: "vinyltab",
  },
  {
    id: "chess-portfolio",
    title: "Chess Portfolio",
    summary: "An interactive portfolio told through an eight-move chess sequence.",
    description:
      "A storytelling portfolio that turns navigation into a chess opening, pairing motion, section reveals, and a custom board UI.",
    tech: ["React", "GSAP", "Chess.js", "Vite"],
    githubUrl: projectsRepositoryUrl,
    previewTheme: "chess",
  },
  {
    id: "gamelab",
    title: "Game Lab",
    summary: "A collection of game development experiments and interactive prototypes.",
    description:
      "A space for mechanics exploration, rapid prototyping, and interactive systems work shared across portfolio updates and socials.",
    tech: ["Unity", "C#", "Game Design", "Prototyping"],
    githubUrl: projectsRepositoryUrl,
    previewTheme: "gamelab",
  },
];

export const sectionMilestones = [
  {
    id: "about",
    label: "About Me",
    title: "About Me",
    blurb: "Developer focused on software engineering, AI, and cloud technologies.",
    terminalTitle: "about-me.md",
    terminalLines: [
      "samarth@portfolio:~$ cat about-me.md",
      "",
      "🚀 About Me",
      "",
      "I'm Samarth — a developer passionate about building intelligent, real-world solutions across software engineering, AI, and cloud technologies.",
      "",
      "I enjoy solving complex problems and turning ideas into scalable applications, backed by a strong foundation in DSA and system design.",
      "",
      "I actively refine my skills through competitive programming and hands-on projects, including a web-based AI assistant (M.A.I.A) and a music-focused productivity app, VinylTab.",
      "",
      "I'm also exploring game development, with projects I share on my portfolio and LinkedIn.",
      "",
      "Beyond coding, I enjoy traveling and video editing, bringing creativity into both tech and storytelling.",
      "",
      "I'm driven by curiosity and a constant urge to build meaningful, impactful experiences.",
    ],
  },
  {
    id: "skills",
    label: "Skills",
    title: "Skills",
    blurb:
      "A practical toolkit across frontend, backend, databases, and core programming languages.",
    terminalTitle: "skills.txt",
    terminalLines: [
      "samarth@portfolio:~$ ./skills --list",
      "",
      "[ok] stack profile loaded",
      "[::] practical toolkit across frontend, backend, databases, and core languages",
      "",
      "[</>] frontend",
      "  - html",
      "  - css",
      "  - javascript",
      "  - react",
      "",
      "[{}] backend",
      "  - java",
      "  - spring",
      "  - postman",
      "",
      "[(db)] database",
      "  - sql",
      "",
      "[<>] languages",
      "  - python",
      "  - java",
      "  - c++",
    ],
  },
  {
    id: "projects",
    label: "Projects",
    title: "Projects",
    blurb:
      "I am currently building products that combine intelligence, usability, and strong engineering fundamentals.",
    featuredProjects: projectShowcaseProjects.slice(0, 3),
    ctaLabel: "View My Projects",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    title: "LinkedIn",
    blurb: "Connect with me professionally and follow my journey, experience, and updates.",
    url: portfolioProfile.linkedin,
    ctaLabel: "Open LinkedIn",
    meta: "samarth-v-ratnam-13456534b",
  },
  {
    id: "github",
    label: "GitHub",
    title: "GitHub",
    blurb: "Explore my repositories, experiments, and the way I turn ideas into working code.",
    url: portfolioProfile.github,
    ctaLabel: "View GitHub",
    meta: "@samarthratnam",
  },
  {
    id: "codechef",
    label: "CodeChef",
    title: "CodeChef",
    blurb: "Track my competitive programming progress and the way I approach algorithmic problem solving.",
    url: portfolioProfile.codechef,
    ctaLabel: "Open CodeChef",
    meta: "kl2400031630",
  },
  {
    id: "leetcode",
    label: "LeetCode",
    title: "LeetCode",
    blurb: "See how I practice consistency, optimization, and problem-solving depth through coding challenges.",
    url: portfolioProfile.leetcode,
    ctaLabel: "Open LeetCode",
    meta: "samarthvratnam",
  },
  {
    id: "resume",
    label: "Resume",
    title: "Resume",
    blurb:
      "This final square is reserved for your resume. Add your resume link next and this section can become a direct download card.",
    body: [
      "Once you share your resume URL or PDF, this final checkmate state can link directly to it.",
    ],
  },
];

const FILES = "abcdefgh".split("");
const BACK_RANK = ["r", "n", "b", "q", "k", "b", "n", "r"];

function createInitialSquareMap() {
  const squareMap = new Map();

  FILES.forEach((file, index) => {
    const whiteBackSquare = `${file}1`;
    const blackBackSquare = `${file}8`;
    const whitePawnSquare = `${file}2`;
    const blackPawnSquare = `${file}7`;
    const backRankType = BACK_RANK[index];

    squareMap.set(whiteBackSquare, {
      id: `w${backRankType}-${whiteBackSquare}`,
      color: "w",
      type: backRankType,
      square: whiteBackSquare,
    });

    squareMap.set(whitePawnSquare, {
      id: `wp-${whitePawnSquare}`,
      color: "w",
      type: "p",
      square: whitePawnSquare,
    });

    squareMap.set(blackBackSquare, {
      id: `b${backRankType}-${blackBackSquare}`,
      color: "b",
      type: backRankType,
      square: blackBackSquare,
    });

    squareMap.set(blackPawnSquare, {
      id: `bp-${blackPawnSquare}`,
      color: "b",
      type: "p",
      square: blackPawnSquare,
    });
  });

  return squareMap;
}

function cloneSquareMap(squareMap) {
  return new Map(
    Array.from(squareMap.entries(), ([square, piece]) => [square, { ...piece }]),
  );
}

function createSnapshot(squareMap, chess, ply) {
  return {
    ply,
    fen: chess.fen(),
    turn: chess.turn(),
    isCheck: chess.inCheck(),
    isCheckmate: chess.isCheckmate(),
    pieces: Array.from(squareMap.values())
      .map((piece) => ({ ...piece }))
      .sort((left, right) => left.id.localeCompare(right.id)),
  };
}

function buildMoveRows(moveHistory) {
  const rows = [];

  for (let index = 0; index < moveHistory.length; index += 2) {
    const white = moveHistory[index];
    const black = moveHistory[index + 1];

    rows.push({
      moveNumber: index / 2 + 1,
      white: white?.san ?? "",
      whitePly: white?.ply ?? null,
      black: black?.san ?? "",
      blackPly: black?.ply ?? null,
    });
  }

  return rows;
}

function getCastleRookMove(move) {
  if (move.flags.includes("k")) {
    return move.color === "w"
      ? { from: "h1", to: "f1" }
      : { from: "h8", to: "f8" };
  }

  if (move.flags.includes("q")) {
    return move.color === "w"
      ? { from: "a1", to: "d1" }
      : { from: "a8", to: "d8" };
  }

  return null;
}

function buildOpeningSequence() {
  const chess = new Chess();
  let squareMap = createInitialSquareMap();

  const timeline = [createSnapshot(squareMap, chess, 0)];
  const transitions = [null];
  const moveHistory = [];

  openingMoves.forEach((san, index) => {
    const move = chess.move(san, { sloppy: true });

    if (!move) {
      throw new Error(`Invalid move in opening sequence: ${san}`);
    }

    const nextSquareMap = cloneSquareMap(squareMap);
    const movedPiece = nextSquareMap.get(move.from);

    if (!movedPiece) {
      throw new Error(`Missing piece on ${move.from} for move ${san}`);
    }

    let capturedSquare = null;

    if (move.flags.includes("e")) {
      const rankOffset = move.color === "w" ? -1 : 1;
      capturedSquare = `${move.to[0]}${Number(move.to[1]) + rankOffset}`;
    } else if (move.captured) {
      capturedSquare = move.to;
    }

    let capturedPiece = null;

    if (capturedSquare) {
      capturedPiece = nextSquareMap.get(capturedSquare) ?? null;
      nextSquareMap.delete(capturedSquare);
    }

    nextSquareMap.delete(move.from);
    movedPiece.square = move.to;

    if (move.promotion) {
      movedPiece.type = move.promotion;
    }

    nextSquareMap.set(move.to, movedPiece);

    const rookMove = getCastleRookMove(move);

    if (rookMove) {
      const rookPiece = nextSquareMap.get(rookMove.from);

      if (rookPiece) {
        nextSquareMap.delete(rookMove.from);
        rookPiece.square = rookMove.to;
        nextSquareMap.set(rookMove.to, rookPiece);
      }
    }

    squareMap = nextSquareMap;

    moveHistory.push({
      ply: index + 1,
      san: move.san,
      color: move.color,
    });

    transitions.push({
      ply: index + 1,
      san: move.san,
      color: move.color,
      from: move.from,
      to: move.to,
      movedPieceId: movedPiece.id,
      capturedPiece: capturedPiece ? { ...capturedPiece } : null,
      capturedSquare,
      rookMove,
    });

    timeline.push(createSnapshot(squareMap, chess, index + 1));
  });

  return {
    timeline,
    transitions,
    moveHistory,
    moveRows: buildMoveRows(moveHistory),
  };
}

export const openingSequence = buildOpeningSequence();
