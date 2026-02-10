import NextMeeting from '../utils/meetingDates'
import {useSEO} from "../hooks/useSEO"

const Meetings = [
    {
        name: "Design Meeting",
        committee: "Design",
    },
    {
        name: "Production Meeting",
        committee: "Production",
    },
    {
        name: "Web Design Meeting",
        committee: "Web",
    },
    {
        name: "Photography Meeting",
        committee: "Photography",
    },
    {
        name: "Zine Meeting",
        committee: "Zine",
    },
    {
        name: "Social Media Meeting",
        committee: "Social",
    },
    {
        name: "Beauty Meeting",
        committee: "Beauty",
    },
    {
        name: "Modeling Meeting",
        committee: "Modeling",
    },
    {
        name: "Styling Meeting",
        committee: "Styling",
    }
]

const Events = () => {
    useSEO({
            title: "Events | UCF Fashion Society",
            description:
            "Explore upcoming fashion shows, workshops, and networking events hosted by UCF Fashion Society.",
        });
    return (
        
        <div>
            <div className="grid md:grid-cols-2 md:mb-10 lg:mb-0 items-center max-md:items-start md:space-x-20">
                <img src="/UpcomingEvents.svg" alt="Upcoming Events" className="md:ml-12 w-[90vw]" />
               <h1 className=" font-['Inter'] justify-self-center text-[#373333] text-xl max-md:hidden mr-20 ">
                    <span className="font-bold">Next GBM: </span>
                    <NextMeeting committee="GBM"/>
                </h1>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 ml-6 md:ml-10 lg:ml-28 gap-2">
                  <h1 className=" font-['Inter'] text-left mt-8 md:hidden mb-2 text-[#373333] text-lg ">
                    <span className="font-bold">Next GBM: </span>
                    <NextMeeting committee="GBM"/>
                </h1>
                {Meetings.map((meeting) => (
                    <div key={meeting.committee} className="text-[#373333] font-['Inter'] mb-2 text-lg text-left">
                        <span className="font-bold"> Next {meeting.name}: </span>
                        <NextMeeting committee = {meeting.committee}/>
                    </div>
                ))}
            </div>
             
        </div>
        
    )};


export default Events;