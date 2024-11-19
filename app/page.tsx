import Image from "next/image";
import { nunito } from "../components/Fonts";
import { Button } from "../components/Button";
import { FeatureCard } from "../components/FeatureCard";
import { Footer } from "../components/Footer";
import Link from "next/link";


export default function Home() {
  return (
    <div className={`${nunito.className} min-h-screen bg-gradient-to-br from-[#E6FFF9] via-[#B2FFE6] to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-700`}>
      <div className="container mx-auto px-4 py-16 mt-5">
        <main className="flex flex-col items-center">
          <div className="flex flex-col md:flex-row items-center justify-between w-full mb-16 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
            <div className="w-full md:w-1/2 text-left mb-8 md:mb-0">
              <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-[#00BFA6] to-[#00A693] text-transparent bg-clip-text animate-pulse">
                FoCourse
              </h1>
              <p className="text-xl mb-12 text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed">
                Unlock your potential in forex trading with our comprehensive learning platform. 
                Master currency trading at your own pace, anywhere, anytime.
              </p>
              <div className="flex gap-6">
                <Button href="/courses" variant="primary">
                  Start Learning Now <span className="text-xl">🚀</span>
                </Button>
                {/* <Button href="#" variant="secondary">
                  About Us <span className="text-xl">▶️</span>
                </Button> */}
              </div>
            </div>
            <div className="w-full md:w-1/2 relative h-[400px] mb-9 transform hover:rotate-3 transition-transform duration-300">
              <Image
                src="/hero.svg"
                alt="Forex Trading Illustration"
                fill
                className="object-contain animate-float"
                priority
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <FeatureCard
              emoji="📈"
              title="Trading Fundamentals"
              description="Master the essentials of forex trading from basic concepts to advanced strategies. Perfect for beginners!"
            />
            <FeatureCard
              emoji="💹"
              title="Market Analysis"
              description="Dive deep into technical and fundamental analysis with real-world market examples."
            />
            <FeatureCard
              emoji="📊"
              title="Risk Management"
              description="Build a solid foundation in risk management and develop winning trading psychology."
            />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
