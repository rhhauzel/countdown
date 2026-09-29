import CountdownTimer from "@/components/CountdownTimer";
import { format } from "date-fns";
import { connection } from "next/server";
import data from "@/app/data/data.json";

export default async function Page() {
 const Keimah = "2026-12-21T08:55:00";
  const Tei = "2026-12-23T17:00:00";
  const Basil = "2026-12-19T16:00:00";
  const Eli = "2026-12-15T08:00:00";

  await connection();
 
   return (
     <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-white dark:bg-gray-900 transition-colors">
       <div className="space-y-6 text-center">
         <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-gray-900 dark:text-white">
           We are We are going home soon
         </h1>
         <div className="flex justify-between">
          <div>{format(new Date(2026, 8, 19),"dd/MM/yyyy")}</div>
          <div></div>
          <div>{format(Date.now(), "dd/MM/yyyy")}</div>
         </div>
         
         {data.map((item) => (
          <div key={String(item.SlNo)} className="mt-8">
            {item.Name} - <CountdownTimer targetDate={item.Date} />
          </div>
         ))}
       </div>
     </main>
   );
 }