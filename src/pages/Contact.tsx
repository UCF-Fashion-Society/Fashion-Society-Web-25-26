
const Contact = () => {
    return(
         <div className="flex flex-col items-start">
           <img
          src="/Contact.svg"
          alt="temp img"
          className="w-[80vw] lg:w-[40vw]"
        />
           <div className="ml-10 lg:ml-[5vw] mx-10 mb-8 text-left text-[#373333] font-['Inter'] font-light text-md lg:text-xl ">
            <p className="lg:mb-4">
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
            <br/>
             <p>
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
            <br/>
             <p className="lg:py-5">
              <a
              href = "https://discord.gg/z5RBET7mAf"
              target = "_blank"
              rel="noopener noreferrer"
              className = "underline"
              >
                JOIN OUR DISCORD
              </a>
            </p>
            <br/>
            <p>
              <span className="font-bold">EMAIL:  </span>fashionsocietyucf@gmail.com  
            </p>
            </div>
         </div>
        
        
    );
};
export default Contact;