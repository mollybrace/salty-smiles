import Image from "next/image";
import Hero from "./components/Hero";
import Ratings from "./components/Ratings";
import Footer from "./components/Footer";
import Map from "./components/Directions";

export default function Home() {
  return (
    <div className="p-0 m-0 w-full h-full">
    <section>
      <Hero />
    </section>

    <section >
      <Ratings />
    </section>
    <section>
      <Map />
    </section>
    <section>
      <Footer />
    </section>
    </div>

    
  );
}
