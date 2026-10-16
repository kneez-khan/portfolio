import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { ArrowUpRight, X, House, Users, Smartphone, ChartNoAxesCombined, ScanEye, ScanSearch } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "./Section";
import { PROJECTS, type Project } from "@/lib/portfolio-data";

const VISUALS = {
  lahore: { Icon: House, input: "Property features", output: "Price prediction" },
  churn: { Icon: Users, input: "Customer features", output: "Churn prediction" },
  phone: { Icon: Smartphone, input: "Device attributes", output: "Resale estimate" },
  retail: { Icon: ChartNoAxesCombined, input: "Sales data", output: "Business insights" },
  violence: { Icon: ScanEye, input: "Video frames", output: "Event summary" },
  weapon: { Icon: ScanSearch, input: "Query + image", output: "Pistol detection" },
};

function ProjectVisual({ id }: { id: string }) {
  const visual = VISUALS[id as keyof typeof VISUALS];
  if (!visual) return null;
  const Icon = visual.Icon;
  return <div className="project-visual relative mb-6 flex h-40 items-center justify-between overflow-hidden rounded-md border border-border px-5" aria-hidden="true">
    <div className="absolute inset-0 bg-grid opacity-50" />
    <div className="relative flex h-full flex-col justify-between py-5">
      <span className="font-mono text-[10px] uppercase text-muted-foreground">{visual.input}</span>
      <Icon strokeWidth={1} className="size-14 text-primary transition-transform duration-500 group-hover:scale-110" />
      <span className="font-mono text-[10px] uppercase text-violet">{visual.output}</span>
    </div>
    <svg viewBox="0 0 100 110" className="relative h-28 w-24 text-violet" fill="none">
      <path d="M5 55H32M32 55L55 20H90M32 55H90M32 55L55 90H90" stroke="currentColor" strokeOpacity=".45" />
      {[20,55,90].map(y => <rect key={y} x="75" y={y-8} width="16" height="16" rx="3" stroke="currentColor" fill="var(--surface)" />)}
      <circle cx="8" cy="55" r="5" fill="var(--primary)" />
    </svg>
  </div>;
}

function ProjectCard({ p, index, onOpen }: { p: Project; index: number; onOpen: () => void }) {
  return (
    <article className="panel panel-hover reveal group flex flex-col p-5">
      <ProjectVisual id={p.id} />
      <div className="flex items-center justify-between">
        <span className="font-mono text-xs uppercase tracking-widest text-primary">{p.kind}</span>
        <span className="font-mono text-sm text-muted-foreground">{String(index + 1).padStart(2, "0")}</span>
      </div>
      <h3 className="mt-4 text-xl font-semibold leading-snug">{p.title}</h3>
      <p className="mt-3 line-clamp-3 text-muted-foreground">{p.overview}</p>
      <dl className="mt-5 space-y-1.5 text-sm">
        {p.dataset && <div><dt className="inline text-muted-foreground">Dataset: </dt><dd className="inline font-semibold">{p.dataset}</dd></div>}
        <div><dt className="inline text-muted-foreground">Models: </dt><dd className="inline font-semibold">{p.models.join(", ")}</dd></div>
      </dl>
      {p.metrics.length > 0 ? (
        <div className="mt-5 grid grid-cols-2 gap-2">
          {p.metrics.map((m) => (
            <div key={m.label} className="border-l border-border px-3 py-1">
              <p className="font-mono text-[10px] uppercase text-muted-foreground">{m.label}</p>
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
      <Button onClick={onOpen} variant="link" className="mt-5 justify-start self-start px-0">View Project <ArrowUpRight /></Button>
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
              <Dialog.Close asChild><Button variant="ghost" size="icon" className="absolute right-4 top-4" aria-label="Close"><X /></Button></Dialog.Close>
              <p className="eyebrow">{p.kind}</p>
              <Dialog.Title className="mt-2 pr-8 text-2xl font-extrabold uppercase">{p.title}</Dialog.Title>
              <Dialog.Description className="mt-3 leading-relaxed text-muted-foreground">{p.overview}</Dialog.Description>

              {p.metrics.length > 0 && (
                <div className="mt-6 grid grid-cols-2 gap-3">
                  {p.metrics.map((m) => (
                    <div key={m.label} className="border-l border-primary/30 pl-4 py-2">
                      <p className="font-mono text-[11px] uppercase text-muted-foreground">{m.label}</p>
                      <p className="mt-1 font-display text-xl font-bold text-primary">{m.value}</p>
                    </div>
                  ))}
                </div>
              )}

              {p.note && <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{p.note}</p>}
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
    <Section id="projects" eyebrow="04 — Selected work" title="Featured Projects" intro="A selection of predictive modeling, data analysis, and computer vision projects.">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((p, i) => <ProjectCard key={p.id} p={p} index={i} onOpen={() => setOpen(p)} />)}
      </div>
      <ProjectModal p={open} onClose={() => setOpen(null)} />
    </Section>
  );
}
