
const Meetings = [
    {
        name: "Design Meeting",
        date: "October 15th",
        time: "6:00pm"
    },
    {
        name: "Production Meeting",
        date: "October 15th",
        time: "6:00pm"
    },
    {
        name: "Web Design Meeting",
        date: "October 15th",
        time: "6:00pm"
    },
    {
        name: "Photography Meeting",
        date: "October 15th",
        time: "6:00pm"
    },
    {
        name: "Zine Meeting",
        date: "October 15th",
        time: "6:00pm"
    },
    {
        name: "Social Media Meeting",
        date: "October 15th",
        time: "6:00pm"
    },
    {
        name: "Beauty Meeting",
        date: "October 15th",
        time: "6:00pm"
    },
    {
        name: "Modeling Meeting",
        date: "October 15th",
        time: "6:00pm"
    },
    {
        name: "Styling Meeting",
        date: "October 15th",
        time: "6:00pm"
    }
]

const Events = () => {
    return (
        <div>
            <div className="grid grid-cols-2 items-center space-x-20">
                <img src="/public/UpcomingEvents.svg" alt="Upcoming Events" className="ml-12" width={900} height={300} />
                <h1 className=" text-[#373333] mr-20 ">
                    <span className="font-bold">Next GBM: </span>
                    <span> October 20th </span>
                    <span className="font-bold"> at </span>
                    <span> 7:00pm </span>
                </h1>
            </div>
            <div className="grid grid-cols-2 ml-28 gap-2">
                {Meetings.map((meeting) => (
                    <div className="text-[#373333] text-lg text-left">
                        <span className="font-bold"> Next {meeting.name}: </span>
                        <span className=""> {meeting.date} </span>
                        <span className="font-bold"> at </span>
                        <span className=""> {meeting.time} </span>
                    </div>
                ))}
            </div>
        </div>
    );
};


export default Events;