export default function Home() {
  return (
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
