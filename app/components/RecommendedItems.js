import Image from "next/image";
import sets from "/public/sets.png";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function RecommendedItems() {
  const [products, setProducts] = useState([]);

  async function getData() {
    try {
      const url = `https://fakestoreapi.com/products?limit=6`;
      const response = await fetch(url);
      const res = await response.json();
      setProducts(res);
      console.log(res);
    } catch (error) {
      console.log("ERROR", error);
      throw new Error("Failed to fetch data");
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="px-48 2xl:px-20  text-font-black mb-70px">
      <p className="text-4xl font-bold pt-9 mb-6 ">Рекомендуем</p>
      <div className="flex justify-between gap-x-6 text-base font-bold">
        {products.map((item) => (
          <div className="relative">
            <Image src={item.image} width={231} height={242} className="mb-3" />
            <div className="text-sm font-normal rounded-xl w-101 h-7 bg-green-btn py-1 px-3.5 absolute top-1.5 -left-1.5">
              В наличии
            </div>
            <div className="flex flex-col place-items-center">
              <Link href={`/card/${item.id}`} className="mb-3.5 text-center">
                {item.title}
              </Link>
              <p className="mb-5">{item.price} ₽/шт</p>
            </div>
            <button className="text-xs uppercase text-white bg-amber-400 py-3.5 px-14 rounded-full">
              купить в 1 клик
            </button>
          </div>
        ))}

        {/* <div className="relative">
          <Image src={sets} width={231} height={242} className="mb-3" />
          <div className="text-sm font-normal rounded-xl w-32 h-7 bg-red-btn  py-1 px-3.5 absolute top-1.5 -left-1.5">
            Нет в наличии
          </div>
          <div className="flex flex-col place-items-center">
            <p className="mb-3.5 text-center">
              Боди без рукавов "ФРУК-ТИК", розовый
            </p>
            <p className="mb-5">349 ₽/шт</p>
          </div>
          <button className="text-xs uppercase text-white bg-amber-400 py-3.5 px-14 rounded-full">
            купить в 1 клик
          </button>
        </div>
        <div className="relative">
          <Image src={sets} width={231} height={242} className="mb-3" />
          <div className="text-sm font-normal rounded-xl w-24 h-7 py-1 px-3 bg-blue-btn absolute top-1.5 -left-1.5">
            На складе
          </div>
          <div className="flex flex-col place-items-center">
            <p className="mb-3.5 text-center">
              Боди без рукавов "ФРУК-ТИК", розовый
            </p>
            <p className="mb-5">349 ₽/шт</p>
          </div>
          <button className="text-xs uppercase text-white bg-amber-400 py-3.5 px-14 rounded-full">
            купить в 1 клик
          </button>
        </div>
        <div>
          <Image src={sets} width={231} height={242} className="mb-3" />
          <div className="flex flex-col place-items-center">
            <p className="mb-3.5 text-center">
              Боди без рукавов "ФРУК-ТИК", розовый
            </p>
            <p className="mb-5">349 ₽/шт</p>
          </div>
          <button className="text-xs uppercase text-white bg-amber-400 py-3.5 px-14 rounded-full">
            купить в 1 клик
          </button>
        </div>
        <div>
          <Image src={sets} width={231} height={242} className="mb-3" />
          <div className="flex flex-col place-items-center">
            <p className="mb-3.5 text-center">
              Боди без рукавов "ФРУК-ТИК", розовый
            </p>
            <p className="mb-5">349 ₽/шт</p>
          </div>
          <button className="text-xs uppercase text-white bg-amber-400 py-3.5 px-14 rounded-full">
            купить в 1 клик
          </button>
        </div>
        <div>
          <Image src={sets} width={231} height={242} className="mb-3" />
          <div className="flex flex-col place-items-center">
            <p className="mb-3.5 text-center">
              Боди без рукавов "ФРУК-ТИК", розовый
            </p>
            <p className="mb-5">349 ₽/шт</p>
          </div>
          <button className="text-xs uppercase text-white bg-amber-400 py-3.5 px-14 rounded-full">
            купить в 1 клик
          </button>
        </div> */}
      </div>
    </div>
  );
}
