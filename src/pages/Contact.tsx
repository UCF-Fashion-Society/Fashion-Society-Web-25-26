
const Contact = () => {
    return(
         <div className="flex flex-col items-start">
            <div className = "top-10 left-5 w-185 h-64 bg-[url('/F.svg')] bg-center"></div>
            <p className="mx-10 mb-8 text-[#373333] font-['Inter'] font-light text-xl">
              <span className="font-bold">INSTAGRAM:  </span>@fashionsocietyucf  
            </p>
             <p className="mx-10 my-8 text-[#373333] font-['Inter'] font-light text-xl">
              <span className="font-bold">TIKTOK:  </span>@ucfashionsociety  
            </p>
             <p className="mx-10 my-8 text-[#373333] font-['Inter'] font-bold text-xl">
              <a
              href = "https://discord.gg/5Ggp7WfW"
              target = "_blank"
              rel="noopener noreferrer"
              className = "hover:underline"
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