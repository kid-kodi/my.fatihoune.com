import React from "react";
import { BiCart } from "react-icons/bi";
import { RiUserLine } from "react-icons/ri";

const Header = () => {
  return (
    <div className="relative bg-white border border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex align-center justify-between py-6">
          {/* Logo */}
          <h1 className="text-2xl text-orange-700">My Fatihoune</h1>
          <div className="flex align-center space-x-4">
            {/* Search Bar */}
            <div className="flex align-center space-x-2">
              <input
                className="text-lg border p-2 w-[500px] rounded-md"
                type="text"
                placeholder="Rechercher un produit"
              />
              <button className="text-lg bg-orange-500 text-white rounded-md px-2">
                Rechercher
              </button>
            </div>
            {/* Se connecter */}
            <a
              className="text-lg py-2 flex align-center text-center hover:text-orange-500"
              href="#/"
            >
              Se connecter
            </a>
            {/* S'enregistrer */}
            <a
              className="text-lg py-2 flex align-center text-center hover:text-orange-500"
              href="#/"
            >
              S'enregistrer
            </a>
            {/* Mon Compte */}
            {/* <a
              className="text-lg py-2 flex align-center text-center hover:text-orange-500"
              href="#/"
            >
              <RiUserLine className="w-7 h-7" />
              <span>Aymar Bly</span>
            </a> */}
            {/* Mon panier' */}
            <a
              href="#/"
              className="text-lg p-2 flex align-center space-x-2 text-center hover:text-orange-500"
            >
              <div className="relative">
                <BiCart className="w-7 h-7" />
                <span className="text-[10px] absolute top-[-5px] right-[-5px] z-10 bg-orange-500 text-white w-5 h-5 flex items-center justify-center rounded-full">
                  2
                </span>
              </div>
              <span>Mon panier</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
