import CountdownTimer from "@/components/CountdownTimer";
import { format } from "date-fns";
import Image from "next/image";

export default function Page() {
 const Keimah = "2026-12-21T08:55:00";
  const Tei = "2026-12-23T17:00:00";
  const Basil = "2026-12-19T16:00:00";
  const Eli = "2026-12-15T08:00:00";
 
   return (
     <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-white dark:bg-gray-900 transition-colors">
       <div className="space-y-6 text-center">
         <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-gray-900 dark:text-white">
           We are We are going home soon soon
         </h1>
         <p className="text-lg text-gray-600 dark:text-gray-300">
           {format(Date.now(),"dd/MM/yyyy")}
         </p>
         
         <div className="mt-8">
           Keimah - <CountdownTimer targetDate={Keimah} />
         </div>
         <div className="mt-8">
           Tei - <CountdownTimer targetDate={Tei} />
         </div>
         <div className="mt-8">
           Basil - <CountdownTimer targetDate={Basil} />
         </div>
         <div className="mt-8">
           Elizabeth Ann - <CountdownTimer targetDate={Eli} />
         </div>
       </div>
     </main>
   );
 }