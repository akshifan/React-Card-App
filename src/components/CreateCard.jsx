import { useState } from "react";

const CreateCard = ({ addCard,setOpen }) => {  //props of addcard function and visibility of creating card form from App.jsx 
   const [form, setForm] = useState({
    name: "",
    role: "",
    followers: "",
    messages: "",
    shares: ""
  });

  const [image, setImage] = useState(null); // file
  const [preview, setPreview] = useState(null); // preview URL

  const handleChange = (e) => {  
    setForm(prev => ({  // typed input in create card form is added in prev and form data is updated
      ...prev,
      [e.target.name]: e.target.value   // targeting all inputs "name" eg->name="name" name="role" and what user typed 
    }));
  };

  // chatgpt (^-_-^)
  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend =() => {
      setPreview(reader.result);
    }
    reader.readAsDataURL(file);
  }
  };

  const handleSubmit = () => {    // during form submission
    console.log("FORM DATA:", form);
    if (!form.name || !form.role) {
      alert("Name & Role required");
      return;
    }

    addCard({      // current form data which is sent to  addCard function of App.jsx
      ...form,
      followers: parseInt(form.followers, 10) || 0,
      profilePic: preview || "https://randomuser.me/api/portraits/men/11.jpg"
    });
  };

  return (
    <div className="modal-overlay">
      <div className="modal">

        <h2>Create Card</h2>

        <input type="file" accept="image/*" onChange={handleImage} />

        {preview && (
          <img
            src={preview}
            alt="preview"
            style={{ width: "80px", borderRadius: "50%", margin: "10px" }}
          />
        )}

        <input name="name" placeholder="Name" onChange={handleChange} />
        <input name="role" placeholder="Role" onChange={handleChange} />
        <input name="followers" type="number" value={form.followers} placeholder="Followers" onChange={handleChange} />
        <input name="messages" placeholder="Messages" onChange={handleChange} />
        <input name="shares" placeholder="Shares" onChange={handleChange} />

        <div className="modal-buttons">
          <button className="px-2 border-2 rounded-2xl active:scale-90" onClick={handleSubmit}>Create</button>
          <button className="px-2 border-2 rounded-2xl active:scale-90" onClick={() => setOpen(false)}>Cancel</button> {/* clicking on cancel sets visibility of card form -> closed*/}
        </div>

      </div>
    </div>
  );
};

export default CreateCard;