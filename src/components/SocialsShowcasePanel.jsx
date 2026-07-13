function SocialsShowcasePanel({ isOpen, onClose, socialLinks }) {
  return (
    <div className={`socials-showcase ${isOpen ? "is-open" : ""}`}>
      <button
        className="socials-showcase__scrim"
        type="button"
        aria-label="Close socials showcase"
        onClick={onClose}
      />

      <aside
        className="socials-showcase__panel"
        aria-hidden={!isOpen}
        aria-label="Socials showcase"
      >
        <div className="socials-showcase__header">
          <div>
            <p className="socials-showcase__eyebrow">My Socials</p>
            <h2>Connect with Me</h2>
          </div>

          <button
            className="socials-showcase__close"
            type="button"
            onClick={onClose}
          >
            Close
          </button>
        </div>

        <div className="socials-showcase__rail">
          <div className="socials-showcase__grid">
            {socialLinks.map((link) => (
              <article key={link.title} className="social-card">
                <div className="social-card__badge">{link.title[0]}</div>
                <div className="social-card__body">
                  <div>
                    <p className="social-card__title">{link.title}</p>
                    <p className="social-card__meta">{link.meta}</p>
                  </div>
                  <p className="social-card__summary">
                    Visit my {link.title} profile to see my work, challenges, and collaborations.
                  </p>
                </div>
                <a
                  className="social-card__link"
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  Open
                </a>
              </article>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
}

export default SocialsShowcasePanel;
