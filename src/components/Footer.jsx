import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-rose-500 p-4 text-center">
      © {currentYear} created by Elena Gregov. All rights reserved.
    </footer>
  );
}

export default Footer;
