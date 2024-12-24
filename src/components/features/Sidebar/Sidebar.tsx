// Sidebar.js
import React from 'react';
import CTASideBar from './CTASideBar';
import { Topic } from '@/types/topic';

interface SideBarProps {
    svg: React.ReactElement;
    topics: Topic[];
    selectedTopic: Topic;
    title: string;
    handleTopicClick: (topic: Topic) => void;
    openScoreModal: () => void;
    openStreakModal: () => void;
}

const Sidebar: React.FC<SideBarProps> = ({ svg, title, topics, selectedTopic, handleTopicClick, openScoreModal, openStreakModal }) => {
  return (
    <div className="w-full md:w-96 p-5 md:p-10 flex-shrink-0">
      {/* Sidebar Header */}
      <div className="w-full h-14 py-2 cursor-pointer duration-500 hover:bg-gray-50 flex items-center space-x-2">
        <div className="px-2">
          <div className="flex space-x-2 items-center">
            {svg}
            <p className="font-semibold text-2xl">{title}</p>
          </div>
          <p className="uppercase text-[12px] text-gray-400 mt-1">{topics.length} topics</p>
        </div>
      </div>

      {/* Topics List */}
      <div className="mt-5">
        {topics.map((topic) => (
          <div
            key={topic.id}
            className={`bg-blue-50 py-3 px-3 mb-2 cursor-pointer ${
              selectedTopic?.id === topic.id ? "border-l-4 border-blue-500" : ""
            }`}
            onClick={() => handleTopicClick(topic)}
          >
            <p className="text-[11px] text-gray-400 uppercase">
              {topic.description}
            </p>
            <p className="text-[16px] font-semibold">{topic.name}</p>
          </div>
        ))}
      </div>

      {/* Call-to-Action Sidebars */}
      <div className="flex flex-col">
        <CTASideBar open={openScoreModal} text="Click to open the scoreboard!" />
        <CTASideBar open={openStreakModal} text="Click to see your current streak!" />
      </div>
    </div>
  );
};

export default Sidebar;
