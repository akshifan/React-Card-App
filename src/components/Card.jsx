import { Heart, MessageCircle, Share } from "lucide-react";
import twitter from "../assets/twitter-line.svg";
import facebook from "../assets/facebook-line.svg";
import instagram from "../assets/instagram-line.svg";
import youtube from "../assets/youtube-line.svg";
import { Message } from "./Message";
import { useContext, useEffect, useState } from "react";
import { CardContext } from "../context/CardContext";

function Card({ id, name, role, profilePic, likeCount, messages, shares, liked, subscribed, demo=false }) {   // props from Home.jsx

  const {toggleLike, toggleSubscribe, deleteCard} = useContext(CardContext);
  const [show, setShow] = useState(false);   // for message bow to showup
  const [confirmOpen, setConfirmOpen] = useState(false); // for delete confirmation box to showup



const [demoLiked, setDemoLiked] = useState(liked);
const [demoSubscribed, setDemoSubscribed] = useState(subscribed);
const [demoLikeCount, setDemoLikeCount] = useState(likeCount);

const finalLiked = demo ? demoLiked : liked;
const finalSubscribed = demo ? demoSubscribed : subscribed;
const finalLikeCount = demo ? demoLikeCount : likeCount;
 

  const showMessage = () => {
    setShow(true);      // clicking on message-> message box is now visible
  }

  return (
    <div className="card" 
      style={{
        background: finalSubscribed ? "lightgrey" : ""}}>

      <div className="card-top"
      style={{
        background: finalSubscribed ? "linear-gradient(135deg, #1e1e1e, #2a2a2a, #d4af37)" : ""}}>
      <img className="img" src={profilePic} alt="card" />
      </div>

      <h2>{name}</h2>
      <p className="text">{role}</p>

      <div className="social-icons">
      <div className="icon fb">
        <a 
          href="https://www.facebook.com" 
          target="_blank" >
          <img src={facebook} alt="Facebook"style={{ width: "24px", height: "24px" }}/>
          </a>
      </div>

      <div className="icon tw">
        <a href="https://www.twitter.com" 
        target="_blank" >
        <img src={twitter} alt="Twitter" style={{ width: "24px", height: "24px" }}/>
        </a>
      </div>

      <div className="icon ig">
        <a href="https://www.instagram.com"
        target="_blank">
        <img src={instagram} alt="Instagram" style={{ width: "24px", height: "24px" }}/>
        </a>
      </div>
  
      <div className="icon yt">
        <a href="https://www.youtube.com"
        target="_blank">
        <img src={youtube} alt="YouTube" style={{ width: "24px", height: "24px" }}/>
        </a>
      </div>
      </div>


      <div className="card-button">
        <button style={{
          background: finalSubscribed ? "linear-gradient(135deg, #1e1e1e, #2a2a2a, #d4af37)" : ""}} 
          onClick={() => {
            if(demo){
              setDemoSubscribed(prev => !prev);
            } else {
              toggleSubscribe(id);
            }
          }}>
          {finalSubscribed ? "Subscribed" : "Subscribe"}
        </button>
          {!demo && (
        <button
          style={{
          background: finalSubscribed ? "linear-gradient(135deg, #1e1e1e, #2a2a2a, #d4af37)" : ""}}
          onClick={showMessage } >Message</button>
          )}
      </div>
      
      {show && <Message show={show} setShow={setShow}/>} {/*passing visibility of message box to Message.jsx*/}
      

      <div className="card-bottom"> 
        <p className="text">
        <button 
          onClick={() => {
            if (demo) {
    setDemoLiked(prev => {
      const newLiked = !prev;

      setDemoLikeCount(count =>
        newLiked ? count + 1 : count - 1
      );

      return newLiked;
    });
  }  else {
              toggleLike(id);
            }
          }}>
          <Heart color={finalLiked ? "red" : "black"} 
          fill={finalLiked ? "red" : "none"}
          style={{ transition: "0.2s" }}/> 
          {finalLikeCount}
        </button>
        </p>

      <p className="text"><button><MessageCircle /> {messages}</button></p>
      <p className="text"><button><Share /> {shares}</button></p>
      </div>

          {!demo && (
      <button className="p-2 w-full mt-auto cursor-pointer   text-black bg-linear-to-r from-blue-200 to-blue-800" 
        style={{
        background : finalSubscribed ? "linear-gradient(135deg, #1e1e1e, #2a2a2a, #d4af37)" : "" , color : subscribed? "white" : ""}}
        onClick={() => setConfirmOpen(true)}>
        Delete
      </button>
          )}

      {confirmOpen && (
    <div className="confirm-overlay">
    <div className="confirm-box">
      <p>Are you sure you want to delete?</p>

      <div className="confirm-buttons">
        <button className="p-3 w-full rounded-2xl border-2 m-4 text-amber-950 bg-gray-200 font-bold"
          onClick={() => {
            deleteCard(id);
            setConfirmOpen(false);
          }}
        >
          Yes
        </button>

        <button className="p-3 w-full rounded-2xl border-2 m-4 text-amber-950 bg-gray-200 font-bold"
        onClick={() => setConfirmOpen(false)}>
          Cancel
        </button>
        
      </div>
    </div>
  </div>
)}
    </div>
  );
}


export default Card;