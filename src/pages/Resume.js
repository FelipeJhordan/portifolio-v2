import { ClipboardListIcon } from "@heroicons/react/solid";
import { useContext } from "react";
import MyContext from '../context/MyContext';

const Resume = () => {
  const {languageData} = useContext(MyContext)
  const {resume} = languageData 

  return (
    <div
      id="Resume"
      className="lg:w-1/2 mt-64 mb-4 text-justify mx-12 lg:mr-60 lg:ml-auto"
    >
      <div>
        <div className="table">
          <ClipboardListIcon className="h-5 w-5 mr-4 text-yellow_vs" />{" "}
          <code className="table-cell text-[#e6f1ff] text-3xl mt-5 whitespace-nowrap">
            {resume.title}
          </code>
          <div className="table-cell border-b border-b-[#e6f1ff] border-opacity-25 w-full"></div>
        </div>
      </div>
      <div className="text-[#a2aabc] text-lg mt-5">
        <div className="flex flex-row">
          <div className="w-1/4">
            <code className="text-yellow_vs">{resume.education.title}</code>
          </div>
         <div className="flex flex-col w-3/4">
         <div className="">
            <code className="text-blue_vs">{resume.education.list[0].title}</code>
            <br />
            <code className="italic text-sm text-lightblue_vs">
            {resume.education.list[0].place}
            </code>
            <br />
            <code className="text-xs text-brown_vs">
              • {resume.education.list[0].date}
            </code>
          </div>
          
          <div className="">
            <code className="text-blue_vs">{resume.education.list[1].title}</code>
            <br />
            <code className="italic text-sm text-lightblue_vs">
            {resume.education.list[1].place}
            </code>
            <br />
            <code className="text-xs text-brown_vs">
              • {resume.education.list[1].date}
            </code>
          </div>
         </div>
        </div>
        <div className="flex flex-row pt-10">
          <div className="w-1/4">
            <code className="text-yellow_vs">{
              resume.jobs.title
            }</code>
          </div>
         <div className="flex flex-col w-3/4">
         
          {
            resume.jobs.list.map(job => (
              <>
                 <div className="w-3/4">
            <code className="text-blue_vs">{
              job.title
            }</code>
            <br />
            <code className="italic text-sm text-lightblue_vs">
              {
              job.place
              }
            </code>
            <br />
            <code className="text-xs text-brown_vs">• {
              job.date
            }</code>
            <br />
            <code className="text-sm">
              <br /> {job.details}
            </code>
          </div>
          <br/>
              </>
            ))
          }
        </div>
        </div>
        <div className="flex flex-row pt-10 flex-wrap">
          <div className="w-1/4">
            <code className="text-yellow_vs">Skills</code>
          </div>
          <div className="w-3/4">
            <code className="text-sm">
              {
                resume.skills.list.map(skill => {
                  return (
                   <>
                     <br />• {skill}
                   </>
                  )
                })
              }
            </code>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center m-5">
      <a href={require("../assets/curriculo/cv-backend-felipe-atualizado.pdf")} download="cv-backend-felipe_atualizado" className="hover:text-gray-400	text-grey-darkest">
      <button className="bg-grey-light text-gray-400	hover:text-slate-100		 hover:bg-light text-gray-400  font-bold py-2 px-4 rounded inline-flex items-center">
  <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
  <span className="">{resume.download}</span>
</button>
      </a>  
      </div>
    </div>
  );
};

export default Resume;
