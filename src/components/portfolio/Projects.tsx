import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { ArrowUpRight, X } from "lucide-react";
import { Section } from "./Section";
import { PROJECTS, type Project } from "@/lib/portfolio-data";

function ProjectCard({ p, index, onOpen }: { p: Project; index: number; onOpen: () => void }) {
  return (
    <article className="panel panel-hover reveal group flex flex-col p-7">
      <div className="flex items-center justify-between">
        <span className="font-mono text-xs uppercase tracking-widest text-primary">{p.kind}</span>
        <span className="font-mono text-sm text-muted-foreground">{String(index + 1).padStart(2, "0")}</span>
      </div>
      <h3 className="mt-4 text-xl font-bold uppercase leading-tight">{p.title}</h3>
      <p className="mt-3 line-clamp-3 text-muted-foreground">{p.overview}</p>
      <dl className="mt-5 space-y-1.5 text-sm">
        {p.dataset && <div><dt className="inline text-muted-foreground">Dataset: </dt><dd className="inline font-semibold">{p.dataset}</dd></div>}
        <div><dt className="inline text-muted-foreground">Models: </dt><dd className="inline font-semibold">{p.models.join(", ")}</dd></div>
      </dl>
      {p.metrics.length > 0 ? (
        <div className="mt-5 grid grid-cols-3 gap-2">
          {p.metrics.map((m) => (
            <div key={m.label} className="rounded-lg border border-border bg-background/60 p-3">
              <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{m.label}</p>
              <p className="mt-1 font-display text-lg font-bold text-primary">{m.value}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="mt-5 rounded-lg border border-dashed border-border p-3 text-sm text-muted-foreground">
          {p.includes ? "Insight-driven analysis" : "Detection pipeline · " + p.models[0]}
        </div>
      )}
      <ul className="mt-5 flex flex-wrap gap-1.5">
        {p.tech.map((t) => <li key={t} className="tag text-xs">{t}</li>)}
      </ul>
      <button onClick={onOpen} className="mt-auto inline-flex items-center gap-1.5 self-start pt-6 text-sm font-bold tracking-wider text-primary">
        VIEW PROJECT <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </button>
    </article>
  );
}

function ProjectModal({ p, onClose }: { p: Project | null; onClose: () => void }) {
  return (
    <Dialog.Root open={!!p} onOpenChange={(o) => !o && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=closed]:animate-out data-[state=closed]:fade-out-0" />
        <Dialog.Content className="panel fixed left-1/2 top-1/2 z-50 max-h-[88vh] w-[calc(100%-2rem)] max-w-2xl -translate-x-1/2 -translate-y-1/2 overflow-y-auto bg-popover p-7 md:p-9 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95">
          {p && (
            <>
              <Dialog.Close className="absolute right-4 top-4 rounded-full p-2 text-muted-foreground hover:text-foreground" aria-label="Close">
                <X className="size-5" />
              </Dialog.Close>
              <p className="eyebrow">{p.kind}</p>
              <Dialog.Title className="mt-2 pr-8 text-2xl font-extrabold uppercase">{p.title}</Dialog.Title>
              <Dialog.Description className="mt-3 leading-relaxed text-muted-foreground">{p.overview}</Dialog.Description>

              {p.metrics.length > 0 && (
                <div className="mt-6 grid grid-cols-3 gap-3">
                  {p.metrics.map((m) => (
                    <div key={m.label} className="rounded-xl border border-primary/30 bg-primary/5 p-4">
                      <p className="font-mono text-[11px] uppercase text-muted-foreground">{m.label}</p>
                      <p className="mt-1 font-display text-xl font-bold text-primary">{m.value}</p>
                    </div>
                  ))}
                </div>
              )}

              <div className="mt-6 space-y-5">
                {p.dataset && <Block title="Dataset"><p>{p.dataset}</p></Block>}
                <Block title="Models / Algorithms">
                  <ul className="flex flex-wrap gap-2">{p.models.map((m) => <li key={m} className="tag">{m}</li>)}</ul>
                </Block>
                {p.includes && (
                  <Block title="Scope">
                    <ul className="flex flex-wrap gap-2">{p.includes.map((m) => <li key={m} className="tag">{m}</li>)}</ul>
                  </Block>
                )}
                {p.workflow && (
                  <Block title="Workflow">
                    <ol className="space-y-2">
                      {p.workflow.map((w, i) => (
                        <li key={w} className="flex items-center gap-3">
                          <span className="grid size-7 shrink-0 place-items-center rounded-full border border-primary/40 font-mono text-xs text-primary">{i + 1}</span>
                          <span className="font-semibold">{w}</span>
                        </li>
                      ))}
                    </ol>
                  </Block>
                )}
                <Block title="Technologies">
                  <ul className="flex flex-wrap gap-2">{p.tech.map((m) => <li key={m} className="tag">{m}</li>)}</ul>
                </Block>
              </div>
            </>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="eyebrow mb-2">{title}</h4>
      <div className="text-secondary-foreground">{children}</div>
    </div>
  );
}

export function Projects() {
  const [open, setOpen] = useState<Project | null>(null);
  return (
    <Section id="projects" eyebrow="04 — Selected work" title="Featured Projects" intro="Machine learning, analytics, and computer vision work — with the real numbers behind each model.">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((p, i) => <ProjectCard key={p.id} p={p} index={i} onOpen={() => setOpen(p)} />)}
      </div>
      <ProjectModal p={open} onClose={() => setOpen(null)} />
    </Section>
  );
}
