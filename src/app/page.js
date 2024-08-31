'use client'
import React, { useEffect, useState } from 'react'
import Header from "../../Components/Header";
import Hero from "../../Components/Hero";
import MainHeading from "../../Components/MainHeading";
import ProductCard from "../../Components/ProductCard";
import LoadingScreen from '../../Components/LoadingScreen';


export default function Home() {
  const [loading, setLoading] = useState(false);
 
  useEffect(() => {
    setTimeout(() => setLoading(true), 6000)
  }, [])


  return (
    <>

      {loading ? (
        <>
        <Header />
        <main className="min-h-screen">
          <MainHeading />
          <Hero />
          <ProductCard />
        </main>
        </>
      ) : (
        <LoadingScreen />
      )}
    </>
  );
}
