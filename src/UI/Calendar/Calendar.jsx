import React, { useState, useMemo } from "react";
import "./style.scss";

const getMonthDetail = ({ year, month }) => {
  const lastDate = new Date(year, month, 0).getDate();
  return Array(lastDate)
    .fill()
    .map((_, key) => key + 1);
};

const getDateDay = (d) => {
  return d.getDay();
};

const getTodayData = () => {
  const d = new Date();
  const year = d.getFullYear();
  const month = d.getMonth() + 1;
  const date = d.getDate();
  return { year, month, date };
};

const getPrevYearMonth = ({ year, month }) => {
  const data = { year, month };
  if (month === 1) {
    data.year -= 1;
    data.month = 12;
  } else data.month -= 1;
  return data;
};

const getNextYearMonth = ({ year, month }) => {
  const data = { year, month };
  if (month === 12) {
    data.year += 1;
    data.month = 1;
  } else data.month += 1;
  return data;
};

const week = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

// COMPONENTS
const ActiveMonth = ({ year, month, todayStr }) => {
  const currMonth = getMonthDetail({ year, month });
  const prevMonth = getMonthDetail(getPrevYearMonth({ year, month }));
  const nextMonth = getMonthDetail(getNextYearMonth({ year, month }));

  const currMonthLastDate = currMonth[currMonth.length - 1];
  const startDay = getDateDay(new Date(year, month - 1, 1));
  const endDay = getDateDay(new Date(year, month - 1, currMonthLastDate));

  const prevMonthAddOn = prevMonth.slice(prevMonth.length - startDay);
  const nextMonthAddOn = nextMonth.slice(0, 6 - endDay);
  const visibleMonth = prevMonthAddOn
    .map((date) => ({ date, disabled: true }))
    .concat(currMonth.map((date) => ({ date, disabled: false })))
    .concat(nextMonthAddOn.map((date) => ({ date, disabled: true })));

  return (
    <div className="dates-wrapper" key={`${year}${month}`}>
      {week.map((el, i) => (
        <div key={i} className="week">
          {el}
        </div>
      ))}
      {visibleMonth.map((el, i) => (
        <div
          key={i}
          className={[
            "date",
            el.disabled ? " disabled" : "",
            todayStr === `${year}${month}${el.date}` ? " today" : "",
          ].join(" ")}
        >
          {el.date}
        </div>
      ))}
    </div>
  );
};

const MonthWrapper = ({ goPrev, goNext, goToday, year, month, todayStr }) => {
  return (
    <div className="month-wrapper">
      <div className="header">
        <span className="btn arrow" onClick={goPrev}>
          &lt;
        </span>
        <span className="current" onClick={goToday}>
          {year} . {month}
        </span>
        <span className="btn arrow" onClick={goNext}>
          &gt;
        </span>
      </div>
      <ActiveMonth year={year} month={month} todayStr={todayStr} />
    </div>
  );
};

function Calendar() {
  const [today, setToday] = useState(getTodayData());
  const [year, setYear] = useState(today.year);
  const [month, setMonth] = useState(today.month);

  const todayStr = useMemo(() => {
    return Object.values(today).join("");
  }, [today]);

  const setYearMonth = (data) => {
    setYear(data.year);
    setMonth(data.month);
  };
  const goPrev = () => {
    setYearMonth(getPrevYearMonth({ year, month }));
  };
  const goNext = () => {
    setYearMonth(getNextYearMonth({ year, month }));
  };
  const goToday = () => {
    setYearMonth(today);
  };
  return (
    <div className="calendar">
      <MonthWrapper
        goPrev={goPrev}
        goNext={goNext}
        goToday={goToday}
        year={year}
        month={month}
        todayStr={todayStr}
      />
    </div>
  );
}

export default Calendar;
