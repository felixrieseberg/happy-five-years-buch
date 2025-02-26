import React, { useEffect, useRef, useState } from 'react';

export const LogoText: React.FC = () => {
  const topTextRef = useRef<HTMLDivElement>(null);
  const bottomTextRef = useRef<HTMLDivElement>(null);
  const [topFontSize, setTopFontSize] = useState(52);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    const adjustWidth = () => {
      if (topTextRef.current && bottomTextRef.current) {
        // Get the width of the bottom text
        const bottomWidth = bottomTextRef.current.offsetWidth;

        // Start with the initial font size
        let fontSize = topFontSize;

        // Apply the font size to measure
        topTextRef.current.style.fontSize = `${fontSize}px`;

        // Check if widths match, if not adjust
        let topWidth = topTextRef.current.offsetWidth;

        // Binary search approach to find the right font size
        let min = 20; // Minimum font size
        let max = 120; // Maximum font size

        // Maximum 10 iterations to prevent infinite loops
        for (let i = 0; i < 10; i++) {
          if (Math.abs(topWidth - bottomWidth) < 2) {
            // Close enough
            break;
          }

          if (topWidth < bottomWidth) {
            // Top text is too small
            min = fontSize;
            fontSize = Math.floor((fontSize + max) / 2);
          } else {
            // Top text is too large
            max = fontSize;
            fontSize = Math.floor((fontSize + min) / 2);
          }

          // Apply new font size and measure again
          topTextRef.current.style.fontSize = `${fontSize}px`;
          topWidth = topTextRef.current.offsetWidth;
        }

        // Update state with the final font size, account for the
        // wrong measurement with the final H
        setTopFontSize(fontSize + 3);
        setInitialized(true);
      }
    };

    // Adjust on mount and window resize
    adjustWidth();
    window.addEventListener('resize', adjustWidth);

    return () => {
      window.removeEventListener('resize', adjustWidth);
    };
  }, []);

  return (
    <div className="fixed top-5 left-8 z-50 font-['Italiana'] text-white pointer-events-none leading-tight tracking-wide flex flex-col text-left md:top-4 md:left-4 sm:top-2.5 sm:left-2.5">
      <div
        ref={topTextRef}
        className={`-mb-1.5 md:-mb-0.5 sm:-mb-0.5 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] transition-opacity duration-300 ${initialized ? 'opacity-100' : 'opacity-0'}`}
        style={{ fontSize: `${topFontSize}px` }}
      >
        BUCH
      </div>
      <div
        ref={bottomTextRef}
        className="text-[36px] md:text-[20px] sm:text-[20px] drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
      >
        FASHION WEEK
      </div>
    </div>
  );
};

export default LogoText;
