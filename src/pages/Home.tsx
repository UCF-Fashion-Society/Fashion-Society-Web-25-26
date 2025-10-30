export default function Home() {
  return (
    <div>
      <h1 className="flex justify-center mx-36 mt-4">
        We want to providing a welcoming space where students can explore styling, design, photography, modeling, or simply fashion as a form of self expression — no experience or major required.
      </h1>
      <p className="absolute top-[85%] left-[12%] font-bold"> NO EXPERIENCE NEEDED</p>
      <h1 className="font-bold mt-16 ml-24"> EVERYONE IS WELCOME</h1>
      <div className="grid grid-cols-2 gap-8">
        <img
          src="/OurMission.png"
          alt="Our Mission"
          className="w-150 ml-24 "
        />
        <img
          src="/pictures/clownMakeup.svg"
          alt="temp img"
          className="ml-56 mt-8"
        />
      
        <img
          src="/pictures/clownMakeup.svg"
          alt="temp img"
          className="ml-44"
        />
        <div className="text-left mr-20 text-[17px] pb-20">
          <h1>
            Fashion Society at UCF is a creative collective and safe space where students of all background come together to express themselves through fashion, art, and culture. whether you dream of working in the fashion industry or simply seek a space to create, connect, and grow — our mission is to nurture individuality, build confidence, and foster authentic community through collaborative experience like fashion shows, photoshoots, events, and workshops.
          </h1>
          <h1>
            <br />We are always working to create an inclusive, uplifting environment where members feel seen, heard, and celebrated — creatively and personally.
          </h1>
          <h1>
            <br />Whether you’re here to build a fashion career, make friends, or just try something new, we’re here to support you in that journey.
          </h1>
        </div>
      </div>
    </div>

       <div className="flex flex-col">
         
          <div className = "relative w-full h-180 bg-center bg-cover bg-[url('/pictures/homePageBackground.JPG')] items-center">
            <img src="/public/FSTitle.svg" alt="Fashion Society" className="absolute right-5 top-6 w-[1200px] h-auto"/>
          </div>
          <div className="w-full h-8 mt-1 text-[#373333] font-['Inter'] text-lg">
            FASHION SOCIETY FASHION SOCIETY FASHION SOCIETY FASHION SOCIETY FASHION SOCIETY FASHION SOCIETY FASHION SOCIETY 
          </div>
          <hr className="w-full border-1" />
          <div className="w-full h-100"></div>
      
       </div>
  );
}
