import React, { useState,useEffect } from 'react'
import Card from './Card';      // searching card section

export const ExternalCard = ({cards, deleteCard, toggleLike, toggleSubscribe}) => {  // props of card data from App.jsx 
    const [input, setinput] = useState("");
    const [result, setresult] = useState([]);
    const [search, setsearch] = useState(false)

    const inputHandler = (e) => {
        setinput(e.target.value);   
    }
    const searchHandl = () => {
        if(!input.trim()) {       // if input value is null and searched -> keep as it is
            setresult([]);
            setsearch(false);
            return;
        }

        const filtered = cards.filter((card) => // card name matched to inputted name stored in filtered
            card.name.toLowerCase().includes(input.toLowerCase())
        );
        setresult(filtered); // result is now a card
        setsearch(true);     // card appears
    }
    useEffect(() => {  // chatgpt ( for keep in sync with main cards on above )
    if (search) {
      const filtered = cards.filter((card) =>
        card.name.toLowerCase().includes(input.toLowerCase())
      );
      setresult(filtered);
    }
  }, [cards]);

  return (
    <div className="bg-gray-200 p-4 sm:p-6 rounded-2xl m-4">

  <h2 className="text-lg sm:text-xl text-center font-bold mb-4">
    Search Cards
  </h2>

  <div className="flex flex-col sm:flex-row justify-center items-center gap-3">

    <input
      className=" sm:w-72 md:w-96 bg-gray-400 border-2 p-3 rounded-2xl focus:outline-none"
      onChange={inputHandler}
      type="text"
      placeholder="Enter card name"
    />

    <button
      className=" sm:w-auto bg-gray-500 text-white px-5 py-3 rounded-2xl active:scale-95"
      onClick={searchHandl}
    >
      Search
    </button>

  </div>

  <div className="flex flex-wrap justify-center gap-4 mt-6">
    {search &&         // if search is true and results exists? showing results
      (result.length > 0 ? (
        result.map((card) => (
          <Card
            key={`search-${card.id}`}  //unique key for React
            {...card}
            deleteCard={deleteCard}
            toggleLike={toggleLike}
            toggleSubscribe={toggleSubscribe}
          />
        ))
      ) : (
        <p className="text-center w-full mt-4 text-gray-600">
          Not Found
        </p>
      ))}
  </div>

</div>
  );
};