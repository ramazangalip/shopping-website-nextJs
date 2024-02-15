import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="hidden lg:block">
      <div className="container">
        <div className="flex w-fit gap-10 mx-auto font-medium py-4 text-blackish">
          <Link className="navbar__link relative" href="#">
            Anasayfa
          </Link>
          <Link className="navbar__link relative" href="#">
           Kategoriler
          </Link>
          <Link className="navbar__link relative" href="#">
            Erkekler
          </Link>
          <Link className="navbar__link relative" href="#">
            Kadınlar
          </Link>
          <Link className="navbar__link relative" href="#">
            Takılar
          </Link>
          <Link className="navbar__link relative" href="#">
            Parfümler
          </Link>
          <Link className="navbar__link relative" href="#">
            BLOG
          </Link>
          <Link className="navbar__link relative" href="#">
           Kampanyalar
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
