import "./Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      <footer>{`Copyright © GeeMusic_Theory ${year}`}</footer>
    </div>
  );
};

export default Footer;
