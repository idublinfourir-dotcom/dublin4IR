import HeroVantaBackground from "@/components/HeroVantaBackground";

function PinIcon() {
  return (
    <svg width="9" height="9" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 22s-7-7.58-7-13a7 7 0 0114 0c0 5.42-7 13-7 13z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function IconTile({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid h-8 w-8 shrink-0 place-items-center rounded-[9px] bg-[var(--gradient-icon)] text-white shadow-[0_0_0_1px_rgba(255,255,255,0.1)_inset]">
      {children}
    </div>
  );
}

const NODE_BASE =
  "absolute flex items-center gap-2.5 rounded-[14px] border border-[var(--border-soft)] bg-[var(--surface-tint)] px-3.5 py-3 text-[var(--text)] shadow-[var(--shadow-card)] backdrop-blur-[14px]";

function Constellation() {
  return (
    <div
      aria-hidden
      className="relative mx-auto aspect-[1.05/1] w-full max-w-[620px] [container-type:inline-size] min-[960px]:mr-0 min-[960px]:ml-auto"
    >
      {/* Nodes are laid out against a fixed 620x590 design, then scaled to the
          container width so they never collide on narrower screens. */}
      <div
        className="absolute top-0 left-0 h-[590px] w-[620px] origin-top-left"
        style={{ scale: "tan(atan2(100cqw, 620px))" }}
      >
        {/* dashed connectors: node anchor dot -> central hub */}
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full"
          viewBox="0 0 620 590"
          fill="none"
        >
          <defs>
            {/* userSpaceOnUse: an objectBoundingBox gradient is not painted on
                straight (zero-width or zero-height) paths */}
            <radialGradient
              id="lg"
              gradientUnits="userSpaceOnUse"
              cx="310"
              cy="295"
              r="300"
            >
              <stop offset="0%" stopColor="#5dd4e0" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#5dd4e0" stopOpacity="0.14" />
            </radialGradient>
          </defs>
          <path
            d="M 110 97 L 110 200 L 280 200 L 280 229"
            stroke="url(#lg)"
            strokeWidth="1.2"
            strokeDasharray="3 5"
          />
          <circle cx="110" cy="97" r="2.5" fill="#5dd4e0" fillOpacity="0.55" />
          <path
            d="M 374 54 L 374 150 L 340 150 L 340 229"
            stroke="url(#lg)"
            strokeWidth="1.2"
            strokeDasharray="3 5"
          />
          <circle cx="374" cy="54" r="2.5" fill="#5dd4e0" fillOpacity="0.55" />
          <path
            d="M 427 146 L 400 146 L 400 265 L 376 265"
            stroke="url(#lg)"
            strokeWidth="1.2"
            strokeDasharray="3 5"
          />
          <circle cx="427" cy="146" r="2.5" fill="#5dd4e0" fillOpacity="0.55" />
          <path
            d="M 115 183 L 115 262 L 244 262"
            stroke="url(#lg)"
            strokeWidth="1.2"
            strokeDasharray="3 5"
          />
          <circle cx="115" cy="183" r="2.5" fill="#5dd4e0" fillOpacity="0.55" />
          <path
            d="M 107 363 L 107 330 L 244 330"
            stroke="url(#lg)"
            strokeWidth="1.2"
            strokeDasharray="3 5"
          />
          <circle cx="107" cy="363" r="2.5" fill="#5dd4e0" fillOpacity="0.55" />
          <path
            d="M 310 539 L 310 361"
            stroke="url(#lg)"
            strokeWidth="1.2"
            strokeDasharray="3 5"
          />
          <circle cx="310" cy="539" r="2.5" fill="#5dd4e0" fillOpacity="0.55" />
          <path
            d="M 428 469 L 400 469 L 400 320 L 376 320"
            stroke="url(#lg)"
            strokeWidth="1.2"
            strokeDasharray="3 5"
          />
          <circle cx="428" cy="469" r="2.5" fill="#5dd4e0" fillOpacity="0.55" />
        </svg>

        {/* central hub */}
        <div className="absolute top-1/2 left-1/2 grid h-[132px] w-[132px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-[26px] border border-[rgba(51,187,207,0.4)] bg-[radial-gradient(circle_at_30%_30%,rgba(51,187,207,0.45),transparent_60%),linear-gradient(160deg,#0d3d48_0%,#0a1628_100%)] shadow-[0_0_0_1px_rgba(176,192,204,0.08)_inset,0_0_80px_0_rgba(51,187,207,0.45),0_30px_80px_-20px_rgba(51,187,207,0.55)]">
          <div className="pointer-events-none absolute -inset-10 -z-10 bg-[radial-gradient(circle,rgba(51,187,207,0.3)_0%,transparent_60%)] blur-[20px]" />
          <div className="bg-[linear-gradient(180deg,#fff_0%,#c8f0f4_100%)] bg-clip-text text-[44px] font-extrabold tracking-[-0.04em] text-transparent">
            D4
          </div>
        </div>

        {/* top-left: Gov Tender card */}
        <div
          className={`${NODE_BASE} top-[6%] left-[4%] min-w-[170px] animate-[float-a_6s_ease-in-out_infinite]`}
        >
          <IconTile>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 3l2.5 5.5L20 9.5l-4 4 1 6L12 17l-5 2.5 1-6-4-4 5.5-1L12 3z"
                fill="#fff"
              />
            </svg>
          </IconTile>
          <div>
            <div className="text-[13.5px] leading-[1.2] font-semibold whitespace-nowrap">
              Gov Tender
            </div>
            <div className="mt-[3px] flex items-center gap-1 text-[11px] text-[var(--text-dim)]">
              <PinIcon />
              Dublin, IE
            </div>
          </div>
        </div>

        {/* top mid-right: Officer pill */}
        <div
          className={`${NODE_BASE} top-[2%] right-[24%] animate-[float-c_5.5s_ease-in-out_infinite] gap-2 rounded-full py-[6px] pr-2.5 pl-[6px]`}
        >
          <div className="h-7 w-7 shrink-0 rounded-full border-[1.5px] border-white/[0.15] bg-[linear-gradient(135deg,#e8a87c,#2a9eb0)]" />
          <div className="text-[11.5px] font-medium text-[var(--text-muted)]">
            Senior Engineer in Dublin
          </div>
        </div>

        {/* mid-left: Outsourcing pill */}
        <div
          className={`${NODE_BASE} top-[24%] left-[2%] animate-[float-a_6.5s_ease-in-out_infinite] gap-2 rounded-full py-[6px] pr-3 pl-[6px]`}
        >
          <div className="h-7 w-7 shrink-0 rounded-full border-[1.5px] border-white/[0.15] bg-[linear-gradient(135deg,#2a9eb0,#c8f0f4)]" />
          <div className="text-[11.5px] font-medium whitespace-nowrap text-[var(--text-muted)]">
            Outsourcing in Bangladesh
          </div>
        </div>

        {/* top-right: Stat card */}
        <div
          className={`${NODE_BASE} top-[14%] right-[4%] w-[168px] animate-[float-b_7s_ease-in-out_infinite] flex-col items-stretch gap-2`}
        >
          <div className="flex items-center justify-between">
            <span className="text-[11px] tracking-[0.02em] text-[var(--text-dim)]">
              Project velocity
            </span>
          </div>
          <div className="flex items-baseline gap-1">
            <span className="text-[24px] font-bold tracking-[-0.02em]">
              +47%
            </span>
            <span className="text-[11px] text-[var(--warm)]">▲</span>
          </div>
          <svg
            className="h-7 w-full"
            viewBox="0 0 140 28"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="chartg" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#5dd4e0" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#5dd4e0" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0,22 L18,20 L32,21 L50,16 L66,18 L82,12 L98,14 L114,8 L130,9 L140,4 L140,28 L0,28 Z"
              fill="url(#chartg)"
            />
            <path
              d="M0,22 L18,20 L32,21 L50,16 L66,18 L82,12 L98,14 L114,8 L130,9 L140,4"
              stroke="#5dd4e0"
              strokeWidth="1.4"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* bottom-left: Project Lead */}
        <div
          className={`${NODE_BASE} bottom-[28%] left-[2%] animate-[float-b_6.5s_ease-in-out_infinite]`}
        >
          <div className="grid h-[18px] w-[18px] shrink-0 place-items-center rounded-full bg-[var(--warm)] text-[10px] font-extrabold text-[var(--bg)]">
            ✓
          </div>
          <div className="h-[34px] w-[34px] shrink-0 rounded-full border-[1.5px] border-white/[0.15] bg-[var(--gradient-icon)]" />
          <div>
            <div className="text-[13.5px] leading-[1.2] font-semibold whitespace-nowrap">
              Project Lead
            </div>
            <div className="mt-[3px] flex items-center gap-1 text-[11px] text-[var(--text-dim)]">
              <PinIcon />
              Dublin, Ireland
            </div>
          </div>
        </div>

        {/* bottom-center: chip */}
        <div className="absolute bottom-[2%] left-1/2 inline-flex -translate-x-1/2 items-center gap-2 rounded-[14px] border border-[var(--border-soft)] bg-[var(--surface-tint)] px-3.5 py-2.5 text-[11.5px] font-semibold tracking-[0.02em] whitespace-nowrap text-[var(--text-muted)] uppercase shadow-[var(--shadow-card)]">
          <span className="text-[var(--purple-2)]">▸</span> Public–Private
          Partnership
        </div>

        {/* bottom-right: status pill */}
        <div
          className={`${NODE_BASE} right-[2%] bottom-[17%] animate-[float-c_6s_ease-in-out_infinite] gap-2 rounded-full py-[6px] pr-3 pl-[6px]`}
        >
          <div className="h-7 w-7 shrink-0 rounded-full border-[1.5px] border-white/[0.15] bg-[linear-gradient(135deg,#c8f0f4,#e8a87c)]" />
          <div className="text-[11.5px] font-medium text-[var(--text-muted)]">
            Shipped to production
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative isolate min-h-[560px] overflow-hidden">
      <HeroVantaBackground />
      {/* Dim the mesh behind hero copy; keep edges/right clearer for the 3D effect */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(180deg,rgba(0,4,15,0.2)_0%,rgba(0,4,15,0.28)_55%,rgba(0,4,15,0.65)_100%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_85%_75%_at_22%_42%,rgba(0,4,15,0.78)_0%,rgba(0,4,15,0.52)_42%,transparent_68%)] min-[960px]:bg-[radial-gradient(ellipse_70%_80%_at_18%_45%,rgba(0,4,15,0.82)_0%,rgba(0,4,15,0.48)_40%,transparent_65%)]"
      />

      <div className="relative z-[2] mx-auto grid max-w-[1240px] grid-cols-1 items-start gap-10 px-6 pt-10 pb-6 min-[960px]:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] min-[960px]:px-10 min-[960px]:pt-16 min-[960px]:pb-[60px]">
        <div className="pt-2 min-[960px]:pt-8">
          <div className="mb-5 inline-flex items-center rounded-full border border-[var(--border-strong)] px-3.5 py-1.5 text-[13px] text-[var(--text-muted)]">
            Ireland&apos;s Digital Partner
          </div>
          <h1 className="max-w-[13ch] font-[family-name:var(--font-nasalization)] text-[clamp(2.25rem,4.6vw,4rem)] font-normal uppercase leading-[1.02] tracking-[0.04em] text-[var(--text)]">
            Accelerate Your Digital{" "}
            <span className="text-[var(--accent)]">Future</span>
          </h1>
          <p className="mt-5 max-w-[480px] font-[family-name:var(--font-red-rose)] text-[17px] font-normal leading-[1.55] text-[var(--text-muted)]">
            Bridging Ireland&apos;s digital ambitions with world-class
            development — delivering government and enterprise projects with
            precision and speed.
          </p>
          <div
            id="start"
            className="mt-6 flex scroll-mt-28 items-center gap-3.5"
          >
            <a
              href="#contact"
              className="btn-primary font-[family-name:var(--font-red-rose)] font-medium"
            >
              Start a Project
            </a>
          </div>
        </div>

        <div className="min-[960px]:self-center">
          <Constellation />
        </div>
      </div>
    </section>
  );
}
