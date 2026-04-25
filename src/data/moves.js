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

export const projectShowcaseProjects = [
  {
    id: "vinyltab",
    title: "VinylTab",
    host: "vinyl-tab.vercel.app",
    summary:
      "A music-driven productivity workspace with an immersive playback-first interface.",
    description:
      "A polished listening and focus experience built around playlists, a rich player surface, and an atmosphere-heavy UI.",
    tech: ["React", "Music UI", "Productivity", "Vercel"],
    githubUrl: "https://github.com/samarthratnam/VinylTab.git",
    vercelUrl: "https://vinyl-tab.vercel.app/",
    imageUrl: "/project-showcase/vinyltab.jpeg",
    imageAlt: "VinylTab project screenshot",
    previewTheme: "vinyltab",
  },
  {
    id: "rock-paper-scissors",
    title: "Rock Paper Scissors",
    host: "Vercel deployment",
    summary:
      "A browser-based Rock Paper Scissors game with score tracking and a clean versus layout.",
    description:
      "A quick-play game project focused on simple interactions, readable score states, and classic head-to-head flow against the CPU.",
    tech: ["HTML", "CSS", "JavaScript", "Game"],
    githubUrl:
      "https://github.com/samarthratnam/Rock-Paper-Scissors-GAME.git",
    vercelUrl:
      "https://vercel.com/samarths-projects-8e1ed410/rock-paper-scissors-game/CXYzkVEVpm8NBdnn27fJztAxsL1j",
    imageUrl: "/project-showcase/rock-paper-scissors.png",
    imageAlt: "Rock Paper Scissors project screenshot",
    previewTheme: "rps",
  },
  {
    id: "tic-tac-toe",
    title: "Tic-Tac-Toe",
    host: "tic-tac-toe-game-chi-lime.vercel.app",
    summary: "A bright and playful Tic-Tac-Toe implementation with a bold game board UI.",
    description:
      "A classic grid game presented with a simple, colorful layout that keeps the focus on fast interaction and replayability.",
    tech: ["HTML", "CSS", "JavaScript", "Game"],
    githubUrl: "https://github.com/samarthratnam/Tic-Tac-Toe-Game.git",
    vercelUrl: "https://tic-tac-toe-game-chi-lime.vercel.app/",
    imageUrl: "/project-showcase/tic-tac-toe.png",
    imageAlt: "Tic-Tac-Toe project screenshot",
    previewTheme: "tictactoe",
  },
  {
    id: "smartcity",
    title: "CityAccess",
    host: "smartcity-psi.vercel.app",
    summary:
      "A city services access portal centered on login flow and structured citizen entry points.",
    description:
      "A smart-city themed web app built around portal access, clean form handling, and a straightforward public-service entry experience.",
    tech: ["Portal UI", "Forms", "Authentication", "Vercel"],
    githubUrl: "https://github.com/samarthratnam/SMARTCITY.git",
    vercelUrl: "https://smartcity-psi.vercel.app/",
    imageUrl: "/project-showcase/cityaccess.png",
    imageAlt: "CityAccess project screenshot",
    previewTheme: "smartcity",
  },
  {
    id: "eduerp",
    title: "EDUERP",
    host: "eduerp-gamma.vercel.app",
    summary:
      "A role-based education ERP interface for students, teachers, admins, and administrators.",
    description:
      "An education portal experience organized around role selection and dashboard-style access for different institutional users.",
    tech: ["ERP", "Role-Based UI", "Education", "Vercel"],
    githubUrl: "https://github.com/samarthratnam/EDUERP.git",
    vercelUrl: "https://eduerp-gamma.vercel.app/",
    imageUrl: "/project-showcase/eduerp.png",
    imageAlt: "EDUERP project screenshot",
    previewTheme: "eduerp",
  },
  {
    id: "nutritrack",
    title: "NutriTrack",
    host: "nutri-track-delta-henna.vercel.app",
    summary:
      "A nutrition-focused analyzer experience with recipe input, servings, and ingredient-based workflows.",
    description:
      "A food and recipe product experience with a guided ingredient form, nutrition analysis flow, and a warm product-style landing surface.",
    tech: ["Nutrition UI", "Forms", "Product Design", "Vercel"],
    githubUrl: "https://github.com/samarthratnam/NutriTrack.git",
    vercelUrl: "https://nutri-track-delta-henna.vercel.app/",
    imageUrl: "/project-showcase/nutritrack.png",
    imageAlt: "NutriTrack project screenshot",
    previewTheme: "nutritrack",
  },
  {
    id: "animanga",
    title: "Animanga",
    host: "animanga-livid.vercel.app",
    summary:
      "An anime and manga streaming-style interface with a strong hero layout and browse navigation.",
    description:
      "An entertainment-focused UI built around large hero imagery, category navigation, and a cinematic first impression.",
    tech: ["Streaming UI", "Search", "Browse", "Vercel"],
    githubUrl:
      "https://github.com/samarthratnam/AnimeStreamingWebsite.git",
    vercelUrl: "https://animanga-livid.vercel.app/",
    imageUrl: "/project-showcase/animanga.png",
    imageAlt: "Animanga project screenshot",
    previewTheme: "animanga",
  },
  {
    id: "maia-v1",
    title: "M.A.I.A V1",
    host: "GitHub repository",
    summary:
      "An assistant project focused on practical workflows and conversational utility.",
    description:
      "The first version of M.A.I.A, centered on useful assistant interactions and a work-oriented AI product direction.",
    tech: ["AI Assistant", "Workflow UI", "Prototype", "GitHub"],
    githubUrl: "https://github.com/samarthratnam/M.A.I.A_V1.git",
    imageUrl: "/project-showcase/maia-v1.png",
    imageAlt: "M.A.I.A V1 project screenshot",
    previewTheme: "maia",
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
      "I'm Samarth — a developer passionate about building real-world solutions across software engineering, AI, and cloud.",
      "",
      "I enjoy solving complex problems and turning ideas into scalable applications, with a strong foundation in DSA and system design.",
      "",
      "Currently, I'm focused on building VinylTab — a music-driven productivity web app.",
      "",
      "I'm also exploring game development, sharing projects on my portfolio and LinkedIn.",
      "",
      "Beyond coding, I enjoy traveling and video editing, blending creativity with tech.",
      "",
      "Driven by curiosity, I’m always building and improving.",
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
    featuredProjects: projectShowcaseProjects.filter((project) =>
      ["vinyltab", "nutritrack", "eduerp"].includes(project.id),
    ),
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
