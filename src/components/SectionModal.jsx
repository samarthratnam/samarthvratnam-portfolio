import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";

function normalizeTerminalText(text) {
  return text.replaceAll("â€”", "-").replaceAll("ðŸš€", "\u{1F680}");
}

function TerminalShell({
  title,
  text,
  ariaLabel,
  showCursor = true,
  autoScroll = false,
  resetKey,
}) {
  const bodyRef = useRef(null);
  const stickToBottomRef = useRef(true);

  useEffect(() => {
    stickToBottomRef.current = true;

    if (bodyRef.current) {
      bodyRef.current.scrollTop = 0;
    }
  }, [resetKey]);

  useEffect(() => {
    const body = bodyRef.current;

    if (!body || !autoScroll) {
      return undefined;
    }

    const handleScroll = () => {
      const distanceFromBottom =
        body.scrollHeight - body.scrollTop - body.clientHeight;

      stickToBottomRef.current = distanceFromBottom < 24;
    };

    handleScroll();
    body.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      body.removeEventListener("scroll", handleScroll);
    };
  }, [autoScroll]);

  useEffect(() => {
    const body = bodyRef.current;

    if (!body || !autoScroll || !stickToBottomRef.current) {
      return;
    }

    body.scrollTop = body.scrollHeight;
  }, [text, autoScroll]);

  return (
    <div className="terminal-shell" aria-label={ariaLabel}>
      <div className="terminal-shell__bar" aria-hidden="true">
        <span className="terminal-shell__dot" />
        <span className="terminal-shell__dot" />
        <span className="terminal-shell__dot" />
        <span className="terminal-shell__title">{title}</span>
      </div>
      <pre ref={bodyRef} className="terminal-shell__body">
        {text}
        {showCursor ? (
          <span className="terminal-shell__cursor" aria-hidden="true" />
        ) : null}
      </pre>
    </div>
  );
}

function SectionModal({ section, currentPly, onOpenProjectsShowcase, onOpenSocialsShowcase, onOpenCertificatesShowcase, onOpenExperienceShowcase, onOpenSkillsShowcase }) {
  const modalRef = useRef(null);
  const contentRef = useRef(null);
  const previousPlyRef = useRef(currentPly);
  const [typedTerminalText, setTypedTerminalText] = useState("");
  const [isSkillsPaneOpen, setIsSkillsPaneOpen] = useState(false);
  const hasTerminalContent = Boolean(section?.terminalLines?.length);
  const terminalTitle = section?.terminalTitle ?? "portfolio";
  const terminalText = normalizeTerminalText(section?.terminalLines?.join("\n") ?? "");

  useEffect(() => {
    if (!hasTerminalContent) {
      setTypedTerminalText("");
      return undefined;
    }

    let characterIndex = 0;

    setTypedTerminalText("");

    const intervalId = window.setInterval(() => {
      characterIndex += 1;
      setTypedTerminalText(terminalText.slice(0, characterIndex));

      if (characterIndex >= terminalText.length) {
        window.clearInterval(intervalId);
      }
    }, section?.terminalLines?.length ? 9 : 18);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [currentPly, hasTerminalContent, section, terminalText]);

  useEffect(() => {
    if (section?.id !== "skills") {
      setIsSkillsPaneOpen(false);
    }
  }, [section]);

  useLayoutEffect(() => {
    if (!contentRef.current) {
      return undefined;
    }

    const direction = currentPly >= previousPlyRef.current ? 1 : -1;
    previousPlyRef.current = currentPly;

    const animation = gsap.fromTo(
      contentRef.current,
      {
        autoAlpha: 0,
        x: direction > 0 ? 56 : -56,
        filter: "blur(8px)",
      },
      {
        autoAlpha: 1,
        x: 0,
        filter: "blur(0px)",
        duration: 0.5,
        ease: "power3.out",
      },
    );

    return () => {
      animation.kill();
    };
  }, [section]);

  if (!section) {
    return (
      <div className="section-modal section-modal--simple" ref={modalRef}>
        <div className="section-modal__content" ref={contentRef}>
          <p className="section-modal__eyebrow">Welcome</p>
          <h2>♔ Welcome to My Board</h2>
          <p className="section-modal__intro">
            Hi, I'm Samarth V Ratnam.
          </p>
          <p className="section-modal__intro">
            Computer Science Student • Full-Stack Developer • AI Enthusiast
          </p>
          <p className="section-modal__note">
            Every project is a move.
            <br />
            Every challenge is a position.
            <br />
            Every solution is part of the game.
          </p>
          <p className="section-modal__note">
            Scroll to begin the opening.
          </p>
        </div>
      </div>
    );
  }

  if (section.terminalLines?.length) {
    return (
      <div className="section-modal section-modal--terminal" ref={modalRef}>
        <div className="section-modal__content" ref={contentRef}>
          <TerminalShell
            title={terminalTitle}
            text={typedTerminalText}
            ariaLabel={`${section.title} terminal`}
            autoScroll
            resetKey={`${section.id}-${currentPly}`}
          />
        </div>
      </div>
    );
  }

  if (section.skillGroups?.length) {
    return (
      <div className="section-modal" ref={modalRef}>
        <div className="section-modal__content" ref={contentRef}>
          <h2>{section.title}</h2>
          <div className="section-modal__actions">
            <button
              className="section-modal__button"
              type="button"
              onClick={onOpenSkillsShowcase}
            >
              View Skills
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (section.id === "about") {
    return (
      <div className="section-modal" ref={modalRef}>
        <div className="section-modal__content" ref={contentRef}>
          <h2>{section.title}</h2>
          <p className="section-modal__label">About Me</p>
          {section.body?.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    );
  }

  if (section.id === "certificates") {
    return (
      <div className="section-modal" ref={modalRef}>
        <div className="section-modal__content" ref={contentRef}>
          <h2>{section.title}</h2>
          <p>{section.blurb}</p>

          <div className="section-modal__actions">
            <button
              className="section-modal__button"
              type="button"
              onClick={onOpenCertificatesShowcase}
            >
              View My Certificates
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (section.id === "experience") {
    return (
      <div className="section-modal" ref={modalRef}>
        <div className="section-modal__content" ref={contentRef}>
          <h2>{section.title}</h2>
          <p>{section.blurb}</p>

          <div className="section-modal__actions">
            <button
              className="section-modal__button"
              type="button"
              onClick={() => onOpenExperienceShowcase("secl")}
            >
              Open Internship Experience
            </button>
            <button
              className="section-modal__button"
              type="button"
              onClick={() => onOpenExperienceShowcase("agenticBootcamp")}
            >
              Open Other Experiences
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (section.socialLinks?.length) {
    return (
      <div className="section-modal" ref={modalRef}>
        <div className="section-modal__content" ref={contentRef}>
          <h2>{section.title}</h2>
          <p>{section.blurb}</p>

          <div className="section-modal__actions">
            <button
              className="section-modal__button"
              type="button"
              onClick={onOpenSocialsShowcase}
            >
              View socials
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (section.featuredProjects?.length) {
    return (
      <div className="section-modal" ref={modalRef}>
        <div className="section-modal__content" ref={contentRef}>
          <h2>{section.title}</h2>
          <p>{section.blurb}</p>

          <div className="section-modal__actions">
            <button
              className="section-modal__button"
              type="button"
              onClick={onOpenProjectsShowcase}
            >
              {section.ctaLabel ?? "View My Projects"}
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (section.resumeUrl) {
    return (
      <div className="section-modal" ref={modalRef}>
        <div className="section-modal__content" ref={contentRef}>
          <h2>{section.title}</h2>
          <p>{section.blurb}</p>

          <a
            className="section-modal__resume-preview"
            href={section.resumeUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="View resume"
          >
            <img src={section.resumeUrl} alt="Samarth V Ratnam resume preview" />
          </a>

          <div className="section-modal__actions">
            <a
              className="section-modal__link"
              href={section.resumeUrl}
              target="_blank"
              rel="noreferrer"
            >
              View Resume
            </a>
            <a
              className="section-modal__link section-modal__link--ghost"
              href={section.resumeUrl}
              download={section.resumeDownloadName ?? "resume.png"}
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="section-modal" ref={modalRef}>
      <div className="section-modal__content" ref={contentRef}>
        <h2>{section.title}</h2>
        <p>{section.blurb}</p>
        {section.body?.length ? (
          <div className="section-modal__body">
            {section.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        ) : null}
        {section.items?.length ? (
          <ul className="section-modal__list">
            {section.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ) : null}
        {section.url ? (
          <div className="section-modal__actions">
            <a
              className="section-modal__link"
              href={section.url}
              target="_blank"
              rel="noreferrer"
            >
              {section.ctaLabel ?? "Open link"}
            </a>
            {section.meta ? (
              <span className="section-modal__handle">{section.meta}</span>
            ) : null}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default SectionModal;
