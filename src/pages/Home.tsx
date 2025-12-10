export default function Home() {
  return (
    <div>
    <div className=" w-screen justify-items-start overflow-x-hidden">
          <div className = "w-full h-[50vh] lg:h-[90vh]   bg-cover bg-center bg-no-repeat bg-[url('/pictures/homePageBackground.JPG')] items-center">
            <img src="/FSTitle.svg" alt="Fashion Society" className="-ml-2 md:-ml-4 grow w-full py-4 h-auto"/>
          </div>
          <div className="max-w-full  h-4 md:h-6 lg:h-10 mt-1  text-[#373333] font-['Inter'] text-xs sm:text-sm md:text-md lg:text-2xl xl:text-3xl overflow-hidden whitespace-nowrap">
            FASHION SOCIETY FASHION SOCIETY FASHION SOCIETY FASHION SOCIETY FASHION SOCIETY FASHION SOCIETY FASHION SOCIETY FASHION SOCIETY FASHION SOCIETY FASHION SOCIETY FASHION SOCIETY FASHION SOCIETY FASHION SOCIETY FASHION SOCIETY FASHION SOCIETY FASHION SOCIETY FASHION SOCIETY FASHION SOCIETY FASHION SOCIETY FASHION SOCIETY FASHION SOCIETY FASHION SOCIETY FASHION SOCIETY FASHION SOCIETY FASHION SOCIETY FASHION SOCIETY FASHION SOCIETY FASHION SOCIETY FASHION SOCIETY FASHION SOCIETY FASHION SOCIETY FASHION SOCIETY FASHION SOCIETY FASHION SOCIETY FASHION SOCIETY FASHION SOCIETY 
          </div>
          <hr className="w-full border-1" />      
       </div>
      <h1 className="flex justify-center mx-[10vw] mt-[5vh] mb-[5vh] text-[10px] sm:text-lg md:text-xl lg:text-3xl xl:text-4xl">
        We want to provide a welcoming space where students can explore styling, design, photography, modeling, or simply fashion as a form of self expression — no experience or major required.
      </h1>
     {/* <p className="absolute top-[85%] left-[12%] font-bold"> NO EXPERIENCE NEEDED</p>  ts ass */}
      <h1 className="font-bold mt-[4vh] justify-self-end mx-[5vw] mb-[5vh] text-[10px] md:text-lg lg:text-3xl xl:text-4xl"> EVERYONE IS WELCOME</h1>
      {/* Second half is here */}
      
      <div className="grid grid-cols-2">
        <div className="">
          <img
            src="/OurMission.svg"
            alt="Our Mission"
            className="w-200 lg:w-[50vw] ml-[2vw] "
          />
          <p className="font-bold pb-[10vh] text-[10px] md:text-lg lg:text-3xl xl:text-4xl mt-[2vh] text-left ml-[6vw]">NO EXPERIENCE NEEDED</p>
        </div>

        <div>
           <img
          src="/pictures/bride.svg"
          alt="temp img"
          className=" ml-[12vw] pb-[10vh] w-[30vw] py-[2vh] "
        />
        </div>

        </div>
      
      <div className="flex flex-row items-start gap-5 md:gap-10 lg:gap-20">

         <div className="flex-1">
           <img
          src="/pictures/phone.svg"
          alt="temp img"
          className="w-[35vw] pb-[10vh] mt-[2vh] ml-[6vw]"/>
         </div>

         
        <div className=" flex flex-col flex-1 mr-[4vw]">
           <div className="text-left text-[10px] max-xs:text-[8px] mt-[2vh] lg:mt-[5vh] sm:text-md md:text-lg lg:text-3xl xl:text-4xl">
          <h1>
            Fashion Society at UCF is a creative collective and safe space where students of all background come together to express themselves through fashion, art, and culture.
          </h1>
          <h1>
            <br />There are no requirement's to join other than a good attitude, members don't need to submit any kind of application; just show up and get involved!
          </h1>
         </div> 

        <div className=" mt-3 max-lg:hidden lg:block text-left lg:text-3xl xl:text-4xl mb-8">
         
          <h1>
             <br />Whether you dream of working in the fashion industry or simply seek a space to create, connect, and grow — our mission is to nurture individuality, build confidence, and foster authentic community through collaborative experience like fashion shows, photoshoots, events, and workshops.
          </h1>
          <h1>
            <br />We are always working to create an inclusive, uplifting environment where members feel seen, heard, and celebrated — creatively and personally. 
          </h1>
           <h1>
            <br />Whether you’re here to build a fashion career, make friends, or just try something new, we’re here to support you in that journey.
          </h1>
          
          <h1>
              <br/>  <a
                href = "https://discord.gg/5Ggp7WfW"
                target = "_blank"
                rel="noopener noreferrer"
                className = "underline mr-[0.25vw] hover:text-[#7d513e]"
                >
                  Join our Discord
                </a>
                  to stay updated on future events and meetings, we hope to see you there!
            </h1>
          
        </div>

      </div>

    </div>


      <div className="grid grid-cols-2 ">
        <div className="col-span-2 text-center max-md:mt-[-10vw] mx-[8vw] mb-8 lg:hidden  sm:text-md md:text-lg ">
            <h1>
             <br />Whether you dream of working in the fashion industry or simply seek a space to create, connect, and grow — our mission is to nurture individuality, build confidence, and foster authentic community through collaborative experience like fashion shows, photoshoots, events, and workshops.
          </h1>
          <h1>
            <br />We are always working to create an inclusive, uplifting environment where members feel seen, heard, and celebrated — creatively and personally. 
          </h1>
           <h1>
            <br />Whether you’re here to build a fashion career, make friends, or just try something new, we’re here to support you in that journey.
          </h1>
          
          <h1>
              <br/>  <a
                href = "https://discord.gg/5Ggp7WfW"
                target = "_blank"
                rel="noopener noreferrer"
                className = "underline mr-[0.25vw] hover:text-[#7d513e]"
                >
                  Join our Discord
                </a>
                  to stay updated on future events and meetings, we hope to see you there!
            </h1>
            </div>
        




  
   </div>   
    </div>
  

  );

}
