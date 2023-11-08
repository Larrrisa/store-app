import Image from "next/image";
import sets from "/public/sets.png";

export default function WatchedItems() {
  return (
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
  );
}
