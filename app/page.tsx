import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="px-28 pt-10">
      <Navbar/>
      <Hero/>
    </main>
  );
}
