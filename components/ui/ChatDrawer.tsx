import React from "react";
import { FaTimes } from "react-icons/fa";
import { PlaceholderInput } from "./PlaceholderInput";

interface ChatDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  chatHistory: { query: string; response: string }[];
  query: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const ChatDrawer: React.FC<ChatDrawerProps> = ({
  isOpen,
  onClose,
  chatHistory,
  query,
  onChange,
  onSubmit,
}) => {
  return (
    <div className={`fixed inset-0 z-50 ${isOpen ? "block" : "hidden"}`}>
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      ></div>
      <div className="absolute inset-y-0 right-0 w-[600px] bg-white dark:bg-gray-800 shadow-lg flex flex-col">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white">
            Chat History
          </h2>
          <button onClick={onClose} className="text-lg">
            <FaTimes />
          </button>
        </div>
        <div className="flex-1 p-4 overflow-y-auto space-y-4">
          {chatHistory.map((chat, index) => (
            <div key={index} className="space-y-4">
              <div className="text-right">
                <span className="inline-block font-medium bg-blue-100 text-blue-800 p-2 rounded-lg">
                  {chat.query}
                </span>
              </div>
              <div className="text-left">
                <span className="inline-block font-medium bg-gray-100 text-gray-800 p-2 rounded-lg">
                  {chat.response}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="p-4 border-t border-gray-200">
          <PlaceholderInput
            placeholders={[]}
            value={query}
            onChange={onChange}
            onSubmit={onSubmit}
          />
        </div>
      </div>
    </div>
  );
};
