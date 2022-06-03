import React, { useContext, useState } from "react";
import MyContext from "../context/MyContext";

function Header() {
  const [hidePage, setHidePage] = useState([]);
  const {languageData} = useContext(MyContext)
  const {header} = languageData 
  return (
    <div id="Header" className="mx-12 lg:mx-60 pt-60 items-center justify-center lg:w-1/2 text-justify">
      <div className="flex flex-col">
        <code className="text-lightblue_vs">{header.message}</code>
        <code className="text-[#e6f1ff] text-7xl mt-5">{header.name}</code>
      </div>
     <a href="https://github.com/FelipeJhordan" target='_blank' rel="noreferrer">
     <button
        className="border border-lightblue_vs text-lightblue_vs mt-10 p-3 rounded hover:bg-opacity-10 hover:bg-lightblue_vs w-1/2"
      >
        <code>{header.buttonText}</code>
      </button>
     </a>
    </div>
  );
}

export default Header;
