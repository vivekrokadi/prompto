import { createContext, useState, useEffect } from "react";
import main from "../config/gemini";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [previousPrompts, setPreviousPrompts] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [resultData, setResultData] = useState("");
  const [displayedResult, setDisplayedResult] = useState("");
  const [typingComplete, setTypingComplete] = useState(false);

  const formatResponse = (text) => {
    let formattedText = text;

    formattedText = formattedText.replace(/\*\*(.*?)\*\*/g, "<b>$1</b>");

    formattedText = formattedText.replace(/"([^"]+)"/g, "<b>$1</b>");

    formattedText = formattedText.replace(/\n/g, "<br>");

    return formattedText;
  };

  useEffect(() => {
    if (!resultData || typingComplete) return;

    let currentIndex = 0;
    const typingSpeed = 10;

    const typeText = () => {
      if (currentIndex < resultData.length) {
        const chunk = resultData.substring(0, currentIndex + 1);
        const formattedChunk = formatResponse(chunk);
        setDisplayedResult(formattedChunk);
        currentIndex++;
        setTimeout(typeText, typingSpeed);
      } else {
        setTypingComplete(true);
      }
    };

    typeText();

    return () => {
      setTypingComplete(false);
    };
  }, [resultData]);

  const newChat = () => {
    setLoading(false);
    setShowResult(false);
  };

  const onSent = async (prompt) => {
    const finalPrompt = prompt || input;

    setResultData("");
    setDisplayedResult("");
    setTypingComplete(false);
    setLoading(true);
    setShowResult(true);
    setRecentPrompt(finalPrompt);

    try {
      const response = await main(finalPrompt);
      setResultData(response);
      setPreviousPrompts((prev) => [...prev, finalPrompt]);
    } catch (error) {
      setResultData("Error occurred while fetching response.");
      console.error(error);
    } finally {
      setLoading(false);
      setInput("");
    }
  };

  const value = {
    previousPrompts,
    setPreviousPrompts,
    input,
    setInput,
    recentPrompt,
    setRecentPrompt,
    loading,
    setLoading,
    showResult,
    setShowResult,
    resultData: displayedResult,
    setResultData,
    onSent,
    typingComplete,
    newChat,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default ContextProvider;
