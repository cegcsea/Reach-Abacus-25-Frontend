import React, { useState, useEffect, useRef } from "react";

const TypewritingButton = () => {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "Innovate, Integrate, Inspire: ABACUS'24";
  const indexRef = useRef(0); // Use a ref to store the index
  const typingIntervalRef = useRef(null); // Ref to store the interval ID

  useEffect(() => {
    const typeText = () => {
      if (indexRef.current < fullText.length) {
        // Add the next character to the displayed text
        setDisplayedText((prev) => prev + fullText.charAt(indexRef.current));
        indexRef.current++;
      } else {
        // Stop typing when the full text is displayed
        clearInterval(typingIntervalRef.current);

        // Clear the text after a delay and restart typing
        setTimeout(() => {
          setDisplayedText(""); // Reset the displayed text
          indexRef.current = 0; // Reset the index
          startTyping(); // Restart the typing animation
        }, 1000); // Delay before restarting (1 second)
      }
    };

    const startTyping = () => {
      typingIntervalRef.current = setInterval(typeText, 100); // Typing speed
    };

    startTyping(); // Begin typing on mount

    return () => clearInterval(typingIntervalRef.current); // Cleanup interval on unmount
  }, []);

  return (
    <button className="theme">
      {displayedText || "\u00A0"} {/* Non-breaking space for empty state */}
    </button>
  );
};

export default TypewritingButton;
