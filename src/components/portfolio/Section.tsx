import type { ReactNode } from "react";

export function Section({ id, eyebrow, title, children, intro }: { id?: string; eyebrow: string; title: string; intro?: string; children: ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-5 border-t border-border py-16 md:py-20">
      <div className="reveal mb-12 max-w-3xl">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">{title}</h2>
        {intro && <p className="mt-4 text-lg text-muted-foreground">{intro}</p>}
      </div>
      {children}
    </section>
  );
}
