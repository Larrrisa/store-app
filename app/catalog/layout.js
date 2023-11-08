"use client";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";

import Breadcrumbs from "../components/Breadcrumbs";

export default function CatalogLayout({ children }) {
  return (
    <div>
      <Header />
      <div className="text-font-black flex gap-x-5 px-48 items-center mb-6">
        <h1 className=" text-font-black text-4xl font-bold">Боди</h1>
        <div>15</div>
      </div>
      <Breadcrumbs />
      {children}

      <Footer />
    </div>
  );
}
