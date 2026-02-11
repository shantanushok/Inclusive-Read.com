"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  AnimatePresence,
} from "framer-motion";
import {
  Type,
  Volume2,
  BookText,
  Download,
  CheckCircle,
  KeyRound,
  LogIn,
  Sparkles,
  Archive,
  Settings,
  Code,
  Upload,
  FileCheck,
  X,
  ArrowUpRight,
  ArrowDown,
  Shield,
  Play,
  Brain,
  Eye,
  Focus,
  Heart,
  Users,
  Zap,
} from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import {
  PlaceHolderImages,
  type ImagePlaceholder,
} from "@/lib/placeholder-images";

const getImage = (id: string): ImagePlaceholder | undefined =>
  PlaceHolderImages.find((img) => img.id === id);



// ===== Main Page =====
export default function Home() {
  const [selectedImage, setSelectedImage] = useState<ImagePlaceholder | null>(null);

  // Parallax
  const heroRef = useRef(null);
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(heroProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(heroProgress, [0, 0.6], [1, 0]);

  // Images
  const heroImage = getImage("hero-image");
  const installStep1Image = getImage("install-step-1");
  const installStep2Image = getImage("install-step-2");
  const installStep3Image = getImage("install-step-3");
  const tutorialStep1Image = getImage("tutorial-step-1");
  const tutorialStep2Image = getImage("tutorial-step-2");
  const tutorialStep3Image = getImage("tutorial-step-3");
  const tutorialStep4Image = getImage("tutorial-step-4");
  const showcase1Image = getImage("showcase-1");
  const showcase2Image = getImage("showcase-2");
  const showcase3Image = getImage("showcase-3");
  const showcase4Image = getImage("showcase-4");

  // Neurodivergent audience cards
  const audienceCards = [
    {
      icon: <Focus className="w-5 h-5" />,
      condition: "ADHD",
      tagline: "Stay focused, stay in flow",
      description: "Sensory Shield freezes distracting animations, auto-playing videos, and flashing banners so you can maintain focus. Text-to-Speech lets you listen instead of reading when focus shifts.",
      stat: "1 in 9",
      statLabel: "children diagnosed with ADHD",
      color: "purple",
      accent: "#a855f7",
    },
    {
      icon: <Brain className="w-5 h-5" />,
      condition: "Autism (ASD)",
      tagline: "Calm, predictable browsing",
      description: "Reduce sensory overload with frozen animations, simplified layouts, and consistent reading modes. Jargon Decoder translates confusing idioms and administrative language into clear, literal text.",
      stat: "1 in 36",
      statLabel: "children identified with ASD",
      color: "teal",
      accent: "#2dd4bf",
    },
    {
      icon: <Type className="w-5 h-5" />,
      condition: "Dyslexia",
      tagline: "Read with confidence",
      description: "Instantly switch any webpage to OpenDyslexic font with optimized letter spacing and weighted bases designed to reduce letter swapping, mirroring, and line-skipping.",
      stat: "1 in 5",
      statLabel: "people have dyslexia",
      color: "amber",
      accent: "#e8a838",
    },
    {
      icon: <Heart className="w-5 h-5" />,
      condition: "& More",
      tagline: "For every kind of mind",
      description: "Whether you experience visual processing difficulties, cognitive fatigue, anxiety, or any other challenge InclusiveRead adapts the web to work the way your brain does.",
      stat: "15–20%",
      statLabel: "of the population is neurodivergent",
      color: "rose",
      accent: "#fb7185",
    },
  ];

  const features = [
    {
      icon: <Type className="w-5 h-5" />,
      title: "Dyslexic Reading Mode",
      description:
        "Transforms all webpage text into OpenDyslexic, an open-source typeface designed specifically to mitigate common reading errors caused by dyslexia. Unique letter shapes with increased spacing and heavy-weighted bases reduce letter swapping and improve reading flow.",
      helpsWith: "Dyslexia",
      color: "amber",
      accent: "#e8a838",
    },
    {
      icon: <Volume2 className="w-5 h-5" />,
      title: "Text-to-Speech",
      description:
        "Listen to articles and web content with a native text-to-speech reader. Especially helpful for people with ADHD or dyslexia who process information better through audio just one click away.",
      helpsWith: "ADHD · Dyslexia",
      color: "green",
      accent: "#4ade80",
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Sensory Shield",
      description:
        "A protective layer that automatically detects and freezes fluctuating UI elements, such as flashing banners or auto-playing carousels, which can trigger sensory overload for people with ADHD, autism, or photosensitivity.",
      helpsWith: "ADHD · Autism",
      color: "coral",
      accent: "#f87171",
    },
    {
      icon: <BookText className="w-5 h-5" />,
      title: "Jargon Decoder",
      description:
        "An on-the-fly translation feature that replaces high-friction administrative and legal terminology with actionable, plain-language equivalents. Vital for autistic users and anyone who finds idioms and abstract language confusing.",
      helpsWith: "Autism · Cognitive",
      color: "blue",
      accent: "#60a5fa",
    },
  ];

  const tutorialSteps = [
    {
      icon: <KeyRound className="w-5 h-5" />,
      title: "Get Your Free API Key",
      description:
        "Visit Google AI Studio in order to create a free API key . You can also visit OpenRouter to create a free API key , ensure your billing/credit limit is set to zero.",
      image: tutorialStep2Image,
    },
    {
      icon: <LogIn className="w-5 h-5" />,
      title: "Activate the Extension",
      description:
        "Open the extension panel, enter your API key, and activate it to unlock the features.",
      image: tutorialStep3Image,
    },
    {
      icon: <Sparkles className="w-5 h-5" />,
      title: "Enjoy Enhanced Reading",
      description:
        "Now you can use all of the powerful features to make your online reading experience better.",
      image: tutorialStep4Image,
    },
  ];

  const installationSteps = [
    {
      icon: <Download className="w-5 h-5" />,
      title: "Download ZIP",
      description: "Download the extension as a ZIP file.",
      image: installStep1Image,
    },
    {
      icon: <Archive className="w-5 h-5" />,
      title: "Extract ZIP",
      description: "Extract the ZIP file to a folder you can easily find.",
      image: installStep2Image,
    },
    {
      icon: <Settings className="w-5 h-5" />,
      title: "Navigate to Extensions",
      description: "In Chrome, go to 'Manage Extensions'.",
      image: installStep3Image,
    },
    {
      icon: <Code className="w-5 h-5" />,
      title: "Enable Developer Mode",
      description: "Turn on 'Developer mode' using the toggle.",
      image: tutorialStep1Image,
    },
    {
      icon: <Upload className="w-5 h-5" />,
      title: "Load Unpacked",
      description: "Click on the 'Load unpacked' button.",
      image: tutorialStep2Image,
    },
    {
      icon: <FileCheck className="w-5 h-5" />,
      title: "Select Folder",
      description: "Select the folder you extracted earlier.",
      image: tutorialStep3Image,
    },
    {
      icon: <CheckCircle className="w-5 h-5" />,
      title: "Setup Finished",
      description: "You can now pin and use the extension!",
      image: tutorialStep4Image,
    },
  ];

  const showcaseImages = [showcase1Image, showcase2Image, showcase3Image, showcase4Image].filter(
    Boolean
  ) as ImagePlaceholder[];

  return (
    <div className="flex flex-col min-h-dvh bg-[#0a0a0a] text-white">
      <Header />
      <main className="flex-1">
        {/* ═══════════════════════════════════════════
            HERO SECTION
        ═══════════════════════════════════════════ */}
        <section
          ref={heroRef}
          id="overview"
          className="relative min-h-[85vh] flex items-center overflow-hidden pt-20 pb-12"
        >
          {/* Background — single soft gradient orb, nothing else */}
          <div className="absolute top-[-20%] right-[-10%] w-[700px] h-[700px] bg-gradient-to-br from-primary/[0.06] via-primary/[0.02] to-transparent rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-[-15%] left-[-8%] w-[500px] h-[500px] bg-gradient-to-tr from-[#a855f7]/[0.04] to-transparent rounded-full blur-[100px] pointer-events-none" />

          <motion.div
            style={{ y: heroY, opacity: heroOpacity }}
            className="relative z-10 container mx-auto px-6 lg:px-12 w-full"
          >
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(85vh-8rem)]">
              {/* Left — Text content */}
              <div className="max-w-2xl">

                {/* Heading */}
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="mt-4 text-[clamp(2.8rem,6vw,5.5rem)] font-bold tracking-[-0.035em] leading-[1.05]"
                >
                  The web,
                  <br />
                  redesigned for
                  <br />
                  <span className="font-editorial italic text-gradient-warm">
                    your mind.
                  </span>
                </motion.h1>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="mt-5 text-lg md:text-xl text-white/40 leading-[1.75] max-w-lg"
                >
                  A Chrome extension for people with ADHD, Autism, Dyslexia &amp; other
                  neurodivergent conditions. Reduce sensory overload, customize
                  reading, and decode complex language effortlessly.
                </motion.p>

                {/* Condition pills */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.75 }}
                  className="mt-4 flex flex-wrap gap-2"
                >
                  {[
                    { label: "ADHD", color: "#a855f7" },
                    { label: "Autism", color: "#2dd4bf" },
                    { label: "Dyslexia", color: "#e8a838" },
                    { label: "More", color: "#fb7185" },
                  ].map((tag, i) => (
                    <motion.span
                      key={tag.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.85 + i * 0.08 }}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-medium"
                      style={{
                        color: tag.color,
                        backgroundColor: `${tag.color}0a`,
                        border: `1px solid ${tag.color}20`,
                      }}
                    >
                      <span
                        className="w-1 h-1 rounded-full"
                        style={{ backgroundColor: tag.color }}
                      />
                      {tag.label}
                    </motion.span>
                  ))}
                </motion.div>

                {/* CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  className="mt-8 flex flex-wrap items-center gap-4"
                >
                  <a
                    href="/extension.zip"
                    download
                    className="inline-flex items-center gap-2.5 px-7 py-3.5 text-[13px] font-semibold text-black bg-primary rounded-full hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 group"
                  >
                    Download Extension
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                  <a
                    href="#features"
                    className="inline-flex items-center gap-2 px-7 py-3.5 text-[13px] font-medium text-white/50 rounded-full hover:text-white/80 transition-colors duration-300"
                  >
                    See how it works
                    <ArrowDown className="w-3.5 h-3.5" />
                  </a>
                </motion.div>

              </div>

              {/* Right — Hero image */}
              <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 1.2,
                  delay: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative hidden lg:block"
              >
                {heroImage && (
                  <div className="relative">
                    {/* Main image */}
                    <div className="relative rounded-2xl overflow-hidden border border-white/[0.06]">
                      <Image
                        src={heroImage.imageUrl}
                        alt={heroImage.description}
                        data-ai-hint={heroImage.imageHint}
                        width={700}
                        height={500}
                        className="rounded-2xl object-cover w-full"
                        priority
                      />
                      {/* Top shine line */}
                      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                      {/* Bottom fade */}
                      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0a0a0a]/60 to-transparent" />
                    </div>

                    {/* Floating feature badge — top right */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.4, duration: 0.5 }}
                      className="absolute -top-4 -right-4 bg-[#111]/90 backdrop-blur-md border border-white/[0.08] rounded-xl px-4 py-3 flex items-center gap-3"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#a855f7]/10 flex items-center justify-center">
                        <Shield className="w-4 h-4 text-[#a855f7]" />
                      </div>
                      <div>
                        <p className="text-[11px] font-semibold text-white/80">Sensory Shield</p>
                        <p className="text-[10px] text-white/30">Active</p>
                      </div>
                    </motion.div>

                    {/* Floating feature badge — bottom left */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.6, duration: 0.5 }}
                      className="absolute -bottom-4 -left-4 bg-[#111]/90 backdrop-blur-md border border-white/[0.08] rounded-xl px-4 py-3 flex items-center gap-3"
                    >
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Type className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-[11px] font-semibold text-white/80">OpenDyslexic</p>
                        <p className="text-[10px] text-white/30">Font active</p>
                      </div>
                    </motion.div>
                  </div>
                )}
              </motion.div>
            </div>

            {/* Mobile hero image (below text on small screens) */}
            {heroImage && (
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="lg:hidden mt-8 -mb-8"
              >
                <div className="relative rounded-2xl overflow-hidden border border-white/[0.06]">
                  <Image
                    src={heroImage.imageUrl}
                    alt={heroImage.description}
                    data-ai-hint={heroImage.imageHint}
                    width={800}
                    height={500}
                    className="rounded-2xl object-cover w-full"
                    priority
                  />
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* Bottom scroll indicator — minimal line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.8 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="w-px h-10 bg-gradient-to-b from-white/15 to-transparent" />
            </motion.div>
          </motion.div>
        </section>

        {/* ═══════════════════════════════════════════
            NEURODIVERGENT AUDIENCE SECTION
        ═══════════════════════════════════════════ */}
        <section className="relative py-24 sm:py-28">
          <div className="section-line" />
          <div className="container mx-auto px-6 lg:px-12 pt-16">
            {/* Section header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-[11px] font-medium tracking-[0.2em] uppercase text-primary/80 mb-4 block"
              >
                Designed with Purpose
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-[-0.03em] leading-[1]"
              >
                Built for
                <br />
                <span className="font-editorial italic text-gradient-warm">
                  neurodivergent
                </span>
                <br />
                minds.
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-8 text-white/40 text-lg leading-relaxed max-w-lg mx-auto"
              >
                15–20% of the world&apos;s population is neurodivergent. The web wasn&apos;t
                designed for them — but InclusiveRead makes it work.
              </motion.p>
            </div>

            {/* Audience cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-7xl mx-auto">
              {audienceCards.map((card, index) => (
                <motion.div
                  key={card.condition}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{ y: -5, transition: { duration: 0.25 } }}
                  className="relative rounded-2xl border border-white/[0.06] bg-white/[0.02] p-7 flex flex-col group cursor-default overflow-hidden transition-all duration-400"
                >
                  {/* Top accent glow line */}
                  <div
                    className="absolute top-0 inset-x-0 h-px transition-all duration-500"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${card.accent}50, transparent)`,
                    }}
                  />
                  <div
                    className="absolute top-0 inset-x-4 h-8 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ background: card.accent }}
                  />

                  {/* Stat — large, prominent */}
                  <div className="mb-6">
                    <span
                      className="text-5xl md:text-[3.25rem] font-bold tracking-[-0.03em] leading-none"
                      style={{ color: card.accent }}
                    >
                      {card.stat}
                    </span>
                    <p className="text-white/25 text-xs mt-2 leading-snug">
                      {card.statLabel}
                    </p>
                  </div>

                  {/* Condition + icon */}
                  <div className="flex items-center gap-2.5 mb-4">
                    <div
                      className="flex items-center justify-center w-8 h-8 rounded-lg"
                      style={{
                        backgroundColor: `${card.accent}12`,
                        color: card.accent,
                      }}
                    >
                      {card.icon}
                    </div>
                    <h3 className="text-base font-semibold tracking-tight">
                      {card.condition}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-white/30 text-base leading-[1.7] flex-1">
                    {card.description}
                  </p>

                  {/* Tagline dot */}
                  <div className="mt-6 pt-5 border-t border-white/[0.04] flex items-center gap-2">
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: card.accent }}
                    />
                    <span
                      className="text-[11px] font-medium"
                      style={{ color: `${card.accent}cc` }}
                    >
                      {card.tagline}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            FEATURES SECTION
        ═══════════════════════════════════════════ */}
        <section id="features" className="relative py-32 sm:py-40">
          <div className="section-line" />
          <div className="container mx-auto px-6 lg:px-12 pt-20">
            {/* Section header */}
            <div className="grid md:grid-cols-12 gap-8 items-end mb-20">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="md:col-span-7"
              >
                <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-primary/80 mb-4 block">
                  [01] Features
                </span>
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-[-0.03em] leading-[1]">
                  Tools that
                  <br />
                  <span className="font-editorial italic text-white/60">
                    adapt
                  </span>{" "}
                  to your
                  <br />
                  brain.
                </h2>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="md:col-span-5"
              >
                <p className="text-white/40 text-lg leading-relaxed max-w-md">
                  Each feature is purpose-built for neurodivergent needs reducing sensory overload, improving readability, and making complex content accessible.
                </p>
              </motion.div>
            </div>

            {/* Feature cards grid */}
            <div className="grid md:grid-cols-2 gap-5">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{ y: -4, transition: { duration: 0.3 } }}
                  className={`feature-card-${feature.color} relative p-8 md:p-10 rounded-2xl border transition-all duration-500 group cursor-default`}
                >
                  {/* Icon */}
                  <div
                    className="inline-flex items-center justify-center w-10 h-10 rounded-xl mb-6"
                    style={{ backgroundColor: `${feature.accent}15`, color: feature.accent }}
                  >
                    {feature.icon}
                  </div>

                  {/* Number */}
                  <div className="absolute top-8 right-8 step-number text-5xl md:text-6xl">
                    0{index + 1}
                  </div>

                  <h3 className="text-xl font-semibold mb-3 tracking-tight">
                    {feature.title}
                  </h3>
                  {feature.helpsWith && (
                    <span
                      className="inline-block px-2.5 py-1 rounded-full text-[10px] font-medium tracking-wide mb-3 border"
                      style={{
                        color: feature.accent,
                        borderColor: `${feature.accent}25`,
                        backgroundColor: `${feature.accent}08`,
                      }}
                    >
                      Helps: {feature.helpsWith}
                    </span>
                  )}
                  <p className="text-white/40 text-base leading-relaxed max-w-md">
                    {feature.description}
                  </p>

                  {/* Bottom accent line */}
                  <div
                    className="absolute bottom-0 left-8 right-8 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${feature.accent}30, transparent)`,
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            TUTORIAL / PROCESS SECTION
        ═══════════════════════════════════════════ */}
        <section id="tutorial" className="relative py-32 sm:py-40">
          <div className="section-line" />

          <div className="container mx-auto px-6 lg:px-12 relative z-10 pt-20">
            {/* Section header */}
            <div className="text-center max-w-3xl mx-auto mb-24">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-[11px] font-medium tracking-[0.2em] uppercase text-primary/80 mb-4 block"
              >
                [02] Process
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-[-0.03em] leading-[1]"
              >
                How to{" "}
                <span className="font-editorial italic text-white/60">use</span>
                <br />
                InclusiveRead
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-8 text-white/40 text-lg leading-relaxed max-w-lg mx-auto"
              >
                Unleash the full potential of your reading experience in a few
                simple steps.
              </motion.p>
            </div>

            {/* Process steps — clean alternating layout */}
            <div className="max-w-5xl mx-auto space-y-20">
              {tutorialSteps.map((step, index) => {
                const isEven = index % 2 === 1;
                return (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{
                      duration: 0.7,
                      delay: 0.05,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="grid md:grid-cols-2 gap-12 items-center"
                  >
                    {/* Text side */}
                    <div className={isEven ? "md:order-2" : ""}>
                      <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 text-primary text-sm font-bold mb-5">
                        0{index + 1}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">
                        {step.title}
                      </h3>
                      <p className="text-white/40 text-base leading-relaxed max-w-sm">
                        {step.description}
                      </p>
                    </div>

                    {/* Image side */}
                    <div className={isEven ? "md:order-1" : ""}>
                      {step.image && (
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          transition={{ duration: 0.4 }}
                          className="relative rounded-2xl overflow-hidden border border-white/[0.06] group"
                        >
                          <Image
                            src={step.image.imageUrl}
                            alt={step.image.description}
                            data-ai-hint={step.image.imageHint}
                            width={600}
                            height={400}
                            className="rounded-2xl object-cover w-full transition-transform duration-700 group-hover:scale-[1.03]"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/30 to-transparent" />
                          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            INSTALLATION GUIDE SECTION
        ═══════════════════════════════════════════ */}
        <section id="installation" className="relative py-32 sm:py-40">
          <div className="section-line" />
          <div className="container mx-auto px-6 lg:px-12 relative z-10 pt-20">
            {/* Section header */}
            <div className="grid md:grid-cols-12 gap-8 items-end mb-20">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="md:col-span-7"
              >
                <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-primary/80 mb-4 block">
                  [03] Installation
                </span>
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-[-0.03em] leading-[1]">
                  Easy setup
                  <br />
                  for{" "}
                  <span className="font-editorial italic text-white/60">
                    Chrome
                  </span>
                </h2>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="md:col-span-5"
              >
                <p className="text-white/40 text-lg leading-relaxed max-w-md">
                  Get started with InclusiveRead in just a few simple steps.
                  Follow along and you'll be up and running in no time.
                </p>
              </motion.div>
            </div>

            {/* Installation Steps - Timeline */}
            <div className="max-w-5xl mx-auto relative">
              {/* Vertical line */}
              <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-white/[0.08] via-white/[0.04] to-transparent hidden md:block" />

              <div className="space-y-16 md:space-y-20">
                {installationSteps.map((step, index) => {
                  const isLeft = index % 2 === 0;
                  return (
                    <motion.div
                      key={step.title}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{
                        duration: 0.7,
                        delay: 0.05,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="relative grid md:grid-cols-2 gap-8 md:gap-16 items-center"
                    >
                      {/* Center dot */}
                      <div className="absolute left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-primary/80 z-10 hidden md:block" />

                      {/* Content */}
                      <div
                        className={`${isLeft ? "md:text-right md:pr-16" : "md:col-start-2 md:pl-16"
                          }`}
                      >
                        <span className="text-sm font-bold text-primary/50 block mb-2">
                          0{index + 1}
                        </span>
                        <h3 className="text-xl font-semibold tracking-tight mb-2">
                          {step.title}
                        </h3>
                        <p className="text-white/40 text-base leading-relaxed">
                          {step.description}
                        </p>
                      </div>

                      {/* Image */}
                      <div
                        className={`${isLeft
                          ? "md:col-start-2 md:pl-16"
                          : "md:col-start-1 md:row-start-1 md:pr-16"
                          }`}
                      >
                        {step.image && (
                          <motion.div
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                            className="relative rounded-xl overflow-hidden border border-white/[0.06] group"
                          >
                            <Image
                              src={step.image.imageUrl}
                              alt={step.image.description}
                              data-ai-hint={step.image.imageHint}
                              width={500}
                              height={320}
                              className="rounded-xl object-cover w-full transition-transform duration-500 group-hover:scale-[1.02]"
                            />
                            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                          </motion.div>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            VIDEO TUTORIAL SECTION
        ═══════════════════════════════════════════ */}
        <section className="relative py-32 sm:py-40">
          <div className="section-line" />
          <div className="container mx-auto px-6 lg:px-12 pt-20">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-[11px] font-medium tracking-[0.2em] uppercase text-primary/80 mb-4 block"
              >
                [04] Video Guide
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-[-0.03em] leading-[1]"
              >
                Installation
                <br />
                <span className="font-editorial italic text-white/60">
                  video
                </span>{" "}
                guide
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-8 text-white/40 text-lg leading-relaxed max-w-lg mx-auto"
              >
                Watch this step-by-step video tutorial to see exactly how to
                install and set up InclusiveRead.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-4xl mx-auto"
            >
              <div className="relative rounded-2xl overflow-hidden border border-white/[0.06] glow-amber">
                <div className="aspect-video">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/tx070GlMrvE"
                    title="InclusiveRead Installation Guide"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
                {/* Top shine */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent pointer-events-none" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            SHOWCASE SECTION
        ═══════════════════════════════════════════ */}
        <section id="showcase" className="relative py-32 sm:py-40">
          <div className="section-line" />
          <div className="container mx-auto px-6 lg:px-12 pt-20">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-[11px] font-medium tracking-[0.2em] uppercase text-primary/80 mb-4 block"
              >
                [05] Showcase
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-[-0.03em] leading-[1]"
              >
                See InclusiveRead
                <br />
                in{" "}
                <span className="font-editorial italic text-white/60">
                  action
                </span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-8 text-white/40 text-lg leading-relaxed max-w-lg mx-auto"
              >
                Take a closer look at how our extension transforms your
                browsing experience.
              </motion.p>
            </div>

            {/* Staggered gallery grid - editorial scattered layout */}
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-12 gap-5 auto-rows-[200px] md:auto-rows-[280px]">
                {showcaseImages[0] && (
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    whileHover={{ y: -4 }}
                    onClick={() => setSelectedImage(showcaseImages[0])}
                    className="col-span-12 md:col-span-7 row-span-2 relative rounded-2xl overflow-hidden border border-white/[0.06] cursor-pointer group"
                  >
                    <Image
                      src={showcaseImages[0].imageUrl}
                      alt={showcaseImages[0].description}
                      data-ai-hint={showcaseImages[0].imageHint}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <p className="text-white text-sm font-medium">
                        {showcaseImages[0].description}
                      </p>
                    </div>
                    {/* Arrow icon */}
                    <div className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <ArrowUpRight className="w-4 h-4 text-white" />
                    </div>
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                  </motion.div>
                )}

                {showcaseImages[1] && (
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    whileHover={{ y: -4 }}
                    onClick={() => setSelectedImage(showcaseImages[1])}
                    className="col-span-6 md:col-span-5 row-span-1 relative rounded-2xl overflow-hidden border border-white/[0.06] cursor-pointer group"
                  >
                    <Image
                      src={showcaseImages[1].imageUrl}
                      alt={showcaseImages[1].description}
                      data-ai-hint={showcaseImages[1].imageHint}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <p className="text-white text-sm font-medium">
                        {showcaseImages[1].description}
                      </p>
                    </div>
                    <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <ArrowUpRight className="w-3.5 h-3.5 text-white" />
                    </div>
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                  </motion.div>
                )}

                {showcaseImages[2] && (
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.15 }}
                    whileHover={{ y: -4 }}
                    onClick={() => setSelectedImage(showcaseImages[2])}
                    className="col-span-6 md:col-span-5 row-span-1 relative rounded-2xl overflow-hidden border border-white/[0.06] cursor-pointer group"
                  >
                    <Image
                      src={showcaseImages[2].imageUrl}
                      alt={showcaseImages[2].description}
                      data-ai-hint={showcaseImages[2].imageHint}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <p className="text-white text-sm font-medium">
                        {showcaseImages[2].description}
                      </p>
                    </div>
                    <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <ArrowUpRight className="w-3.5 h-3.5 text-white" />
                    </div>
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                  </motion.div>
                )}

                {showcaseImages[3] && (
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    whileHover={{ y: -4 }}
                    onClick={() => setSelectedImage(showcaseImages[3])}
                    className="col-span-12 md:col-span-12 row-span-1 md:row-span-1 relative rounded-2xl overflow-hidden border border-white/[0.06] cursor-pointer group"
                  >
                    <Image
                      src={showcaseImages[3].imageUrl}
                      alt={showcaseImages[3].description}
                      data-ai-hint={showcaseImages[3].imageHint}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <p className="text-white text-sm font-medium">
                        {showcaseImages[3].description}
                      </p>
                    </div>
                    <div className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <ArrowUpRight className="w-4 h-4 text-white" />
                    </div>
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            CTA SECTION
        ═══════════════════════════════════════════ */}
        <section className="relative py-32 sm:py-40 overflow-hidden">
          <div className="section-line" />

          {/* Background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/[0.04] rounded-full blur-[150px] pointer-events-none" />

          <div className="container mx-auto px-6 lg:px-12 relative z-10 pt-20">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-[-0.04em] leading-[0.95]">
                The web wasn&apos;t
                <br />
                built for you.{" "}
                <br />
                <span className="font-editorial italic text-gradient-warm">
                  We fixed that.
                </span>
              </h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-8 text-white/40 text-lg leading-relaxed max-w-lg mx-auto"
              >
                Join thousands of neurodivergent users who have transformed their
                browsing experience. Free, open-source, and built with empathy.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-10"
              >
                <a
                  href="/extension.zip"
                  download
                  className="inline-flex items-center gap-2.5 px-10 py-5 text-base font-medium text-black bg-primary rounded-full hover:bg-primary/90 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 group"
                >
                  Download Now
                  <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            IMAGE MODAL
        ═══════════════════════════════════════════ */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                onClick={() => setSelectedImage(null)}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-all z-50"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </motion.button>
              <motion.div
                initial={{ opacity: 0, scale: 0.92, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: 20 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={selectedImage.imageUrl}
                  alt={selectedImage.description}
                  data-ai-hint={selectedImage.imageHint}
                  width={1920}
                  height={1080}
                  className="max-w-full max-h-full object-contain rounded-xl"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6 rounded-b-xl">
                  <p className="text-white text-base font-medium text-center">
                    {selectedImage.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}
