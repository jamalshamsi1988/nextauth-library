import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { status } = useSession();

  const logOutHandler = () => {
    signOut();
  };
  return (
    <>
      <Head>
        <title>Next-Auth-Library</title>
        <meta name="description" content="Next Auth Library" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <h1>Next Auth</h1>
        {status === "authenticated" ? (
          <>
            <button>
              <Link href="/dashbord">Dashbord</Link>
            </button>
            <button onClick={logOutHandler}>Log Out</button>
          </>
        ) : null}

        {status === "unauthenticated" ? (
          <>
            <button>
              <Link href="/signup">Sign Up</Link>
            </button>
            <button>
              <Link href="/signin">Sign In</Link>
            </button>
          </>
        ) : null}
      </main>
    </>
  );
}
