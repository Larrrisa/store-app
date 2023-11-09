import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import phone from "/public/Phone.svg";
import address from "/public/Address.svg";
import logo from "/public/logo.svg";
import favourite from "/public/favourite.svg";
import basket from "/public/basket.svg";
import account from "/public/account.svg";
import chevron from "/public/chevron.svg";
import search from "/public/search.svg";

export default function Header() {
  const [dropMenu, setDropMenu] = useState("hidden");

  function handleMainMenuClick() {
    dropMenu ? setDropMenu() : setDropMenu("hidden");
  }

  return (
    <header className="flex justify-around flex-col text-sm text-font-black  tracking-tight bg-main-gray  relative">
      <div className="flex my-6 px-48 2xl:px-20">
        <div className="flex mr-10">
          <div className="pr-3.5">
            <Image src={address} width={16} height={21} />
          </div>
          <p>г. Москва, Электролитный проезд 3Б стр 6</p>
        </div>

        <div className="flex mr-190px ">
          <div className="pr-3.5">
            <Image src={phone} width={16} height={16} />
          </div>
          <p>+7 916 361-30-00</p>
        </div>
        <div className="flex flex-row justify-between w-826">
          <div className="flex content-center gap-x-1">
            <div>
              <Link href="/catalog" className="mr-0.5">
                Каталог
              </Link>
            </div>
            <Image
              src={chevron}
              width={8}
              height={8}
              onClick={handleMainMenuClick}
            />
          </div>

          <div>
            <Link href="/">Главная</Link>
          </div>
          <div>
            <a href="#">Как купить</a>
          </div>
          <div>
            <a href="#">Доставка</a>
          </div>
          <div>
            <a href="#">О компании</a>
          </div>
          <div>
            <a href="#">Мы в instagram</a>
          </div>
          <div>
            <a href="#">Акции</a>
          </div>
        </div>
      </div>
      <div
        className={`absolute top-16 flex pt-5 pb-7 pl-201px pr-198px justify-between bg-blue-menu text-slate-100 font-normal leading-7 z-10 w-full ${dropMenu}`}
      >
        <div>
          <div className="mb-5 uppercase text-white">
            <a href="#">Одежда</a>
          </div>
          <div className="hover:font-bold">
            <a href="#">Изделия из муслина</a>
          </div>
          <div className="hover:font-bold">
            <Link href="/catalog/clothes/bodi">Боди</Link>
          </div>
          <div className="hover:font-bold">
            <a href="#">Песочники</a>
          </div>
          <div className="hover:font-bold">
            <a href="#">Нательные комбинезоны (слипы)</a>
          </div>
          <div className="hover:font-bold">
            <a href="#">Комбинезоны из футера</a>
          </div>
          <div className="hover:font-bold">
            <a href="#">Комбинезоны вязаные</a>
          </div>
          <div className="hover:font-bold">
            <a href="#">Демисезонные комбинезоны</a>
          </div>
          <div className="hover:font-bold">
            <a href="#">Комбинезоны-трансформеры</a>
          </div>
          <div className="hover:font-bold">
            <a href="#">Головные уборы</a>
          </div>
          <div className="hover:font-bold">
            <a href="#">Носочки</a>
          </div>
          <div className="hover:font-bold">
            <a href="#">Нагрудники</a>
          </div>
        </div>
        <div>
          <div className="mb-5 uppercase text-white">
            <a href="#">Пеленки</a>
          </div>
          <div className="hover:font-bold">
            <a href="#">Пеленальные коконы</a>
          </div>
          <div className="hover:font-bold">
            <a href="#">Пеленки из фланели</a>
          </div>
          <div className="hover:font-bold">
            <a href="#">Пеленки из муслина</a>
          </div>
          <div className="hover:font-bold">
            <a href="#">Пеленки из интерлока</a>
          </div>
        </div>
        <div>
          <div className="mb-5 uppercase text-white">
            <a href="#">Конверты и пледы</a>
          </div>
          <div className="hover:font-bold">
            <a href="#">Конверты в коляску</a>
          </div>
          <div className="hover:font-bold">
            <a href="#">Пледы</a>
          </div>
          <div className="hover:font-bold">
            <a href="#">Конверты на выписку</a>
          </div>
        </div>
        <div>
          <div className="mb-5 uppercase text-white">
            <a href="#">Аксессуары</a>
          </div>
          <div className="hover:font-bold">
            <a href="#">Сумки-органайзеры</a>
          </div>
          <div className="hover:font-bold">
            <a href="#">Муфты-варежки</a>
          </div>
          <div className="hover:font-bold">
            <a href="#">Грызунки</a>
          </div>
          <div className="hover:font-bold">
            <a href="#">Альбомы для фотографий</a>
          </div>
          <div className="hover:font-bold">
            <a href="#">Держатели для соски/грузунка</a>
          </div>
        </div>
        <div>
          <div className="mb-5 uppercase text-white">
            <a href="#">Готовые подборки</a>
          </div>
        </div>
      </div>
      <div className="flex justify-between bg-white px-48 2xl:px-20  pb-4">
        <div className="flex justify-start">
          <Image src={logo} width={206} height={62} />
        </div>
        <div className="relative block my-6">
          <span className="absolute top-3 left-3 flex items-center pl-2">
            <Image src={search} width={24} height={25} />
          </span>
          <div className="w-full">
            <input
              placeholder="Начните писать"
              className="grow pl-16 py-3 rounded-l-lg outline-none text-base bg-main-gray"
              type="text"
              name="search"
            />
            <button className="rounded-r-lg bg-amber-400 h-12 w-40 text-white text-base uppercase">
              Найти
            </button>
          </div>
        </div>
        <div className="flex text-xs my-8">
          <div className="flex flex-col">
            <Image
              src={favourite}
              width={34}
              height={30}
              className="mr-28 mb-1 flex content-center"
            />
            <p>Избранное</p>
          </div>
          <div>
            <Image src={basket} width={36} height={30} className="mr-28 mb-1" />
            <Link
              href={{
                pathname: "/basket",
                query: { basket },
              }}
            >
              Корзина
            </Link>
          </div>
          <div>
            <Image src={account} width={29} height={29} className="mb-1" />
            <span>Войти</span>
          </div>
        </div>
      </div>
    </header>
  );
}
