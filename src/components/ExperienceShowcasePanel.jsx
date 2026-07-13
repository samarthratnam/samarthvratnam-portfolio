import React, { useState, useEffect } from "react";

function ExperienceShowcasePanel({ isOpen, onClose, experience, initialActiveExperience = "secl", allowInternalToggle = true }) {
  const [activeExperience, setActiveExperience] = useState(initialActiveExperience);
  const details = experience?.body ?? [];

  const experienceMap = {
    secl: {
      header: "SECL Internship",
      subtitle: "South Eastern Coalfields Limited",
      role: "System Department Intern",
      date: "May 2026 – Jul 2026",
      summary: [
        "Worked in the System Department building internal tools and feature improvements.",
        "Implemented SQL-backed data models and improved data workflows for operational tasks.",
        "Delivered a functional prototype and collaborated with stakeholders to refine requirements.",
      ],
      highlights: {
        contributions: [
          "Designed and implemented application features for internal operations.",
          "Worked with SQL-backed data models and improved data organization.",
          "Delivered a functional product prototype aligned to business needs.",
        ],
        takeaways: [
          "Strengthened problem-solving through real-world enterprise challenges.",
          "Improved communication across technical and non-technical stakeholders.",
          "Built confidence in delivering polished deliverables on time.",
        ],
      },
      certificateUrl: "/certificates/seclinternship.png",
      certificateTitle: "SECL Internship Certificate",
      repoUrl: "https://github.com/samarthratnam/SECL-Internship-Management-System.git",
      repoLabel: "View SECL Internship Project on GitHub",
      secondaryCard: {
        title: "Letter of Recommendation",
        imageUrl: "/letterofrecommendation/letterofrecommendationsecl.png",
        alt: "SECL recommendation letter",
      },
    },
    hackathon: {
      header: "HackWithAI 2026",
      subtitle: "KLH Bachupally Campus",
      role: "Participant",
      date: "Feb 2026",
      summary: [
        "Participated in HackWithAI 2026, Telangana's largest 24-hour offline AI hackathon, held at KL University, Hyderabad (Bachupally Campus). Along with my team, I traveled to Hyderabad to compete against talented developers, designers, and AI enthusiasts from different colleges.",
        "During the hackathon, we conceptualized and developed NutriTrack, an AI-powered nutrition tracking platform designed to help users monitor their daily food intake, calculate calories and macronutrients, and make healthier lifestyle choices. The project focused on creating an intuitive user experience while leveraging AI to provide personalized nutrition insights and recommendations.",
        "Throughout the 24-hour event, we worked collaboratively under tight deadlines, handling everything from brainstorming and UI/UX design to full-stack development and project integration. The experience strengthened my skills in rapid prototyping, teamwork, problem-solving, and building scalable AI-driven applications.",
      ],
      highlights: {
        contributions: [
          "Built NutriTrack within 24 hours.",
          "Collaborated effectively in a fast-paced team environment.",
          "Applied full-stack development skills to build a functional prototype.",
          "Explored AI integration for personalized nutrition recommendations.",
          "Presented the project to judges and received valuable industry feedback.",
          "Networked with fellow developers, mentors, and AI professionals.",
        ],
        takeaways: [
          "Strengthened rapid prototyping and teamwork skills.",
          "Improved AI-driven UI/UX design and product thinking.",
          "Learned to move quickly under pressure while maintaining quality.",
        ],
      },
      certificateUrl: "/certificates/klhhackathon.png",
      certificateTitle: "HackWithAI 2026 Certificate",
      repoUrl: "https://github.com/samarthratnam/NutriTrack",
      repoLabel: "View NutriTrack Project Repository",
      secondaryCard: null,
    },
  };

  const activeData = experienceMap[activeExperience] || experienceMap.secl;

  useEffect(() => {
    // When the requested initial mode changes or panel opens, sync internal state
    if (isOpen && initialActiveExperience && initialActiveExperience !== activeExperience) {
      setActiveExperience(initialActiveExperience);
    }
  }, [initialActiveExperience, isOpen, activeExperience]);

  return (
    <div className={`experience-showcase ${isOpen ? "is-open" : ""}`}>
      <button
        className="experience-showcase__scrim"
        type="button"
        aria-label="Close experience showcase"
        onClick={onClose}
      />

      <aside
        className="experience-showcase__panel"
        aria-hidden={!isOpen}
        aria-label="Experience showcase"
      >
        <div className="experience-showcase__header">
          <div>
            <p className="experience-showcase__eyebrow">Experience</p>
            <h2>{activeData.header}</h2>
          </div>

          <button
            className="experience-showcase__close"
            type="button"
            onClick={onClose}
          >
            Close
          </button>
        </div>

        {allowInternalToggle ? (
          <div className="experience-showcase__switches">
            <button
              className={`experience-showcase__switch ${activeExperience === "secl" ? "is-active" : ""}`}
              type="button"
              onClick={() => setActiveExperience("secl")}
            >
              SECL Internship
            </button>
            <button
              className={`experience-showcase__switch ${activeExperience === "hackathon" ? "is-active" : ""}`}
              type="button"
              onClick={() => setActiveExperience("hackathon")}
            >
              HackWithAI 2026
            </button>
          </div>
        ) : null}

        <div className="experience-showcase__rail">
          <section className="experience-showcase__section">
            <p className="experience-showcase__subtitle">{activeData.subtitle}</p>
            <p className="experience-showcase__role">{activeData.role}</p>
            <p className="experience-showcase__date">{activeData.date}</p>

            <div className="experience-showcase__summary">
              {activeData.summary.map((item, index) => (
                <p key={`${activeExperience}-${index}`}>{item}</p>
              ))}
            </div>

            <div className="experience-showcase__highlights">
              <div>
                <p className="experience-showcase__label">Key Contributions</p>
                <ul>
                  {activeData.highlights.contributions.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="experience-showcase__label">Takeaways</p>
                <ul>
                  {activeData.highlights.takeaways.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section className="experience-showcase__visuals">
            <div className="experience-showcase__card">
              <p className="experience-showcase__card-title">{activeData.certificateTitle}</p>
              <a href={activeData.certificateUrl} target="_blank" rel="noreferrer">
                <img
                  className="experience-showcase__image"
                  src={activeData.certificateUrl}
                  alt={activeData.certificateTitle}
                />
              </a>
              <a
                className="experience-showcase__repo-link"
                href={activeData.repoUrl}
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  className="experience-showcase__repo-icon"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="M12 0a12 12 0 00-3.79 23.41c.6.11.82-.26.82-.58v-2.05c-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.35-1.78-1.35-1.78-1.1-.75.08-.73.08-.73 1.22.09 1.86 1.25 1.86 1.25 1.08 1.85 2.83 1.32 3.52 1.01.11-.79.42-1.32.76-1.62-2.66-.3-5.47-1.33-5.47-5.9 0-1.3.46-2.36 1.22-3.19-.12-.3-.53-1.52.12-3.17 0 0 .99-.32 3.24 1.22a11.3 11.3 0 012.95-.4c1 0 2.01.14 2.95.4 2.24-1.54 3.23-1.22 3.23-1.22.65 1.65.25 2.87.12 3.17.76.83 1.22 1.89 1.22 3.19 0 4.58-2.81 5.6-5.48 5.9.43.37.82 1.1.82 2.22v3.29c0 .32.22.7.82.58A12 12 0 0012 0z" />
                </svg>
                {activeData.repoLabel}
              </a>
            </div>

            {activeData.secondaryCard ? (
              <div className="experience-showcase__card">
                <p className="experience-showcase__card-title">{activeData.secondaryCard.title}</p>
                <a href={activeData.secondaryCard.imageUrl} target="_blank" rel="noreferrer">
                  <img
                    className="experience-showcase__image"
                    src={activeData.secondaryCard.imageUrl}
                    alt={activeData.secondaryCard.alt}
                  />
                </a>
              </div>
            ) : null}
          </section>
        </div>
      </aside>
    </div>
  );
}

export default ExperienceShowcasePanel;
