import React, { useContext, useState } from "react";
import assets from "../../assets/assets";
import { Context } from "../../context/Context";

const Sidebar = () => {
  const [extended, setExtended] = useState(false);
  const { onSent, previousPrompts, setRecentPrompt, newChat } =
    useContext(Context);

  return (
    <div className={`sidebar h-[100vh] hidden sm:flex flex-col justify-between bg-[#0A0F1C] text-gray-300 px-4 py-6 border-r border-[#1F2937] transition-all duration-300
    ${extended ? "w-60" : "w-16"}`}>
      <div className="top">
        <img
          onClick={() => setExtended(!extended)}
          className="menu w-5 block ml-2.5 cursor-pointer hover:scale-110 transition-transform"
          src={assets.menu_icon}
          alt="menu-icon"
        />

        <div
          className="new-chat mt-10 flex items-center gap-2.5 bg-[#1A2234] rounded-full cursor-pointer p-2.5 
             hover:bg-gradient-to-r hover:from-[#00AEEF]/20 hover:to-[#5B2CFF]/20 transition"
          onClick={() => newChat()}
        >
          <img className="w-[25px]" src={assets.plus_icon} alt="plus-icon" />
          {extended && <p className="p-0.5 font-medium text-white">New Chat</p>}
        </div>

        {extended && (
          <div className="recent mt-6">
            <p className="text-sm uppercase tracking-wider text-gray-400">
              Recent
            </p>
            {previousPrompts.map((prompt, index) => {
              return (
                <div
                  className="recent-entry flex gap-2.5 items-start p-2.5 pr-5 rounded-full hover:bg-gradient-to-r hover:from-[#00AEEF]/10 hover:to-[#5B2CFF]/10 cursor-pointer mt-2 transition"
                  key={index}
                >
                  <img
                    className="w-[20px]"
                    src={assets.message_icon}
                    alt="message-icon"
                  />
                  <p className="truncate">{prompt}</p>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <div className="bottom flex flex-col gap-2">
        {[
          { icon: assets.question_icon, label: "Help" },
          { icon: assets.history_icon, label: "Activity" },
          { icon: assets.setting_icon, label: "Settings" },
        ].map(({ icon, label }) => (
          <div
            key={label}
            className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-gradient-to-r hover:from-[#00AEEF]/10 hover:to-[#5B2CFF]/10 transition cursor-pointer"
          >
            <img className="w-[25px]" src={icon} alt={`${label}-icon`} />
            {extended && <p className="p-0.5 font-medium text-white whitespace-nowrap">{label}</p>}

          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
