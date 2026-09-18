import CountdownTimer from "@/components/CountdownTimer";
import Image from "next/image";

export default function Home() {
 const LAUNCH_DATE = "2026-12-21T08:55:00";

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-white dark:bg-gray-900 transition-colors">
      <div className="space-y-6 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-gray-900 dark:text-white">
          We are launching soon
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Stay tuned! Our product drops in:
        </p>
        
        <div className="mt-8">
          <CountdownTimer targetDate={LAUNCH_DATE} />
        </div>
      </div>
    </main>
  );
}
