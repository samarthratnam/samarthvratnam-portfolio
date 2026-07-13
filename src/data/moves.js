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
    blurb: "A Computer Science student who builds across software, AI, web, and cloud.",
    body: [
      "I'm Samarth V Ratnam, a Computer Science student passionate about building impactful software. My interests span software engineering, artificial intelligence, cloud technologies, and creating products that combine clean design with practical functionality.",
      ],
  },
  {
    id: "skills",
    label: "Skills",
    title: "Skills",
    blurb: "A practical toolkit across frontend, backend, databases, and core programming languages.",
    skillGroups: [
      {
        title: "Frontend",
        items: ["HTML", "CSS", "JavaScript", "React"],
      },
      {
        title: "Backend",
        items: ["Java", "Spring", "Node.js"],
      },
      {
        title: "Tools",
        items: ["Git", "Vercel", "Postman"],
      },
      {
        title: "Languages",
        items: ["Python", "Java", "C++"],
      },
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
    id: "socials",
    label: "My Socials",
    title: "My Socials",
    blurb: "Follow me across code, challenges, and professional updates.",
    socialLinks: [
      {
        title: "LinkedIn",
        url: portfolioProfile.linkedin,
        meta: "samarth-v-ratnam-13456534b",
      },
      {
        title: "GitHub",
        url: portfolioProfile.github,
        meta: "@samarthratnam",
      },
      {
        title: "CodeChef",
        url: portfolioProfile.codechef,
        meta: "kl2400031630",
      },
      {
        title: "LeetCode",
        url: portfolioProfile.leetcode,
        meta: "samarthvratnam",
      },
    ],
  },
  {
    id: "certificates",
    label: "My Certificates",
    title: "My Certificates",
    blurb: "Certificates and achievements that reflect my growing expertise.",
    certificates: [
      {
  id: "aws",
  title: "AWS Cloud Foundations",
  issuer: "Amazon Web Services (AWS)",
  summary:
    "Earned foundational knowledge of AWS cloud services, core architecture, security, storage, networking, and cloud computing best practices.",
  imageUrl: "/certificates/AWS.png",
  url: null,
},
{
  id: "klhhackathon",
  title: "KLH Hackathon",
  issuer: "KL University",
  summary:
    "Participated in a competitive hackathon, collaborating with a team to design and develop an innovative software solution under strict time constraints.",
  imageUrl: "/certificates/klhhackathon.png",
  url: null,
},
{
  id: "linguaskills",
  title: "Linguaskills Certificate",
  issuer: "Cambridge English",
  summary:
    "Demonstrated English language proficiency in reading, writing, listening, and speaking through the Cambridge Linguaskills assessment.",
  imageUrl: "/certificates/linguaskills.png",
  url: null,
},
{
  id: "patentfiling",
  title: "Patent Filing",
  issuer: "Indian Patent Office",
  summary:
    "Contributed to the development and filing of an innovative technology solution, gaining experience in research, documentation, and intellectual property processes.",
  imageUrl: "/certificates/patentfiling.png",
  url: null,
},
{
  id: "seclinternship",
  title: "SECL Internship",
  issuer: "South Eastern Coalfields Limited (SECL)",
  summary:
    "Completed a software development internship focused on building practical applications, database design, and solving real-world industry challenges.",
  imageUrl: "/certificates/seclinternship.png",
  url: null,
},
    ],
  },
  {
    id: "experience",
    label: "Experience",
    title: "Experience",
    blurb: "A concise look at my engineering and product experience.",
    body: ["Software Development Internn",
            "South Eastern Coalfields Limited (SECL)",
            "May 2026 – Jul 2026",
            "Working as a System Department Intern, I am contributing to the development of an Internship Management System aimed at digitizing and streamlining the complete internship lifecycle within SECL.",
            "The system enables internship applications, approval workflows, department allocation, mentor assignment, attendance management, and role-based access for different stakeholders.",
    ],
  },
  {
    id: "education",
    label: "Education",
    title: "Education",
    blurb: "My academic background and learning journey.",
    body: [
      "Bachelor of Technology (B.Tech.) in Computer Science & Engineering — Koneru Lakshmaiah Education Foundation (KL University), Vijayawada (2024–2028). Current CGPA: 9.05.",
      "Focused coursework in software engineering, algorithms, AI, databases, cloud computing, and modern application development.",
      "CBSE Class XII — Shiv Jyoti Convent Senior Secondary School (2024) — 79.6%.",
      "CBSE Class X — Good Shepherd Convent Senior Secondary School (2022) — 80.8%.",
      "I combine structured academic learning with hands-on projects, small-team leadership, and practical problem-solving.",
      "This education has prepared me to tackle real engineering challenges with clarity and technical confidence.",
    ],
  },
  {
    id: "resume",
    label: "Resume",
    title: "Resume",
    blurb: "A quick link to my resume and career summary.",
    body: [
      "Upload your resume URL or PDF and I’ll make this the final download section.",
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
