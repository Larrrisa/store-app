"use client";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WatchedItems from "../components/WatchedItems";
import Breadcrumbs from "../components/Breadcrumbs";
import bin from "/public/bin.svg";
import download from "/public/download.svg";

export default function BasketLayout({ children }) {
  return (
    <div>
      <Header />
      <div className="text-font-black flex justify-between px-48 items-baseline mb-6">
        <div className="flex items-baseline gap-x-5">
          <h1 className=" text-font-black text-4xl font-bold ">Корзина</h1>
          <div className="flex gap-x-2">
            <Image src={bin} />
            <p>Удалить все</p>
          </div>
        </div>
        <div className="flex gap-x-2">
          <Image src={download} />
          <p>Скачать файлом</p>
        </div>
      </div>
      <Breadcrumbs />
      {children}
      <WatchedItems />
      <Footer />
    </div>
  );
}
