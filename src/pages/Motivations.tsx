import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import fatherWork from "@/assets/motivations/father-work.jpg";
import motherCare from "@/assets/motivations/mother-care.jpg";
import brothersShadows from "@/assets/motivations/brothers-shadows.jpg";
import friendsTable from "@/assets/motivations/friends-table.jpg";
import ordinaryBeauty from "@/assets/motivations/ordinary-beauty.jpg";
import animeSymbols from "@/assets/motivations/anime-symbols.jpg";
import faithLight from "@/assets/motivations/faith-light.jpg";
import pathForward from "@/assets/motivations/path-forward.jpg";

const Motivations = () => {
  const navigate = useNavigate();
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observers = sectionRefs.current.map((ref, index) => {
      if (!ref) return null;
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("animate-fade-in");
            }
          });
        },
        { threshold: 0.1 }
      );

      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  const principles = [
    "Show up, especially when it's not easy.",
    "Choose companions who lift you. Then lift them back.",
    "Work with ihsan—excellence, even when unseen.",
    "Be curious, not judgmental.",
    "Respect over riches.",
    "Savor the ordinary.",
    "Stay grateful. Say 'Alhamdulillah' and mean it."
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Motivations
            </h1>
            <p className="text-xl text-muted-foreground italic mb-4">
              A living scrapbook of the people, stories, and small moments that push me forward.
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I've learned that motivation isn't a single spark. It's a steady flame you tend—fed by faith, family, friends, and the stories we carry from shows, books, and everyday life. This page is my reminder to keep showing up with gratitude, courage, and curiosity.
            </p>
          </div>
        </section>

        {/* Father Section */}
        <section ref={(el) => (sectionRefs.current[0] = el)} className="py-12 px-6 opacity-0">
          <div className="container mx-auto max-w-5xl">
            <Card className="overflow-hidden border-0 shadow-xl">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="h-64 md:h-auto">
                  <img 
                    src={fatherWork} 
                    alt="Hands at work before sunrise" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <h2 className="text-3xl font-heading font-bold mb-4 text-primary">
                    My Father: Work Ethic Without Conditions
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    When I think of relentless commitment, I think of my father. Years of loyalty to one company—even when the company didn't always return the favor—taught me that dignity isn't transactional. He worked multiple jobs in Dammam so five sons could dream bigger than our circumstances. I may never match his work ethic, but I try every day to live up to the respect he earned through quiet consistency.
                  </p>
                  <p className="font-semibold text-foreground">
                    What it taught me: Do the right work, the right way, even when no one is clapping.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Mother Section */}
        <section ref={(el) => (sectionRefs.current[1] = el)} className="py-12 px-6 opacity-0">
          <div className="container mx-auto max-w-5xl">
            <Card className="overflow-hidden border-0 shadow-xl">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="order-2 md:order-1 p-8 md:p-12 flex flex-col justify-center">
                  <h2 className="text-3xl font-heading font-bold mb-4 text-primary">
                    My Mother: The Backbone of My Life
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    I was born premature. My mom carried the cost of that with love and patience—and never put it down. I owe her more than I can say. I call her every day because her voice is a compass. She is my shelter, my softness, and my courage.
                  </p>
                  <p className="font-semibold text-foreground">
                    What it taught me: Mercy is strength. Nurture is leadership.
                  </p>
                </div>
                <div className="order-1 md:order-2 h-64 md:h-auto">
                  <img 
                    src={motherCare} 
                    alt="Everyday mercy" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Brothers Section */}
        <section ref={(el) => (sectionRefs.current[2] = el)} className="py-12 px-6 opacity-0">
          <div className="container mx-auto max-w-5xl">
            <Card className="overflow-hidden border-0 shadow-xl">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="h-64 md:h-auto">
                  <img 
                    src={brothersShadows} 
                    alt="First crew energy" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <h2 className="text-3xl font-heading font-bold mb-4 text-primary">
                    Brothers: My First Crew
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    We grew up on WWE, fought, made up, played hard, and laughed louder. We don't talk constantly, but the line is never broken. One wish I still carry: a brothers-only trip, just to hang out. They are my first team, my first accountability partners.
                  </p>
                  <p className="font-semibold text-foreground">
                    What it taught me: Loyalty can be loud (cheering) or silent (showing up). Both matter.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Friends Section */}
        <section ref={(el) => (sectionRefs.current[3] = el)} className="py-12 px-6 opacity-0">
          <div className="container mx-auto max-w-5xl">
            <Card className="overflow-hidden border-0 shadow-xl">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="order-2 md:order-1 p-8 md:p-12 flex flex-col justify-center">
                  <h2 className="text-3xl font-heading font-bold mb-4 text-primary">
                    Friends & Companions: The Company You Keep
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    I've had friends for days, months, and decades—some I hardly see, all I still root for. In Islam, the Prophet's companions were known first for their company. That shaped me: be the kind of person whose presence helps others stand taller.
                  </p>
                  <p className="font-semibold text-foreground">
                    What it taught me: Choose people who make you better—and be that person for them.
                  </p>
                </div>
                <div className="order-1 md:order-2 h-64 md:h-auto">
                  <img 
                    src={friendsTable} 
                    alt="Good company, open roads" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Shows Section */}
        <section ref={(el) => (sectionRefs.current[4] = el)} className="py-12 px-6 opacity-0">
          <div className="container mx-auto max-w-5xl">
            <Card className="overflow-hidden border-0 shadow-xl">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="h-64 md:h-auto">
                  <img 
                    src={ordinaryBeauty} 
                    alt="Beauty in ordinary things" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <h2 className="text-3xl font-heading font-bold mb-4 text-primary">
                    Lessons From Shows That Stuck
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    <strong>Ted Lasso</strong> gave me a mantra: <em>"Be curious, not judgmental."</em> Curiosity opens doors. Judgment slams them.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    <strong>The Office</strong> taught me to honor small things. Pam said, <em>"There's a lot of beauty in ordinary things. Isn't that kind of the point?"</em> And Andy reminded me: <em>"I wish there was a way to know you're in the good old days before you've actually left them."</em>
                  </p>
                  <p className="font-semibold text-foreground">
                    What it taught me: Savor the ordinary. Ask better questions. Notice the "good old days" while you're living them.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Anime Section */}
        <section ref={(el) => (sectionRefs.current[5] = el)} className="py-12 px-6 opacity-0">
          <div className="container mx-auto max-w-5xl">
            <Card className="overflow-hidden border-0 shadow-xl">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="order-2 md:order-1 p-8 md:p-12 flex flex-col justify-center">
                  <h2 className="text-3xl font-heading font-bold mb-4 text-primary">
                    Anime That Raised Me
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    <strong>One Piece</strong>: the best fiction I've encountered about found family, purpose, and freedom from materialism. It's a promise that your crew—chosen with care—can carry you through storms.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    <strong>Naruto</strong>: bonds and responsibility; the love of parents; the grit to protect what matters.
                  </p>
                  <p className="font-semibold text-foreground">
                    What it taught me: Pick your crew. Hold your values. Grow into your vow.
                  </p>
                </div>
                <div className="order-1 md:order-2 h-64 md:h-auto">
                  <img 
                    src={animeSymbols} 
                    alt="Pick your crew" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Faith Section */}
        <section ref={(el) => (sectionRefs.current[6] = el)} className="py-12 px-6 opacity-0">
          <div className="container mx-auto max-w-5xl">
            <Card className="overflow-hidden border-0 shadow-xl">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="h-64 md:h-auto">
                  <img 
                    src={faithLight} 
                    alt="Quiet epiphanies" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <h2 className="text-3xl font-heading font-bold mb-4 text-primary">
                    Faith: My Anchor and North Star
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    Alhamdulillah—I've never felt abandoned. I've had ups and downs, but Allah has always made a way. Islam keeps me grounded in gratitude and direction: prayer, service, and sincerity. I volunteer at my local masjid because it feels like home. Some of my clearest epiphanies arrive in that quiet—just me, a prayer rug, and an open heart.
                  </p>
                  <p className="font-semibold text-foreground">
                    What it taught me: Gratitude attracts barakah. Service polishes the heart.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Principles Section */}
        <section ref={(el) => (sectionRefs.current[7] = el)} className="py-12 px-6 opacity-0">
          <div className="container mx-auto max-w-4xl">
            <Card className="p-8 md:p-12 border-2 border-primary/20 shadow-xl">
              <h2 className="text-3xl font-heading font-bold mb-6 text-center text-primary">
                Principles I Live By
              </h2>
              <ul className="space-y-4">
                {principles.map((principle, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-primary text-xl mt-1">•</span>
                    <span className="text-lg text-foreground">{principle}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </section>

        {/* Future Me Section */}
        <section ref={(el) => (sectionRefs.current[8] = el)} className="py-12 px-6 opacity-0">
          <div className="container mx-auto max-w-5xl">
            <Card className="overflow-hidden border-0 shadow-xl">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="order-2 md:order-1 p-8 md:p-12 flex flex-col justify-center">
                  <h2 className="text-3xl font-heading font-bold mb-4 text-primary">
                    For Future Me
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    When things are heavy, remember: you were carried this far by love, dua, and effort. Breathe. Pray. Text your mom. Call your brothers. Send that message to a friend. Take the next small step. The path appears under the feet that move.
                  </p>
                </div>
                <div className="order-1 md:order-2 h-64 md:h-auto">
                  <img 
                    src={pathForward} 
                    alt="Footprints in sand" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Closing Note */}
        <section className="py-20 px-6 bg-muted/30">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-heading font-bold mb-4 text-primary">
              A Note to Anyone Reading
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              If any of this resonates, borrow what helps. Build your own page of motivations. Fill it with your people, your faith, your favorite lines. Then keep going.
            </p>
            <Button
              onClick={() => navigate("/")}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Back to Home
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Motivations;
