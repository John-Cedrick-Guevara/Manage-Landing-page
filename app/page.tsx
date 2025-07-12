import Image from "next/image";
import NavBar from "./Components/layout/NavBar";
import Hero from "./Components/sections/Hero";
import About from "./Components/sections/About";
import Review from "./Components/sections/Review";
import Simplify from "./Components/sections/Simplify";
import Footer from "./Components/layout/Footer";

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="space-y-25 ">
        <Hero />
        <About />
        <Review />
        <Simplify />
      </main>
      <Footer/>
    </>
  );
}
