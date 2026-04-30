import { useState } from "react";
import Card from "./components/Card";
import { cardData } from "./data/cardData";
import CreateCard from "./components/CreateCard";
import { ExternalCard } from "./components/ExternalCard";

const App = () => {
  const [cards, setCards] = useState(
    cardData.map(card => ({         // static card data from CardData.jsx
      ...card,                     // copies cards existing details
      liked: false,                 // new fields
      subscribed: false,
      likeCount: card.followers || 0
    }))
  );

  const [open, setOpen] = useState(false);    // card details form -> visibility(closed)

  // delete card
  const deleteCard = (id) => {
    setCards(prev => prev.filter(card => card.id !== id));       // from current cards array, keeping card.id -> !id
  };

  // add card
  const addCard = (newCard) => {           // recieves new card
    setCards(prev => [...prev,             // keep all existing cards in array 
    { ...newCard, id: Date.now(), liked:false, subscribed:false, likeCount: newCard.followers || 0 } ]); // ...newCard = adds form data from CreateCard.jsx and add to end of array
    setOpen(false);    // after creating card, adding card details from CLOSED
  };

  // updating of like details
  const toggleLike = (id) => {
    setCards(prev =>         // current cards array
      prev.map(card => {     // loop through every card inside it, returning new array
        if(card.id ===id) {  // update only selected card
          return {
            ...card,        // all cards details are copied here
            liked: !card.liked,   // true->false and false->true
            likeCount: card.liked ? card.likeCount -1 : card.likeCount +1   
          };
        }
        return card;
      }
    ));
  };

  // updating of subscribe button
  const toggleSubscribe = (id) => {
    setCards(prev =>         // current cards array
      prev.map(card =>        // loop through every card inside it, returning new array
        card.id === id
          ? { ...card, subscribed: !card.subscribed }
          : card
      )
    );
  };

  return (
    <div>
      <button className="p-3 rounded-2xl border-2 m-4 text-amber-950 bg-gray-200 font-bold active:scale-90" onClick={() => setOpen(true)}>
        + Create Card
      </button>

      {open && (
        <CreateCard addCard={addCard} setOpen={setOpen} />     // passing props to CreateCard.jsx with visibility of creating form and add function
      )}

      <div className="header">
        {cards.map((card) => (
          <Card              // for every object create card and props to Card.jsx
            key={card.id}    // tracking each item
            {...card}        // instead of eg-> name={card.name} role={card.role}
            deleteCard={deleteCard}   //below props are functions from App.jsx
            toggleLike={toggleLike}
            toggleSubscribe={toggleSubscribe}
          />
        ))}
      </div>
      <ExternalCard cards={cards} deleteCard={deleteCard} toggleLike={toggleLike} toggleSubscribe={toggleSubscribe} />  {/* passing same data and functions to ExternalCard.jsx*/}
    </div>
  );
};

export default App;