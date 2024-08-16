
"use client";
import { Navbar } from "flowbite-react";
import { FaGithub } from "react-icons/fa";
import './Navbar.css'


export function Component() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="" className="">
        <img src="/logo-desktop.svg" className="logo-desktop mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <img src="/logo-mobile.svg" className="logo-mobile" alt="" />
      </Navbar.Brand>
        <Navbar.Toggle className="toggle" />
      <Navbar.Collapse className="navbar-collaps">
        <Navbar.Link href="#" className="uppercase font-bold">
        LEARNING PATHS
        </Navbar.Link>
        <Navbar.Link href="#" className="uppercase font-bold">CHALLENGES</Navbar.Link>
        <Navbar.Link href="#" className="uppercase font-bold">SOLUTIONS</Navbar.Link>
        <Navbar.Link href="#" className="uppercase font-bold">ARTICLES</Navbar.Link>
        <Navbar.Link href="#" className="uppercase font-bold">UNLOCK PRO</Navbar.Link>
        <div className="github-link">
        <Navbar.Link className="flex items-center font-bold text-white"><p className="hover:text-white">LOGIN WITH GITHUB</p> <FaGithub className="github text-white ml-2 text-xl" /></Navbar.Link>
        </div>
     </Navbar.Collapse>
  
    </Navbar>
  );
}
