'use client'
import React, { useEffect, useState } from 'react'
import Header from "../../Components/Header";
import Hero from "../../Components/Hero";
import MainHeading from "../../Components/MainHeading";
import ProductCard from "../../Components/ProductCard";


export default function Home() {


  return (
    <>
        <Header />
        <main className="min-h-screen">
          <MainHeading />
          <Hero />
          <ProductCard />
        </main>
    </>
  );
}
