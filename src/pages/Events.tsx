import NextMeeting from '../utils/meetingDates'

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
    return (
        <div>
            <div className="grid grid-cols-2 items-center space-x-20">
                <img src="/UpcomingEvents.svg" alt="Upcoming Events" className="ml-12" width={900} height={300} />
                <h1 className=" text-[#373333] mr-20 ">
                    <span className="font-bold">Next GBM: </span>
                    <NextMeeting committee="GBM"/>
                </h1>
                
            </div>
            <div className="grid grid-cols-2 ml-28 gap-2">
                {Meetings.map((meeting) => (
                    <div key={meeting.committee} className="text-[#373333] text-lg text-left">
                        <span className="font-bold"> Next {meeting.name}: </span>
                        <NextMeeting committee = {meeting.committee}/>
                    </div>
                ))}
            </div>
        </div>
    )};


export default Events;