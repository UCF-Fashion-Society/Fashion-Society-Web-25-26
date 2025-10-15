const About = () => {
    return(
         
  <main className="flex flex-row flex-auto">
    <div className="felx flex-col justify-center">
      <p className="text-6xl text-[#373333] px-10 py-10">About</p>
      <div className="flex gap-6 px-10">
        <div className="w-64 h-64 bg-red-900 rounded-xl"></div>
        <div className="w-64 h-64 bg-red-900 rounded-xl"></div>
      </div>
    </div>
    <div className="flex flex-col">
      <p className="text-2xl text-left font-bold text-[#373333] py-10">WE ARE AN ORGANIZATION THAT PUTS CREATIVITY AND SELF EXPRESSION ABOVE ALL ELSE </p>
      <p className="text-l text-left text-[#373333]">We split up into 9 different committees: Design, Styling, Modeling, Beauty, Production, Zine, Photography, Social Media, and Web Design</p>
      <p className="text-l text-left text-[#373333] px-10 py-10">The Design Committee designs and sews entirely new pieces. The Styling Committee creates outfits from thrifted and upcycled clothing to style the models. </p>
      <p className="text-l text-left text-[#373333] px-10 py-10">The Modeling Committee walks the show. Beauty, Production, Zine, Photography, Social Media, and Web Design</p>
    </div>
  </main>


    );
};
export default About;