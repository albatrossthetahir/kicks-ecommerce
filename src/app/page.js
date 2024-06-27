import Hero from "../../Components/Hero";
import MainHeading from "../../Components/MainHeading";
import ProductCard from "../../Components/ProductCard";

export default function Home() {
  return (
    <main className="min-h-screen">
      <MainHeading />
      <Hero />
      <ProductCard />
    </main>
  );
}
