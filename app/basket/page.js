"use client";

import Image from "next/image";
import sets from "/public/sets.png";
import cross from "/public/cross.svg";
import share from "/public/share.svg";
import arrow_grey from "/public/arrow_grey.svg";
import { useState, useEffect } from "react";

export default function BasketPage() {
  const [items, setItems] = useState([]);
  const [amount, setAmount] = useState(1);

  async function getData() {
    try {
      const url = `https://fakestoreapi.com/products/3`;
      const response = await fetch(url);
      const res = await response.json();
      setItems(res);
      console.log(res);
    } catch (error) {
      console.log("ERROR", error);
      throw new Error("Failed to fetch data");
    }
  }

  useEffect(() => {
    getData();
  }, []);

  function priceWithDiscount(item) {
    const discount = item - item * 0.2;
    return discount;
  }

  function handleDicreaseAmount() {
    setAmount(amount - 1);
    if (amount === 0) {
      setAmount(0);
    }
  }

  function handleIncreaseAmount() {
    setAmount(amount + 1);
  }

  return (
    <div>
      <div className="text-sm font-normal rounded-xl w-101 h-7 bg-green-btn py-1 px-3.5 text-font-black mx-48 mb-3.5">
        В наличии
      </div>
      <div className="flex mx-48 gap-x-50px">
        <div className="text-font-black flex flex-col mb-8 ">
          <div
            className="flex  justify-between border-t-2 border-solid pt-5 mb-8"
            key={items.id}
          >
            <div className="flex items-center">
              <input type="checkbox" className="w-6 h-6 mr-5"></input>
            </div>
            <Image
              src={items.image}
              width={97}
              height={102}
              className="mr-5"
              alt={items.title}
            />
            <div className="mr-20">
              <p className=" text-sm">Товар:</p>
              <p className="font-bold mb-2.5">{items.title}</p>
              <div className="flex gap-x-5">
                <p>Скидка: 20%</p>
                <p>Размер: 74</p>
              </div>
            </div>
            <div className="mr-100px">
              <p className=" text-sm">Цена:</p>
              <p className="font-bold ">
                {Math.round(priceWithDiscount(items.price))}₽
              </p>
              <p className="text-sm line-through">{Math.round(items.price)}₽</p>
            </div>
            <div className="mr-100px">
              <p className=" text-sm">Кол-во:</p>
              <div className="flex gap-x-5">
                <span
                  className="border border-font-black px-2"
                  onClick={handleDicreaseAmount}
                >
                  -
                </span>
                <p className="font-bold">{amount}</p>
                <span
                  className="px-2 bg-amber-400 text-white font-bold"
                  onClick={handleIncreaseAmount}
                >
                  +
                </span>
              </div>
            </div>
            <div className="mr-20">
              <p className=" text-sm">В сумме:</p>
              <p className="font-bold">
                {Math.round(priceWithDiscount(items.price) * amount)}₽
              </p>
              <p className=" text-sm line-through">
                {Math.round(items.price * amount)}₽
              </p>
              <p className="text-xs font-font-light-gray">
                Экономия
                {Math.round(
                  (items.price - priceWithDiscount(items.price)) * amount
                )}
                ₽
              </p>
            </div>
            <div className="flex items-center">
              <Image src={cross} />
            </div>
          </div>
        </div>
        <div className="text-font-black">
          <div className="flex items-center justify-between">
            <p className="text-4xl font-bold mb-1.5">Итого:</p>
            <div>
              <Image src={share} />
            </div>
          </div>
          <p className="mb-1.5">Общий вес корзины: 5кг</p>
          <p className="text-xs font-font-light-gray mb-2.5">Экономия 2370₽</p>
          <p className="text-2xl font-bold mb-2.5">К оплате: 4 664₽</p>
          <div className="flex mb-8 items-center">
            <p className="mr-5">Ввести промокод</p>
            <span>
              <Image src={arrow_grey} />
            </span>
          </div>
          <div className="flex flex-col gap-y-2.5">
            <button className="bg-amber-400 text-white font-bold uppercase px-24 py-3.5 rounded-3xl">
              Оформить заказ
            </button>
            <button className=" text-font-black font-bold uppercase px-24 py-3.5 rounded-3xl border-font-black border-2">
              Быстрый заказ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
