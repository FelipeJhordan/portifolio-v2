import React, { useContext, useState } from "react";
import AnimatedText from 'react-animated-text-content';
import MyContext from "../context/MyContext";


function Header() {
  const [hidePage, setHidePage] = useState([]);
  const { languageData } = useContext(MyContext)
  const { header } = languageData
  return (
    <div id="Header" className="mx-12 lg:mx-60 pt-60 items-center justify-center lg:w-1/2 text-justify">
      <div className="flex flex-col z-0">
        <AnimatedText
          type="words" // animate words or chars
          animation={{
            x: '200px',
            y: '-20px',
            scale: 1.1,
            ease: 'ease-in',
          }}
          animationType="float"
          interval={0.06}
          duration={0.8}
          tag="code"
          className="animated-paragraph text-lightblue_vs "
          includeWhiteSpaces
          threshold={0.1}
          rootMargin="20%"
        >
          {header.message}
        </AnimatedText>
        <AnimatedText
          type="words" // animate words or chars
          animation={{
            y: '-20px',
            duration: 0.05,
            interval: 0.8,
          }}
          animationType="lights"
          interval={1}
          duration={0}
          tag="code"
          className="animated-paragraph text-[#e6f1ff] text-7xl mt-5"
          includeWhiteSpaces
          threshold={0.1}
          rootMargin="20%"
        >
          {header.name}
        </AnimatedText>
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
