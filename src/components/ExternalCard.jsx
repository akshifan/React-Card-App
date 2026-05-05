import React, { useState, useEffect, useContext } from 'react'
import Card from './Card';
import { CardContext } from '../context/CardContext';

export const ExternalCard = () => {  // props of card data from Search.jsx 

    const { cards, deleteCard, toggleLike, toggleSubscribe } = useContext(CardContext);
    const [input, setinput] = useState("");
    const [result, setresult] = useState([]);
    const [search, setsearch] = useState(false)
    const [mode, setMode] = useState(""); 

    const inputHandler = (e) => {
        setinput(e.target.value);   
    }

    useEffect(() => {
    const delay = setTimeout(async () => {

    if (!input.trim()) {
      setresult([]);
      setsearch(false);
      return;
    }

    const filtered = cards.filter(card =>
      card.name.toLowerCase().includes(input.toLowerCase())
    );

    if (filtered.length > 0) {
      setresult(filtered);
      setMode("card");
      setsearch(true);
      return;
    }

    try {
      const res = await fetch(
        `https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${input}`
      );
      const data = await res.json();

      if (data.player) {
        setresult(data.player);
        setMode("player");
      } else {
        setresult([]);
        setMode("");
      }
    }
     catch (err) {
      console.log(err);
      setresult([]);
      setMode("");
    }
    setsearch(true);
  }, 400);

  return () => clearTimeout(delay);
}, [input, cards]);

  return (
    
    <div className="border border-[hsl(0,0%,85%)] bg-[hsl(0,0%,83%)] shadow-[0_5px_10px_hsla(0,0%,50%,0.727)] p-4 sm:p-6 flex flex-wrap flex-col gap-7 rounded-2xl m-4 mt-14">

    <h2 className="text-xl sm:text-xl text-center font-extrabold mb-4">
      Search Cards and Players
    </h2>

    <div className="flex flex-col sm:flex-row justify-center items-center gap-3">

    <input
      className=" sm:w-72 md:w-96 bg-gray-400 border-2 p-3 rounded-2xl focus:outline-none"
      onChange={inputHandler}
      type="text"
      placeholder="Enter card name"
    />
    </div>

    <div className="flex flex-wrap justify-center gap-4 mt-6">
      {search &&         // if search is true and results exists? showing results
        (result.length > 0 ? (
          mode === "card" ? (
           result.map((card) => (
            <Card
            key={`search-${card.id}`}  //unique key for React
            {...card}
            deleteCard={deleteCard}
            toggleLike={toggleLike}
            toggleSubscribe={toggleSubscribe}
            />
        ))) : (
       <div className="flex flex-wrap  gap-4 mt-5">
        {result.map((player) => (
          <div
            key={player.idPlayer}
            className="border border-[hsl(0,0%,72%)] bg-[hsl(0,0%,95%)] shadow-[0_5px_10px_hsla(0,0%,50%,0.727)] rounded-xl p-4 w-72 text-center"
          >
          <img
            src={player.strThumb}
            alt={player.strPlayer}
            className="w-full object-cover rounded-3xl"
          />

          <div className='p-5'>
            <h1 className="font-bold text-2xl">{player.strPlayer}</h1>
            <p className="text-sm text-gray-600 mt-2">
              {player.strSport} | {player.strTeam} 
            </p>

            <p className="text-sm mt-2 line-clamp-4">
              Born : {player.dateBorn} <br />
              Gender : {player.strGender} <br />
              Position : {player.strPosition} <br />
              Nationality : {player.strNationality}
            </p>
            </div>
          </div>
        ))}
      </div>
      )) : (
    <p className="text-center mt-4">Not Found</p>
  ))}

  </div>
  </div>
  );
};