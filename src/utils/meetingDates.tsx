import { useEffect, useState } from "react";
import moment from "moment";

type NextMeetingProps = {
    committee: string;
};

function NextMeeting({ committee }: NextMeetingProps){
    const[meeting, setMeeting] = useState(null);

    useEffect(() => {
        if(!committee) return;

        fetch(`https://ucffashionsociety.com/meetings/${committee}`)
        .then(res => res.json())
        .then(data => setMeeting(data.date))
        .catch(err => console.error(err));
    }, []);

    if(!meeting) return <span>TBD</span>;

    const date = moment.utc(meeting).format("MMMM Do h:mma");

    return(<span>{date}</span>);
}

export default NextMeeting;
