
const Contact = () => {
    return(
         <div className="flex flex-col items-start">
            <div className = "top-10 left-5 w-185 h-64 bg-[url('/Contact.svg')] bg-center"></div>
            <p className="mx-10 mb-8 text-[#373333] font-['Inter'] font-light text-xl">
              <span className="font-bold">INSTAGRAM:  </span>
               <a
              href = "https://www.instagram.com/fashionsocietyucf/"
              target = "_blank"
              rel="noopener noreferrer"
              className = "underline"
              >
              @fashionsocietyucf  
              </a>
            </p>
             <p className="mx-10 my-8 text-[#373333] font-['Inter'] font-light text-xl">
              <span className="font-bold">TIKTOK:  </span>  
               <a
              href = "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.tiktok.com/%40ucfashionsociety&ved=2ahUKEwiN3uz66qmQAxWARTABHcGYGLUQFnoECCQQAQ&usg=AOvVaw3rWuMdOrXONwn-9Kzbqkb8"
              target = "_blank"
              rel="noopener noreferrer"
              className = "underline"
              >
                @ucfashionsociety
              </a>
            </p>
             <p className="mx-10 my-8 text-[#373333] font-['Inter'] font-bold text-xl">
              <a
              href = "https://discord.gg/5Ggp7WfW"
              target = "_blank"
              rel="noopener noreferrer"
              className = "underline"
              >
                JOIN OUR DISCORD
              </a>
            </p>
            <p className="mx-10 my-8 text-[#373333] font-['Inter'] font-light text-xl">
              <span className="font-bold">EMAIL:  </span>fashionsocietyucf@gmail.com  
            </p>
            
         </div>
        
        
    );
};
export default Contact;