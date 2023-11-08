import Image from "next/image";
import sets from "/public/sets.png";
import edit from "/public/edit.svg";

import arrow_grey from "/public/arrow_grey.svg";

export default function OrderPage() {
  return (
    <div className="mx-48">
      <div className="flex gap-x-50px">
        {/* <div className="flex flex-col justify-between"> */}
        <div className="text-font-black flex flex-col ">
          <div className="flex border-t-2 border-solid pt-5 mb-8">
            <Image src={sets} width={117} height={124} className="mr-5" />

            <div className="w-190px mr-75px">
              <p className=" text-sm">Наименование:</p>
              <p className="font-bold mb-2.5">
                Боди без рукавов "ФРУК-ТИК", розовый
              </p>
            </div>
            <div className="mr-75px">
              <p className="text-sm">Размер: </p>
              <span className="font-bold">74</span>
            </div>
            <div className="mr-75px">
              <p className="text-sm">Скидка: </p>
              <span className="font-bold">20%</span>
            </div>

            <div className="mr-75px">
              <p className=" text-sm">Цена:</p>
              <p className="font-bold">349₽</p>
              <p className="text-sm line-through">500₽</p>
            </div>
            <div className="mr-75px">
              <p className=" text-sm">Вес:</p>
              <p className="font-bold">2.5 кг</p>
            </div>
            <div className="mr-75px">
              <p className=" text-sm">Количество:</p>
              <p className="font-bold">1 шт</p>
            </div>
            <div>
              <p className=" text-sm">Сумма:</p>
              <p className="font-bold">2 332₽</p>
              <p className=" text-sm line-through">3 312₽</p>
            </div>
          </div>
        </div>
        {/* </div> */}

        <div className="text-font-black">
          <div className="flex items-center justify-between">
            <p className="text-4xl font-bold mb-1.5">Ваш заказ:</p>
            <div>
              <Image src={edit} />
            </div>
          </div>
          <p className="mb-1.5">
            Товаров на: <span className="font-bold">10 800₽</span>
          </p>
          <p className="text-xs font-font-light-gray mb-2.5">
            Без скидки: 13 500₽
          </p>
          <p className="mb-1.5">
            Общий вес корзины: <span className="font-bold">5кг</span>
          </p>
          <p className="mb-1.5">
            Доставка: <span className="font-bold">Бесплатно</span>
          </p>
          <p className="font-font-light-gray mb-2.5">
            Экономия: <span className="font-bold">2370₽</span>
          </p>
          <p className="text-2xl font-bold mb-2.5">К оплате: 4 664₽</p>
          <div className="flex mb-8 items-center">
            <p className="mr-5">Ввести промокод</p>
            <span>
              <Image src={arrow_grey} />
            </span>
          </div>
          <button className="bg-amber-400  text-white font-bold uppercase px-24 py-3.5 rounded-3xl">
            Оформить заказ
          </button>
        </div>
      </div>
    </div>
  );
}
