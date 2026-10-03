// Committee meeting schedule.
// Edit this file once per semester (or when a room/time changes). The Events
// page works out each committee's next meeting date from these rules, so the
// dates move forward on their own every week.
//
// day:       0 = Sun, 1 = Mon, 2 = Tue, 3 = Wed, 4 = Thu, 5 = Fri, 6 = Sat
//            null = day not confirmed yet (page shows the pattern, no date)
// frequency: "weekly" or "biweekly"
// startWeek: Monday of the first week this committee meets (YYYY-MM-DD).
//            Biweekly committees meet that week, skip a week, and so on.
// skip:      specific dates with no meeting (holidays, breaks), YYYY-MM-DD
// endDate:   last possible meeting date for the semester (optional)
// dates:     one-off meetings (like GBMs) on specific dates, YYYY-MM-DD.
//            When set, these dates are used instead of the weekly pattern.
//            Add the next date each time one is announced.

export type Frequency = "weekly" | "biweekly";

export type CommitteeSchedule = {
    committee: string;
    day: number | null;
    time?: string;
    location?: string;
    frequency?: Frequency;
    startWeek?: string;
    skip?: string[];
    endDate?: string;
    dates?: string[];
};

const WEEK_1 = "2026-09-21"; // Week 1 alternating: 9/21 - 9/24
const WEEK_2 = "2026-09-28"; // Week 2 alternating: 9/28 - 10/1

export const schedule: CommitteeSchedule[] = [
    // Week 1 alternating
    { committee: "Beauty",       day: 2,    time: "6PM",   location: "ENG II 0205", frequency: "biweekly", startWeek: WEEK_1 },
    { committee: "Photography",  day: 2,    time: "7PM",   location: "NSC 0117",    frequency: "biweekly", startWeek: WEEK_1 },
    { committee: "Modeling",     day: 3,    time: "7:30PM", location: "MSB 0260",   frequency: "biweekly", startWeek: WEEK_1 },

    // Week 2 alternating
    { committee: "Web Design",   day: 2,    time: "6PM",   location: "ENG II 0205", frequency: "biweekly", startWeek: WEEK_2 },
    { committee: "Production",   day: 3,    time: "7:30PM", location: "ENG I 0427", frequency: "biweekly", startWeek: WEEK_2 },
    { committee: "Social Media", day: 4,    time: "7PM",   location: "ENG I 0224",  frequency: "biweekly", startWeek: WEEK_2 },

    // Every week
    { committee: "Design",       day: 4,    time: "7PM",   location: "HEC 0103",    frequency: "weekly",   startWeek: WEEK_1 },
    { committee: "Styling",      day: 2,    time: "7PM",   location: "Location TBD", frequency: "weekly",  startWeek: WEEK_1 },

    // One-off dates. Add time/location once they're announced.
    { committee: "GBM", day: null, dates: ["2026-10-12"] },

    // Zine isn't listed, so it shows TBD until added here.
];
