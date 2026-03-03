import { useState } from "react";

// Icons

const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const CopyIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
    <rect x="9" y="9" width="13" height="13" rx="2" />
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

// Config 

const CONFIG = {
  name: "George Demirjian",
  title: "Software Engineer",
  email: "demirjiangz@gmail.com",
  linkedin: "https://linkedin.com/in/george-demirjian",
  github: "https://github.com/georgedemirjian",
  headshot: "/gd-headshot-rescaled.jpg"
};

// Component

export const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(CONFIG.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <section
        id="contact"
        className="relative flex items-center justify-center px-4 pt-28 pb-16 overflow-hidden"
        style={{ background: "linear-gradient(160deg, #000408 0%, #020e1f 50%, #041428 100%)" }}
      >
        {/* Grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(148,221,241,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(148,221,241,0.12) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Fade grid toward edges */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 70% at 50% 50%, transparent 50%, #000408 100%)",
          }}
        />

        {/* Primary glow, sky blue, large and vivid */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 700,
            height: 700,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(14,165,233,0.22) 0%, rgba(14,165,233,0.08) 40%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />

        {/* Secondary glow top left accent */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: "-80px",
            left: "-80px",
            width: 420,
            height: 420,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(56,189,248,0.18) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />

        {/* Tertiary glow bottom right */}
        <div
          className="absolute pointer-events-none"
          style={{
            bottom: "-60px",
            right: "-60px",
            width: 360,
            height: 360,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(14,165,233,0.14) 0%, transparent 70%)",
            filter: "blur(50px)",
          }}
        />

        {/* Card */}
        <div
          className="relative w-full max-w-2xl rounded-3xl overflow-visible"
          style={{
            background: "linear-gradient(160deg, rgba(148,221,241,0.09) 0%, rgba(4,13,26,0.85) 100%)",
            border: "1px solid rgba(148,221,241,0.22)",
            boxShadow:
              "0 0 0 1px rgba(56,189,248,0.10), 0 0 60px rgba(14,165,233,0.15), 0 32px 80px rgba(0,0,0,0.7), inset 0 1px 0 rgba(148,221,241,0.14)",
            backdropFilter: "blur(24px)",
          }}
        >
          <div className="flex justify-center -mt-16 mb-6">
            <div className="relative" style={{ width: 128, height: 128 }}>
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: "conic-gradient(from 0deg, #0ea5e9, #94ddf1, #e0f7ff, #0ea5e9)",
                  padding: 3,
                  borderRadius: "50%",
                  animation: "contactSpin 6s linear infinite",
                }}
              />
              <div
                className="absolute rounded-full"
                style={{ inset: 3, background: "#000", borderRadius: "50%" }}
              />
              <div
                className="absolute rounded-full overflow-hidden flex items-center justify-center"
                style={{
                  inset: 6,
                  background: "linear-gradient(135deg, #040d1a, #0c2340)",
                  borderRadius: "50%",
                }}
              >
                {CONFIG.headshot ? (
                  <img src={CONFIG.headshot} alt={CONFIG.name} className="w-full h-full object-cover" />
                ) : (
                  <svg viewBox="0 0 80 80" fill="none" className="w-3/4 h-3/4 opacity-40">
                    <circle cx="40" cy="28" r="16" fill="#94ddf1" />
                    <ellipse cx="40" cy="72" rx="28" ry="20" fill="#94ddf1" />
                  </svg>
                )}
              </div>
            </div>
          </div>

          {/* name and title */}
          <div className="text-center px-8 mb-8">
            <h2 className="text-3xl font-bold tracking-tight text-white mb-1" style={{ letterSpacing: "-0.02em" }}>
              {CONFIG.name}
            </h2>
            <div className="inline-flex items-center gap-2">
              <span className="block w-6 h-px opacity-50" style={{ background: "#94ddf1" }} />
              <p className="text-sm font-medium tracking-widest uppercase" style={{ color: "#94ddf1" }}>
                {CONFIG.title}
              </p>
              <span className="block w-6 h-px opacity-50" style={{ background: "#94ddf1" }} />
            </div>
          </div>

          {/* divider */}
          <div className="mx-8 h-px mb-8" style={{ background: "rgba(148,221,241,0.15)" }} />

          {/* email and buttons */}
          <div className="flex flex-col sm:flex-row items-stretch gap-6 px-8 pb-10">

            {/* email */}
            <div className="flex-1 flex flex-col justify-center gap-2">
              <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: "rgba(148,221,241,0.55)" }}>
                Reach out
              </p>
              <p className="text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>Email me at</p>
              <div className="flex items-center gap-2 group">
                <a
                  href={`mailto:${CONFIG.email}`}
                  className="text-base font-semibold transition-colors break-all"
                  style={{ color: "#94ddf1" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#e0f7ff")}
                  onMouseLeave={e => (e.currentTarget.style.color = "#94ddf1")}
                >
                  {CONFIG.email}
                </a>
                <button
                  onClick={copyEmail}
                  title="Copy email"
                  className="opacity-0 group-hover:opacity-100 transition-all duration-200 rounded-md p-1"
                  style={{ color: "rgba(148,221,241,0.5)" }}
                >
                  {copied ? <CheckIcon /> : <CopyIcon />}
                </button>
              </div>
              {copied && (
                <span className="text-xs animate-pulse" style={{ color: "#4ade80" }}>Copied!</span>
              )}
            </div>

            {/* vertical divider */}
            <div className="hidden sm:block w-px self-stretch" style={{ background: "rgba(148,221,241,0.15)" }} />
            <div className="block sm:hidden h-px" style={{ background: "rgba(148,221,241,0.15)" }} />

            {/* Right side buttons */}
            <div className="flex-1 flex flex-col justify-center gap-3">
              <p className="text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: "rgba(148,221,241,0.55)" }}>
                Connect
              </p>

              {[
                { href: `mailto:${CONFIG.email}`, icon: <MailIcon />, label: "Email", hoverBorder: "rgba(148,221,241,0.55)" },
                { href: CONFIG.linkedin, icon: <LinkedInIcon />, label: "LinkedIn", hoverBorder: "rgba(56,189,248,0.65)", external: true },
                { href: CONFIG.github, icon: <GitHubIcon />, label: "GitHub", hoverBorder: "rgba(148,221,241,0.55)", external: true },
              ].map(({ href, icon, label, hoverBorder, external }) => (
                <a
                  key={label}
                  href={href}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200"
                  style={{
                    background: "rgba(148,221,241,0.07)",
                    border: "1px solid rgba(148,221,241,0.15)",
                    color: "rgba(255,255,255,0.75)",
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = hoverBorder;
                    e.currentTarget.style.background = "rgba(148,221,241,0.12)";
                    e.currentTarget.style.color = "#fff";
                    (e.currentTarget.querySelector(".btn-icon") as HTMLElement).style.color = "#94ddf1";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = "rgba(148,221,241,0.15)";
                    e.currentTarget.style.background = "rgba(148,221,241,0.07)";
                    e.currentTarget.style.color = "rgba(255,255,255,0.75)";
                    (e.currentTarget.querySelector(".btn-icon") as HTMLElement).style.color = "rgba(148,221,241,0.55)";
                  }}
                >
                  <span className="btn-icon transition-colors" style={{ color: "rgba(148,221,241,0.55)" }}>
                    {icon}
                  </span>
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Card footer tag*/}
          <div
            className="border-t text-center py-3 px-8 rounded-b-3xl"
            style={{ borderColor: "rgba(148,221,241,0.10)" }}
          >
            <p className="text-xs tracking-widest" style={{ color: "rgba(148,221,241,0.35)" }}>
              Let's build something together!
            </p>
          </div>
        </div>

        <style>{`
          @keyframes contactSpin {
            from { transform: rotate(0deg); }
            to   { transform: rotate(360deg); }
          }
        `}</style>
      </section>

      {/* Footer */}
      <footer
        className="py-5 text-center"
        style={{ background: "#000", borderTop: "1px solid rgba(148,221,241,0.12)" }}
      >
        <p className="text-xs tracking-wide" style={{ color: "rgba(148,221,241,0.35)" }}>
          Copyright &copy; {new Date().getFullYear()} George Demirjian. All Rights Reserved.
        </p>
      </footer>
    </>
  );
}