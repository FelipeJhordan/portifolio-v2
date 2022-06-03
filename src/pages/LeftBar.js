import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/solid";
import React, { useState } from "react";

const GitLogo = require("../assets/logos/GitLogo.png");
const LinkedinLogo = require("../assets/logos/LinkedinLogo.png");
const TwitterLogo = require("../assets/logos/TwitterLogo.png");
const MailLogo = require("../assets/logos/MailLogo.png");

const JSIcon = require("../assets/icons/JSIcon.png");
const TSIcon = require("../assets/icons/TSIcon.png");
const JAVAIcon = require("../assets/icons/JavaIcon.png");

const LeftBar = () => {

  const [showBackEnd, SetShowBackEnd] = useState(true);
  const [showFullStack, SetShowFullStack] = useState(true);
  const [showFront, SetShowFront] = useState(true);
  const [showProjectsList, SetShowProjectsList] = useState(true);

  const BackEnd = () => (
    <div>
      <a target='_blank' href="https://github.com/FelipeJhordan/blog-backend" rel="noreferrer">
        <div className="ml-12 flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] w-60">
          <img
            src={JSIcon}
            alt="JS Icon"
            className="w-7 mr-1  ml-4 text-yellow_vs"
          />
          <p>Blog back-end</p>
        </div>
      </a>
      <a target='_blank' href="https://github.com/FelipeJhordan/CADASTRO-PESSOAS-API-JAVA" rel="noreferrer">
        <div className="ml-12 flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] w-60">
          <img
            src={JAVAIcon}
            alt="JAVAIcon"
            className="w-7 mr-1  ml-4 text-yellow_vs"
          />
          <p>Cadastro-de-pessoas-API-JAVA</p>
        </div>
      </a>
      <a target='_blank' href="https://github.com/FelipeJhordan/API-REST-SPRING-WITH-TEST" rel="noreferrer">
        <div className="flex whitespace-nowrap items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] focus:bg-slate-300 ml-12 w-60">
          <img
            src={JAVAIcon}
            alt="JS Icon"
            className="w-7 mr-1  ml-4 text-yellow_vs"
          />
          <p>API-REST-SPRING-WITH-TEST</p>
        </div>
      </a>
      <a target='_blank' href="https://github.com/FelipeJhordan/lembreteVacina" rel="noreferrer">
        <div className="flex whitespace-nowrap items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] ml-12 w-60">
          <img
            src={TSIcon}
            alt="TS Icon"
            className="w-7 mr-1  ml-4 text-yellow_vs"
          />
          <p>lembreteVacina</p>
        </div>
      </a>
      <a target='_blank' href="https://github.com/FelipeJhordan/api-vendas-curso" rel="noreferrer">
        <div className="flex whitespace-nowrap items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] ml-12 w-60">
          <img
            src={TSIcon}
            alt="TS Icon"
            className="w-7 mr-1  ml-4 text-yellow_vs"
          />
          <p>api-vendas-curso</p>
        </div>
      </a>
      <a target='_blank' href="https://github.com/FelipeJhordan/nestjs-microservices" rel="noreferrer">
        <div className="flex whitespace-nowrap items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] ml-12 w-60">
          <img
            src={TSIcon}
            alt="TS Icon"
            className="w-7 mr-1  ml-4 text-yellow_vs"
          />
          <p>nestjs-microservices</p>
        </div>
      </a>
      <a target='_blank' href="https://github.com/FelipeJhordan/nest-course-introdution" rel="noreferrer">
        <div className="flex whitespace-nowrap items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] ml-12 w-60">
          <img
            src={TSIcon}
            alt="TS Icon"
            className="w-7 mr-1  ml-4 text-yellow_vs"
          />
          <p>nest-course-introdution</p>
        </div>
      </a>
      <a target='_blank' href="https://github.com/FelipeJhordan/nestjs-task-management" rel="noreferrer">
        <div className="flex whitespace-nowrap items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] ml-12 w-60">
          <img
            src={TSIcon}
            alt="TS Icon"
            className="w-7 mr-1  ml-4 text-yellow_vs"
          />
          <p>nestjs-task-management</p>
        </div>
      </a>
      <a target='_blank' href="https://github.com/FelipeJhordan/tdd-typescript-node" rel="noreferrer">
        <div className="flex whitespace-nowrap items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] ml-12 w-60">
          <img
            src={TSIcon}
            alt="TS Icon"
            className="w-7 mr-1  ml-4 text-yellow_vs"
          />
          <p>tdd-typescript-node</p>
        </div>
      </a>
      <a target='_blank' href="https://github.com/FelipeJhordan/NESTJS-CLEAN-NESTJS" rel="noreferrer">
        <div className="flex whitespace-nowrap items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] ml-12 w-60">
          <img
            src={TSIcon}
            alt="TS Icon"
            className="w-7 mr-1  ml-4 text-yellow_vs"
          />
          <p>NESTJS-CLEAN-NESTJS</p>
        </div>
      </a>
      <a target='_blank' href="https://github.com/FelipeJhordan/nestj-clean-arch-study" rel="noreferrer">
        <div className="flex whitespace-nowrap items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] ml-12 w-60">
          <img
            src={TSIcon}
            alt="TS Icon"
            className="w-7 mr-1  ml-4 text-yellow_vs"
          />
          <p>nestj-clean-arch-study</p>
        </div>
      </a>
      <a target='_blank' href="https://github.com/FelipeJhordan/PET-ADOPTION-FAIR" rel="noreferrer">
        <div className="flex whitespace-nowrap items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] ml-12 w-60">
          <img
            src={TSIcon}
            alt="TS Icon"
            className="w-7 mr-1  ml-4 text-yellow_vs"
          />
          <p>PET-ADOPTION-FAIR</p>
        </div>
      </a>
      <a target='_blank' href="https://github.com/FelipeJhordan/encurtador-url" rel="noreferrer">
        <div className="flex whitespace-nowrap items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] ml-12 w-60">
          <img
            src={TSIcon}
            alt="TS Icon"
            className="w-7 mr-1  ml-4 text-yellow_vs"
          />
          <p>encurtador-url</p>
        </div>
      </a>
      <a target='_blank' href="https://github.com/FelipeJhordan/portifolio-backend" rel="noreferrer">
        <div className="flex whitespace-nowrap items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] ml-12 w-60">
          <img
            src={TSIcon}
            alt="TS Icon"
            className="w-7 mr-1  ml-4 text-yellow_vs"
          />
          <p>portifolio-backend</p>
        </div>
      </a>
      <a target='_blank' href="https://github.com/FelipeJhordan/zebot-discord" rel="noreferrer">
        <div className="flex whitespace-nowrap items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] ml-12 w-60">
          <img
            src={TSIcon}
            alt="TS Icon"
            className="w-7 mr-1  ml-4 text-yellow_vs"
          />
          <p>zebot-discord</p>
        </div>
      </a>
      <a target='_blank' href="https://github.com/FelipeJhordan/aws-node-learning" rel="noreferrer">
        <div className="flex whitespace-nowrap items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] ml-12 w-60">
          <img
            src={TSIcon}
            alt="TS Icon"
            className="w-7 mr-1  ml-4 text-yellow_vs"
          />
          <p>aws-node-learning</p>
        </div>
      </a>
      <a target='_blank' href="https://github.com/FelipeJhordan/devhub-api" rel="noreferrer">
        <div className="flex whitespace-nowrap items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] ml-12 w-60">
          <img
            src={TSIcon}
            alt="TS Icon"
            className="w-7 mr-1  ml-4 text-yellow_vs"
          />
          <p>devhub-api</p>
        </div>
      </a>
      <a target='_blank' href="https://github.com/FelipeJhordan/node-challenges" rel="noreferrer">
        <div className="flex whitespace-nowrap items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] ml-12 w-60">
          <img
            src={TSIcon}
            alt="TS Icon"
            className="w-7 mr-1  ml-4 text-yellow_vs"
          />
          <p>node-challenges</p>
        </div>
      </a>
      <a target='_blank' href="https://github.com/FelipeJhordan/microservices-comunication.git" rel="noreferrer">
        <div className="flex whitespace-nowrap items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] ml-12 w-60">
          <img
            src={TSIcon}
            alt="TS Icon"
            className="w-7 mr-1  ml-4 text-yellow_vs"
          />
          <p>microservices-comunication</p>
        </div>
      </a>
    </div>
  );
  const FullStack = () => (
    <div>
      <a target='_blank' href="https://github.com/FelipeJhordan/nlw-2" rel="noreferrer">
        <div className="ml-12 flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] w-60">
          <img
            src={JSIcon}
            alt="JS Icon"
            className="w-7 mr-1  ml-4 text-yellow_vs"
          />
          <p>nlw-2</p>
        </div>
      </a>
      <a target='_blank' href="https://github.com/FelipeJhordan/provadaw1" rel="noreferrer">
        <div className="ml-12 flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] w-60">
          <img
            src={JSIcon}
            alt="JAVAIcon"
            className="w-7 mr-1  ml-4 text-yellow_vs"
          />
          <p>PROVA DAW1</p>
        </div>
      </a>
      <a target='_blank' href="https://github.com/FelipeJhordan/nlw-heat" rel="noreferrer">
        <div className="flex whitespace-nowrap items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] focus:bg-slate-300 ml-12 w-60">
          <img
            src={JSIcon}
            alt="JS Icon"
            className="w-7 mr-1  ml-4 text-yellow_vs"
          />
          <p>nlw-heat</p>
        </div>
      </a>
      <a target='_blank' href="https://github.com/FelipeJhordan/projeto-final-webmoderno" rel="noreferrer">
        <div className="flex whitespace-nowrap items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] ml-12 w-60">
          <img
            src={JSIcon}
            alt="TS Icon"
            className="w-7 mr-1  ml-4 text-yellow_vs"
          />
          <p>projeto-final-webmoderno</p>
        </div>
      </a>
      <a target='_blank' href="https://github.com/FelipeJhordan/nlw-8" rel="noreferrer">
        <div className="flex whitespace-nowrap items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] ml-12 w-60">
          <img
            src={TSIcon}
            alt="TS Icon"
            className="w-7 mr-1  ml-4 text-yellow_vs"
          />
          <p>nlw-8</p>
        </div>
      </a>
    </div>
  );
  const FrontEnd = () => (
    <div>
      <a target='_blank' href="https://github.com/FelipeJhordan/project-chat" rel="noreferrer">
        <div className="ml-12 flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] w-60">
          <img
            src={JSIcon}
            alt="JS Icon"
            className="w-7 mr-1  ml-4 text-yellow_vs"
          />
          <p>project-chat</p>
        </div>
      </a>
      <a target='_blank' href="https://github.com/FelipeJhordan/angular-clonenetflix" rel="noreferrer">
        <div className="ml-12 flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] w-60">
          <img
            src={TSIcon}
            alt="JAVAIcon"
            className="w-7 mr-1  ml-4 text-yellow_vs"
          />
          <p>angular-clonenetflix</p>
        </div>
      </a>
      <a target='_blank' href="https://github.com/FelipeJhordan/rede-social-connecta-dev" rel="noreferrer">
        <div className="flex whitespace-nowrap items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] focus:bg-slate-300 ml-12 w-60">
          <img
            src={JSIcon}
            alt="JS Icon"
            className="w-7 mr-1  ml-4 text-yellow_vs"
          />
          <p>rede-social-connecta-dev</p>
        </div>
      </a>
      <a target='_blank' href="https://github.com/FelipeJhordan/LANDING_PAGE" rel="noreferrer">
        <div className="flex whitespace-nowrap items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] focus:bg-slate-300 ml-12 w-60">
          <img
            src={JSIcon}
            alt="JS Icon"
            className="w-7 mr-1  ml-4 text-yellow_vs"
          />
          <p>LANDING_PAGE</p>
        </div>
      </a>
      <a target='_blank' href="https://github.com/FelipeJhordan/Angular-Review" rel="noreferrer">
        <div className="flex whitespace-nowrap items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] ml-12 w-60">
          <img
            src={TSIcon}
            alt="TS Icon"
            className="w-7 mr-1  ml-4 text-yellow_vs"
          />
          <p>Angular-Review</p>
        </div>
      </a>
      <a target='_blank' href="https://github.com/FelipeJhordan/portifolio" rel="noreferrer">
        <div className="flex whitespace-nowrap items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] ml-12 w-60">
          <img
            src={JSIcon}
            alt="TS Icon"
            className="w-7 mr-1  ml-4 text-yellow_vs"
          />
          <p>portifolio versão 1</p>
        </div>
      </a>
    </div>
  );

  return (
    <div className="text-[#a2aabc] text-lg mt-5 flex bg-[#262526] h-full">
      <div className="pb-4 h-75 overflow-auto h-5/6">
        <div
          className="flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] font-bold w-72"
          onClick={() => SetShowProjectsList(!showProjectsList)}
        >
          {showProjectsList ? (
            <ChevronDownIcon className="w-7 mr-1" />
          ) : (
            <ChevronRightIcon className="w-7 mr-1" />
          )}
          <p>Projects</p>
        </div>
        {showProjectsList ? (
          <>
            <div
              className="flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] font-bold w-72"
              onClick={() => SetShowBackEnd(!showBackEnd)}
            >
              {showBackEnd ? (
                <ChevronDownIcon className="w-7 mr-1  ml-5" />
              ) : (
                <ChevronRightIcon className="w-7 mr-1  ml-5" />
              )}

              <p>Back-end</p>
            </div>
            {showBackEnd ? <BackEnd /> : null}
            <div
              className="flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] font-bold w-72"
              onClick={() => SetShowFullStack(!showFullStack)}
            >
              {showBackEnd ? (
                <ChevronDownIcon className="w-7 mr-1  ml-5" />
              ) : (
                <ChevronRightIcon className="w-7 mr-1  ml-5" />
              )}

              <p>Full-stack</p>
            </div>
            {showFullStack ? <FullStack /> : null}
            <div
              className="flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] font-bold w-72"
              onClick={() => SetShowFront(!showFront)}
            >
              {showFront ? (
                <ChevronDownIcon className="w-7 mr-1  ml-5" />
              ) : (
                <ChevronRightIcon className="w-7 mr-1  ml-5" />
              )}

              <p>Front-end</p>
            </div>
            {showFront ? <FrontEnd /> : null}
          </>
        ) : null}
      </div>
        <div className="absolute inset-x-0 bottom-6  right-0">
          <div className="flex px-6 space-x-7">
            <a target='_blank' href="https://github.com/FelipeJhordan" rel="noreferrer">
              <img
                src={GitLogo}
                alt="Git Logo"
                className="h-10 w-10 text-yellow_vs hover:cursor-pointer hover:h-12 hover:w-12"
              />
            </a>
            <a target='_blank' href="https://twitter.com/FelipeJhordan" rel="noreferrer">
              <img
                src={TwitterLogo}
                alt="Kaggle Logo"
                className="h-10 w-10 text-yellow_vs hover:cursor-pointer hover:h-12 hover:w-12"
              />
            </a>
            <a target='_blank' href="https://www.linkedin.com/in/felipe-jhordan-maciel-alves-5b191917b/" rel="noreferrer">
              <img
                src={LinkedinLogo}
                alt="Linkedin Logo"
                className="h-10 w-10 text-yellow_vs hover:cursor-pointer hover:h-12 hover:w-12"
              />
            </a>
            <a target='_blank' href="mailto:felipejordan.alves@gmail.com?subject=Assunto" rel="noreferrer">
              <img
                src={MailLogo}
                alt="Mail Logo"
                className="h-10 w-10 text-yellow_vs hover:cursor-pointer hover:h-12 hover:w-12"
              />
            </a>
          </div>
        </div>
    </div>
  );
};

export default LeftBar;
