import { useState } from 'react';

// Placeholder data
const ShowsData = [
    {
        id: 1,
        title: "Dame Punk",
        date: "August 29, 2025",
        images: [
            { id: 1, url:"/gallery/damePunk1.svg", alt: "Look 1" },
            { id: 2, url: "https://picsum.photos/id/237/200/300", alt: "Look 2" },
            { id: 3, url: "https://picsum.photos/id/237/200/300", alt: "Look 3" },
            { id: 4, url: "https://picsum.photos/id/237/200/300", alt: "Look 4" },
            { id: 5, url: "https://picsum.photos/id/237/200/300", alt: "Look 5" },
            { id: 6, url: "https://picsum.photos/id/237/200/300", alt: "Look 6" },
            { id: 7, url: "https://picsum.photos/id/237/200/300", alt: "Look 7" },
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
    {
        id: 3,
        title: "Show 3",
        date: "December 25, 2025",
        images: [
            { id: 1, url: "https://picsum.photos/id/237/200/300", alt: "Look 1" },
            { id: 2, url: "https://picsum.photos/id/237/200/300", alt: "Look 2" },
            { id: 3, url: "https://picsum.photos/id/237/200/300", alt: "Look 3" },
            { id: 4, url: "https://picsum.photos/id/237/200/300", alt: "Look 4" },
            { id: 5, url: "https://picsum.photos/id/237/200/300", alt: "Look 5" },
            { id: 6, url: "https://picsum.photos/id/237/200/300", alt: "Look 6" },
            { id: 7, url: "https://picsum.photos/id/237/200/300", alt: "Look 7" },
            { id: 8, url: "https://picsum.photos/id/237/200/300", alt: "Look 8" }
        ]
    }
];

const Shows = () => {
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
                     
                    <h1 className="text-5xl font-bold text-[#373333] mb-3">
                        {currentShow.title}
                    </h1>
                    <p className="text-xl text-gray-600">{currentShow.date}</p>
                </div>

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