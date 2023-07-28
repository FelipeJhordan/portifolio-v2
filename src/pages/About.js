import { IdentificationIcon } from "@heroicons/react/solid";
import React, {
  useContext,
  useState
} from "react";
import MyContext from "../context/MyContext";

const AngularLogo = require("../assets/logos/AngularLogo.png");
const ReactLogo = require("../assets/logos/ReactLogo.png");
const TypescriptLogo = require("../assets/logos/TypescriptLogo.png");
const JsLogo = require("../assets/logos/JsLogo.png"); 
const NestLogo = require("../assets/logos/NestLogo.png");
const AwsLogo = require("../assets/logos/AwsLogo.png");
const SqlLogo = require("../assets/logos/SqlLogo.png");
const SpringLogo = require("../assets/logos/SpringLogo.jpg");
const GoLogo = require("../assets/logos/GoLogo.png");
const MongoDBLogo = require("../assets/logos/MongoDBLogo.png");
const NodeJSLogo = require("../assets/logos/NodeJSLogo.png");
const DockerLogo = require("../assets/logos/DockerLogo.png");

const About = () => {
  const [hidePage, setHidePage] = useState([]);
  const {languageData} = useContext(MyContext)
  const {about} = languageData 
  return (
    <div
      id="About"
      className="mx-12 mt-60 lg:mx-60 items-center justify-center lg:w-1/2 text-justify"
    >
      <div>
        <div className="table">
          <IdentificationIcon className="h-5 w-5 mr-4 text-yellow_vs" />{" "}
          <code className="table-cell text-[#e6f1ff] text-3xl mt-5 whitespace-nowrap">
            {
              about.title
            }
          </code>
          <div className="table-cell border-b border-b-[#e6f1ff] border-opacity-25 w-full"></div>
        </div>
        <div className="text-[#a2aabc] text-lg mt-5">
          <code>
         {
           about.text.split("</br>").map((text) => {
             const newText = text.replace('</br>','')
             return <p key={newText+'3'}>
               {
                 newText
               }
             </p>
             
           })
         }



          </code>
          <br />
          <br />
          <code>{about.expert}</code>
          <div className="grid grid-cols-3 gap-2 text-sm mt-5 text-brown_vs">
            <div className="flex flex-row  mb-3">
              <img
                src={JsLogo}
                alt="Js Logo"
                className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
              />
              <code>JavaScript (ES6+)</code>
            </div>
            <div className="flex flex-row mb-3">
              <img
                src={NestLogo}
                alt="Nest Logo"
                className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
              />
              <code>Nest</code>
            </div>
            <div className="flex flex-row mb-3">
              <img
                src={ReactLogo}
                alt="React Logo"
                className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
              />
              <code>React</code>
            </div>
            <div className="flex flex-row mb-3">
              <img
                src={TypescriptLogo}
                alt="Typescript Logo"
                className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
              />
              <code>TypeScript</code>
            </div>
            <div className="flex flex-row  mb-3">
              <img
                src={AwsLogo}
                alt="Aws"
                className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
              />
              <code>AWS</code>
            </div>
            <div className="flex flex-row mb-3">
              <img
                src={SpringLogo}
                alt="Spring Logo"
                className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
              />
              <code>Spring</code>
            </div>
            <div className="flex flex-row  mb-3">
              <img
                src={AngularLogo}
                alt="Angular Logo"
                className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
              />
              <code>Angular</code>
            </div>
            <div className="flex flex-row mb-3">
              <img
                src={GoLogo}
                alt="Git Logo"
                className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
              />
              <code>Golang</code>
            </div>
            <div className="flex flex-row mb-3">
              <img
                src={NodeJSLogo}
                alt="NodeJS Logo"
                className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
              />
              <code>Nodejs</code>
            </div>
            <div className="flex flex-row mb-3">
              <img
                src={SqlLogo}
                alt="SQL Logo"
                className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
              />
              <code>SQL</code>
            </div>
            <div className="flex flex-row mb-3">
              <img
                src={MongoDBLogo}
                alt="MongoDB Logo"
                className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
              />
              <code>MongoDB</code>
            </div>
            <div className="flex flex-row mb-3">
              <img
                src={DockerLogo}
                alt="MongoDB Logo"
                className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
              />
              <code>Docker</code>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
