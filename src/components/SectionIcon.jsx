function SectionIcon({ id, className = "", title }) {
  const label = title ?? id;

  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      role="img"
      aria-label={label}
      focusable="false"
    >
      {id === "about" ? <AboutIcon /> : null}
      {id === "projects" ? <ProjectsIcon /> : null}
      {id === "skills" ? <SkillsIcon /> : null}
      {id === "linkedin" ? <LinkedInIcon /> : null}
      {id === "github" ? <GitHubIcon /> : null}
      {id === "codechef" ? <CodeChefIcon /> : null}
      {id === "leetcode" ? <LeetCodeIcon /> : null}
      {id === "resume" ? <ResumeIcon /> : null}
    </svg>
  );
}

function AboutIcon() {
  return (
    <>
      <circle cx="12" cy="7" r="3.2" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M5.5 18.5c1.8-3.1 4-4.7 6.5-4.7s4.7 1.6 6.5 4.7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </>
  );
}

function ProjectsIcon() {
  return (
    <>
      <rect x="4.5" y="4.5" width="6.3" height="6.3" rx="1.2" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <rect x="13.2" y="4.5" width="6.3" height="6.3" rx="1.2" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <rect x="4.5" y="13.2" width="6.3" height="6.3" rx="1.2" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <rect x="13.2" y="13.2" width="6.3" height="6.3" rx="1.2" fill="none" stroke="currentColor" strokeWidth="1.7" />
    </>
  );
}

function SkillsIcon() {
  return (
    <>
      <path
        d="M12 3.8 13.7 8l4.5.4-3.4 2.9 1 4.4-3.8-2.3-3.8 2.3 1-4.4-3.4-2.9 4.5-.4L12 3.8Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M4.5 20h15" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </>
  );
}

function LinkedInIcon() {
  return (
    <>
      <rect x="4.5" y="4.5" width="15" height="15" rx="2.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="8.3" cy="9" r="1.1" fill="currentColor" />
      <path d="M7.2 11.2v5.1" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M11.2 16.3v-5.1" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M11.2 13.1c0-1.3 1-2.3 2.3-2.3s2.3 1 2.3 2.3v3.2" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </>
  );
}

function GitHubIcon() {
  return (
    <>
      <path
        d="M7.5 18c-1.5-.8-2.6-2.8-2.6-5 0-4 3.1-7 7.1-7s7.1 3 7.1 7c0 2.2-1.1 4.2-2.6 5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path d="M9.2 7.8 7.4 6l-.5 2.6" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="m14.8 7.8 1.8-1.8.5 2.6" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="9.7" cy="12" r="0.9" fill="currentColor" />
      <circle cx="14.3" cy="12" r="0.9" fill="currentColor" />
      <path d="M9.3 15c1.7 1.2 3.7 1.2 5.4 0" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </>
  );
}

function CodeChefIcon() {
  return (
    <>
      <path
        d="M6.5 15.5V11a2.5 2.5 0 0 1 2.5-2.5h6a2.5 2.5 0 0 1 2.5 2.5v4.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path d="M8 8.5c0-1.8 1.2-3 4-3s4 1.2 4 3" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M5.3 12.3H4a1.5 1.5 0 0 0 0 3h2.2" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M18.7 12.3H20a1.5 1.5 0 1 1 0 3h-2.2" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M8.8 18.2h6.4" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </>
  );
}

function LeetCodeIcon() {
  return (
    <>
      <path d="M14.8 5.8 19 10" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
      <path d="M10.5 7.2 6.2 11.5a3.8 3.8 0 0 0 0 5.4 3.8 3.8 0 0 0 5.4 0l1.9-1.9" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9.5 12h9" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </>
  );
}

function ResumeIcon() {
  return (
    <>
      <path d="M7 4.5h7l4 4v11H7z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <path d="M14 4.5v4h4" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <path d="M10 12h5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M10 15.5h5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </>
  );
}

export default SectionIcon;
