const About = () => {
    return(
         
  <main className="w-screen">
  
    <div className="flex flex-col  lg:flex-row text-l lg:mx-4  text-[#373333]">
      <div className="lg:flex-col ">
      <img
          src="/About.svg"
          alt="temp img"
          className=" lg:flex-1  max-lg:w-[80vw] max-lg:ml-[-5vw] max-lg:mt-[-5vw] py-[2vh] lg:w-[40vw]"
        />

        <div className=" flex flex-row justify-center gap-20 mt-[-4vh] max-lg:hidden">
         
          <img
          src="/pictures/polaroid.svg"
          alt="temp img"
          className="w-[15vw] mb-8"
        />
       

        
        <img
          src="/pictures/clownMakeup.svg"
          alt="temp img"
          className="w-[15vw] mb-8"
        />
       

        </div>
       </div>

      <div className="lg:mt-[15vh] lg:flex-1 text-l  mt-[-5vh] lg:text-xl lg:max-w-[50vw] font-['Inter'] ml-6 leading-6 text-left text-[#373333]">
      <h1 className="font-bold">WE ARE AN ORGANIZATION THAT PUTS CREATIVITY AND SELF EXPRESSION ABOVE ALL ELSE </h1>
      <br/>
      <p >Our club is split up into 9 different committees that all have different roles and responsibilities.</p>
      <br/>
      <p>Members have the option to join one or more committees based on their personal interests, goals, and skill sets. </p>
     <img
          src="/pictures/F-7.svg"
          alt="temp img"
          className="w-[80vw] mt-[6vh] justify-self-center mb-[4vh] lg:hidden"
        />
        <br/>
      <p>Each committee holds separate meetings either weekly or biweekly and we hold General Body Meetings every other Monday.</p>
      <br/>
      <p>We also host workshops, portfolio-building opportunities, and industry exposure along with fun events like parties, tailgates, and creative challenges for everyone </p>
      <br/>
       <p>We strive to offer opportunities to work together across committees, whether it’s helping with a shoot, designing a look, or planning a fundraising event.</p>
       <br/>
       
        </div>

    </div>
  </main>


    );
};
export default About;