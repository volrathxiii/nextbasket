import Image from "next/image";
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Button';

import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';

import ProductList from './components/products';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="nav-flexbar-stack z-10 hidden lg:flex w-full">
        <div className="block mx-auto max-w-screen-xl w-full">
          <div className="nav-flexbar flex flex-row flex-nowrap items-center justify-between">
            <Stack spacing={2} direction="row" className="flex flex-row items-center justify-between">
              <Link color="inherit" className="sm:basis:1 md:basis:1/2"><LocalPhoneOutlinedIcon color="action" fontSize="small" /> +63 (917) 894-2849</Link>
              <Link color="inherit" className="sm:basis:1 md:basis:1/2"><MailOutlinedIcon color="action" fontSize="small" /> patrick.taguinod.rivera@gmail.com</Link>
            </Stack>
            <div className="grow text-center"><p>Follow US and get a chance to win 80% off</p></div>
            <div className="grow text-right"><p>Follow Us:<Link color="inherit"><MailOutlinedIcon color="action" fontSize="small" /></Link></p></div>
          </div>
        </div>
      </div>

      <div className="z-10 container container--md w-full items-center justify-between text-sm">
        <div className="feature-grid">
          <div className="feature-grid-item fg-1">
            
            <Image
                src="https://placekitten.com/g/900/600"
                alt="Category 1"
                fill
                sizes="
                  (max-width: 1200px) 33vw, 
                  (max-width: 1023px) 50vw,
                  100vw"
                objectFit='cover'
                className="feature-grid-image z-10"
                priority
            />
            <div className="feature-grid-info z-20">
              Hello world
            </div>
          </div>
          <div className="feature-grid-item fg-2">
            <Image
                src="https://placekitten.com/g/900/601"
                alt="Category 2"
                fill
                objectFit='cover'
                className="feature-grid-image"
                sizes="
                  (max-width: 1200px) 50vw, 
                  (max-width: 1023px) 30vw,
                  100vw"
            />
          </div>
          <div className="feature-grid-item fg-3">
            <Image
                src="https://placekitten.com/g/921/627"
                alt="Category 3"
                fill
                objectFit='cover'
                className="feature-grid-image"
                sizes="
                  (max-width: 1200px) 30vw, 
                  (max-width: 1023px) 30vw,
                  100vw"
            />
          </div>
          <div className="feature-grid-item fg-4">
            <Image
                src="https://placekitten.com/g/900/620"
                alt="Category 4"
                fill
                objectFit='cover'
                className="feature-grid-image"
                sizes="
                  (max-width: 1200px) 30vw, 
                  (max-width: 1023px) 100vw,
                  100vw"
            />  
          </div>  
        </div>
      </div>

      <div className="z-10 container container--sm w-full items-center justify-between text-sm">
        <div className="container-title flex flex-col flex-wrap gap-3">
          <h4 className="h4 text-center">Featured Products</h4>
          <h3 className="h3 text-center">BESTSELLER PRODUCTS</h3>
          <p className="paragraph text-center">Products that are extremely popular and you should not miss.</p>
        </div>
        <ProductList limit={10} category="" id="featured-products"></ProductList>
      </div>

      <div className="z-10 max-w-screen-xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className=" left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">src/app/page.tsx</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:max-w-screen-xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore starter templates for Next.js.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  );
}
