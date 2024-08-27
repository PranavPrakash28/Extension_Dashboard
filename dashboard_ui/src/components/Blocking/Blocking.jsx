import { useState } from "react";
import BasicSwitches from "../Toogle/Toogle";
import Switch from '@mui/material/Switch';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

const Blocking = () => {
  const [aiTools, setAiTools] = useState([
    { id: 1, name: "ChatGPT", isEnabled: false, url: "/dummy-url/chatgpt" },
    { id: 2, name: "Gemini", isEnabled: false, url: "/dummy-url/gemini" },
    { id: 3, name: "Bard", isEnabled: false, url: "/dummy-url/bard" },
  ]);

  const handleSwitchChange = (id) => () => {
    setAiTools((prevTools) =>
      prevTools.map((tool) =>
        tool.id === id ? { ...tool, isEnabled: !tool.isEnabled } : tool
      )
    );

    setTimeout(() => {
      setAiTools((prevTools) => prevTools.filter((tool) => tool.id !== id));
    }, 2000); // Delay before blocking the tool
  };

  const handleBlockAll = () => {
    setAiTools((prevTools) =>
      prevTools.map((tool) => ({ ...tool, isEnabled: true }))
    );

    setTimeout(() => {
      setAiTools([]);
    }, 2000); // Delay before blocking all tools
  };

  return (
    <div className="flex flex-col justify-between bg-gray-800 text-white p-4 rounded-xl h-1/4">
      <div className="flex justify-between">
        <div className="flex flex-col items-center justify-center w-1/4 bg-black p-4 rounded-lg">
        <h2 className="text-2xl font-bold align- mb-4">Master Control </h2>
          <div className="h-10 bg-gray-800 w-full rounded-lg" onClick={handleBlockAll}>
            <Switch {...label} />
          </div>
        </div>
        <div className="w-2/4 ml-4 bg-gray-900 p-4 rounded-lg">
        <h2 className="text-2xl font-bold text-center mb-4">Blocking Engine</h2>
          <ul className="space-y-6">
            {aiTools.map((tool) => (
              <li
                key={tool.id}
                className={`flex items-center justify-between bg-gray-700 p-2 rounded-lg ${
                  tool.isEnabled ? "bg-green-500" : ""
                }`}
              >
                <div className="flex items-center space-x-4">
                  <p
                    className={`pl-2 ${
                      tool.isEnabled ? "text-white line-through" : "text-white"
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
        </div>
      </div>
    </div>
  );
};

export default Blocking;
