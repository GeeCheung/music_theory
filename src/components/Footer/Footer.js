import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div>
      <footer>{`Copyright © GeeMusic_Theory ${year}`}</footer>
    </div>
  );
};

export default Footer;
