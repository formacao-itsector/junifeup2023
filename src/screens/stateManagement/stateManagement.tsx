import React, { useState } from 'react';
import { Tabs } from '../../components';
import { ContextTab, ReduxTab, ZustandTab } from './tabs';

export const StateManagement: React.FC = () => {
  const [currentTab, setCurrentTab] = useState(0);
  return (
    <div className="border-solid border-2 border-violet-600">
      <div className="flex justify-center items-center">
        <Tabs
          currentTab={currentTab}
          tabs={['Context', 'Redux', 'Zustand']}
          onClick={(i) => {
            setCurrentTab(i);
          }}
        />
      </div>
      {currentTab === 0 && <ContextTab />}
      {currentTab === 1 && <ReduxTab />}
      {currentTab === 2 && <ZustandTab />}
    </div>
  );
};
