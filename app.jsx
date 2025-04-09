
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Sparkles, Rocket, Bot } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-neutral-800 text-white px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold tracking-tight text-center"
        >
          STOOT AGENT SYSTEM
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-center mt-4 text-xl text-zinc-400"
        >
          Powerful AI Agents. Custom-built. For High-Level Western Businesses.
        </motion.p>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {["Content Bots", "Client Acquisition", "Support & Strategy"].map((category, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.2, duration: 0.6 }}
            >
              <Card className="bg-zinc-900 border border-zinc-700 shadow-2xl hover:scale-105 transition-transform">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    {i === 0 && <Sparkles className="text-yellow-400" />} 
                    {i === 1 && <Rocket className="text-red-400" />} 
                    {i === 2 && <Bot className="text-blue-400" />} 
                    <h2 className="text-2xl font-semibold">{category}</h2>
                  </div>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Explore our finest GPT-powered bots to automate and elevate your business tasks, content, outreach, and more.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Button className="text-lg px-8 py-6 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg hover:scale-105 transition-transform">
            اطلب وكيلك الذكي الآن
          </Button>
        </div>
      </div>
    </main>
  );
}
