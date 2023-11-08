import chevron_dark from "/public/chevron_dark.svg";
import Image from "next/image";

export default function Subheader() {
  return (
    <div className="flex justify-between text-xl  text-font-submenu tracking-tight bg-main-gray px-48 h-16 items-center mb-40">
      <div className="flex items-center relative">
        <p className="text-font-black font-bold divide-solid divide-x-4 pr-3">
          О компании
        </p>
        <span>
          <Image src={chevron_dark} />
        </span>
        <div className="absolute top-11 bg-second-gray text-font-black text-base pl-3.5 py-2.5">
          <p className="pb-2.5">Оплата и возврат</p>
          <p className="pb-2.5">Условия доставки</p>
          <p>Как купить</p>
        </div>
      </div>

      <p>Новости</p>
      <p>Отзывы</p>
      <p>Контакты</p>
      <p>Лицензии</p>
    </div>
  );
}
