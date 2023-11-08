"use client";

import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrumbs from "../components/Breadcrumbs";

export default function OrderLayout({ children }) {
  return (
    <div>
      <Header />
      <div className="text-font-black flex justify-between px-48 items-baseline mb-6">
        <h1 className=" text-font-black text-4xl font-bold ">
          Товары в корзине
        </h1>
      </div>
      <Breadcrumbs />
      {children}

      <Footer />
    </div>
  );
}
