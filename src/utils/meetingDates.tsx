import { schedule, type CommitteeSchedule } from "../data/schedule";

type NextMeetingProps = {
    committee: string;
    today?: Date;
};

const DAY_MS = 24 * 60 * 60 * 1000;

// Parse "YYYY-MM-DD" as a local calendar date (no timezone shifting).
function parseDate(s: string): Date {
    const [y, m, d] = s.split("-").map(Number);
    return new Date(y, m - 1, d);
}

function toKey(d: Date): string {
    const mm = String(d.getMonth() + 1).padStart(2, "0");
    const dd = String(d.getDate()).padStart(2, "0");
    return `${d.getFullYear()}-${mm}-${dd}`;
}

function daysBetween(a: Date, b: Date): number {
    // Math.round absorbs daylight saving hour shifts.
    return Math.round((b.getTime() - a.getTime()) / DAY_MS);
}

// Next meeting date on or after `today`, or null if none is left.
export function getNextMeetingDate(s: CommitteeSchedule, today: Date): Date | null {
    if (s.day === null) return null;

    const start = parseDate(s.startWeek);
    const end = s.endDate ? parseDate(s.endDate) : null;
    const skip = new Set(s.skip ?? []);
    const from = new Date(today.getFullYear(), today.getMonth(), today.getDate());

    // First meeting: the chosen weekday in the start week (weeks start Monday).
    const first = new Date(start);
    first.setDate(start.getDate() + ((s.day - start.getDay() + 7) % 7));

    const step = s.frequency === "biweekly" ? 14 : 7;
    const candidate = new Date(first);
    if (from > first) {
        const jumps = Math.ceil(daysBetween(first, from) / step);
        candidate.setDate(first.getDate() + jumps * step);
    }

    // Walk forward past skipped dates (capped so a bad config can't loop).
    for (let i = 0; i < 60; i++) {
        if (end && candidate > end) return null;
        if (!skip.has(toKey(candidate))) return candidate;
        candidate.setDate(candidate.getDate() + step);
    }
    return null;
}

function formatMeeting(s: CommitteeSchedule, date: Date | null): string {
    const details = `${s.time} · ${s.location}`;
    if (!date) {
        const pattern = s.frequency === "biweekly" ? "Every other week" : "Weekly";
        return `${pattern} · ${details}`;
    }
    const day = date.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" });
    return `${day} · ${details}`;
}

function NextMeeting({ committee, today = new Date() }: NextMeetingProps) {
    const entry = schedule.find(s => s.committee === committee);
    if (!entry) return <span>TBD</span>;

    const date = getNextMeetingDate(entry, today);
    if (entry.day !== null && !date) return <span>TBD</span>; // semester's over
    return <span>{formatMeeting(entry, date)}</span>;
}

export default NextMeeting;
