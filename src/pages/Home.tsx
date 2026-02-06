import { motion } from "motion/react";

export default function Home() {
  return (
    <div>
      <div className=" w-full overflow-x-hidden">
        <div className="w-full h-[50vh] lg:h-[95vh]   bg-cover bg-center bg-no-repeat bg-[url('/pictures/homePageBackground.JPG')] items-center">
          <img src="/FSTitle.svg" alt="Fashion Society" className="-ml-2 md:-ml-4 grow w-full py-10 max-md:py-15 h-auto" />
        </div>
        <div className="max-w-full  h-4 md:h-8 mt-1  text-[#373333] font-['Inter'] text-xs sm:text-sm md:text-md lg:text-l xl:text-xl overflow-hidden whitespace-nowrap">
          FASHION SOCIETY FASHION SOCIETY FASHION SOCIETY FASHION SOCIETY FASHION SOCIETY FASHION SOCIETY FASHION SOCIETY FASHION SOCIETY FASHION SOCIETY FASHION SOCIETY FASHION SOCIETY FASHION SOCIETY FASHION SOCIETY FASHION SOCIETY FASHION SOCIETY FASHION SOCIETY FASHION SOCIETY FASHION SOCIETY FASHION SOCIETY FASHION SOCIETY FASHION SOCIETY FASHION SOCIETY FASHION SOCIETY FASHION SOCIETY FASHION SOCIETY FASHION SOCIETY FASHION SOCIETY FASHION SOCIETY FASHION SOCIETY FASHION SOCIETY FASHION SOCIETY FASHION SOCIETY FASHION SOCIETY FASHION SOCIETY FASHION SOCIETY FASHION SOCIETY
        </div>
        <hr className="w-full border-1" />
      </div>
      <h1 className="flex justify-center mx-[10vw] mt-[5vh] mb-[5vh] text-[10px] md:text-md lg:text-lg">
        We want to provide a welcoming space where students can explore styling, design, photography, modeling, or simply fashion as a form of self expression — no experience or major required.
      </h1>
      {/* <p className="absolute top-[85%] left-[12%] font-bold"> NO EXPERIENCE NEEDED</p>  ts ass */}
      <h1 className="font-bold mt-[4vh] justify-self-end mx-[5vw] mb-[5vh] text-[10px] md:text-lg lg:text-2xl"> EVERYONE IS WELCOME</h1>
      {/* Second half is here */}

      <motion.div
        className="grid grid-cols-2"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <motion.div
          className=""
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
        >
          <img
            src="/OurMission.svg"
            alt="Our Mission"
            className="w-200 lg:w-[50vw] ml-[2vw] "
          />
          <p className="font-bold pb-[10vh] text-[10px] md:text-lg lg:text-2xl mt-[2vh] text-left ml-[6vw]">NO EXPERIENCE NEEDED</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
        >
          <img
            src="/pictures/bride.svg"
            alt="Bride"
            className=" ml-[12vw] pb-[10vh] w-[30vw] py-[2vh] "
          />
        </motion.div>
      </motion.div>

      <motion.div
        className="flex flex-row items-start gap-5 md:gap-10 lg:gap-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >

        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
        >
          <img
            src="/pictures/phone.svg"
            alt="temp img"
            className="w-[35vw] pb-[10vh] mt-[2vh] lg:mt-[6vw] ml-[6vw]" />
        </motion.div>


        <motion.div
          className=" flex flex-col flex-1 mr-[4vw]"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
        >
          <div className="text-left text-[10px] max-xs:text-[8px] mt-[2vh] lg:mt-[6vw]  sm:text-sm md:text-md lg:text-lg">
            <h1>
              Fashion Society at UCF is a creative collective and safe space where students of all background come together to express themselves through fashion, art, and culture.
            </h1>
            <h1>
              <br />There are no requirement's to join other than a good attitude, members don't need to submit any kind of application; just show up and get involved!
            </h1>
          </div>

          <div className=" max-lg:hidden lg:block text-left sm:text-md md:text-lg lg:text-lg mb-8">

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
              <br />  <a
                href="https://discord.gg/5Ggp7WfW"
                target="_blank"
                rel="noopener noreferrer"
                className="underline mr-2 hover:text-[#7d513e]"
              >
                Join our Discord
              </a>
              to stay updated on future events and meetings, we hope to see you there!
            </h1>

          </div>

        </motion.div>

      </motion.div>


      <motion.div
        className="grid grid-cols-2 "
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
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
            <br />  <a
              href="https://discord.gg/5Ggp7WfW"
              target="_blank"
              rel="noopener noreferrer"
              className="underline mr-1 hover:text-[#7d513e]"
            >
              Join our Discord
            </a>
            to stay updated on future events and meetings, we hope to see you there!
          </h1>
        </div>
      </motion.div>
    </div>
  );
}

