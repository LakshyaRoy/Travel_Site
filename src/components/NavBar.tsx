"use client";
import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS } from "../../Contants";
import Button from "./Button";
import { useState } from "react";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="max-container padding-container relative z-30 py-5 flexBetween">
      <Link href="/">
        <Image
          src="../hilink-logo.svg"
          alt="Hilink Logo"
          width={74}
          height={29}
        />
      </Link>
      <ul className=" hidden h-full gap-12 lg:flex ">
        {NAV_LINKS.map((links) => (
          <Link
            href={links.href}
            key={links.key}
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {links.label}
          </Link>
        ))}
      </ul>
      <div className="lg:flexCenter hidden">
        <Button
          type="button"
          title="Login"
          icon="./user.svg"
          variant="btn_dark_green"
        />
      </div>
      <div className="lg:hidden">
        <Image
          src="./menu.svg"
          alt="menu"
          width={32}
          height={32}
          className="lg:hidden inline-block cursor-pointer relative"
          onClick={toggleMenu}
        />
        {menuOpen && (
          <div className="  sm-full sm:flex xs:flex flex-col items-end absolute top-14 right-5 gap-2 p-1 max-xs:flex ">
            {NAV_LINKS.map((links) => (
              <span>
                <Link
                  href={links.href}
                  key={links.key}
                  className=" hover:font-bold text-gray-50"
                >
                  {links.label}
                </Link>
              </span>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
