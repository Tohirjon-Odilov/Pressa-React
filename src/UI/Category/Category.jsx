import React from "react";
import "./style.scss";

function Category() {
  return (
    <div className="category">
      {/* <div className="list-wrapper"> */}
      <div className="first-category">
        <h4>IT</h4>
        <ul>
          <li>
            <input type="checkbox" /> Web dasturlash
          </li>
          <li>
            <input type="checkbox" /> Mobile dasturlash
          </li>
        </ul>
        <h4>Dizayn</h4>
        <ul>
          <li>
            <input type="checkbox" /> UI/UX dizayn
          </li>
          <li>
            <input type="checkbox" /> Grafik dizayn
          </li>
        </ul>
        <h4>Biznes</h4>
        <ul>
          <li>
            <input type="checkbox" /> Menejment
          </li>
          <li>
            <input type="checkbox" /> Kredit va audit
          </li>
        </ul>
        <h4>Ta'lim</h4>
        <ul>
          <li>
            <input type="checkbox" /> Matematika
          </li>
          <li>
            <input type="checkbox" /> Fizika
          </li>
        </ul>
      </div>
      <div className="second-category">
        <h4>IT</h4>
        <ul>
          <li>
            <input type="checkbox" /> Web dasturlash
          </li>
          <li>
            <input type="checkbox" /> Mobile dasturlash
          </li>
        </ul>
        <h4>Dizayn</h4>
        <ul>
          <li>
            <input type="checkbox" /> UI/UX dizayn
          </li>
          <li>
            <input type="checkbox" /> Grafik dizayn
          </li>
        </ul>
        <h4>Biznes</h4>
        <ul>
          <li>
            <input type="checkbox" /> Menejment
          </li>
          <li>
            <input type="checkbox" /> Kredit va audit
          </li>
        </ul>
      </div>
      {/* </div> */}
    </div>
  );
}

export default Category;
