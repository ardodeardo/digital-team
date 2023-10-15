import React from "react";
import Head from "next/head";

import Header from "@/components/Header";
import Footer from "../Footer";

import { branch, objectivity } from "@/helper/font";
interface Layout {
  children: React.ReactNode;
}

function Layout(props: Layout) {
  const { children } = props;

  return (
    <div
      className={`${branch.variable} ${objectivity.variable} font-objectivity`}
    >
      <Head>
        <title>mytripology | digital team</title>
        <link rel="canonical" href="https://inquire-bali.mytripology.com" />
        <meta
          name="description"
          content="A full-service travel company that emphasizes delivering tailor-made itineraries to meet your preferences perfectly."
        />
      </Head>

      <Header></Header>
      <main>{children}</main>
      <Footer></Footer>
    </div>
  );
}

export default Layout;
