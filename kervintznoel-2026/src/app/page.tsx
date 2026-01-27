import Image from "next/image";

export default function Home() {
  return (
    <main className="hero">
      {/* Background layers */}
      <div className="bg" aria-hidden="true" />
      <div className="noise" aria-hidden="true" />
      <div className="glow" aria-hidden="true" />

      {/* ONE stage only */}
      <div className="stage">
        {/* ONE glass only */}
        <div className="glass" aria-hidden="true" />

        <header className="topbar">
          <div className="brand">
            <Image
              src="/logo2.svg"
              alt="Kervintz Noel"
              width={120}
              height={120}
              priority
              className="logo"
            />
          </div>
        </header>

        <section className="content">
          <div className="kicker">Building a sharper portfolio experience</div>

          <h1 className="title">
            Portfolio <span className="titleAccent">relaunch</span> in progress.
          </h1>

          <p className="subtitle">
            I’m updating my portfolio to show what I’ve been building lately—projects, outcomes, and the work behind the scenes. Back soon.
          </p>

          <div className="actions">
            <a className="btnPrimary" href="mailto:kervcodes@outlook.com">Email me</a>
            <a
              className="btnGhost"
              href="https://www.linkedin.com/in/kervintznoel/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>

          <div className="footnote">Last update: 2026 • Boston, MA</div>
        </section>
      </div>
    </main>
  );
}
