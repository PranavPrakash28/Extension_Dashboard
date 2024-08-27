import { useState, useEffect } from "react";
import BasicSwitches from "../Toogle/Toogle";
import Switch from '@mui/material/Switch';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

const Blocking = () => {
  const [aiTools, setAiTools] = useState([
    { id: 1, name: "ChatGPT", isEnabled: false, url: "/dummy-url/chatgpt" },
    { id: 2, name: "Gemini", isEnabled: false, url: "/dummy-url/gemini" },
    { id: 3, name: "Bard", isEnabled: false, url: "/dummy-url/bard" },
  ]);

  const [isBlocked, setIsBlocked] = useState(false);

  useEffect(() => {
    const allBlocked = aiTools.every(tool => tool.isEnabled);
    setIsBlocked(allBlocked);
  }, [aiTools]);

  const handleSwitchChange = (id) => () => {
    setAiTools((prevTools) =>
      prevTools.map((tool) =>
        tool.id === id ? { ...tool, isEnabled: !tool.isEnabled } : tool
      )
    );

    setTimeout(() => {
      setAiTools((prevTools) => prevTools.filter((tool) => tool.id !== id));
    }, 500); 
  };

  const handleBlockAll = () => {
    setAiTools((prevTools) =>
      prevTools.map((tool) => ({ ...tool, isEnabled: true }))
    );
    setIsBlocked(true);

    setTimeout(() => {
      setAiTools([]);
    }, 500); 
  };

  return (
    <div className="flex flex-col bg-black  text-gray-100 p-6 rounded-3xl shadow-lg w-full max-w-4xl mx-auto mt-10">
      <div className="flex justify-between items-start gap-20">
        <div className="flex flex-col  bg-gray-700 p-6 rounded-3xl shadow-md w-1/2 h-80">
          <h2 className="text-2xl font-semibold ">Master Control</h2>
          <div>
            <button
              onClick={handleBlockAll}
              className={`rounded-full w-28 h-28 border-white  items-center mt-16 justify-center border-4 ${
                isBlocked ? "bg-red-500" : "bg-green-500"
              }`}
            >
              <p className="font-bold text-white">{isBlocked ? "BLOCKED" : "BLOCK"}</p>
            </button>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start bg-gray-700 p-6 rounded-3xl shadow-md w-1/2 h-80">
          <h2 className="text-2xl font-semibold text-center pl-20 mb-4">Blocking Engine</h2>
          {isBlocked ? (
            <p className="text-xl text-green-500 font-bold">
              Your system is safe from AI threats.
            </p>
          ) : (
            <ul className="space-y-4 w-full">
              {aiTools.map((tool) => (
                <li
                  key={tool.id}
                  className={`flex items-center justify-between p-4 rounded-lg transition ${
                    tool.isEnabled ? "bg-gray-900" : "bg-gray-700"
                  }`}
                >
                  <div className="flex items-center space-x-4 w-full">
                    <p
                      className={`text-lg ${
                        tool.isEnabled ? "text-green-500" : "text-gray-300"
                      }`}
                    >
                      {tool.name}
                    </p>
                  </div>
                  <div onClick={handleSwitchChange(tool.id)}>
                    <BasicSwitches checked={tool.isEnabled} />
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blocking;
