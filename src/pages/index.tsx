import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import Aim from "@/components/Aim";
import WeDo from "@/components/WeDo";
import Team from "@/components/Team";

export default function Home() {
  return (
    <Layout>
      <Hero></Hero>
      <Aim></Aim>
      <WeDo></WeDo>
      <Team></Team>
    </Layout>
  );
}
