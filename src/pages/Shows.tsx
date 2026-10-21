import { useState, useEffect } from 'react';
import {useSEO} from "../hooks/useSEO"
// Placeholder data
type Show = {
    id: number;
    title: string;
    subtitle?: string;
    date: string;
    eventDate?: string;
    eventTimes?: string;
    quote?: string;
    description?: string[];
    ticketUrl?: string;
    images: { id: number; url: string; alt: string }[];
};

// Time Bomb: the next show. Put the ticket link in ticketUrl once it's live.
const TimeBomb: Show = {
    id: 0,
    title: "Time Bomb",
    subtitle: "The Moment Before",
    date: "Spring 2026",
    eventDate: "2026-04-19T15:00:00",
    eventTimes: "April 19, 2026 \u2014 3:00 PM & 6:00 PM",
    quote: "Every act of creation is first an act of destruction",
    description: [
        "Time Bomb aims to tell a story about the cyclical and transformative nature of fashion. Fashion, like a ticking bomb, is always on the edge of transformation; it builds tension over time, and when it explodes, it gives birth to something entirely new.",
        "The show unfolds in three eras, each representing a stage of this process: construction, collapse, and rebirth. Through periods of deconstruction, chaos, evolution, and reinvention, the theme captures the urgency, erratic energy, and constantly shifting dynamics of fashion. Every design, styling choice, and walk contributes to this narrative, allowing members to create with purpose and emotion.",
    ],
    ticketUrl: "", // TODO: add the ticket link
    images: [],
};

const ShowsData: Show[] = [
    TimeBomb,
    {
        id: 1,
        title: "Dame Punk",
        date: "Spring 2025",
        images: [
            { id: 1, url: "/gallery/damePunk/dame1.svg", alt: "Look 1" },
            { id: 2, url: "/gallery/damePunk/dame2.svg", alt: "Look 2" },
            { id: 3, url: "/gallery/damePunk/dame3.svg", alt: "Look 3" },
            { id: 4, url: "/gallery/damePunk/dame4.svg", alt: "Look 4" },
            { id: 5, url: "/gallery/damePunk/dame5.svg", alt: "Look 5" },
            { id: 6, url: "/gallery/damePunk/dame6.svg", alt: "Look 6" },
            { id: 7, url: "/gallery/damePunk/dame7.svg", alt: "Look 7" },
            { id: 8, url: "/gallery/damePunk/dame8.svg", alt: "Look 8" },
            { id: 9, url: "/gallery/damePunk/dame9.svg", alt: "Look 9" },
            { id: 10, url: "/gallery/damePunk/dame10.svg", alt: "Look 10" },
            { id: 12, url: "/gallery/damePunk/dame12.svg", alt: "Look 12" },
            { id: 13, url: "/gallery/damePunk/dame13.svg", alt: "Look 13" },
            { id: 15, url: "/gallery/damePunk/dame15.svg", alt: "Look 15" },
            { id: 16, url: "/gallery/damePunk/dame16.svg", alt: "Look 16" },
            { id: 17, url: "/gallery/damePunk/dame17.svg", alt: "Look 17" },
            { id: 18, url: "/gallery/damePunk/dame18.svg", alt: "Look 18" },
            { id: 19, url: "/gallery/damePunk/dame19.svg", alt: "Look 19" },
            { id: 20, url: "/gallery/damePunk/dame20.svg", alt: "Look 20" },
            { id: 21, url: "/gallery/damePunk/dame21.svg", alt: "Look 21" },
            { id: 22, url: "/gallery/damePunk/dame22.svg", alt: "Look 22" },
            { id: 23, url: "/gallery/damePunk/dame23.svg", alt: "Look 23" },
            { id: 24, url: "/gallery/damePunk/dame24.svg", alt: "Look 24" },
            { id: 25, url: "/gallery/damePunk/dame25.svg", alt: "Look 25" }
        ]
    },
    {
        id: 2,
        title: "The Four Elements",
        date: "Spring 2024",
        images: [
            { id: 1, url: "/gallery/4elements/elements1.svg", alt: "Look 1" },
            { id: 2, url: "/gallery/4elements/elements2.svg", alt: "Look 2" },
            { id: 3, url: "/gallery/4elements/elements3.svg", alt: "Look 3" },
            { id: 4, url: "/gallery/4elements/elements4.svg", alt: "Look 4" },
            { id: 5, url: "/gallery/4elements/elements5.svg", alt: "Look 5" },
            { id: 6, url: "/gallery/4elements/elements6.svg", alt: "Look 6" },
            { id: 7, url: "/gallery/4elements/elements7.svg", alt: "Look 7" },
            { id: 8, url: "/gallery/4elements/elements8.svg", alt: "Look 8" },
            { id: 9, url: "/gallery/4elements/elements9.svg", alt: "Look 9" },
            { id: 10, url: "/gallery/4elements/elements10.svg", alt: "Look 10" },
            { id: 11, url: "/gallery/4elements/elements11.svg", alt: "Look 11" },
            { id: 12, url: "/gallery/4elements/elements12.svg", alt: "Look 12" },
            { id: 13, url: "/gallery/4elements/elements13.svg", alt: "Look 13" },
            { id: 14, url: "/gallery/4elements/elements14.svg", alt: "Look 14" },
            { id: 15, url: "/gallery/4elements/elements15.svg", alt: "Look 15" },
            { id: 16, url: "/gallery/4elements/elements16.svg", alt: "Look 16" },
            { id: 17, url: "/gallery/4elements/elements17.svg", alt: "Look 17" },
            { id: 18, url: "/gallery/4elements/elements18.svg", alt: "Look 18" },
            { id: 19, url: "/gallery/4elements/elements19.svg", alt: "Look 19" },
            { id: 20, url: "/gallery/4elements/elements20.svg", alt: "Look 20" },
            { id: 21, url: "/gallery/4elements/elements21.svg", alt: "Look 21" },
            { id: 22, url: "/gallery/4elements/elements22.svg", alt: "Look 22" },
            { id: 23, url: "/gallery/4elements/elements23.svg", alt: "Look 23" },
            { id: 24, url: "/gallery/4elements/elements24.svg", alt: "Look 24" },
            

        ]
        
    },

];

// Counts down to a show. Shows 00s once the date has passed.
function Countdown({ target }: { target: string }) {
    const [now, setNow] = useState(Date.now());
    useEffect(() => {
        const timer = setInterval(() => setNow(Date.now()), 1000);
        return () => clearInterval(timer);
    }, []);

    const diff = Math.max(0, new Date(target).getTime() - now);
    const units = [
        { label: "Days", value: Math.floor(diff / 86400000) },
        { label: "Hours", value: Math.floor((diff % 86400000) / 3600000) },
        { label: "Minutes", value: Math.floor((diff % 3600000) / 60000) },
        { label: "Seconds", value: Math.floor((diff % 60000) / 1000) },
    ];

    return (
        <div className="flex justify-center gap-4">
            {units.map((u) => (
                <div key={u.label} className="text-center">
                    <div className="w-24 rounded-md bg-[#ebe5da] py-3 text-5xl font-bold text-[#6b4a35]">
                        {String(u.value).padStart(2, "0")}
                    </div>
                    <div className="mt-2 text-xs tracking-[0.2em] text-gray-500 uppercase">{u.label}</div>
                </div>
            ))}
        </div>
    );
}

const Shows = () => {
    useSEO({
                title: "Shows | UCF Fashion Society",
                description:
                "Explore UCF Fashion Society’s runway shows featuring student designers, models, and creative teams.",
            });
    const [currentShowIndex, setCurrentShowIndex] = useState(0);
    const currentShow = ShowsData[currentShowIndex];

    const handlePrevious = () => {
        setCurrentShowIndex((prev) => (prev === 0 ? ShowsData.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentShowIndex((prev) => (prev === ShowsData.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="min-h-screen bg-[#f4efe7] px-8 py-12">
            {/* Header Section */}
            <div className="max-w-7xl mx-auto mb-12">
                <div className="text-center mb-8">
                    <h1 className="text-5xl font-['Inter'] font-bold text-[#373333] mb-3">
                        {currentShow.title}
                    </h1>
                    {currentShow.subtitle && (
                        <p className="text-sm tracking-[0.3em] uppercase text-gray-500 mb-2">{currentShow.subtitle}</p>
                    )}
                    <p className="text-xl font-['Inter'] text-gray-600">{currentShow.date}</p>
                </div>

                {/* Show details: countdown, description, tickets */}
                {currentShow.description && (
                    <div className="mb-12 text-center">
                        {currentShow.eventDate && (
                            <div className="mb-10">
                                <Countdown target={currentShow.eventDate} />
                            </div>
                        )}
                        {currentShow.quote && (
                            <p className="italic text-2xl font-serif text-[#373333] mb-10">"{currentShow.quote}"</p>
                        )}
                        <div className="max-w-2xl mx-auto space-y-4 font-serif text-lg leading-relaxed text-[#373333] text-left">
                            {currentShow.description.map((para, i) => (
                                <p key={i}>{para}</p>
                            ))}
                        </div>
                        {currentShow.ticketUrl && (
                            <a
                                href={currentShow.ticketUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block mt-10 border border-[#373333] px-10 py-4 text-sm tracking-[0.2em] uppercase text-[#373333] hover:bg-[#373333] hover:text-[#f4efe7] transition-colors"
                            >
                                Buy tickets
                            </a>
                        )}
                        {currentShow.eventTimes && (
                            <p className="mt-10 text-lg tracking-[0.2em] uppercase text-[#373333]">{currentShow.eventTimes}</p>
                        )}
                    </div>
                )}

                {/* Navigation Indicators */}
                <div className="flex justify-center items-center gap-2 mb-8">
                    {ShowsData.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentShowIndex(index)}
                            className={`h-2 rounded-full transition-all duration-300 ${
                                index === currentShowIndex 
                                    ? 'w-8 bg-[#373333]' 
                                    : 'w-2 bg-gray-300 hover:bg-gray-400'
                            }`}
                            aria-label={`Go to show ${index + 1}`}
                        />
                    ))}
                </div>
            </div>

            {/* Gallery with Navigation Arrows */}
            <div className="relative max-w-7xl mx-auto">
                {/* Left Arrow */}
                <button
                    onClick={handlePrevious}
                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 z-10 bg-white hover:bg-gray-100 rounded-full p-4 shadow-lg transition-all duration-200 hover:scale-110"
                    aria-label="Previous show"
                >
                    <svg 
                        className="w-8 h-8 text-[#373333]" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                    >
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M15 19l-7-7 7-7" 
                        />
                    </svg>
                </button>

                {/* Cascading Grid Gallery */}
                {currentShow.images.length === 0 && (
                    <p className="text-center text-gray-500 mb-8">Photos coming soon.</p>
                )}
                <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
                    {currentShow.images.map((image, index) => (
                        <div
                            key={image.id}
                            className="break-inside-avoid mb-4 group cursor-pointer"
                            style={{
                                animation: `fadeIn 0.6s ease-out ${index * 0.1}s both`
                            }}
                        >
                            <img
                                src={image.url}
                                alt={image.alt}
                                className="w-full rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group-hover:scale-[1.02]"
                            />
                        </div>
                    ))}
                </div>

                {/* Right Arrow */}
                <button
                    onClick={handleNext}
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 z-10 bg-white hover:bg-gray-100 rounded-full p-4 shadow-lg transition-all duration-200 hover:scale-110"
                    aria-label="Next show"
                >
                    <svg 
                        className="w-8 h-8 text-[#373333]" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                    >
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M9 5l7 7-7 7"
                        />
                    </svg>
                </button>
            </div>

            {/* Show Counter */}
            <div className="text-center mt-12 text-gray-500">
                Show {currentShowIndex + 1} of {ShowsData.length}
            </div>

            <style>{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </div>
    );
};

export default Shows;