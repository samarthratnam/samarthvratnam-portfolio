function ProjectPreview({ project }) {
  return (
    <div
      className={`project-card__preview project-card__preview--${project.previewTheme}`}
    >
      {project.previewTheme === "modelcraft" ? (
        <div className="project-preview project-preview--modelcraft">
          <div className="project-preview__brand">ModelCraft</div>
          <div className="project-preview__panel">
            <div className="project-preview__line is-long" />
            <div className="project-preview__line" />
            <div className="project-preview__line" />
            <div className="project-preview__chips">
              <span />
              <span />
              <span />
            </div>
            <div className="project-preview__button" />
          </div>
        </div>
      ) : null}

      {project.previewTheme === "maia" ? (
        <div className="project-preview project-preview--maia">
          <div className="project-preview__sidebar">
            <span />
            <span />
            <span />
          </div>
          <div className="project-preview__chat">
            <div className="project-preview__bubble is-assistant" />
            <div className="project-preview__bubble is-user" />
            <div className="project-preview__bubble is-assistant wide" />
          </div>
        </div>
      ) : null}

      {project.previewTheme === "vinyltab" ? (
        <div className="project-preview project-preview--vinyltab">
          <div className="project-preview__record" />
          <div className="project-preview__player">
            <div className="project-preview__line is-long" />
            <div className="project-preview__line" />
            <div className="project-preview__controls">
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
      ) : null}

      {project.previewTheme === "chess" ? (
        <div className="project-preview project-preview--chess">
          <div className="project-preview__board">
            {Array.from({ length: 16 }).map((_, index) => (
              <span key={index} />
            ))}
          </div>
          <div className="project-preview__caption">Mate in 8</div>
        </div>
      ) : null}

      {project.previewTheme === "gamelab" ? (
        <div className="project-preview project-preview--gamelab">
          <div className="project-preview__stars" />
          <div className="project-preview__platforms">
            <span />
            <span />
            <span />
          </div>
          <div className="project-preview__avatar" />
        </div>
      ) : null}
    </div>
  );
}

function ProjectShowcasePanel({ isOpen, onClose, projects }) {
  return (
    <div className={`projects-showcase ${isOpen ? "is-open" : ""}`}>
      <button
        className="projects-showcase__scrim"
        type="button"
        aria-label="Close projects showcase"
        onClick={onClose}
      />

      <aside
        className="projects-showcase__panel"
        aria-hidden={!isOpen}
        aria-label="Projects showcase"
      >
        <div className="projects-showcase__header">
          <div>
            <p className="projects-showcase__eyebrow">Selected Work</p>
            <h2>Projects</h2>
          </div>

          <button
            className="projects-showcase__close"
            type="button"
            onClick={onClose}
          >
            Close
          </button>
        </div>

        <div className="projects-showcase__rail">
          {projects.map((project) => (
            <article key={project.id} className="project-card">
              <ProjectPreview project={project} />

              <div className="project-card__body">
                <div className="project-card__heading">
                  <h3>{project.title}</h3>
                  <a
                    className="project-card__github"
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                </div>

                <p>{project.description}</p>

                <div className="project-card__tech">
                  {project.tech.map((item) => (
                    <span key={`${project.id}-${item}`}>{item}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </aside>
    </div>
  );
}

export default ProjectShowcasePanel;
