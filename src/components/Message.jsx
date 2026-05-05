import { useState } from "react";

export const Message = ({ show, setShow}) => {  // just message box details

  const [text, settext] = useState("");
  const [liked, setLiked] = useState(false);
  const [follw, setfollw] = useState(111);

    const click = () => {

      if(text.trim() === "") {
        alert("Please enter a message before sending.");
        return;
      }
    alert("Message Sent Successfully!");
    setShow(false);
    }

    const inputHand= (e) => {
      console.log(e.target.value);
      settext(e.target.value);
    }

  return (
    <div className="message" >
      <input 
        type="text" 
        placeholder="Type your message..." 
        value={text}
        onChange={(e) => inputHand(e)}/>

      <p>{text}</p><br /><br />
      <button onClick={() => setLiked(!liked)}>
      {liked ? "❤️" : "🤍"}
    </button><br />

    <button onClick={() => setfollw(follw + 1)}>
      Followers {follw}
    </button><br />

    <button onClick={click}>Send</button>
    </div>
  )
}
