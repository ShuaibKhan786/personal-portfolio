import React,{useContext}from 'react';
import { SettingContext } from './Manager';
import { WinCommonMenuItem } from './common/WinCommonMenuItem';

export const WinRightClick = () => {
  const {  mousePos , rcMenuEleRef ,rightclickTogg } = useContext(SettingContext);
  // sometime we need to use inline style
  // becz I cannot get a reference of an element
  // when component is not mounted 
  const contextMenuStyle = {
    visibility: rightclickTogg ? 'visible' : 'hidden',
    position: rightclickTogg ? "fixed" : "absolute",
    top: rightclickTogg ? `${mousePos.clienty}px` : "-9999px",
    left: rightclickTogg ? `${mousePos.clientx}px` : "-9999px"
  };
  return (
    <WinCommonMenuItem 
        items={['background1','background2','background3','background4','refresh',`${false ? 'exit-fullscreen' : 'fullscreen'}`,'properties']}
        divIndices={[3,4,5]}
        elemRefernce={rcMenuEleRef}
        elemStyle={contextMenuStyle}
    />
  )
}