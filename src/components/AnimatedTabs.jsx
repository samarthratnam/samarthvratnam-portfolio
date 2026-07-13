import React, { useState } from "react";

function AnimatedTabs({ tabs = [], defaultTab }) {
  const [active, setActive] = useState(defaultTab || (tabs[0] && tabs[0].id));

  if (!tabs || !tabs.length) return null;

  return (
    <div className="animated-tabs">
      <div className="animated-tabs__controls">
        {tabs.map((t) => (
          <button
            key={t.id}
            className={`animated-tabs__control ${active === t.id ? "is-active" : ""}`}
            onClick={() => setActive(t.id)}
            type="button"
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="animated-tabs__panels">
        {tabs.map((t) => (
          <div
            key={t.id}
            className={`animated-tabs__panel ${active === t.id ? "is-active" : ""}`}
          >
            {t.content}
          </div>
        ))}
      </div>
    </div>
  );
}

export default AnimatedTabs;
