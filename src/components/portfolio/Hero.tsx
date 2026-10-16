import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="home" className="portfolio-hero relative overflow-hidden px-5 pb-14 pt-36 md:pb-20 md:pt-44">
      <div className="relative mx-auto max-w-6xl">
        <p className="eyebrow animate-rise">Data Analytics &amp; Machine Learning</p>
        <h1 className="animate-rise mt-7 max-w-4xl text-5xl font-semibold leading-[1.08] sm:text-7xl md:text-8xl">Kneez Fatima<span className="text-primary">.</span></h1>
        <p className="animate-rise mt-6 font-display text-xl font-medium text-secondary-foreground sm:text-2xl">Data Analyst <span className="px-2 text-primary">|</span> Machine Learning</p>
        <p className="animate-rise mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">I analyze data and build predictive models with Python, SQL, and Scikit-learn — from customer behavior and price prediction to computer vision research.</p>
        <div className="animate-rise mt-9 flex flex-wrap gap-3">
          <Button asChild size="lg" className="h-12"><a href="#projects">Explore Projects <ArrowDownRight /></a></Button>
          <Button asChild variant="outline" size="lg" className="h-12"><a href="#contact">Contact Me <ArrowUpRight /></a></Button>
        </div>
        <div className="mt-16 flex flex-wrap items-center justify-between gap-5 border-t border-border pt-6 md:mt-20">
          <p className="font-mono text-xs text-muted-foreground">Python / SQL / Pandas / Scikit-learn</p>
          <a href="#projects" className="inline-flex items-center gap-3 text-sm text-secondary-foreground">Selected work <ArrowDownRight className="size-4 text-primary" /></a>
        </div>
      </div>
    </section>
  );
}
