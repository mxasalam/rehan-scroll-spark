import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import ces2025Image from "@/assets/blog/ces-2025.jpg";
import aiEducationImage from "@/assets/blog/ai-education.jpg";
import llmSiliconImage from "@/assets/blog/llm-silicon.jpg";
import aiFinanceImage from "@/assets/blog/ai-finance.jpg";
import smallBusinessAiImage from "@/assets/blog/small-business-ai.jpg";

const blogPosts = [
  {
    id: 1,
    title: "CES 2025: The Impact of New Technology",
    date: "January 15, 2025",
    category: "Technology Trends",
    image: ces2025Image,
    excerpt: "CES 2025 in Las Vegas showcased the transformative power of AI and emerging technologies, with over 141,000 attendees witnessing innovations from AI-powered wearables to next-generation robotics.",
    content: [
      "CES 2025 in Las Vegas saw over 141,000 attendees and more than 4,500 exhibitors (including 1,400 startups) from around the world, underscoring its role as the global stage for new tech. Innovation was front and center: organizers noted that artificial intelligence (AI) is \"not just a technology trend but a transformative force improving lives worldwide,\" with exhibits ranging from AI-driven health devices to smart home gadgets.",
      "Highlights included AI-powered wearables – for example, the Bee AI wristband and Omi headband that continuously record conversations and use language models to generate To-Do lists – as well as next-generation robotics and autonomous vehicles. These innovations demonstrate how quickly yesterday's science fiction is becoming today's product lineup.",
      "CES 2025 also showcased breakthroughs beyond AI. Exhibitors introduced new digital health solutions (smart wearables, telemedicine tools) and energy-efficient technologies (battery storage, green hydrogen prototypes). Major companies like Samsung, LG, NVIDIA, and startups alike presented exhibits in smart mobility and consumer electronics.",
      "The scale and variety of innovations at CES – from advanced 5G/6G demos to VR/AR devices – underline a key takeaway: emerging tech is now solving real-world problems (health, energy, mobility) and is quickly becoming a part of everyday consumer and enterprise life."
    ]
  },
  {
    id: 2,
    title: "AI in Education: Adapting for the Future",
    date: "March 20, 2025",
    category: "AI & Education",
    image: aiEducationImage,
    excerpt: "Artificial intelligence is rapidly transforming K-12 education, and experts agree schools must adapt to prepare students for this new reality.",
    content: [
      "Artificial intelligence is rapidly transforming K-12 education, and experts agree schools must adapt to prepare students for this new reality. Educators are already experimenting with AI-powered tools in classrooms (for personalized tutoring, automated grading, and curriculum design), but successful integration requires training and collaboration.",
      "Research shows teachers spend nearly 10 hours per week on lesson planning and grading. AI assistants can significantly reduce that burden by automatically generating draft lesson plans aligned to standards, suggesting differentiated activities, organizing educational resources, and summarizing student assessment data.",
      "These AI-generated outputs still need a teacher's review for appropriateness and insight, but they free up educators to focus on instruction and one-on-one student support. Integrating AI responsibly can yield long-term benefits: saved time, streamlined tasks, improved instructional quality, more time for individualized support, and reduced teacher stress.",
      "Educators emphasize that AI should augment, not replace, human teaching. Schools are responding by offering professional development on AI literacy and by carefully evaluating tools for bias, privacy, and equity. The bottom line is clear: schools that integrate AI thoughtfully will empower students with valuable digital skills."
    ]
  },
  {
    id: 3,
    title: "LLMs Today and Tomorrow: Parallels to the Silicon Age",
    date: "May 10, 2025",
    category: "AI & Innovation",
    image: llmSiliconImage,
    excerpt: "Large language models like ChatGPT and GPT-4 are the hot topic in tech, but this skepticism is reminiscent of past tech revolutions.",
    content: [
      "Large language models (LLMs) like ChatGPT and GPT-4 are the hot topic in tech, but many people remain skeptical of their value today. This skepticism is reminiscent of past tech revolutions: decades ago, even fundamental components like resistors or early microprocessors were once viewed as niche or uncertain technologies, only to become ubiquitous in time.",
      "AI experts warn that dismissing LLMs now would be like dismissing electricity in the early 20th century. Research shows that AI use is exploding: within a few years \"AI will be everywhere,\" integrated into everything from smartphones to household appliances.",
      "Just as factories were rebuilt around electric power, businesses and developers are starting to rebuild products around generative AI. Major tech firms are investing heavily in LLM platforms, and emerging startups are building entire apps powered by AI.",
      "History suggests that new tech often faces hype and doubt before finding its place. The personal computer and the Internet began as niche tools but grew into necessities. We should expect a similar arc for LLMs: tools that seem experimental now are likely to become mundane utility later. The takeaway for businesses and developers is to experiment with LLMs today and build AI-savvy skills."
    ]
  },
  {
    id: 4,
    title: "Mastering Personal Finance with AI and Excel",
    date: "July 5, 2025",
    category: "Finance & AI",
    image: aiFinanceImage,
    excerpt: "Managing a personal budget starts with clear tracking of income and expenses, and today's AI can supercharge that process.",
    content: [
      "Managing a personal budget starts with clear tracking of income and expenses, and tools like Excel have long been popular for this. Today's AI can supercharge that process. Modern budgeting apps and AI assistants learn your spending patterns to provide actionable advice.",
      "The Copilot app (for iOS) uses advanced AI to learn how you spend money and refine its categorization system accordingly, creating increasingly personalized insights. These apps automatically categorize transactions, adjust budget targets based on actual spending, and offer customized tips.",
      "Automated budgeting tools help users identify overspending patterns and build toward financial goals more effectively. For instance, if you regularly spend too much on dining out, the AI will flag this trend and suggest adjustments. You might see an alert like \"Your restaurant spending is 25% higher this month than last; consider cooking more meals at home.\"",
      "An up-to-date Excel budget coupled with AI tools becomes a powerful personal finance system. You can use LLMs (like ChatGPT) to parse CSV exports of your bank data and identify categories where you're overspending. Over time, this approach of combining human planning with AI guidance can improve savings and reduce financial stress."
    ]
  },
  {
    id: 5,
    title: "Small Businesses and AI: Embracing Tools for Growth",
    date: "September 18, 2025",
    category: "Business & AI",
    image: smallBusinessAiImage,
    excerpt: "Small businesses are rapidly discovering that even basic AI tools can deliver big benefits, with 77% already adopting AI for various operations.",
    content: [
      "Small businesses are rapidly discovering that even basic AI tools can deliver big benefits. A recent industry report finds that 77% of small businesses worldwide have already adopted at least one AI tool in areas like customer service, marketing, or inventory management. Another study shows nearly 89% of small firms are using AI to automate routine tasks.",
      "These statistics confirm that AI is no longer just for large corporations – it's become a practical necessity for companies of any size. By integrating an LLM-based assistant or chatbot, a small business can automate answers to common customer questions, draft marketing emails, and even generate product descriptions without hiring extra staff.",
      "Consider a local retail store: the owner might use a free LLM to quickly draft social media posts about new products, reply to common customer inquiries via chat, and summarize weekly sales data to spot trends. Basic AI chatbots and assistants let a single entrepreneur act like a whole support team.",
      "Ways small businesses can leverage AI include: customer support chatbots to answer FAQs automatically, content creation for marketing copy and product descriptions, data analytics to identify sales patterns, and workflow automation to build simple apps that respond to orders or categorize expenses. These AI-driven enhancements directly help small businesses operate smarter and compete with bigger rivals."
    ]
  }
];

const Blog = () => {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = pageRef.current?.querySelectorAll(".section-appear");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={pageRef} className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-secondary py-20 relative overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-30" />
        <div className="container mx-auto px-6 relative z-10">
          <Link to="/">
            <Button variant="ghost" className="mb-8 text-white hover:text-white/80">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <div className="section-appear">
            <h1 className="text-5xl lg:text-6xl font-heading font-bold text-white mb-4">
              Tech Industry Insights
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl">
              Exploring the intersection of technology, AI, and innovation
            </p>
          </div>
        </div>
      </header>

      {/* Blog Posts Grid */}
      <main className="container mx-auto px-6 py-16">
        <div className="grid gap-8 max-w-6xl mx-auto">
          {blogPosts.map((post, index) => (
            <Card 
              key={post.id} 
              className="section-appear overflow-hidden hover:shadow-lg transition-shadow"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="md:flex">
                <div className="md:w-2/5">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-3/5">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-3">
                      <Badge variant="secondary">{post.category}</Badge>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    <CardTitle className="text-2xl lg:text-3xl mb-3">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4 text-foreground">
                      {post.content.map((paragraph, idx) => (
                        <p key={idx} className="leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Blog;
