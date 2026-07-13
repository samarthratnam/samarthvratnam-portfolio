import React from "react";
import AnimatedTabs from "./AnimatedTabs";

function CertificatesShowcasePanel({ isOpen, onClose, certificates }) {
  return (
    <div className={`certificates-showcase ${isOpen ? "is-open" : ""}`}>
      <button
        className="certificates-showcase__scrim"
        type="button"
        aria-label="Close certificates showcase"
        onClick={onClose}
      />

      <aside
        className="certificates-showcase__panel"
        aria-hidden={!isOpen}
        aria-label="Certificates showcase"
      >
        <div className="certificates-showcase__header">
          <div>
            <p className="certificates-showcase__eyebrow">My Certificates</p>
            <h2>Certificates</h2>
          </div>

          <button
            className="certificates-showcase__close"
            type="button"
            onClick={onClose}
          >
            Close
          </button>
        </div>

        <div className="certificates-showcase__rail">
          {certificates && certificates.length ? (
            <AnimatedTabs
              tabs={certificates.map((cert, idx) => ({
                id: cert.id ?? `certificate-${idx + 1}`,
                label: cert.title ?? cert.name ?? `Certificate ${idx + 1}`,
                content: (
                  <div className="certificate-tab-content">
                    <div className="certificate-tab-grid">
                      <div className="certificate-tab-image">
                        {cert.imageUrl ? (
                          <a href={cert.imageUrl} target="_blank" rel="noreferrer">
                            <img src={cert.imageUrl} alt={cert.title ?? `Certificate ${idx + 1}`} />
                          </a>
                        ) : (
                          <div className="certificate-card__placeholder">PDF</div>
                        )}
                      </div>

                      <div className="certificate-tab-meta">
                        <h3 className="certificate-card__title">{cert.title ?? cert.name ?? `Certificate ${idx + 1}`}</h3>
                        {cert.summary ? <p className="certificate-card__summary">{cert.summary}</p> : null}
                        {cert.url ? (
                          <a className="certificate-card__link" href={cert.url} target="_blank" rel="noreferrer">Open</a>
                        ) : null}
                      </div>
                    </div>
                  </div>
                ),
              }))}
            />
          ) : (
            <div className="certificate-empty">No certificates uploaded yet.</div>
          )}
        </div>
      </aside>
    </div>
  );
}

export default CertificatesShowcasePanel;
