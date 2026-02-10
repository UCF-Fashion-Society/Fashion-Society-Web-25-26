import {useSEO} from "../hooks/useSEO"
const Committees = () => {
    useSEO({
                title: "Committees | UCF Fashion Society",
                description:
                "Learn about UCF Fashion Society’s committees and how members collaborate on fashion, events, and creative projects.",
            });
    return(
        <div className="flex flex-col px-8 text-[#373333] font-['Inter'] text-xs md:text-lg lg:text-xl ">
                <div className="items-start">
                    <img src="/committeeNames/Design.svg" alt="Design" className="w-[45vw] md:w-[40vw] lg:w-[30vw] ml-[-3vh] h-auto"/>
                        <p className="text-left mt-[-3vw] ml-[-2vw] md:ml-4 max-w-3xl mb-8"> The Design Committee is responsible for conceptualizing
                            and creating original pieces for fashion shows and photoshoots.
                            This committee works closely with the Beauty and Modeling Committees to ensure that designs are effectively
                            showcased. Members will gain experience in fashion design, garment construction, and creative collaboration.
                            The Design Committee plays a crucial role in bringing our fashion concepts to life and enhancing the overall aesthetic of our events.
                        </p>
                </div>

                <div className="flex flex-col items-end text-right">
                    <img src="/committeeNames/Styling.svg" alt="Styling" className="w-[60vw] md:w-[50vw] lg:w-[40vw] h-auto mr-[-3vh] md:mr-[-2vh]" />
                        <p className="ml-2 mr-[2vw] mt-[-2vh] md:mt-[-4vh] max-w-3xl mb-8"> The Styling Committee is responsible for conceptualizing and assembling outfits
                            through upcycling preexisting pieces. The Styling committee collaborates closely with the Modeling and Beauty
                             Committees to ensure cohesive and impactful presentations.
                            Members will gain experience in fashion styling, trend analysis, and creative collaboration. The Styling Committee plays a vital role
                            in bringing our fashion concepts to life and enhancing the overall aesthetic of our events.
                        </p>
                </div>

                <div className="flex flex-col items-start">
                    <img src="/committeeNames/Modeling.svg" alt="Modeling" className="w-[65vw] md:w-[55vw] lg:w-[45vw] ml-[-2vh] md:ml-[-2vw] h-auto"/>
                        <p className="text-left mt-[-3vw] md:ml-2 mr-2 max-w-3xl mb-8">The Modeling Committee is responsible for recruiting,
                            training, and managing models for all of Fashion Society's events, including fashion shows and photoshoots.
                            This committee works closely with the Styling and Design Committees to ensure that models effectively showcase
                            the clothing and concepts being presented. Members will gain experience in runway walking, posing, and professionalism. 
                            The Modeling Committee plays a crucial role in bringing our fashion presentations to life
                            and enhancing the overall impact of our events.
                        </p>
                </div>

                 <div className="flex flex-col items-end text-right">
                    <img src="/committeeNames/Beauty.svg" alt="Beauty" className="w-[50vw] md:w-[50vw] lg:w-[40vw] mr-[-3vh] h-auto" />
                        <p className="ml-2 mt-[-3vw] max-w-3xl mb-8"> The Beauty Committee is
                            responsible for creating and executing makeup and hair looks for Fashion Society's events,
                            including fashion shows and photoshoots. This committee collaborates closely with the Styling
                            and Design Committees to ensure cohesive and impactful presentations. Members will gain experience
                            in makeup artistry, hairstyling, and creative collaboration. The Beauty Committee plays a vital role
                            in enhancing the overall aesthetic and storytelling of our projects.
                        </p>
                </div>

                 <div className="flex flex-col items-start">
                    <img src="/committeeNames/Photography.svg" alt="Photography" className=" w-[80vw] md:w-[65vw] lg:w-[55vw] ml-[-4vh] md:ml-[-2vw] md:h-auto"/>
                        <p className=" text-left mt-[-3vw] lg:ml-4 mb-8 max-w-5xl">The Photography Committee focuses on capturing the
                             creative spirit and style of our club through visual storytelling. Throughout the year, we 
                             organize workshops that explore various aspects of photography, including studio lighting, 
                             portrait work, editing, and creative direction. Our goal is to foster an environment where 
                             members can develop their technical and artistic skills while collaborating with other 
                             committees to bring concepts to life. Whether you’re new to photography or already experienced, 
                             the committee offers a welcoming space to learn, experiment, and express your vision behind the lens. 
                        </p>
                </div>

                   <div className="flex flex-col items-end text-right">
                    <img src="/committeeNames/Production.svg" alt="Production" className="w-[70vw] md:w-[50vw] mr-[-2vw] h-auto" />
                        <p className="ml-2 mt-[-3vw] mr-4 mb-8 max-w-3xl"> The Production Committee is
                            responsible for the logistical aspects of Fashion Society's events, including fashion shows, photoshoots,
                            and workshops. This committee coordinates event planning, venue setup, technical requirements, and overall
                            execution to ensure smooth and successful events. Members will gain experience in event management, teamwork,
                            and problem-solving. The Production Committee plays a crucial role in bringing our creative visions to life
                            and delivering memorable experiences for our members and audience.
                        </p>
                </div>

                <div className="flex flex-col items-start">
                    <img src="/committeeNames/SocialMedia.svg" alt="Social Media" className="w-[80vw] md:w-[60vw] lg:w-[50vw] ml-[-2vh] md:ml-[-2vw] md:h-auto"/>
                        <p className="text-left mt-[-3vw] mr-2 max-w-3xl">The Social Media Committee
                            is responsible for managing and creating content for Fashion Society's social media platforms.
                            This includes developing a content calendar, designing graphics, writing captions, and engaging
                            with our online community. Members will gain experience in digital marketing, content creation,
                            and brand management. The committee plays a vital role in promoting our events, showcasing our
                            members' work, and building our presence in the fashion community.
                        </p>
                </div>

                <div className="flex flex-col items-end text-right">
                    <img src="/committeeNames/Zine.svg" alt="Zine" className="w-[40vw] md:w-[30vw] mr-[-4vh] md:mr-[-6vw] h-auto" />
                        <p className="ml-2 mb-8 max-w-3xl">The Zine Committee’s main focus is to produce a Zine
                             (magazine) related to the fashion show. Throughout the year we learn different 
                             graphic design platforms and techniques until everyone is ready to start designing 
                             layouts. We also complete supplemental projects such as t-shirt designs, graphics,
                            and posters! All of these projects create fundraising opportunities for Fashion Society 
                        </p>
                </div>

                <div className=" flex flex-col items-start">
                    <img src="/committeeNames/WebDesign.svg" alt="Web Design" className=" w-[70vw] md:w-[45vw] h-auto ml-[-4vh]"/>
                        <p className=" mb-20 text-left mr-2 max-w-3xl">The Web Design Committee
                            is responsible for maintaining and updating the Fashion Society website. This includes adding new content,
                            updating event information, and ensuring that the site is user-friendly and visually appealing. Members
                            will gain experience in web development, design principles, and content management systems. This committee
                            plays a crucial role in enhancing our online presence and engaging with our community through digital platforms.
                        </p>
                </div>
        </div>
    );
};
export default Committees;