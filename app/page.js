import { Button } from "@/components/ui/button";
import Image from "next/image";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import Navigation from "@/components/Navigation/Nav";
import HomeBanner from "@/components/HomeBanner";

export default function Home() {
  return (
    <div className="max-h-screen h-screen ">
      {/* <Header /> */}
      <Navigation />
      <HomeBanner />

      {/* <Hero /> */}
    </div>
  );
}
