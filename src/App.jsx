import { useEffect, useState } from "react";
import ChessBoard from "./components/ChessBoard";
import MoveController from "./components/MoveController";
import Particles from "./components/Particles";
import ProjectShowcasePanel from "./components/ProjectShowcasePanel";
import SectionModal from "./components/SectionModal";
import {
  openingMoves,
  openingSequence,
  portfolioProfile,
  projectShowcaseProjects,
  sectionMilestones,
} from "./data/moves";

function getActiveSectionIndex(currentPly) {
  if (currentPly < 1) {
    return -1;
  }

  return Math.min(currentPly - 1, sectionMilestones.length - 1);
}

function App() {
  const [currentPly, setCurrentPly] = useState(0);
  const [resetSignal, setResetSignal] = useState(0);
  const [isProjectsShowcaseOpen, setIsProjectsShowcaseOpen] = useState(false);

  const activeSectionIndex = getActiveSectionIndex(currentPly);
  const activeSection =
    activeSectionIndex >= 0 ? sectionMilestones[activeSectionIndex] : null;

  useEffect(() => {
    if (activeSection?.id !== "projects") {
      setIsProjectsShowcaseOpen(false);
    }
  }, [activeSection]);

  function handleRestart() {
    setCurrentPly(0);
    setResetSignal((count) => count + 1);
    setIsProjectsShowcaseOpen(false);
  }

  return (
    <MoveController
      steps={openingMoves.length}
      onPlyChange={(nextPly) =>
        setCurrentPly((currentValue) =>
          currentValue === nextPly ? currentValue : nextPly,
        )
      }
      resetSignal={resetSignal}
    >
      <div
        className={`app-shell ${
          isProjectsShowcaseOpen ? "app-shell--projects-open" : ""
        }`}
      >
        <Particles
          className="app-particles"
          particleColors={["#ffffff", "#b8b8b8", "#ff5261"]}
          particleCount={260}
          particleSpread={11}
          speed={0.08}
          particleBaseSize={78}
          sizeRandomness={1.35}
          cameraDistance={22}
          moveParticlesOnHover
          particleHoverFactor={0.75}
          alphaParticles
          pixelRatio={1.4}
        />

        <div className="app-content">
          <header className="top-bar">
            <div className="brand-mark">
              Chess <span>Portfolio</span>
            </div>

            <div className="hero-block">
              <h1>{portfolioProfile.name}</h1>
            </div>

            <div className="top-actions">
              <button
                className="restart-button"
                type="button"
                onClick={handleRestart}
              >
                Restart
              </button>
            </div>
          </header>

          <div className="stage-layout">
            <main className="board-stage">
              <ChessBoard
                timeline={openingSequence.timeline}
                transitions={openingSequence.transitions}
                sections={sectionMilestones}
                currentPly={currentPly}
                resetSignal={resetSignal}
              />
            </main>

            <aside className="sidebar detail-rail">
              <SectionModal
                section={activeSection}
                currentPly={currentPly}
                onOpenProjectsShowcase={() => setIsProjectsShowcaseOpen(true)}
              />
            </aside>
          </div>
        </div>

        <ProjectShowcasePanel
          isOpen={isProjectsShowcaseOpen}
          onClose={() => setIsProjectsShowcaseOpen(false)}
          projects={projectShowcaseProjects}
        />
      </div>
    </MoveController>
  );
}

export default App;
