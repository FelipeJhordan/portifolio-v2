import { MailIcon } from "@heroicons/react/solid";
import { useContext, useState } from "react";
import MyContext from '../context/MyContext';

const Contact = () => {
  const context = useContext(MyContext)
  const {languageData} = useContext(MyContext)
  const {contact} = languageData 

  const [openModal, setOpenModal] = useState(false)

    const onContact = () => {
        setOpenModal(true)
    }   

    const onCloseModal = () => {
        setOpenModal(false)
    }

  return (
    <div id="Contact" className="pb-72 mt-36">
      <div className="table mx-12 lg:mx-60">
        <MailIcon className="h-5 w-5 mr-4 text-yellow_vs" />
        <code className="table-cell text-[#e6f1ff] text-3xl mt-5 whitespace-nowrap">
          { contact.title }
        </code>
        <div className="table-cell border-b border-b-[#e6f1ff] border-opacity-25 w-full"></div>
      </div>
      <div className="text-[#a2aabc] text-lg mt-5 mx-12 lg:mx-60 flex flex-col items-center text-justify">
        <code>
         {contact.message}
        </code>
        <button onClick={(e) => window.open("https://api.whatsapp.com/send?phone=5534996535688&text=Ola", "_blank")} className=" border border-lightblue_vs text-lightblue_vs mt-10 p-3 rounded hover:bg-opacity-10 hover:bg-lightblue_vs w-1/2">
         
            <code>{contact.contactButtonTitle}</code>
         
        </button>
        {/* {
              openModal ? <Modal hasChanged={openModal} hasClosed={onCloseModal} />: false
          } */}
      </div>
    </div>
  );
};

export default Contact;
