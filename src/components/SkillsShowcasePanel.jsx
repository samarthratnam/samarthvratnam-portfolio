import React from "react";

function SkillsShowcasePanel({ isOpen, onClose, skillGroups }) {
  return (
    <div className={`skills-showcase ${isOpen ? "is-open" : ""}`}>
      <button
        className="skills-showcase__scrim"
        type="button"
        aria-label="Close skills showcase"
        onClick={onClose}
      />

      <aside
        className="skills-showcase__panel"
        aria-hidden={!isOpen}
        aria-label="Skills showcase"
      >
        <div className="skills-showcase__header">
          <div>
            <p className="skills-showcase__eyebrow">Skills</p>
            <h2>Skills</h2>
          </div>

          <button
            className="skills-showcase__close"
            type="button"
            onClick={onClose}
          >
            Close
          </button>
        </div>

        <div className="skills-showcase__rail">
          <div className="skills-showcase__skill-groups">
            {skillGroups.map((group) => (
              <section key={group.title} className="skills-showcase__skill-group">
                <p className="skills-showcase__skill-label">{group.title}</p>
                <ul className="skills-showcase__skill-list">
                  {group.items.map((item) => (
                    <li key={`${group.title}-${item}`} className="skills-showcase__skill-item">
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
}

export default SkillsShowcasePanel;
