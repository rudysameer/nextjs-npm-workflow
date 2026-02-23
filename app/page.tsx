import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="mt-6 flex w-full max-w-3xl flex-col items-center gap-6 sm:items-start">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Create Next App
          </h1>
          <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400">
            Get started by editing&nbsp;
            <code className="rounded-md bg-zinc-100 px-3 py-2 font-mono text-sm text-red-500 dark:bg-zinc-800">
              app/page.tsx
            </code>
          </p>
        </div>

      </main>
    </div>
  );
}
