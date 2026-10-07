import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [n, setN] = useState(to);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    setN(0);
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / 1400);
      setN(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [to]);
  return <span ref={ref}>{n}{suffix}</span>;
}

function HeroVisual() {
  const bars = [38, 62, 45, 78, 56, 88, 70, 95];
  return (
    <div className="relative mx-auto aspect-square w-full max-w-md" aria-hidden="true">
      <div className="absolute inset-0 rounded-full bg-primary/10 blur-3xl" />
      <svg viewBox="0 0 400 400" className="relative h-full w-full">
        <defs>
          <linearGradient id="ln" x1="0" x2="1">
            <stop offset="0" stopColor="var(--primary)" />
            <stop offset="1" stopColor="var(--violet)" />
          </linearGradient>
        </defs>
        {[80, 140, 200].map((r) => (
          <circle key={r} cx="200" cy="200" r={r} fill="none" stroke="var(--border)" />
        ))}
        <circle cx="200" cy="200" r="170" fill="none" stroke="url(#ln)" strokeOpacity=".5" className="animate-dash" />
        {[
          [200, 60], [320, 140], [300, 300], [120, 320], [70, 170], [200, 200],
        ].map(([x, y], i, arr) =>
          arr.slice(i + 1).map(([x2, y2], j) => (
            <line key={`${i}-${j}`} x1={x} y1={y} x2={x2} y2={y2} stroke="var(--primary)" strokeOpacity=".12" />
          )),
        )}
        {[[200, 60], [320, 140], [300, 300], [120, 320], [70, 170]].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="5" fill={i % 2 ? "var(--violet)" : "var(--primary)"} className="animate-pulse-dot" style={{ animationDelay: `${i * 0.4}s` }} />
        ))}
        <circle cx="200" cy="200" r="9" fill="var(--primary)" />
      </svg>

      <div className="panel animate-floaty absolute left-0 top-10 w-44 p-4 shadow-2xl">
        <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">Model accuracy</p>
        <p className="mt-1 font-display text-2xl font-bold text-primary">95.01%</p>
        <div className="mt-2 h-1.5 rounded-full bg-muted"><div className="h-full w-[95%] rounded-full bg-primary" /></div>
      </div>
      <div className="panel animate-floaty absolute bottom-6 right-0 w-52 p-4 shadow-2xl" style={{ animationDelay: "-3s" }}>
        <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">Feature signal</p>
        <div className="mt-3 flex h-16 items-end gap-1.5">
          {bars.map((b, i) => (
            <div key={i} className={`flex-1 rounded-sm ${i === bars.length - 1 ? "bg-violet" : "bg-primary/60"}`} style={{ height: `${b}%` }} />
          ))}
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="home" className="bg-grid relative overflow-hidden pb-20 pt-32 md:pt-40">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 lg:grid-cols-[1.15fr_1fr]">
        <div>
          <p className="eyebrow animate-rise">Portfolio · 2026</p>
          <h1 className="animate-rise mt-5 text-5xl font-extrabold leading-[1.02] sm:text-6xl md:text-7xl" style={{ animationDelay: ".1s" }}>
            Kneez Fatima
          </h1>
          <p className="animate-rise mt-5 font-display text-xl font-bold leading-snug tracking-wide sm:text-2xl" style={{ animationDelay: ".2s" }}>
            DATA ANALYST <br /> <span className="text-gradient">&amp; MACHINE LEARNING ENTHUSIAST</span>
          </p>
          <p className="animate-rise mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground" style={{ animationDelay: ".3s" }}>
            I turn data into meaningful insights and build practical machine learning solutions using Python, data analysis, visualization, and predictive modeling.
          </p>
          <p className="animate-rise mt-4 font-mono text-sm text-secondary-foreground/80" style={{ animationDelay: ".35s" }}>
            Python • Data Analysis • Machine Learning • SQL • Visualization
          </p>
          <div className="animate-rise mt-9 flex flex-wrap gap-3" style={{ animationDelay: ".45s" }}>
            <a href="#projects" className="btn-primary">VIEW MY WORK <ArrowRight className="size-4" /></a>
            <a href="#contact" className="btn-ghost">LET'S CONNECT</a>
          </div>
        </div>
        <HeroVisual />
      </div>

      <dl className="relative mx-auto mt-16 grid max-w-6xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border px-0 md:grid-cols-4 mx-5 md:mx-auto">
        {[
          { v: <><CountUp to={3} />+</>, l: "Machine Learning Projects" },
          { v: "Python", l: "Data & ML" },
          { v: <CountUp to={95} suffix="%" />, l: "Best Model Accuracy" },
          { v: <><CountUp to={1} />+</>, l: "Professional Experience" },
        ].map((s, i) => (
          <div key={i} className="bg-surface p-6">
            <dt className="sr-only">{s.l}</dt>
            <dd className="font-display text-3xl font-bold text-foreground">{s.v}</dd>
            <dd className="mt-1 text-sm text-muted-foreground">{s.l}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
