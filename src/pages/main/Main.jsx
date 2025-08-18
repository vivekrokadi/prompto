import React from "react";
import assets from "../../assets/assets";
import { useContext } from "react";
import { Context } from "../../context/Context.jsx";



function Main() {
  const {
    onSent,
    setInput,
    showResult,
    resultData,
    loading,
    input,
    recentPrompt,
  } = useContext(Context);

  return (
    <main className="bg-[#121826] min-h-screen w-full flex flex-col justify-between text-gray-300 gap-6">
      <div className="flex justify-between items-center w-[95%] mx-auto mt-5">
        <div className="flex items-center gap-2">
          <img className="w-[50px]" src="/prompto_rm.png" alt="Prompto Logo" />
          <h1 className="text-lg font-semibold">Prompto</h1>
        </div>
        <img
          src={assets.user_icon}
          className="w-[50px] rounded-full border-2 border-transparent hover:border-[#00AEEF] transition"
          alt="User Icon"
        />
      </div>

      {!showResult ? (
        <>
          <div className="flex flex-col items-center gap-2.5 text-center px-4 ">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-[#00AEEF] to-[#5B2CFF] bg-clip-text text-transparent">
              Hello, Dev.
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl text-[#B0B6C3]">
              How can I help you today?
            </h2>
          </div>
          <div className="hidden sm:flex flex-wrap justify-center gap-4 mt-4 w-full">
            <div className="bg-gradient-to-br from-[#00AEEF]/10 to-[#5B2CFF]/10 rounded-xl p-4 shadow-md hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 h-[150px] w-[250px] flex flex-col cursor-pointer justify-between">
              <p className="text-lg leading-snug text-gray-400 font-medium">
                Suggest creative weekend getaway ideas nearby
              </p>
              <div className="bg-gradient-to-tr from-[#00AEEF] to-[#5B2CFF] p-2 rounded-full self-end">
                <img className="w-[20px] h-[20px]" src={assets.compass_icon} alt="compass-icon" />
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#00AEEF]/10 to-[#5B2CFF]/10 rounded-xl p-4 shadow-md hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 h-[150px] w-[250px] flex flex-col cursor-pointer justify-between">
              <p className="text-lg leading-snug text-gray-400 font-medium">
                Explain how blockchain works in simple terms
              </p>
              <div className="bg-gradient-to-tr from-[#00AEEF] to-[#5B2CFF] p-2 rounded-full self-end">
                <img className="w-[20px] h-[20px]" src={assets.bulb_icon} alt="bulb-icon" />
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#00AEEF]/10 to-[#5B2CFF]/10 rounded-xl p-4 shadow-md hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 h-[150px] w-[250px] flex flex-col cursor-pointer justify-between">
              <p className="text-lg leading-snug text-gray-400 font-medium">
                Give me conversation starters for meeting new people
              </p>
              <div className="bg-gradient-to-tr from-[#00AEEF] to-[#5B2CFF] p-2 rounded-full self-end">
                <img className="w-[20px] h-[20px]" src={assets.message_icon} alt="message-icon" />
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#00AEEF]/10 to-[#5B2CFF]/10 rounded-xl p-4 shadow-md hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 h-[150px] w-[250px] flex flex-col cursor-pointer justify-between">
              <p className="text-lg leading-snug text-gray-400 font-medium">
                Write a JavaScript function to reverse a string
              </p>
              <div className="bg-gradient-to-tr from-[#00AEEF] to-[#5B2CFF] p-2 rounded-full self-end">
                <img className="w-[20px] h-[20px]" src={assets.code_icon} alt="code-icon" />
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="result py-0 px-[5%] max-h-[70vh] overflow-y-auto flex flex-col gap-4">
          <div className="my-[40px] flex items-center gap-5">
            <img
              className="w-[40px] rounded-full"
              src={assets.user_icon}
              alt=""
            />
            <p>{recentPrompt}</p>
          </div>
          <div className="flex items-start gap-5 ">
            <img
              className="w-[40px] rounded-full"
              src={assets.prompto_chat}
              alt=""
            />
            {loading ? (
              <div>
                <p className="text-gray-400">Thinking...</p>
              </div>
            ) : (
              <p
                className="text-lg font-[300] leading-snug"
                dangerouslySetInnerHTML={{ __html: resultData }}
              ></p>
            )}
          </div>
        </div>
      )}

      <div className="py-3.5 sm:py-5 w-full max-w-[900px] mx-auto">
        <div className="flex items-center justify-between bg-[#1A2032] rounded-full p-3 shadow focus-within:ring-2 focus-within:ring-[#00AEEF]">
          <input
            type="text"
            className="outline-none border-none bg-transparent p-2 flex-1 text-[16px] text-gray-200 placeholder-gray-500"
            placeholder="Enter prompt here..."
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
          <div className="flex items-center  px-4">
            {/* <img
              src={assets.gallery_icon}
              alt="Gallery"
              className="w-[20px] cursor-pointer hover:scale-110 transition"
            /> */}
            {/* <img
              src={assets.mic_icon}
              alt="Mic"
              className="w-[20px] cursor-pointer hover:scale-110 transition"
            /> */}
            <img
              onClick={() => onSent()}
              src={assets.send_icon}
              alt="Send"
              className="w-[20px] cursor-pointer hover:scale-110 transition"
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
