import { useState } from 'react';

// Placeholder data
const ShowsData = [
    {
        id: 1,
        title: "Show 1",
        date: "August 29, 2025",
        images: [
            { id: 1, url: "https://picsum.photos/id/237/200/300", alt: "Look 1" },
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
        title: "Show 2",
        date: "December 11, 2025",
        images: [
            { id: 1, url: "https://picsum.photos/id/237/200/300", alt: "Look 1" },
            { id: 2, url: "https://picsum.photos/id/237/200/300", alt: "Look 2" },
            { id: 3, url: "https://picsum.photos/id/237/200/300", alt: "Look 3" },
            { id: 4, url: "https://picsum.photos/id/237/200/300", alt: "Look 4" },
            { id: 5, url: "https://picsum.photos/id/237/200/300", alt: "Look 5" },
            { id: 6, url: "https://picsum.photos/id/237/200/300", alt: "Look 6" }
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