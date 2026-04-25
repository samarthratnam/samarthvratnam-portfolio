function ProjectPreview({ project }) {
  if (project.imageUrl) {
    return (
      <div className="project-card__preview project-card__preview--image">
        <div className="project-preview project-preview--image">
          <div className="project-preview__image-fallback">
            <span>{project.title}</span>
          </div>
          <img
            className="project-preview__image"
            src={project.imageUrl}
            alt={project.imageAlt ?? `${project.title} project preview`}
            loading="lazy"
            onError={(event) => {
              event.currentTarget.style.display = "none";
            }}
          />
        </div>
      </div>
    );
  }

  if (project.previewTheme === "vinyltab") {
    return (
      <div className="project-card__preview project-card__preview--vinyltab">
        <div className="project-preview project-preview--vinyltab">
          <div className="project-preview__vinyl-glow" />

          <div className="project-preview__turntable">
            <div className="project-preview__needle" />
            <div className="project-preview__record-disc">
              <div className="project-preview__record-center" />
            </div>
          </div>

          <div className="project-preview__music-stack">
            <div className="project-preview__music-panel">
              <span className="project-preview__eyebrow">Now Playing</span>
              <strong>Somewhere I Belong</strong>
              <span className="project-preview__subtle">Linkin Park</span>

              <div className="project-preview__waveform">
                {Array.from({ length: 24 }).map((_, index) => (
                  <span
                    key={`wave-${index}`}
                    style={{ height: `${18 + ((index * 9) % 42)}px` }}
                  />
                ))}
              </div>

              <div className="project-preview__player-row">
                <div className="project-preview__play-button">II</div>
                <div className="project-preview__progress">
                  <span />
                </div>
              </div>
            </div>

            <div className="project-preview__queue-panel">
              <div className="project-preview__queue-header">
                <span>Playlist Queue</span>
                <span>02 tracks</span>
              </div>

              <div className="project-preview__queue-list">
                {["Pushing Me Away", "Don't Stay", "Somewhere I Belong"].map(
                  (track) => (
                    <div key={track} className="project-preview__queue-item">
                      <span className="project-preview__thumb" />
                      <div>
                        <strong>{track}</strong>
                        <span>Linkin Park</span>
                      </div>
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (project.previewTheme === "nutritrack") {
    return (
      <div className="project-card__preview project-card__preview--nutritrack">
        <div className="project-preview project-preview--nutritrack">
          <div className="project-preview__nutri-nav">
            <span className="project-preview__nutri-brand">NutriLabelAI</span>
            <span className="project-preview__nutri-pill">Try Free</span>
          </div>

          <div className="project-preview__nutri-hero">
            <span className="project-preview__chip">Recipe Analyser</span>
            <strong>What's Really in Your Recipe?</strong>
          </div>

          <div className="project-preview__nutri-card">
            <div className="project-preview__nutri-labels">
              <span>Recipe Name</span>
              <span>Servings</span>
            </div>
            <div className="project-preview__nutri-input is-wide" />

            <div className="project-preview__nutri-row">
              <div className="project-preview__nutri-input" />
              <div className="project-preview__nutri-input is-small" />
              <div className="project-preview__nutri-close" />
            </div>

            <div className="project-preview__nutri-row">
              <div className="project-preview__nutri-input" />
              <div className="project-preview__nutri-input is-small" />
              <div className="project-preview__nutri-close" />
            </div>

            <div className="project-preview__nutri-actions">
              <span className="project-preview__nutri-button is-secondary">
                Add Ingredient
              </span>
              <span className="project-preview__nutri-button">
                Analyse Recipe
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (project.previewTheme === "smartcity") {
    return (
      <div className="project-card__preview project-card__preview--smartcity">
        <div className="project-preview project-preview--smartcity">
          <div className="project-preview__city-banner">CityAccess</div>

          <div className="project-preview__city-card">
            <span className="project-preview__city-eyebrow">User Login</span>

            <div className="project-preview__city-field">
              <label>User Type</label>
              <div className="project-preview__city-input">
                <span>Select User Type</span>
                <span>v</span>
              </div>
            </div>

            <div className="project-preview__city-field">
              <label>Password</label>
              <div className="project-preview__city-input">
                <span>Enter password</span>
              </div>
            </div>

            <div className="project-preview__city-action">Login</div>
            <span className="project-preview__city-note">
              Citizen Password / Admin Password
            </span>
          </div>
        </div>
      </div>
    );
  }

  if (project.previewTheme === "tictactoe") {
    return (
      <div className="project-card__preview project-card__preview--tictactoe">
        <div className="project-preview project-preview--tictactoe">
          <strong className="project-preview__tic-title">Tic-Tac-Toe</strong>

          <div className="project-preview__tic-grid">
            {Array.from({ length: 9 }).map((_, index) => (
              <span key={`tic-${index}`} />
            ))}
          </div>

          <div className="project-preview__tic-action">reset game</div>
        </div>
      </div>
    );
  }

  if (project.previewTheme === "rps") {
    return (
      <div className="project-card__preview project-card__preview--rps">
        <div className="project-preview project-preview--rps">
          <div className="project-preview__rps-header">Rock Paper Scissors</div>

          <div className="project-preview__rps-icons">
            {["R", "P", "S"].map((choice) => (
              <span key={choice}>{choice}</span>
            ))}
          </div>

          <div className="project-preview__rps-score">
            <div>
              <strong>0</strong>
              <span>You</span>
            </div>
            <div>
              <strong>0</strong>
              <span>CPU</span>
            </div>
          </div>

          <div className="project-preview__rps-button">Play Your Move</div>
          <div className="project-preview__rps-button is-secondary">
            Reset Game
          </div>
        </div>
      </div>
    );
  }

  if (project.previewTheme === "animanga") {
    return (
      <div className="project-card__preview project-card__preview--animanga">
        <div className="project-preview project-preview--animanga">
          <div className="project-preview__anime-nav">
            <span className="project-preview__anime-logo">ANIMANGA</span>
            <span>New</span>
            <span>Popular</span>
            <span>Simulcast</span>
            <div className="project-preview__anime-search" />
          </div>

          <div className="project-preview__anime-sun" />
          <div className="project-preview__anime-trail" />
          <div className="project-preview__anime-figure">
            <div className="project-preview__anime-hair" />
          </div>

          <div className="project-preview__anime-caption">
            Bleach: Start Episode 1
          </div>
        </div>
      </div>
    );
  }

  if (project.previewTheme === "eduerp") {
    return (
      <div className="project-card__preview project-card__preview--eduerp">
        <div className="project-preview project-preview--eduerp">
          <div className="project-preview__eduerp-top">
            <span>EDUCORE</span>
            <span>FSAD-PS13 // role selection</span>
          </div>

          <div className="project-preview__eduerp-body">
            <strong>Who are you?</strong>
            <span>Select your role to access your portal</span>

            <div className="project-preview__eduerp-grid">
              {["Student", "Teacher", "Admin", "Administrator"].map((role) => (
                <div key={role} className="project-preview__eduerp-card">
                  <span>{role}</span>
                  <small>Enter</small>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (project.previewTheme === "maia") {
    return (
      <div className="project-card__preview project-card__preview--maia">
        <div className="project-preview project-preview--maia">
          <div className="project-preview__maia-sidebar">
            <span />
            <span />
            <span />
          </div>

          <div className="project-preview__maia-main">
            <div className="project-preview__maia-window">
              <span className="project-preview__eyebrow">M.A.I.A</span>
              <div className="project-preview__maia-bubble">
                Summarize today's tasks and draft a quick reply.
              </div>
              <div className="project-preview__maia-bubble is-user">
                Make it sharper for email.
              </div>
              <div className="project-preview__maia-bubble wide">
                Done. I also turned the action items into a checklist.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="project-card__preview">
      <div className="project-preview project-preview--fallback">
        <span>{project.title}</span>
      </div>
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
                  <div className="project-card__title-group">
                    <p className="project-card__host">{project.host}</p>
                    <h3>{project.title}</h3>
                  </div>
                </div>

                <p className="project-card__summary">{project.summary}</p>
                <p className="project-card__description">{project.description}</p>

                <div className="project-card__tech">
                  {project.tech.map((item) => (
                    <span key={`${project.id}-${item}`}>{item}</span>
                  ))}
                </div>

                <div className="project-card__links">
                  <a
                    className="project-card__link"
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>

                  {project.vercelUrl ? (
                    <a
                      className="project-card__link project-card__link--primary"
                      href={project.vercelUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live
                    </a>
                  ) : null}
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
