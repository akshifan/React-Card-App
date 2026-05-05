import { useContext } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import CreateCard from "./components/CreateCard";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Matches from "./pages/Matches";

import { Navbar } from "./components/Navbar";
import { CardContext } from "./context/CardContext";
import { LandingPage } from "./pages/LandingPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";

const App = () => {

  const {open} = useContext(CardContext);    // card details form -> visibility(closed)
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
        {open && <CreateCard /> }     
        
          <Routes>
            <Route path="/" element={<LandingPage />}/>
            <Route
              path="/login"
              element={
              <PublicRoute>
               <Login />
              </PublicRoute>
              }
            />

          <Route
            path="/signup"
            element={
            <PublicRoute>
              <Signup />
            </PublicRoute>
            }
          />
        
            <Route
          path="/app/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />

        <Route
          path="/app/search"
          element={
            <ProtectedRoute>
              <Search />
            </ProtectedRoute>
          }
        />

        <Route
          path="/app/matches"
          element={
            <ProtectedRoute>
              <Matches />
            </ProtectedRoute>
          }
        />
          </Routes>
        </div>
  );
};

export default App;