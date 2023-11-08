import Image from "next/image";
import logo from "/public/logo.svg";
import phone from "/public/Phone.svg";
import mail from "/public/mail.svg";
import address from "/public/Address.svg";
import mir from "/public/mir.svg";
import paykeeper from "/public/paykeeper.svg";
import mastercard from "/public/mastercard.svg";
import visa from "/public/visa.svg";

export default function Footer() {
  return (
    <footer className="text-base  pb-7 text-font-black">
      <div className="border-t-2 border-gray-300"></div>
      <div className="flex gap-x-64 mx-48  2xl:mx-20  pt-7">
        <div className="flex justify-between gap-x-20 whitespace-nowrap ">
          <div className="flex flex-col justify-between">
            <div>
              <a href="#">Главная</a>
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
            <div>
              <a href="#">Как купить</a>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <div>
              <a href="#">Как купить</a>
            </div>
            <div>
              <a href="#">Новости</a>
            </div>
            <div>
              <a href="#">Отзывы</a>
            </div>
            <div>
              <a href="#">Контакты</a>
            </div>
            <div>
              <a href="#">Лицензии</a>
            </div>
            <div>
              <a href="#">Оплата и возврат</a>
            </div>
            <div>
              <a href="#">Условия доставки</a>
            </div>
          </div>
        </div>
        <div className="flex flex-col ">
          <div className="flex flex-col place-content-center flex-wrap  mb-6">
            <Image src={logo} />
            <p className="text-center">2022 © «LalaSTORE»</p>
          </div>
          <div className="flex mb-4 gap-x-6 flex-nowrap place-content-center">
            <Image src={mir} />
            <Image src={paykeeper} />
            <Image src={mastercard} />
            <Image src={visa} />
          </div>
          <div className="text-center">
            <a href="#">Политика конфиденциальности</a>
          </div>
        </div>
        <div>
          <div className="flex mb-2.5 whitespace-break-spaces">
            <Image src={address} className="mr-2.5" />
            <p>Адрес шоурума: г. Москва, Электролитный проезд 3Б стр 6</p>
          </div>
          <div className="flex mb-2.5">
            <Image src={mail} className="mr-2.5" />
            <p>info@lalastore.ru</p>
          </div>
          <div className="flex">
            <Image src={phone} className="mr-2.5" />
            <p>+7 916 361-30-00</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
