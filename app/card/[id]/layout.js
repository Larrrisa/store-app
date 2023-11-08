"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Breadcrumbs from "../../components/Breadcrumbs";
import RecommendedItems from "../../components/RecommendedItems";

export default function CardLayout({ children }) {
  return (
    <div>
      <Header />
      <div className="text-font-black flex gap-x-5 px-48 items-center mb-6">
        <p className=" text-font-black text-4xl font-bold">Боди</p>
        <div>15</div>
      </div>
      <Breadcrumbs />
      {children}
      <RecommendedItems />
      <Footer />
    </div>
  );
}
