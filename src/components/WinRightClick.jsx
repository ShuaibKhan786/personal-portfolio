import React,{useContext}from 'react';
import { SettingContext } from '../components/App';
import { WinCommonLine } from './common/WinCommonLine';


export const WinRightClick = () => {
  const {  mousePos , rcMenuEleRef ,rightclickTogg } = useContext(SettingContext);
  const contextMenuStyle = {
    visibility: rightclickTogg ? 'visible' : 'hidden',
    position: rightclickTogg ? "fixed" : "absolute",
    top: rightclickTogg ? `${mousePos.clienty}px` : "-9999px",
    left: rightclickTogg ? `${mousePos.clientx}px` : "-9999px",
  };
  return (
    // sometime we need to use inline style
    // becz I cannot get a reference of an element
    // when component is not mounted 
    <div ref={rcMenuEleRef} 
        className="winstartbox wintaskbar-item-border0" 
        style={contextMenuStyle}>
        <div className='winrightclick-item'>background1</div>
        <div className='winrightclick-item'>background2</div>
        <div className='winrightclick-item'>background3</div>
        <div className='winrightclick-item'>background4</div>
        <WinCommonLine />
        <div className='winrightclick-item'>refresh</div>
        <WinCommonLine />
        <div className='winrightclick-item'>properties</div>
    </div>
  )
}