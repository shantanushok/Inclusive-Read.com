"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Type,
  Volume2,
  Palette,
  BookText,
  Chrome,
  Globe,
  Download,
  MousePointerClick,
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
} from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PlaceHolderImages, type ImagePlaceholder } from "@/lib/placeholder-images";

const getImage = (id: string): ImagePlaceholder | undefined => PlaceHolderImages.find(img => img.id === id);

const FirefoxIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/><path d="M12 4c-3.58 0-6.64 2.1-7.89 5.09.23-.05.46-.09.7-.09 2.21 0 4 1.79 4 4s-1.79 4-4 4c-.24 0-.47-.04-.7-.09C5.36 19.9 8.42 22 12 22c4.42 0 8-3.58 8-8s-3.58-8-8-8zm-1.5 12.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm3-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
    </svg>
)

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<ImagePlaceholder | null>(null);

  const heroImage = getImage("hero-image");
  const featureFontImage = getImage("feature-font");
  const featureTtsImage = getImage("feature-tts");
  const featureColorImage = getImage("feature-color");
  const featureReaderImage = getImage("feature-reader");
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

  const features = [
    {
      icon: <Type className="w-8 h-8 text-accent" />,
      title: "Dyslexic Reading Mode",
      description: "Transforms all webpage text into OpenDyslexic, an open-source typeface designed specifically to mitigate common reading errors. Unlike standard fonts (like Arial or Times New Roman), OpenDyslexic utilizes unique letter shapes with increased spacing and heavy-weighted bases",
      image: featureFontImage,
    },
    {
      icon: <Volume2 className="w-8 h-8 text-accent" />,
      title: "Text-to-Speech",
      description: "Listen to articles and web content with native text-to-speech reader. Accessing the feature is just a simple click away.",
      image: featureTtsImage,
    },
    {
      icon: <Palette className="w-8 h-8 text-accent" />,
      title: "Sensory Shield",
      description: "A protective layer that automatically detects and freezes fluctuating UI elements, such as flashing banners or auto-playing carousels, which can trigger sensory overload.",
      image: featureColorImage,
    },
    {
      icon: <BookText className="w-8 h-8 text-accent" />,
      title: "Jargon Decoder",
      description: "An on-the-fly translation feature that replaces high-friction administrative and legal terminology with actionable, plain-language equivalents or descriptive icons.",
      image: featureReaderImage,
    },
  ];

  const tutorialSteps = [
    {
      icon: <KeyRound className="w-8 h-8 text-primary" />,
      title: "Get Your Free API Key",
      description: " Visit Google AI Studio in order to create a free API key . You can also visit OpenRouter to create a free API key , ensure your billing/credit limit is set to zero.",
      image: tutorialStep2Image,
    },
    {
      icon: <LogIn className="w-8 h-8 text-primary" />,
      title: "Activate the Extension",
      description: "Open the extension panel, enter your API key, and activate it to unlock the features.",
      image: tutorialStep3Image,
    },
    {
      icon: <Sparkles className="w-8 h-8 text-primary" />,
      title: "Enjoy Enhanced Reading",
      description: "Now you can use all of the powerful features to make your online reading experience better.",
      image: tutorialStep4Image,
    },
  ];

  const installationSteps = [
    {
      icon: <Download className="w-6 h-6 text-primary" />,
      title: "Download ZIP",
      description: "Download the extension as a ZIP file.",
      image: installStep1Image,
    },
    {
      icon: <Archive className="w-6 h-6 text-primary" />,
      title: "Extract ZIP",
      description: "Extract the ZIP file to a folder you can easily find.",
      image: installStep2Image,
    },
    {
      icon: <Settings className="w-6 h-6 text-primary" />,
      title: "Navigate to Extensions",
      description: "In Chrome, go to 'Manage Extensions'.",
      image: installStep3Image,
    },
    {
        icon: <Code className="w-6 h-6 text-primary" />,
        title: "Enable Developer Mode",
        description: "Turn on 'Developer mode' using the toggle.",
        image: tutorialStep1Image,
    },
    {
        icon: <Upload className="w-6 h-6 text-primary" />,
        title: "Load Unpacked",
        description: "Click on the 'Load unpacked' button.",
        image: tutorialStep2Image,
    },
    {
        icon: <FileCheck className="w-6 h-6 text-primary" />,
        title: "Select Folder",
        description: "Select the folder you extracted earlier.",
        image: tutorialStep3Image,
    },
    {
        icon: <CheckCircle className="w-6 h-6 text-primary" />,
        title: "Setup Finished",
        description: "You can now pin and use the extension!",
        image: tutorialStep4Image,
    },
  ];

  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section id="overview" className="py-20 sm:py-32">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
                  A more <span className="text-accent">inclusive</span> way to read online.
                </h1>
                <p className="mt-6 text-lg text-muted-foreground">
                  InclusiveRead enhances your browsing experience with powerful accessibility tools. Customize fonts, listen to text, adjust colors, and enjoy clutter-free reading. Make the web work for you.
                </p>
                <div className="mt-8 flex gap-4 justify-center lg:justify-start">
                  <Button size="lg" asChild>
                    <a href="/extension.zip" download>Get Extension</a>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a href="#features">Learn More</a>
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
                {heroImage && (
                  <Image
                    src={heroImage.imageUrl}
                    alt={heroImage.description}
                    data-ai-hint={heroImage.imageHint}
                    width={1200}
                    height={800}
                    className="rounded-xl shadow-2xl transform transition-transform duration-500 hover:scale-105"
                  />
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 sm:py-24 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold">Powerful Features for Everyone</h2>
              <p className="mt-4 text-muted-foreground">
                Tailor your reading experience with a suite of tools designed for comfort and accessibility.
              </p>
            </div>
            <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature) => (
                <Card key={feature.title} className="text-center transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                  <CardHeader>
                    <div className="mx-auto bg-accent/10 p-3 rounded-full w-fit">
                      {feature.icon}
                    </div>
                    <CardTitle className="mt-4">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                    {feature.image &&
                      <div className="mt-4 aspect-video relative">
                         <Image
                            src={feature.image.imageUrl}
                            alt={feature.image.description}
                            data-ai-hint={feature.image.imageHint}
                            fill
                            className="rounded-md object-cover"
                            />
                      </div>
                    }
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Tutorial Section */}
        <section id="tutorial" className="py-20 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold">How to Use InclusiveRead</h2>
              <p className="mt-4 text-muted-foreground">
                Unleash the full potential of your reading experience in a few simple steps.
              </p>
            </div>
            <div className="mt-16 grid md:grid-cols-1 lg:grid-cols-3 gap-12">
              {tutorialSteps.map((step, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="flex items-center justify-center bg-primary/10 rounded-full p-4">
                    {step.icon}
                  </div>
                  <h3 className="mt-6 text-xl font-semibold">{step.title}</h3>
                  <p className="mt-2 text-muted-foreground">{step.description}</p>
                  <div className="mt-4 w-full aspect-video relative">
                    {step.image && (
                      <Image
                        src={step.image.imageUrl}
                        alt={step.image.description}
                        data-ai-hint={step.image.imageHint}
                        fill
                        className="rounded-lg object-cover shadow-md"
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Installation Guide Section */}
        <section id="installation" className="py-20 sm:py-24 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold">Easy Installation for Chrome</h2>
              <p className="mt-4 text-muted-foreground">
                Get started with InclusiveRead in just a few simple steps.
              </p>
            </div>
            <div className="mt-16 max-w-4xl mx-auto">
              <div className="space-y-12">
                {installationSteps.map((step, index) => (
                  <div key={index} className="grid md:grid-cols-2 gap-8 items-center">
                    <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                      {step.image && <Image src={step.image.imageUrl} alt={step.image.description} data-ai-hint={step.image.imageHint} width={800} height={500} className="rounded-lg shadow-md" />}
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 text-center text-3xl font-bold text-primary">{`0${index + 1}`}</div>
                      <div>
                        <h3 className="text-xl font-semibold">{step.title}</h3>
                        <p className="mt-2 text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Extension Showcase Section */}
        <section id="showcase" className="py-20 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold">See InclusiveRead in Action</h2>
              <p className="mt-4 text-muted-foreground">
                Take a closer look at how our extension transforms your browsing experience.
              </p>
            </div>
            <div className="mt-16 grid md:grid-cols-2 gap-8">
              {showcase1Image && (
                <div 
                  onClick={() => setSelectedImage(showcase1Image)}
                  className="relative aspect-video rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
                >
                  <Image
                    src={showcase1Image.imageUrl}
                    alt={showcase1Image.description}
                    data-ai-hint={showcase1Image.imageHint}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <p className="text-white font-medium">{showcase1Image.description}</p>
                  </div>
                </div>
              )}
              {showcase2Image && (
                <div 
                  onClick={() => setSelectedImage(showcase2Image)}
                  className="relative aspect-video rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
                >
                  <Image
                    src={showcase2Image.imageUrl}
                    alt={showcase2Image.description}
                    data-ai-hint={showcase2Image.imageHint}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <p className="text-white font-medium">{showcase2Image.description}</p>
                  </div>
                </div>
              )}
              {showcase3Image && (
                <div 
                  onClick={() => setSelectedImage(showcase3Image)}
                  className="relative aspect-video rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
                >
                  <Image
                    src={showcase3Image.imageUrl}
                    alt={showcase3Image.description}
                    data-ai-hint={showcase3Image.imageHint}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <p className="text-white font-medium">{showcase3Image.description}</p>
                  </div>
                </div>
              )}
              {showcase4Image && (
                <div 
                  onClick={() => setSelectedImage(showcase4Image)}
                  className="relative aspect-video rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
                >
                  <Image
                    src={showcase4Image.imageUrl}
                    alt={showcase4Image.description}
                    data-ai-hint={showcase4Image.imageHint}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <p className="text-white font-medium">{showcase4Image.description}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Image Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-50"
              aria-label="Close modal"
            >
              <X className="w-8 h-8" />
            </button>
            <div 
              className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage.imageUrl}
                alt={selectedImage.description}
                data-ai-hint={selectedImage.imageHint}
                width={1920}
                height={1080}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                <p className="text-white text-lg font-medium text-center">{selectedImage.description}</p>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
