import React from "react";
import Head from "next/head";

function Header() {
  return (
    <header className="flex w-full">
      <Head>
        <link
          rel="preload"
          href="/public/fonts/lobster/LobsterTwo-Regular.ttf"
          as="font"
          crossOrigin=""
        />
      </Head>
      <div className="font text-xl w-screen h-48">A</div>
    </header>
  );
}

export default Header;
