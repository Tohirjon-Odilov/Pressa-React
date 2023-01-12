import React, { useState } from "react";
import style from "./Hero.module.scss";
import { BiChevronDown, BiUser, BiCalendar, BiCategory } from "react-icons/bi";
import { HiStatusOnline } from "react-icons/hi";
import Calendar from "../../UI/Calendar/Calendar";
import Category from "../../UI/Category/Category";
import Online from "../../UI/Online/Online";
import Name from "../../UI/Name/Name";

function Hero() {
  const [calendar, setCalendar] = useState(false);
  const [category, setCategory] = useState(false);
  const [isOnline, setIsOnline] = useState(false);
  const [name, setName] = useState(false);

  let date = new Date();
  let fullDate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;

  const showName = () => {
    setName((prev) => !prev);
    setCalendar(false);
    setCategory(false);
    setIsOnline(false);
  };

  const showOnline = () => {
    setIsOnline((prev) => !prev);
    setCalendar(false);
    setCategory(false);
    setName(false);
  };

  const showCategory = () => {
    setCategory((prev) => !prev);
    setCalendar(false);
    setName(false);
    setIsOnline(false);
  };

  const showCalendar = () => {
    setCalendar((prev) => !prev);
    setName(false);
    setCategory(false);
    setIsOnline(false);
  };
  return (
    <section className={style.hero__section}>
      <div className={style.container}>
        <div className={style.hero}>
          <h2>Eng so’ngi master klasslar va tadbirlar bizning saytda</h2>
          <ul className={style.hero__list}>
            <li className={style.hero__item}>
              <BiCalendar />
              <time onClick={showCalendar}>{fullDate}</time>
              <BiChevronDown onClick={showCalendar} />
              {calendar && <Calendar />}
            </li>
            <li className={style.hero__item}>
              <BiCategory />
              <span onClick={showCategory} className="cursor">
                Bo’lim tanlang
              </span>
              <BiChevronDown onClick={showCategory} className="cursor" />
              {category && <Category />}
            </li>
            <li className={style.hero__item}>
              <HiStatusOnline />
              <span className="cursor" onClick={showOnline}>
                Online / Offline
              </span>
              <BiChevronDown className="cursor" onClick={showOnline} />
              {isOnline && <Online />}
            </li>
            <li className={style.hero__item}>
              <BiUser />
              <span className="cursor" onClick={showName}>
                Ism familya
              </span>
              <BiChevronDown className="cursor" onClick={showName} />
              {name && <Name />}
            </li>
            <li className={style.hero__item}>Izlash</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
export default Hero;
