"use client";

import arrow from "/public/arrow.svg";
import group_1 from "/public/group_1.svg";
import group_2 from "/public/group_2.svg";
import group_3 from "/public/group_3.svg";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function CatalogPage() {
  const [products, setProducts] = useState([]);
  const [basket, setBasket] = useState([]);

  async function getData() {
    try {
      const url = `https://fakestoreapi.com/products`;
      const response = await fetch(url);
      const res = await response.json();
      setProducts(res);
    } catch (error) {
      console.log("ERROR", error);
      throw new Error("Failed to fetch data");
    }
  }

  useEffect(() => {
    getData();
  }, []);

  function handlePutItemInBasket(id, e) {
    if (e.target.id === id) {
      setBasket([...basket, { id: e.target.id }]);
    }
    console.log(basket);
  }

  return (
    <div className="mx-48 grid grid-cols-listing gap-29px mb-70px">
      <div className=" bg-main-gray text-font-black h-3/6">
        <p className="bg-amber-400 text-white text-xl font-bold px-20 py-3 rounded-t-md mb-5">
          Фильтры
        </p>
        <div className="px-2.5">
          <div className="flex justify-between items-center pb-3.5">
            <p className="text-lg font-bold">Цена</p>
            <span>
              <Image src={arrow} className="" />
            </span>
          </div>
          <div className="flex justify-between items-center">
            <p>От</p>
            <p>До</p>
          </div>
          <div className="flex  text-white">
            <input
              className="bg-amber-400 pl-3.5  py-2.5 w-1/2 rounded-l-md border-r-2"
              value="349"
            ></input>
            <input
              className="bg-amber-400 pr-3.5  pl-75px w-1/2 rounded-r-md"
              value="840"
            ></input>
          </div>
          <div>ползунок</div>
          <div className="flex justify-between items-center pt-5">
            <p className="text-lg font-bold">Цвета</p>
            <span>
              <Image src={arrow} />
            </span>
          </div>
          <div>
            <input type="checkbox" className="mr-2.5"></input>
            <label>Оттенки белого</label>

            {/* 
            <input type="checkbox"> </input>
            <label>Оттенки голубого</label>
            <label>Оттенки желтого</label>
            <input type="checkbox"></input>
            <label>Оттенки зеленого</label>
            <input type="checkbox"></input>
            <label>Оттенки розового</label>
            <input type="checkbox"></input>
            <label>Оттенки серого</label>
            <input type="checkbox"></input> */}
          </div>
          <div className="flex justify-between items-center pt-5">
            <p className="text-lg font-bold ">Размер</p>
            <span>
              <Image src={arrow} />
            </span>
          </div>
          <div className="pb-6">
            <input type="checkbox" className="mr-2.5"></input>
            <label>56</label>
          </div>
          <div className="flex justify-center">
            <button className="bg-amber-400 text-white text-base font-bold uppercase rounded-3xl px-16 py-3">
              Сбросить
            </button>
          </div>
        </div>
      </div>
      <div className=" text-font-black">
        <div className="bg-main-gray  py-3.5 rounded-t-md px-3.5 text-base font-bold mb-30px">
          <div className="flex justify-between">
            <div className="flex justify-between items-center w-3/12">
              <div className="">По умолчанию (возрастание)</div>
              <span>
                <Image src={arrow} className="" />
              </span>
            </div>
            <div className="flex justify-between items-center w-36">
              <div>Вид:</div>
              <span>
                <Image src={group_1} />
              </span>
              <span>
                <Image src={group_2} />
              </span>
              <span>
                <Image src={group_3} />
              </span>
            </div>
          </div>
        </div>

        <div className=" flex gap-30px justify-between flex-col">
          <div className="grid grid-cols-5 gap-5">
            {products.map((item) => (
              <div className="relative " key={item.id}>
                <Image
                  src={item.image}
                  width={231}
                  height={242}
                  alt={item.title}
                  className="mb-3"
                />
                <div className="text-sm font-normal rounded-xl w-24 h-7 py-1 px-3 bg-blue-btn absolute top-1.5 -left-1.5">
                  На складе
                </div>
                <div className="flex flex-col place-items-center font-bold">
                  <Link
                    href={`/card/${item.id}`}
                    className="mb-3.5 text-center"
                  >
                    {item.title}
                  </Link>
                  <p className="mb-5">{item.price} ₽/шт</p>
                </div>
                <div className="flex justify-center">
                  <button
                    className="text-xs uppercase text-white bg-amber-400 py-3.5 px-14 rounded-full"
                    id={item.id}
                    onClick={(e) => handlePutItemInBasket(item.id, e)}
                  >
                    В корзину
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
