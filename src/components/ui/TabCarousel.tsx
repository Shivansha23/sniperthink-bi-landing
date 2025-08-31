'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';

// Define the structure for tab content
type TabContent = {
  id: string;
  title: string;
  heading: string;
  bulletPoints: string[];
  image: React.ReactNode;
  bgColor: string;
};

// Props for the TabCarousel component
interface TabCarouselProps {
  tabs: TabContent[];
  autoPlayInterval?: number;
  initialTab?: string;
}

const TabCarousel: React.FC<TabCarouselProps> = ({
  tabs,
  autoPlayInterval = 6000,
  initialTab = tabs[0].id,
}) => {
  const [activeTab, setActiveTab] = useState(initialTab);
  const [prevTab, setPrevTab] = useState<string | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Start the autoplay timer
  const startAutoPlayTimer = useCallback(() => {
    timerRef.current = setInterval(() => {
      const currentIndex = tabs.findIndex((tab) => tab.id === activeTab);
      const nextIndex = (currentIndex + 1) % tabs.length;
      
      setPrevTab(activeTab);
      setActiveTab(tabs[nextIndex].id);
      setIsTransitioning(true);
    }, autoPlayInterval);
  }, [activeTab, autoPlayInterval, tabs]);

  // Handle tab change
  const handleTabChange = (tabId: string) => {
    if (tabId !== activeTab && !isTransitioning) {
      setPrevTab(activeTab);
      setActiveTab(tabId);
      setIsTransitioning(true);
      
      // Reset the timer when manually changing tabs
      if (timerRef.current) {
        clearInterval(timerRef.current);
        startAutoPlayTimer();
      }
    }
  };



  // Handle animation end
  const handleTransitionEnd = () => {
    setIsTransitioning(false);
  };

  // Setup autoplay
  useEffect(() => {
    startAutoPlayTimer();
    
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [activeTab, startAutoPlayTimer]);

  return (
    <div className="relative overflow-hidden">
      {/* Tab Navigation */}
      <div className="flex flex-wrap mb-6 rounded-full bg-gray-900 p-1 max-w-fit mx-auto border border-gray-800">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabChange(tab.id)}
            className={`px-8 py-3 text-sm md:text-base font-medium rounded-full transition-all duration-300 ${
              activeTab === tab.id
                ? 'bg-[#0e9390] text-white'
                : 'text-gray-300 hover:bg-gray-800'
            }`}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* Content Container */}
      <div className="relative h-[600px] md:h-[500px] overflow-hidden">
        {tabs.map((tab) => {
          const isActive = tab.id === activeTab;
          const wasActive = tab.id === prevTab;
          
          return (
            <div
              key={tab.id}
              className={`absolute w-full h-full transition-all duration-700 ${tab.bgColor} ${
                isActive
                  ? 'translate-y-0 opacity-100 z-10'
                  : wasActive
                  ? '-translate-y-full opacity-0 z-0'
                  : 'translate-y-full opacity-0 z-0'
              }`}
              onTransitionEnd={isActive ? handleTransitionEnd : undefined}
            >
              <div className="container-custom h-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full items-center">
                  {/* Left column: Text content */}
                  <div className="space-y-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                      {tab.heading}
                    </h2>
                    <ul className="space-y-4">
                      {tab.bulletPoints.map((point, index) => (
                        <li key={index} className="flex items-start">
                          <span className="mr-3 text-[#0e9390]">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </span>
                          <span className="text-gray-300">{point}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="#"
                      className="inline-flex items-center text-[#0e9390] font-medium hover:underline"
                    >
                      Learn more
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 ml-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  </div>
                  {/* Right column: Image/Visual */}
                  <div className="flex justify-center items-center">
                    {tab.image}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TabCarousel;
