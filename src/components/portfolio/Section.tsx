import type { ReactNode } from "react";

export function Section({ id, eyebrow, title, children, intro }: { id?: string; eyebrow: string; title: string; intro?: string; children: ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-5 py-24 md:py-28">
      <div className="reveal mb-12 max-w-3xl">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="mt-3 text-4xl font-extrabold uppercase leading-tight sm:text-5xl">{title}</h2>
        {intro && <p className="mt-4 text-lg text-muted-foreground">{intro}</p>}
      </div>
      {children}
    </section>
  );
}
