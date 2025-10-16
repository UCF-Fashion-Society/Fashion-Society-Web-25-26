const About = () => {
    return(
         
  <main className="flex flex-row flex-auto">
    <div className="flex flex-col justify-center">
     <div className = "mx-10 my-8 w-132 h-40 bg-[url('/About.svg')] bg-center bg-size-[680px] bg-no-repeat"></div>
      <div className="flex gap-10 px-16">
        <div className="w-56 h-83 bg-[url('/pictures/polaroid.svg')]"></div>
        <div className="w-56 h-83 bg-[url('/pictures/clownMakeup.svg')]"></div>
      </div>
    </div>
    <div className="flex flex-col">
      <p className="text-l font-['Inter'] text-left font-bold text-[#373333] mt-16 py-6">WE ARE AN ORGANIZATION THAT PUTS CREATIVITY AND SELF EXPRESSION ABOVE ALL ELSE </p>
      <p className="text-l font-['Inter'] text-left text-[#373333]">Our club is split up into 9 different committees that all have different roles and responsibilities.</p>
      <p className="text-l font-['Inter'] text-left text-[#373333]  py-6">Members have the option to join one or more committees based on their personal interests, goals, and skill sets. </p>
      <p className="text-l font-['Inter'] text-left text-[#373333]">Each committee holds separate meeting either weekly or biweekly and we hold General Body Meetings every other Monday.</p>
      <p className="text-l font-['Inter'] text-left text-[#373333]  py-6">We host workshops, portfolio-building opportunities, and industry exposure but also fun events like parties, tailgates, and creative challenges for everyone </p>
       <p className="text-l font-['Inter'] text-left text-[#373333]">We strive to offer opportunities to worth together across committees, whether it’s helping with a shoot, designing a look, or planning a fundraising event.</p>
    </div>
  </main>


    );
};
export default About;