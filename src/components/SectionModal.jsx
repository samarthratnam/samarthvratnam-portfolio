import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const EMPTY_TERMINAL_TEXT = [
  "samarth@portfolio:~$ ./portfolio --help",
  "welcome to my portfolio",
  "Hi, I'm Samarth - I build things with code, break them, and rebuild them better.",
  "",
  "- scroll to move through the opening",
  "- each move reveals a new section",
  "- press restart to replay the sequence",
].join("\n");

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

function SectionModal({ section, currentPly, onOpenProjectsShowcase }) {
  const modalRef = useRef(null);
  const contentRef = useRef(null);
  const previousPlyRef = useRef(currentPly);
  const [typedTerminalText, setTypedTerminalText] = useState("");
  const hasTerminalContent = !section || Boolean(section?.terminalLines?.length);
  const terminalTitle = !section
    ? "portfolio"
    : (section.terminalTitle ?? "portfolio");
  const terminalText = normalizeTerminalText(
    !section ? EMPTY_TERMINAL_TEXT : (section.terminalLines?.join("\n") ?? ""),
  );

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
      <div className="section-modal section-modal--empty" ref={modalRef}>
        <div className="section-modal__content" ref={contentRef}>
          <TerminalShell
            title={terminalTitle}
            text={typedTerminalText}
            ariaLabel="Portfolio intro terminal"
            resetKey="empty"
          />
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
          <p>{section.blurb}</p>

          <div className="section-modal__skill-groups">
            {section.skillGroups.map((group) => (
              <section key={group.title} className="section-modal__skill-group">
                <p className="section-modal__skill-label">{group.title}</p>
                <div className="section-modal__skill-tags">
                  {group.items.map((item) => (
                    <span key={`${group.title}-${item}`} className="section-modal__skill-tag">
                      {item}
                    </span>
                  ))}
                </div>
              </section>
            ))}
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

          <div className="section-modal__project-list">
            {section.featuredProjects.map((project) => (
              <div key={project.id} className="section-modal__project-item">
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
              </div>
            ))}
          </div>

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
