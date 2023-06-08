import React, { useContext, useEffect } from "react";

import CartContext from "../store/CartContext";
import MusicAlbums from "./album";

const Section = () => {
  const { fetchCartItems } = useContext(CartContext);

  useEffect(() => {
    fetchCartItems();
  }, []);

  return (
    <>
      <MusicAlbums />
    </>
  );
};

export default Section;
