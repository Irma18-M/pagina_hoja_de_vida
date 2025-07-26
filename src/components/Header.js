import React from 'react';
import './Header.css';  // Importación del archivo CSS correspondiente

function Header() {
  return (
    <header>
      <img src="/imagen.jpg" alt="mi imagen" className="img-fluid" />
      <h1>Irma Dinora Moreno</h1>
      <p>Email: mdinora18@gmail.com | Teléfono: 51-21-89-14</p>
    </header>
  );
}

export default Header;
