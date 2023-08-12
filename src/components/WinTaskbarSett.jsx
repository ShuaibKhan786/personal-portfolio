import React,{useContext}from 'react';
import { SettingContext } from './Manager';
import { WinCommonMenuItem } from './common/WinCommonMenuItem';

export const WinTaskbarSett = () => {
  const { taskbarHeigClac ,
          clientX ,
          settTogg ,
          toolbarMenuEleRef ,
          position
        } = useContext(SettingContext);
  // sometime we need to use inline style
  // becz I cannot get a reference of an element
  // when component is not mounted 
  const contextMenuStyle = {
    [position] : settTogg ? `${taskbarHeigClac() }px`: "-9999px" , 
    left: settTogg ? `${clientX}px` : "-9999px",
    visibility: settTogg ? 'visible' : 'hidden',
    position: settTogg ? "fixed" : "absolute",
  };
  return (
    <WinCommonMenuItem
      items={['alignment', 'position']}
      elemRefernce={toolbarMenuEleRef}
      elemStyle={contextMenuStyle}
      divIndices={[0]} 
    />
  )
}

