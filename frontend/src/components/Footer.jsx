import React from "react";
import '../assets/styles/footer.css'

export const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer-copyright">Copyright {new Date().getFullYear()}  . All Rights Reserved &copy; Ron Motola</p>
    </footer>
  );
};
