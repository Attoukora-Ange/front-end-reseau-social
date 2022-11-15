import React from "react";
import "../assets/css/navigation.css";
import Logo from "./navigation/Logo";
import RechercheImput from "./navigation/RechercheImput";
import Utilisateur from "./navigation/Utilisateur";

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="navigation_principale">
        <Logo />
        <RechercheImput />
        <Utilisateur />
      </div>
    </div>
  );
};

export default Navigation;
