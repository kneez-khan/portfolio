import { useState, type FormEvent } from "react";
import { Activity, Award, BookOpen, Cpu, GraduationCap, Layers, Mail, Users, Github, Linkedin, Phone, ArrowUpRight } from "lucide-react";
import { Section } from "./Section";
import { Button } from "@/components/ui/button";
import { ACHIEVEMENTS, CONTACT, EXPERIENCE, SKILLS, THESIS_FLOW, PROJECTS } from "@/lib/portfolio-data";

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
          <p>My experience also includes UI/UX design and teaching — bringing attention to usability, clear communication, and structured problem-solving.</p>
        </div>
        <dl className="reveal divide-y divide-border border-y border-border">
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
  const thesis = PROJECTS.find(project => project.id === "violence");
  const metrics = thesis?.metrics ?? [];
  return (
    <Section id="thesis" eyebrow="05 — Research" title="Thesis & AI Research">
      <div className="reveal overflow-hidden border-y border-border">
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
        <div className="grid gap-px border-t border-border bg-border md:grid-cols-2">
          {metrics.map(({ label, value }) => (
            <div key={label} className="bg-surface p-7">
              <p className="eyebrow">{label}</p>
              <p className="mt-2 font-display text-4xl font-bold">{value}</p>
            </div>
          ))}
        </div>
        <p className="py-6 text-sm leading-relaxed text-muted-foreground">Dataset: {thesis?.dataset}. {thesis?.note}</p>
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
  return (
    <Section eyebrow="08 — Development" title="Continued Learning">
      <ul className="grid gap-5 md:grid-cols-3">
        {["Data Analytics", "Machine Learning", "Computer Vision"].map(area => (
          <li key={area} className="border-l border-border pl-5 py-3"><BookOpen className="mb-4 size-5 text-violet" /><h3 className="text-lg font-semibold">{area}</h3><p className="mt-2 text-sm text-muted-foreground">Ongoing study and hands-on project work.</p></li>
        ))}
      </ul>
    </Section>
  );
}

export function Contact() {
  const [note, setNote] = useState("");
  const links = [
    { label: CONTACT.email, href: `mailto:${CONTACT.email}`, Icon: Mail },
    { label: CONTACT.phone, href: `tel:${CONTACT.phone}`, Icon: Phone },
    { label: "LINKEDIN", href: CONTACT.linkedin, Icon: Linkedin },
    { label: "GITHUB", href: CONTACT.github, Icon: Github },
  ];
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`Portfolio enquiry from ${String(data.get("name") ?? "")}`);
    const body = encodeURIComponent(`${String(data.get("message") ?? "")}\n\nFrom: ${String(data.get("name") ?? "")}\nReply to: ${String(data.get("email") ?? "")}`);
    window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
    setNote("Your email app will open with this message. Send it there to complete your enquiry.");
  };
  return (
    <Section id="contact" eyebrow="09 — Contact" title="Get in touch">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="reveal">
          <p className="text-lg leading-relaxed text-muted-foreground">I am open to opportunities in data analytics, machine learning, AI, and technology-driven projects.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {links.map(({ label, href, Icon }) => href ? (
              <Button key={label} asChild variant="outline" className="h-11 max-w-full whitespace-normal break-all">
                <a href={href} target={href.startsWith("https:") ? "_blank" : undefined} rel={href.startsWith("https:") ? "noreferrer" : undefined}><Icon />{label}</a>
              </Button>
            ) : (
              <Button key={label} variant="outline" disabled title="Profile link not yet provided" className="h-11"><Icon />LinkedIn · Pending</Button>
            ))}
          </div>
        </div>
        <form onSubmit={onSubmit} className="reveal space-y-4 border-l border-border pl-0 lg:pl-10">
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
          <Button type="submit" className="h-12 w-full">Compose Email <ArrowUpRight /></Button>
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
        <div className="flex flex-col gap-2 text-sm text-muted-foreground">
          <a href={`mailto:${CONTACT.email}`} className="hover:text-primary">{CONTACT.email}</a>
          <a href={`tel:${CONTACT.phone}`} className="hover:text-primary">{CONTACT.phone}</a>
          <a href={CONTACT.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-primary"><Github className="size-4" />GitHub</a>
          <p className="mt-2">© 2026 Kneez Fatima</p>
        </div>
      </div>
    </footer>
  );
}
