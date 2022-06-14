import { useContext, useState } from "react";
import tw from "tailwind-styled-components";
import MyContext from "../context/MyContext";
import About from "./About";
import Contact from "./Contact";
import Header from "./Header";
import LeftBar from "./LeftBar";
import MobileMenu from "./MobileMenu";
import NavBar from "./NavBar";
import Resume from "./Resume";


const LanguageButton  = tw.button`
  cursor-pointer
  font-medium
  px-5
  py-4
  uppercase
  place-self-baseline	
  right-0
  text-sky-100			  
  font-bold	
  top-0
  z-1000
  text-xl	
  hover:text-3xl	
  rounded
  fixed`

const Home = () => {
  const [showPage, setShowPage] = useState("home");
  const context = useContext(MyContext)


  return (
    <div id="home" className="App flex h-25 bg-[#1e1e1e] ">
      <LanguageButton onClick={context.setLanguage} style={{zIndex: "10000"}}>
      {
        context.currentLanguage
      }
    </LanguageButton>
      <div className="bg-[#262526] fixed h-full hidden lg:block z-50">
        <LeftBar />
      </div>
      <div className="bg-[#1e1e1e] lg:pl-72 h-full ">
        <div className="lg:hidden">
          <MobileMenu />
        </div>
        <div className="bg-[#424042] h-16 w-full fixed hidden lg:block z-50">
          <NavBar
            showPage={showPage}
            setShowPage={setShowPage}
          />
        </div>
        {showPage==="home" ? (
          <>
            <Header id="Header" />
            <About id="About" />
            <Resume id="Resume" />
            <Contact id="Contact" />{" "}
          </>
        ) : showPage==="about" ? (
          <About id="About" />
        ) : showPage==="resume" ? (
          <Resume id="Resume" />
        ) : showPage==="contact" ? (
          <Contact id="Contact" />
        ) : null}
      </div>
    </div>
  );
};

export default Home;
