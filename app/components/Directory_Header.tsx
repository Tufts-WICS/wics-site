'use client';

import React from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function DirectoryHeader() {
  const pathname = usePathname();

  const headerData = [
    {
      href: "/events",
      title: "events",
      description: "WiCS Organizes a variety of different events for our members. Below are the four different types of events we typically arrange. If you are a WiCS member, part of Tufts faculty, or a company representative interested in something different, do not hesitate to reach out by contacting one of our eboard members or one of our social media pages.",
      accentBgClass: "bg-[#FD92DA]",
      hexColor: "#FD92DA",
      borderColor: "border-black",
      hexBorderColor: "#16181C"
    },
    {
      href: "/eboard",
      title: "eboard",
      description: "Our dedicated team is committed to empowering and supporting women pursuing computer science. We strive to create a welcoming environment that fosters professional and personal growth for all WiCS members.",
      accentBgClass: "bg-[#9478F9]",
      hexColor: "#9478F9",
      borderColor: "border-black",
      hexBorderColor: "#16181C"
    },
    {
      href: "/programs",
      title: "programs",
      description: "WiCS Organizes a variety of different events for our members. Below are the four different types of events we typically arrange. If you are a WiCS member, part of Tufts faculty, or a company representative interested in something different, do not hesitate to reach out by contacting one of our eboard members or one of our social media pages.",
      accentBgClass: "bg-[#DEF241]",
      hexColor: "#DEF241",
      borderColor: "border-black",
      hexBorderColor: "#16181C"
    },
    {
      href: "/get-connected", 
      title: "connected",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sem vitae mi finibus condimentum dictum sed lorem. Morbi non neque viverra, consequat diam nec, imperdiet lectus. Pellentesque sit amet aliquet eros, quis bibendum arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      accentBgClass: "bg-[#000000]",
      hexColor: "#000000",
      borderColor: "border-white",
      hexBorderColor: "#FFFFFF"
    }
  ];

  const currentPageData = headerData.find((item) => item.href === pathname);

  if (!currentPageData) return null;

  const isBlackPage = currentPageData.hexColor === "#000000";

  return (
    <div className="flex flex-col md:flex-row items-start gap-3 w-full max-w-4xl mx-auto p-4">
      
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@1,700&display=swap');
      `}</style>
      
      <div className="flex gap-2 shrink-0 self-start mt-1">
        <button className="hover:scale-105 transition-transform focus:outline-none rotate-180">
          <svg width="32" height="32" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="52.5" y="52.5" width="51" height="51" rx="8.5" transform="rotate(180 52.5 52.5)" fill={currentPageData.hexColor} stroke={currentPageData.hexBorderColor} strokeWidth="3"/>
            <path d="M40.0607 28.0607C40.6464 27.4749 40.6464 26.5251 40.0607 25.9393L30.5147 16.3934C29.9289 15.8076 28.9792 15.8076 28.3934 16.3934C27.8076 16.9792 27.8076 17.9289 28.3934 18.5147L36.8787 27L28.3934 35.4853C27.8076 36.0711 27.8076 37.0208 28.3934 37.6066C28.9792 38.1924 28.9792 38.1924 30.5147 37.6066L40.0607 28.0607ZM15 27L15 28.5L39 28.5L39 27L39 25.5L15 25.5L15 27Z" fill={isBlackPage ? "white" : "black"}/>
          </svg>
        </button>
        
        <button className="hover:scale-105 transition-transform focus:outline-none">
          <svg width="32" height="32" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="52.5" y="52.5" width="51" height="51" rx="8.5" transform="rotate(180 52.5 52.5)" fill={currentPageData.hexColor} stroke={currentPageData.hexBorderColor} strokeWidth="3"/>
            <path d="M40.0607 28.0607C40.6464 27.4749 40.6464 26.5251 40.0607 25.9393L30.5147 16.3934C29.9289 15.8076 28.9792 15.8076 28.3934 16.3934C27.8076 16.9792 27.8076 17.9289 28.3934 18.5147L36.8787 27L28.3934 35.4853C27.8076 36.0711 27.8076 37.0208 28.3934 37.6066C28.9792 38.1924 28.9792 38.1924 30.5147 37.6066L40.0607 28.0607ZM15 27L15 28.5L39 28.5L39 27L39 25.5L15 25.5L15 27Z" fill={isBlackPage ? "white" : "black"}/>
          </svg>
        </button>
      </div>

      <div className="relative flex-grow w-full md:w-auto">
        <div className={`absolute inset-0 translate-x-2 translate-y-2 rounded-xl border-2 ${currentPageData.borderColor} ${currentPageData.accentBgClass}`} />
        
        <div className="relative border-2 border-black rounded-xl overflow-hidden bg-[#F2EBD8]">
          <div className="flex items-center justify-between border-b-2 border-black px-4 py-2 bg-[#F2EBD8]">
            
            <div 
              style={{
                fontFamily: "'Space Mono', monospace",
                fontWeight: 700,
                fontStyle: 'italic',
                fontSize: '22px',
                lineHeight: '100%',
                letterSpacing: '0%',
                display: 'flex',
                alignItems: 'center',
                gap: '2px'
              }}
              className="text-black"
            >
              <span className="lowercase">c:\</span>
              <span>WiCS\</span>
              <span className="lowercase">{currentPageData.title}_</span>
            </div>

            <div className="shrink-0">
              <Image src="/magnifier_header.svg" alt="Search" width={20} height={20} />
            </div>
          </div>

          <div className="p-4">
            <p 
              style={{
                fontFamily: "'TASA Orbiter', sans-serif",
                fontWeight: 400,
                fontStyle: 'normal',
                fontSize: '16px',
                lineHeight: '120%',
                letterSpacing: '0%'
              }}
              className="text-[#1C1C1E]"
            >
              {currentPageData.description}
            </p>
          </div>
        </div>
      </div>

      <div className={`hidden md:block shrink-0 w-8 h-8 border-2 ${currentPageData.borderColor} rounded-full mt-1 ${currentPageData.accentBgClass}`} />
    </div>
  );
}