import { useEffect, useState } from "react";
import moment from "moment";

type NextMeetingProps = {
    committee: string;
};

function NextMeeting({ committee }: NextMeetingProps){
    const[meeting, setMeeting] = useState(null);

    useEffect(() => {
        if(!committee) return;

        fetch(`http://localhost:5001/meetings/${committee}`)
        .then(res => res.json())
        .then(data => setMeeting(data.date))
        .catch(err => console.error(err));
    }, []);

    if(!meeting) return <p>TBD</p>;

    const date = moment.utc(meeting).format("MMMM Do h:mma");

    return(<p>{date}</p>);
}

export default NextMeeting;