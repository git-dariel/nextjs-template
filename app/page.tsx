import Image from "next/image";
import ApiDemo from "./components/ApiDemo";

export default function Home() {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
          <div className="text-center sm:text-left">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Next.js + TypeScript API Template
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Complete full-stack setup with MongoDB, Prisma, and Express.js backend
            </p>
          </div>
          
          <ol className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
            <li className="mb-2 tracking-[-.01em]">
              Get started by editing{" "}
              <code className="bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-1 py-0.5 rounded">
                app/page.tsx
              </code>
              .
            </li>
            <li className="tracking-[-.01em] mb-2">
              Start the backend API with{" "}
              <code className="bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-1 py-0.5 rounded">
                npm run backend:dev
              </code>
              .
            </li>
            <li className="tracking-[-.01em]">
              Save and see your changes instantly.
            </li>
          </ol>

          <div className="flex gap-4 items-center flex-col sm:flex-row">
            <a
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
              href="#api-demo"
            >
              Try API Demo
            </a>
            <a
              className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
              href="http://localhost:5000/health"
              target="_blank"
              rel="noopener noreferrer"
            >
              API Health Check
            </a>
          </div>
        </main>
      </div>

      {/* API Demo Section */}
      <div id="api-demo" className="bg-white">
        <ApiDemo />
      </div>
    </div>
  );
}
