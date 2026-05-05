import { createContext, useState } from "react";
import { cardData } from "../data/cardData";

export const CardContext = createContext();

export const CardProvider = ({ children }) => {

  const [cards, setCards] = useState(
    cardData.map(card => ({
      ...card,
      liked: false,
      subscribed: false,
      likeCount: card.followers || 0
    }))
  );

  const [open, setOpen] = useState(false);
  
  const toggleLike = (id) => {
    setCards(prev =>
      prev.map(card =>
        card.id === id
          ? {
              ...card,
              liked: !card.liked,
              likeCount: card.liked
                ? card.likeCount - 1
                : card.likeCount + 1
            }
          : card
      )
    );
  };

  const toggleSubscribe = (id) => {
    setCards(prev =>
      prev.map(card =>
        card.id === id
          ? { ...card, subscribed: !card.subscribed }
          : card
      )
    );
  };

  const addCard = (newCard) => {
    setCards(prev => [
      ...prev,
      {
        ...newCard,
        id: Date.now(),
        liked: false,
        subscribed: false,
        likeCount: newCard.followers || 0
      }
    ]);
    setOpen(false);
  };

  const deleteCard = (id) => {
    setCards(prev => prev.filter(card => card.id !== id));
  };

  return (
    <CardContext.Provider
      value={{
        cards,
        deleteCard,
        toggleLike,
        toggleSubscribe,
        addCard,
        open,
        setOpen
      }}
    >
      {children}
    </CardContext.Provider>
  );
};