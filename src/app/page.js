import Header from "../../Components/Header";
import MainHeading from "../../Components/MainHeading";
import ProductCard from "../../Components/ProductCard";



export default function Home() {
  return (
    <>
    <Header />
      <main className="flex min-h-screen flex-col items-center justify-between">
        <MainHeading/>
        <ProductCard />
      </main>
    </>
  );
}
