import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const TypingText = ({ texts, speed }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isRetreating, setIsRetreating] = useState(false);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      const currentText = texts[currentTextIndex];

      if (isRetreating) {
        setTypedText((prevText) => prevText.slice(0, -1));

        if (typedText === "") {
          setIsRetreating(false);
          setCurrentIndex(0);
          setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }
      } else {
        const nextChar = currentText[currentIndex];

        setTypedText((prevText) => prevText + nextChar);

        setCurrentIndex((prevIndex) => prevIndex + 1);

        if (currentIndex === currentText.length - 1) {
          setIsRetreating(true);
        }
      }
    }, speed);

    return () => clearInterval(typingInterval);
  }, [currentIndex, currentTextIndex, texts, speed, isRetreating, typedText]);

  return (
    <span className="code text-[#82ddfd] md:text-lg text-sm my-5">
      {typedText}
    </span>
  );
};
TypingText.propTypes = {
  texts: PropTypes.string.isRequired,
  speed: PropTypes.number.isRequired,
};

export default TypingText;
