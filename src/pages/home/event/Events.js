import React from "react";
import { useHistory } from "react-router-dom";

const Events = ({ img, name, id, price, description }) => {
  const colors = ["#ffbd3e", "#ff7044", "#3ffcc0", "#A578F4", "#F4787C", "#78F4DD"];
  const activeColor = colors[Math.floor(Math.random() * colors.length)];
  let history = useHistory();
  const handleClick = () => {
    history.push(`/register/${name}`, { name, id: id, img: img, price: price, description: description });
  };

  return (
    <article
      style={{ backgroundColor: activeColor }}
      className="rounded-lg shadow-lg bg-yellow-500 cursor-pointer mx-3 sm:mx-0 "
    >
      <img src={img} alt="" className="rounded-t-lg h-52 object-cover w-full" />
      <div className="p-6">
        <h2 className="font-bold text-center mb-2 text-2xl text-white">
          {name} <br />
          <small>{description}</small>
          <h5>Price : {price}</h5>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" onClick={handleClick}>Book Now</button>
        </h2>
      </div>
    </article>
  );
};

export default Events;
