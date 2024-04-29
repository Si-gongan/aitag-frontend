'use client';

import { CREATE_TABS } from '@/utils/constants';
import { useState } from 'react';
import TabUrlSection from './TabUrllSection';
import TabImageSection from './TabImageSection';

export default function Tabs() {
  const [selectedTab, setSelectedTab] = useState('url');

  const handleClickTabs = (selectedId: string) => {
    const stringId = String(selectedId);
    setSelectedTab(stringId);
  };

  return (
    <div>
      <div className="flex w-980 h-52 border-1 border-grey/3 text-[#212121]">
        {CREATE_TABS.map((tab, index) => (
          <div
            key={tab.id}
            className={`flex items-center justify-center w-1/2 h-full ${
              index === 0 ? 'border-r-1 border-grey/3' : ''
            } ${selectedTab === tab.id && 'bg-grey/1'}`}
            onClick={() => handleClickTabs(tab.id)}>
            {tab.title}
          </div>
        ))}
      </div>
      {selectedTab === 'url' ? <TabUrlSection /> : <TabImageSection />}
    </div>
  );
}
