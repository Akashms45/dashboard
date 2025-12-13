import { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";

export const StateCards = () => {
  const [activeCard, setActiveCard] = useState(1);

  return (
    <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      <Cards
        id={1}
        activeCard={activeCard}
        setActiveCard={setActiveCard}
        titile="Total Projects"
        value="24"
        pilltext="5"
        trend="up"
        period="Increased from last month"
      />
      <Cards
        id={2}
        activeCard={activeCard}
        setActiveCard={setActiveCard}
        titile="Ended Projets"
        value="10"
        pilltext="6"
        trend="up"
        period="increased from last month"
      />
      <Cards
        id={3}
        activeCard={activeCard}
        setActiveCard={setActiveCard}
        titile="Running Projects"
        value="12"
        pilltext="2"
        trend="up"
        period="Increased from last month"
      />
      <Cards
        id={4}
        activeCard={activeCard}
        setActiveCard={setActiveCard}
        titile="Pending Projects"
        value="2"
        pilltext="2"
        trend="up"
        period="On Discuss"
      />
    </div>
  );
};

const Cards = ({
  titile,
  value,
  pilltext,
  trend,
  period,
  id,
  activeCard,
  setActiveCard,
}) => {
  const isActive = activeCard === id;

  return (
    <div
      onClick={() => setActiveCard(id)}
      className={`
        p-5 border rounded-2xl cursor-pointer transition-all mt-5
        
        
        ${isActive ? "bg-green-800 text-white" : "bg-white text-black"}
        `}
    >
      <div className="flex justify-between items-center">
        <h1 className="font-semibold ">{titile}</h1>
        <div
          className={`
            border rounded-full p-1 text-black
            ${isActive ? "border-white bg-white " : "border-stone-700 "}
          `}
        >
          <FiArrowUpRight />
        </div>
      </div>
      <div className="px-1 py-2">
        <h1 className="font-semibold text-4xl ">{value}</h1>
      </div>
      <div className="flex items-center gap-3 ">
        <div
          className={`
            flex items-center text-sm rounded-md px-1
            ${
              isActive
                ? "border-green-200 border text-green-200"
                : "border border-green-700 bg-green-50 text-green-500"
            }
          `}
        >
          <p>{pilltext}</p>
          <span>
            {trend === "up" ? <MdArrowDropUp /> : <MdArrowDropDown />}
          </span>
        </div>

        <p
          className={`text-xs ${
            isActive ? "text-green-200" : "text-green-500"
          }`}
        >
          {period}
        </p>
      </div>
    </div>
  );
};
