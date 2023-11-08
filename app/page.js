"use client";
import Image from "next/image";

import { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import big_banner from "/public/big_banner.png";
import small_banner from "/public/small_banner.png";
import accessories from "/public/accessories.png";
import covers from "/public/covers.png";
import clothes from "/public/clothes.png";
import pelenki from "/public/pelenki.png";
import sets from "/public/sets.png";
import map from "/public/map.png";
import delivery from "/public/delivery.svg";
import star from "/public/star.svg";
import price from "/public/price.svg";
import chevron_w from "/public/chevron_w.svg";

export default function Home() {
  const [accessoriesVisible, setAccessoriesVisible] = useState("hidden");
  const [clothesVisible, setClothesVisible] = useState("hidden");
  const [coversVisible, setCoversVisible] = useState("hidden");
  const [pampersVisible, setPampersVisible] = useState("hidden");
  const [setsVisible, setSetsVisible] = useState("hidden");

  const [collections, setCollections] = useState([]);

  function handleAccessoriesVisible() {
    accessoriesVisible
      ? setAccessoriesVisible()
      : setAccessoriesVisible("hidden");
  }

  function handleClothesVisible() {
    clothesVisible ? setClothesVisible() : setClothesVisible("hidden");
  }

  function handleCoversVisible() {
    coversVisible ? setCoversVisible() : setCoversVisible("hidden");
  }

  function handlePampersVisible() {
    pampersVisible ? setPampersVisible() : setPampersVisible("hidden");
  }

  async function getData() {
    try {
      const url = `https://fakestoreapi.com/products/categories`;
      const response = await fetch(url);
      const res = await response.json();
      setCollections(res);
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
      <Header />
      <div className="flex relative mb-20">
        <div className="relative mix-blend-overlay ">
          <Image
            src={big_banner}
            className="ml-48 2xl:ml-20  mr-5 2xl:ml-20  bg-opacity-25"
            // width={1181}
            // height={358}
          />
          <div className="absolute z-10 top-0 left-48 bg-slate-50/60 blur w-2/5 h-full text-slate-500"></div>
        </div>
        <Image
          src={small_banner}
          // width={319}
          // height={358}
        />
        <div></div>

        <div className="absolute left-60 top-20 w-98">
          <p className="flex text-4xl font-bold mb-6 text-font-black">
            Большая зимняя распродажа от LeoKid
          </p>
          <p className="text-lg text-font-black">
            Конверт Leokid Classic подходит для использования в любых колясках,
            автокреслах и санках. Для прогулок осенью, зимой, весной и даже
            прохладным летом.
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center mb-14">
        <div className="flex-grow border-t border-black"></div>
        <h2 className="text-4xl font-bold mx-20 text-font-black">Каталог</h2>
        <div className="flex-grow border-t border-black"></div>
      </div>
      <div className="mx-48 2xl:mx-20 flex  mb-16">
        <div className="mr-5 relative ">
          <Image src={accessories} className="" />
          <div className="bg-amber-400 w-full h-20 absolute bottom-0 flex px-28 py-7 rounded-b-lg">
            <div className="uppercase font-semibold mr-2.5">Аксессуары</div>
            <div className="flex " onClick={handleAccessoriesVisible}>
              <Image src={chevron_w} />
            </div>
          </div>
          <div
            className={`text-font-black w-full absolute bg-white pl-5 rounded-md shadow-md ${accessoriesVisible}`}
          >
            <div className="mb-2.5 pt-4 hover:font-bold">
              <a href="#">Сумки-органайзеры</a>
            </div>
            <div className="mb-2.5 hover:font-bold">
              <a href="#">Муфты-варежки</a>
            </div>
            <div className="mb-2.5 hover:font-bold">
              <a href="#">Грызунки</a>
            </div>
            <div className="mb-2.5 hover:font-bold">
              <a href="#">Альбомы для фотографий</a>
            </div>
            <div className="mb-5 hover:font-bold">
              <a href="#">Держатели для соски/грузунка</a>
            </div>
          </div>
        </div>
        <div className="mr-5 ">
          <div className="mb-5 relative">
            <Image src={covers} className="col-start-2 col-end-4" />
            <div className="bg-amber-400 w-full h-20 absolute bottom-0 flex py-7 px-52 rounded-b-lg">
              <div className="uppercase font-semibold mr-2.5">
                Конверты и пледы
              </div>
              <div className="flex " onClick={handleCoversVisible}>
                <Image src={chevron_w} />
              </div>
            </div>
            <div
              className={`text-font-black w-full absolute bg-white pl-5 rounded-md shadow-md z-10 ${coversVisible}`}
            >
              <div className="mb-2.5 pt-4 hover:font-bold">
                <a href="#">Конверты в коляску</a>
              </div>
              <div className="mb-2.5 hover:font-bold">
                <a href="#">Пледы</a>
              </div>
              <div className="mb-5 hover:font-bold">
                <a href="#">Конверты на выписку</a>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="mr-5 relative">
              <Image src={clothes} className="" />
              <div className="bg-amber-400 w-full h-20 absolute bottom-0 flex py-7 px-100px rounded-b-lg">
                <div className="uppercase font-semibold mr-2.5">Одежда</div>
                <div className="flex" onClick={handleClothesVisible}>
                  <Image src={chevron_w} />
                </div>
              </div>
              <div
                className={`text-font-black w-full absolute bg-white pl-5 rounded-md shadow-md z-10 top-17.5 ${clothesVisible}`}
              >
                <div className="mb-2.5 pt-4 hover:font-bold">
                  <a href="#">Изделия из муслина</a>
                </div>
                <div className="mb-2.5 hover:font-bold">
                  <a href="#">Боди</a>
                </div>
                <div className="mb-2.5 hover:font-bold">
                  <a href="#">Песочники</a>
                </div>
                <div className="mb-2.5 hover:font-bold">
                  <a href="#">Нательные комбинезоны (слипы)</a>
                </div>
                <div className="mb-2.5 hover:font-bold">
                  <a href="#">Комбинезоны из футера</a>
                </div>
                <div className="mb-2.5 hover:font-bold">
                  <a href="#">Комбинезоны вязаные</a>
                </div>
                <div className="mb-2.5 hover:font-bold">
                  <a href="#">Демисезонные комбинезоны</a>
                </div>
                <div className="mb-2.5 hover:font-bold">
                  <a href="#">Комбинезоны-трансформеры</a>
                </div>
                <div className="mb-2.5 hover:font-bold">
                  <a href="#">Головные уборы</a>
                </div>
                <div className="mb-2.5 hover:font-bold">
                  <a href="#">Носочки</a>
                </div>
                <div className="mb-5 hover:font-bold">
                  <a href="#">Нагрудники</a>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image src={pelenki} />
              <div className="bg-amber-400 w-full h-20 absolute bottom-0 flex py-7 px-100px rounded-b-lg">
                <div className="uppercase font-semibold mr-2.5">Пеленки</div>
                <div className="flex" onClick={handlePampersVisible}>
                  <Image src={chevron_w} />
                </div>
              </div>
              <div
                className={`text-font-black w-full absolute bg-white pl-5 rounded-md shadow-md z-10 top-17.5 ${pampersVisible}`}
              >
                <div className="mb-2.5 pt-4 hover:font-bold">
                  <a href="#">Пеленальные коконы</a>
                </div>
                <div className="mb-2.5 hover:font-bold">
                  <a href="#">Пеленки из фланели</a>
                </div>
                <div className="mb-2.5 hover:font-bold">
                  <a href="#">Пеленки из муслина</a>
                </div>
                <div className="mb-5 hover:font-bold">
                  <a href="#">Пеленки из интерлока</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <Image src={sets} className="order-5" />
          <div className="bg-amber-400 w-full h-20 absolute bottom-0 flex py-7 px-148px rounded-b-lg">
            <div className="uppercase font-semibold mr-2.5 flex flex-nowrap">
              Готовые подборки
            </div>
            <div className="flex">
              <Image src={chevron_w} />
            </div>
          </div>
        </div>
      </div>
      <div className="mx-48 2xl:mx-20 mb-20">
        <h2 className="text-4xl font-bold mb-8 text-font-black">
          Готовые подборки
        </h2>
        <div className="flex justify-between">
          {collections.map((item) => (
            <div>
              <Image src={sets} width={287} height={313} className="mb-3.5" />
              <p className="font-semibold text-xl text-center text-font-black">
                {item}
              </p>
            </div>
          ))}

          {/* <div>
            <Image src={sets} className="mb-3.5" />
            <p className="font-semibold text-xl text-center text-font-black">
              Подборка № 1
            </p>
          </div>
          <div>
            <Image src={sets} className="mb-3.5" />
            <p className="font-semibold text-xl text-center text-font-black">
              Подборка № 1
            </p>
          </div>
          <div>
            <Image src={sets} className="mb-3.5" />
            <p className="font-semibold text-xl text-center text-font-black">
              Подборка № 1
            </p>
          </div> */}
        </div>
      </div>
      <div className="">
        <h2 className="text-4xl font-bold  text-font-black mb-8 mx-48">
          Адрес шоурума
        </h2>
        <div className=" relative leading-4 h-628px">
          <Image src={map} className="h-full" />
          <div className="absolute left-40 top-0 w-99 h-full bg-white px-59px py-6">
            <p className="text-sm text-slate-300">Адрес шоурума:</p>
            <p className="text-lg text-font-black mb-2.5">
              г. Москва, Электролитный проезд 3Б стр 6
            </p>
            <p className="text-sm text-slate-300">Метро:</p>
            <p className="text-lg text-font-black mb-2.5">Нагорная</p>
            <p className="text-sm text-slate-300">Режим работы:</p>
            <p className="text-lg text-font-black mb-2.5">
              Вторник-суббота: 10:00-19:00
            </p>
            <p className="text-sm text-slate-300">Выходной</p>
            <p className="text-lg text-font-black mb-2.5">
              Воскресенье, понедельник: выходной
            </p>
            <p className="text-sm text-slate-300">Телефон:</p>
            <p className="text-lg text-font-black mb-2.5">+7 916 361-30-00</p>
            <p className="text-sm text-slate-300">Почта:</p>
            <p className="text-lg text-font-black mb-7">info@lalastore.ru</p>
            <div className="flex">
              <div className="border-l-3 border-gray-300 h-24 mt-2"></div>
              <p className="text-lg text-font-black mb-8 ml-3.5 ">
                Пожалуйста, свяжитесь с нами перед посещением, чтобы мы могли
                согласовать время вашего визита и наличие товаров.
              </p>
            </div>
            <button className="rounded-3xl bg-amber-400 text-white uppercase py-3 px-10">
              Написать нам
            </button>
          </div>
        </div>
      </div>
      <div className="px-48 mb-9 pb-12 text-center bg-main-gray text-font-black">
        <p className="text-4xl font-bold mb-3.5  pt-16">
          Подпишитесь на нашу рассылку
        </p>
        <p className="mb-5 w-144 mx-auto">
          Присоединяйтесь к программе LALA STORE, чтобы получать постоянные
          скидки и персональные предложения
        </p>
        <button className="rounded-3xl bg-amber-400 text-white uppercase py-3 px-10">
          Оформить подписку
        </button>
      </div>
      <div className="mx-48  mb-20 text-center text-font-black">
        <h2 className="text-4xl font-bold  mb-6">О компании</h2>
        <div className="mb-16 mx-auto w-102">
          <p className="mb-2">
            LalaStore - магазин качественной и модной одежды и товаров для
            новорожденных и малышей до года. У нас вы подберете стильный
            комплект на выписку и базовый гардероб на первый год вашего ребенка.
          </p>

          <p className="mb-2">
            Качество товаров на высоте, так как мы работаем только с
            проверенными поставщиками. Все изделия имеют сертификаты качества.
          </p>

          <p>Нам доверяют, и к нам возвращаются!</p>
        </div>
        <div className="flex justify-between mx-auto w-102">
          <div className="flex flex-col place-items-center w-64">
            <div className="bg-amber-400 rounded-full w-20 h-20 flex place-content-center mb-3.5">
              <Image src={delivery} />
            </div>
            <p className="text-xl font-semibold mb-3.5">Быстрая доставка</p>
            <p className="text-center">
              Бережно доставляем товары по России за 24 часа
            </p>
          </div>
          <div className="flex flex-col place-items-center w-64">
            <div className="bg-amber-400 rounded-full w-20 h-20 flex place-content-center mb-3.5">
              <Image src={star} />
            </div>
            <p className="text-xl font-semibold mb-3.5">Гарантия качества</p>
            <p className="text-center">
              Соответствуем требованиям и стандартам качества
            </p>
          </div>
          <div className="flex flex-col place-items-center w-64">
            <div className="bg-amber-400 rounded-full w-20 h-20 flex place-content-center mb-3.5">
              <Image src={price} />
            </div>
            <p className="text-xl font-semibold mb-3.5">Доступные цены</p>
            <p className="text-center">
              Работаем напрямую с ведущими производителями
            </p>
          </div>
        </div>
      </div>
      <div className="px-48 2xl:px-20  text-font-black bg-main-gray">
        <p className="text-4xl font-bold pt-9 mb-6 ">Раннее вы смотрели</p>
        <div className="flex justify-between gap-x-6 text-base font-bold pb-14 mb-20">
          <div className="relative">
            <Image src={sets} width={231} height={242} className="mb-3" />
            <div className="text-sm font-normal rounded-xl w-101 h-7 bg-green-btn py-1 px-3.5 absolute top-1.5 -left-1.5">
              В наличии
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
          </div>
        </div>
      </div>
      <div className="mx-48 flex flex-col text-font-black mb-20">
        <p className="text-4xl font-bold  mb-6 text-center">
          Подписаться на рассылку
        </p>

        <div className="relative w-144 mx-auto">
          <p className="text-sm text-slate-300 mb-2.5">Почта</p>
          <form>
            <input
              placeholder="e-mail.com "
              className="bg-main-gray rounded-md py-2.5 pl-2.5 w-144 "
            ></input>
          </form>
          <button className="text-xs uppercase text-white bg-amber-400 py-3.5 px-14 rounded-full font-bold absolute -end-4 bottom-0">
            Подписаться
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

// {products.map((item) => {
//   <div key={item.id}>
//     <p>{item.title}</p>
//     <img src={item.image} alt={item.title} />
//   </div>
// );
// })}
