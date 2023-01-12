import React from "react";
import {
  img1,
  img2,
  img3,
  img4,
  user,
  time,
  visible,
  diagram,
  online,
  offline,
  ui,
  disign,
  calendar,
} from "../../utils";

function Items({ reverse }) {
  const users = [
    {
      title: "Alisher Isaevdan biznes va IT bo’yicha master klass",
      name: "Alisher Isaev",
      img: img1,
      logo: {
        user: user,
        time: time,
        visible: visible,
        diagram: diagram,
        online: online,
        offline: offline,
        ui: ui,
        disign: disign,
        calendar: calendar,
      },
      kasbi: "diagramkor",
      date: "17/01/2022",
      time: "15:00",
      type: "online",
      visible: "2550",
    },
    {
      title: "Jahongir G’ulamovdan master klass",
      name: "Jahongir G'ulomov",
      img: img2,
      logo: {
        user: user,
        time: time,
        visible: visible,
        diagram: diagram,
        online: online,
        offline: offline,
        ui: ui,
        disign: disign,
        calendar: calendar,
      },
      kasbi: "Grafik Dizayner",
      date: "17/01/2022",
      time: "15:00",
      type: "offline",
      visible: "2550",
    },
    {
      title: "Yuksalish loyihasi AQSHda ovozli suhbat",
      name: "Muhammadali Eshonqulov",
      img: img3,
      logo: {
        user: user,
        time: time,
        visible: visible,
        diagram: diagram,
        online: online,
        offline: offline,
        ui: ui,
        disign: disign,
        calendar: calendar,
      },
      kasbi: "Biznesmen",
      date: "17/01/2022",
      time: "21:00",
      type: "online",
      visible: "2550",
    },
  ];
  return (
    <>
      <ul className={reverse + " " + "card__list"}>
        {users.map((data, index) => (
          <li key={index} className="card__item">
            <img src={data.img} alt={data.name} />
            <h5>{data.title}</h5>
            <ul className="card__innerlist">
              <li className="card__inneritem">
                <img src={data.logo.user} />
                <strong>{data.name}</strong>
              </li>
              <li className="card__inneritem">
                <img src={data.logo.calendar} />
                <strong>{data.date}</strong>
              </li>
              <li className="card__inneritem">
                <img src={data.logo.online} />
                <strong>{data.type}</strong>
              </li>
              <li className="card__inneritem">
                <img src={data.logo.diagram} />
                <strong>{data.kasbi}</strong>
              </li>
              <li className="card__inneritem">
                <img src={data.logo.time} />
                <strong>{data.time}</strong>
              </li>
              <li className="card__inneritem">
                <img src={data.logo.visible} />
                <strong>{data.visible}</strong>
              </li>
            </ul>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Items;
