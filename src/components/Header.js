import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Header() {
  return (
    <div>
      <h1>Header</h1>
      <section className="main">
        <Outlet />
      </section>
    </div>

  );
}

export default Header;
