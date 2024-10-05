import React, { useEffect, useState } from "react";

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const fetchapi = async () => {
    const res = await fetch("http://localhost:3000/menu");
    const data = await res.json();
    setMenuItems(data);
    console.log(data);
  };
  useEffect(() => {
    fetchapi();
  }, []);
  return (
    <div>
      <h1 className="text-3xl font-extrabold text-center">Menu</h1>
      <div className="flex flex-wrap gap-4 justify-center">
        {menuItems.map((item) => {
          return (
            <div
              key={item._id}
              className="border p-2 bg-cyan-300 shadow-sm hover:scale-105 duration-200 "
            >
              <img
                src={item.image}
                alt="image"
                className="h-[200px] w-[200px]"
              />
              <h1 className="text-xl font-bold">{item.name}</h1>
              <h2>Price: ₹{item.price}</h2>
              <h2>Total Sales: {item.num_sales}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
