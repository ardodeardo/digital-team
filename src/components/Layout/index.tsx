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
        <title>digital.team</title>
        <link rel="canonical" href="https://digital-team.vercel.app" />
        <meta
          name="description"
          content="Dev Team Heroes: Shaping the Future of Technology"
        />
      </Head>

      <Header></Header>
      <main>{children}</main>
      <Footer></Footer>
    </div>
  );
}

export default Layout;
