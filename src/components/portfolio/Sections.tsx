import { useState, type FormEvent } from "react";
import { Activity, Award, BookOpen, Cpu, GraduationCap, Layers, Mail, Users, Github, Linkedin, BadgeCheck, Plus } from "lucide-react";
import { Section } from "./Section";
import { ACHIEVEMENTS, CONTACT, EXPERIENCE, SKILLS, THESIS_FLOW } from "@/lib/portfolio-data";

export function About() {
  const info = [
    ["Location", "Pakistan"],
    ["Focus", "Data Analytics • Machine Learning • AI"],
    ["Core Tools", "Python • Pandas • SQL • Scikit-learn"],
    ["Education", "BS Information Technology"],
  ];
  return (
    <Section id="about" eyebrow="01 — Profile" title="About Me">
      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <div className="reveal space-y-5 text-lg leading-relaxed text-muted-foreground">
          <p>I am a technology professional developing my career around data analytics, machine learning, and practical AI solutions. I enjoy transforming raw data into useful insights and building models that solve real problems.</p>
          <p>My work combines analytical thinking with technical implementation, using Python, Pandas, SQL, machine learning algorithms, visualization, and modern development tools.</p>
          <p>I am continuously expanding my expertise through academic projects, professional experience, certifications, and hands-on machine learning work.</p>
        </div>
        <dl className="panel reveal divide-y divide-border">
          {info.map(([k, v]) => (
            <div key={k} className="p-5">
              <dt className="eyebrow">{k}</dt>
              <dd className="mt-1.5 font-semibold text-foreground">{v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}

export function Skills() {
  return (
    <Section id="skills" eyebrow="02 — Capabilities" title="Technical Skills">
      <div className="grid gap-5 md:grid-cols-2">
        {SKILLS.map((g, i) => (
          <div key={g.title} className="panel panel-hover reveal p-7">
            <div className="flex items-baseline justify-between">
              <h3 className="text-lg font-bold uppercase tracking-wide">{g.title}</h3>
              <span className="font-mono text-sm text-primary">0{i + 1}</span>
            </div>
            <ul className="mt-5 flex flex-wrap gap-2">
              {g.items.map((s) => <li key={s} className="tag">{s}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function Experience() {
  return (
    <Section id="experience" eyebrow="03 — Career" title="Experience">
      <ol className="relative ml-2 border-l border-border">
        {EXPERIENCE.map((e) => (
          <li key={e.role} className="reveal relative mb-10 pl-8 last:mb-0">
            <span className="absolute -left-[7px] top-2 size-3.5 rounded-full border-2 border-primary bg-background" />
            <div className="panel panel-hover p-7">
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="text-xl font-bold uppercase">{e.role}</h3>
                {e.duration && <span className="tag">{e.duration}</span>}
              </div>
              <p className="mt-3 leading-relaxed text-muted-foreground">{e.description}</p>
              {e.points.length > 0 && (
                <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                  {e.points.map((p) => (
                    <li key={p} className="flex gap-2 text-sm text-secondary-foreground">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />{p}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}

export function Thesis() {
  const metrics = [["YOLO Accuracy", "94.1%", 94.1], ["Transformer Accuracy", "81.17%", 81.17], ["Combined Accuracy", "95.01%", 95.01]] as const;
  return (
    <Section id="thesis" eyebrow="05 — Research" title="Thesis & AI Research">
      <div className="panel reveal overflow-hidden">
        <div className="border-b border-border p-7 md:p-10">
          <h3 className="text-2xl font-bold uppercase md:text-3xl">AI-Based Violence Detection <span className="text-gradient">and Video Summarization</span></h3>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            A computer vision research project focused on detecting fighting events in videos and automatically creating a concise combined summary containing the detected events.
          </p>
        </div>
        <div className="bg-grid p-7 md:p-10">
          <p className="eyebrow mb-6">System architecture</p>
          <ol className="grid gap-3 sm:grid-cols-3 lg:grid-cols-9">
            {THESIS_FLOW.map((s, i) => (
              <li key={s} className="relative">
                <div className={`flex h-full flex-col justify-between rounded-xl border p-3 ${i === 2 || i === 3 ? "border-primary/50 bg-primary/10" : i === 4 ? "border-violet/50 bg-violet/10" : "border-border bg-surface"}`}>
                  <span className="font-mono text-xs text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
                  <span className="mt-3 text-sm font-bold uppercase leading-tight">{s}</span>
                </div>
              </li>
            ))}
          </ol>
          <svg viewBox="0 0 900 20" className="mt-3 hidden w-full lg:block" aria-hidden="true">
            <line x1="10" y1="10" x2="890" y2="10" stroke="var(--primary)" strokeOpacity=".6" className="animate-dash" />
          </svg>
        </div>
        <div className="grid gap-px border-t border-border bg-border md:grid-cols-3">
          {metrics.map(([l, v, p]) => (
            <div key={l} className="bg-surface p-7">
              <p className="eyebrow">{l}</p>
              <p className="mt-2 font-display text-4xl font-bold">{v}</p>
              <div className="mt-4 h-1.5 rounded-full bg-muted"><div className="h-full rounded-full bg-primary" style={{ width: `${p}%` }} /></div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export function Education() {
  return (
    <Section eyebrow="06 — Academics" title="Education">
      <div className="panel panel-hover reveal flex flex-col gap-6 p-8 md:flex-row md:items-center">
        <div className="grid size-16 shrink-0 place-items-center rounded-2xl bg-primary/10 text-primary"><GraduationCap className="size-8" /></div>
        <div className="flex-1">
          <h3 className="text-2xl font-bold">BS Information Technology</h3>
          <p className="mt-1 text-lg text-muted-foreground">Lahore Garrison University</p>
        </div>
        <span className="tag self-start md:self-center">Expected completion · 2027</span>
      </div>
    </Section>
  );
}

const ICONS = { cpu: Cpu, users: Users, activity: Activity, book: BookOpen, layers: Layers, award: Award };

export function Achievements() {
  return (
    <Section id="achievements" eyebrow="07 — Beyond the code" title="Achievements & Activities">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {ACHIEVEMENTS.map((a) => {
          const Icon = ICONS[a.icon];
          return (
            <div key={a.title} className="panel panel-hover reveal p-7">
              <div className="grid size-12 place-items-center rounded-xl border border-primary/30 bg-primary/10 text-primary"><Icon className="size-6" /></div>
              <h3 className="mt-5 text-lg font-bold">{a.title}</h3>
              <p className="mt-1.5 text-muted-foreground">{a.detail}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

export function Certifications() {
  const areas = ["Data Analytics", "Machine Learning", "Computer Vision"];
  return (
    <Section eyebrow="08 — Credentials" title="Certifications & Learning" intro="Verified certificates will be listed here. Current learning focus areas:">
      <div className="grid gap-5 md:grid-cols-3">
        {areas.map((a) => (
          <div key={a} className="panel reveal flex flex-col p-7">
            <BadgeCheck className="size-7 text-violet" />
            <h3 className="mt-4 text-lg font-bold">{a}</h3>
            <p className="mt-1 text-sm text-muted-foreground">Continuous learning area</p>
            <div className="mt-6 flex items-center gap-2 rounded-lg border border-dashed border-border p-3 text-sm text-muted-foreground">
              <Plus className="size-4" /> Certificate to be added
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function Contact() {
  const [note, setNote] = useState("");
  const links = [
    { label: "EMAIL ME", href: CONTACT.email ? `mailto:${CONTACT.email}` : "", Icon: Mail },
    { label: "LINKEDIN", href: CONTACT.linkedin, Icon: Linkedin },
    { label: "GITHUB", href: CONTACT.github, Icon: Github },
  ];
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setNote("Thanks! The form isn't connected yet, so this message was not sent.");
  };
  return (
    <Section id="contact" eyebrow="09 — Contact" title="Let's build something meaningful">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="reveal">
          <p className="text-lg leading-relaxed text-muted-foreground">I am open to opportunities in data analytics, machine learning, AI, and technology-driven projects.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {links.map(({ label, href, Icon }) =>
              href ? (
                <a key={label} href={href} target="_blank" rel="noreferrer" className={label === "EMAIL ME" ? "btn-primary" : "btn-ghost"}><Icon className="size-4" />{label}</a>
              ) : (
                <span key={label} title="Link coming soon" aria-disabled="true" className={`${label === "EMAIL ME" ? "btn-primary" : "btn-ghost"} cursor-not-allowed opacity-60`}><Icon className="size-4" />{label}</span>
              ),
            )}
          </div>
        </div>
        <form onSubmit={onSubmit} className="panel reveal space-y-4 p-7">
          {[["name", "Name", "text"], ["email", "Email", "email"]].map(([id, label, type]) => (
            <div key={id}>
              <label htmlFor={id} className="mb-1.5 block text-sm font-semibold">{label}</label>
              <input id={id} name={id} type={type} required className="w-full rounded-lg border border-input bg-background px-4 py-3 outline-none focus:border-primary" />
            </div>
          ))}
          <div>
            <label htmlFor="message" className="mb-1.5 block text-sm font-semibold">Message</label>
            <textarea id="message" name="message" rows={5} required className="w-full resize-none rounded-lg border border-input bg-background px-4 py-3 outline-none focus:border-primary" />
          </div>
          <button type="submit" className="btn-primary w-full justify-center">Send Message</button>
          {note && <p role="status" className="text-sm text-muted-foreground">{note}</p>}
        </form>
      </div>
    </Section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-lg font-bold">Kneez Fatima</p>
          <p className="text-sm text-muted-foreground">Data Analyst • Machine Learning • AI</p>
        </div>
        <p className="text-sm text-muted-foreground">© 2026 Kneez Fatima. All rights reserved.</p>
      </div>
    </footer>
  );
}
