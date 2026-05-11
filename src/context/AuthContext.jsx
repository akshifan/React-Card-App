import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(() => {
    return JSON.parse(
      localStorage.getItem("sessionUser")
    );
  });


  const signup = (data) => {
    localStorage.setItem("registeredUser", JSON.stringify(data));
    localStorage.setItem("sessionUser",JSON.stringify(data));
    setUser(data);
  };

  const login = (email, password) => {
    const storedUser = JSON.parse(localStorage.getItem("registeredUser"));

    if (
      storedUser &&
      storedUser.email === email &&
      storedUser.password === password
    ) {
      localStorage.setItem("sessionUser",JSON.stringify(storedUser));
      setUser(storedUser);
      return true;
    }

    return false;
  };

  const logout = () => {
    localStorage.removeItem("sessionUser");
    localStorage.removeItem("lastPath");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};