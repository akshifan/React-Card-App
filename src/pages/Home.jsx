import { useContext } from "react";
import Card from "../components/Card";
import { CardContext } from "../context/CardContext";

const Home = () => {
  
  const {cards, setOpen} = useContext(CardContext);

  return (
    <div>
        <button 
            className="p-3 rounded-2xl border-2  m-5 font-bold bg-gray-200" 
            onClick={() => setOpen(true)}>
                + Create Card
            </button>
            <div className="header">
                {cards.map(card => (
              <Card
              key={card.id}
              {...card} />
              ))}
            </div>
    </div>
  );
};

export default Home;