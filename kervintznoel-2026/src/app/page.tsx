import Image from "next/image";

export default function Home() {
  return (
    <main className="hero">
      <div className="heroInner">
        <div className="brandRow animate animate-1">
          <Image
            src="/logo2.svg"
            alt="Kervintz Noel logo"
            width={470}
            height={470}
            priority
            className="logo"
          />

          <div className="copy">
            <h1 className="animate animate-2">Kervintz Noel</h1>

            <h3>Software Engineer | Support Engineer | Systems Builder</h3>

            <p className="subtitle animate animate-3">
              Portfolio coming soon
            </p>

            {/* <p className="small animate animate-4">Please check back soon.</p> */}
          </div>
        </div>
      </div>
    </main>
  );
}
