"use client";

import Image from "next/image";
import sets from "/public/sets.png";
import delivery_card from "/public/delivery_card.svg";
import pickup from "/public/pickup.svg";
import arrow_b from "/public/arrow_b.svg";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";

export default function CardPage() {
  const params = useParams();
  const [item, setItem] = useState([]);

  async function getData() {
    try {
      const url = `https://fakestoreapi.com/products/${params.id}`;
      const response = await fetch(url);
      const res = await response.json();
      setItem(res);
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
    <div>
      <div className="grid grid-rows-2 grid-cols-2 mx-48 gap-x-60px gap-y-60px">
        <div className="flex">
          <div className="flex flex-col">
            <div>
              <Image
                src={item.image}
                width={474}
                height={474}
                alt={item.title}
              />
            </div>
          </div>
          <div>
            <Image src={item.image} width={474} height={474} alt={item.title} />
          </div>
        </div>
        <div className=" text-font-black py-45px pr-100px">
          <div className="flex justify-between">
            <h1 className="text-2xl font-bold mb-4">{item.title}</h1>
            <div className="text-sm font-normal rounded-xl w-24 h-7 py-1 px-3 bg-blue-btn">
              На складе
            </div>
          </div>
          <p className="mb-30px">Код товара: 32978459390</p>
          <div className="flex mb-6 font-bold w-3/5 justify-between">
            <span className="text-32px">{item.price} ₽/шт</span>
            <div className="flex justify-center">
              <button className="text-sm uppercase text-white bg-amber-400 py-3.5 px-11 rounded-full">
                В корзину
              </button>
            </div>
          </div>

          <div className="flex mb-30px items-center box-border">
            <p className="mr-5">Размер:</p>
            <span className="text-white bg-amber-400 py-1.5 px-2 font-bold  mr-2.5  border rounded-sm">
              10
            </span>
            <span className="mr-2.5 border-solid border-font-black py-1.5 px-2 border rounded-sm">
              12
            </span>
            <span className="border-solid border-font-black py-1.5 px-2 border rounded-sm">
              14
            </span>
          </div>
          <div className="flex justify-between tracking-tight border-t-2 pt-3.5">
            <div className="flex mr-8 ">
              <div className="relative mr-2.5">
                <div className="bg-font-black w-16 h-16 rounded-full "></div>
                <Image
                  src={delivery_card}
                  className="absolute top-5 left-3.5"
                />
              </div>
              <div>
                <p className="font-bold">Доставка в Краснодар</p>
                <p>Самовывоз - бесплатно</p>
                <p>Рассчитать доставку</p>
              </div>
            </div>
            <div className="flex  mb-9">
              <div className="relative mr-2.5">
                <div className="bg-font-black w-16 h-16 rounded-full "></div>
                <Image src={pickup} className="absolute top-5 left-4" />
              </div>
              <div>
                <p className="font-bold">Самовывоз сегодня - бесплатно</p>
                <p>Доставка завтра - 370</p>
              </div>
            </div>
          </div>
          <p className="text-sm">
            Цена действительна только для интернет-магазина и может отличаться
            от цен в розничных магазинах
          </p>
        </div>

        <div className="text-font-black mb-16">
          <h2 className="text-4xl font-bold mb-6">Описание</h2>
          <div className="text-lg">
            <p>{item.description}</p>
          </div>
        </div>
        <div className="text-font-black">
          <h2 className="text-4xl font-bold mb-6">Отзывы</h2>
          <p className="text-base pb-5  w-96">
            У данного товара нет отзывов. Станьте первым, кто оставил отзыв об
            этом товаре!
          </p>
          <button className="text-xs uppercase text-white bg-amber-400 py-4 px-9 rounded-full">
            оставить отзыв
          </button>
          <div className="mb-5">
            <div className="flex items-center">
              <p className="text-base font-bold text-font-black mr-5">
                Сергей Петров
              </p>
              <p className="text-10px text-font-light-gray">11.12.2022</p>
            </div>
            <p>
              Равным образом, постоянное информационно-пропагандистское
              обеспечение нашей деятельности способствует повышению качества
              направлений прогрессивного развития. Также как граница обучения
              кадров в значительной степени обусловливает важность модели
              развития.
            </p>
          </div>
          <p>Показать еще</p>
        </div>
      </div>

      <div className="px-48 mb-70px py-10 text-center bg-main-gray text-font-black">
        <p className="text-4xl font-bold mb-3.5">Нужна консультация?</p>
        <p className="mb-5 w-144 mx-auto">
          Наши специалисты ответят на любой интересующий вопрос
        </p>
        <button className="rounded-3xl bg-amber-400 text-white uppercase py-3 px-10">
          задать вопрос
        </button>
      </div>

      <div className="text-font-black mx-48 w-3/4">
        <div className="flex items-center mb-6 ">
          <span>
            <Image src={arrow_b} />
          </span>

          <h2 className="text-4xl font-bold pl-6">Отзывы</h2>
        </div>
        <div className="pl-10">
          <div className="flex items-center ">
            <p className="text-base font-bold text-font-black mr-5">
              Сергей Петров
            </p>
            <p className="text-10px text-font-light-gray">11.12.2022</p>
          </div>
          <p className="text-base pb-5">
            Равным образом, постоянное информационно-пропагандистское
            обеспечение нашей деятельности способствует повышению качества
            направлений прогрессивного развития. Также как граница обучения
            кадров в значительной степени обусловливает важность модели
            развития.
          </p>
          <div className="flex items-center ">
            <p className="text-base font-bold text-font-black mr-5">
              Сергей Петров
            </p>
            <p className="text-10px text-font-light-gray">11.12.2022</p>
          </div>
          <p className="text-base pb-5">
            Равным образом, постоянное информационно-пропагандистское
            обеспечение нашей деятельности способствует повышению качества
            направлений прогрессивного развития. Также как граница обучения
            кадров в значительной степени обусловливает важность модели
            развития.
          </p>
          <div className="flex items-center ">
            <p className="text-base font-bold text-font-black mr-5">
              Сергей Петров
            </p>
            <p className="text-10px text-font-light-gray">11.12.2022</p>
          </div>
          <p className="text-base pb-5">
            Равным образом, постоянное информационно-пропагандистское
            обеспечение нашей деятельности способствует повышению качества
            направлений прогрессивного развития. Также как граница обучения
            кадров в значительной степени обусловливает важность модели
            развития.
          </p>
          <button className="text-xs uppercase text-white bg-amber-400 py-4 px-20 rounded-full font-bold">
            оставить отзыв
          </button>
          <div className="flex flex-col">
            <input
              placeholder="Текст вашего отзыва"
              className="bg-main-gray text-font-black py-70px  w-965px px-400px tracking-tight mb-4"
            ></input>
            <button className="text-xs uppercase text-white bg-amber-400 py-3.5 px-16 rounded-full font-bold w-1/6">
              отправить
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
