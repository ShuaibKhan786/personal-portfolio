import React,{useContext}from 'react';
import { SettingContext } from '../components/App';


export const WinTaskbarSett = () => {
  const {  taskbarHeigClac , clientX , settTogg ,toolbarMenuEleRef} = useContext(SettingContext);
  const contextMenuStyle = {
    bottom : settTogg ? `${taskbarHeigClac()}px`: "-9999px" , 
    left: settTogg ? `${clientX}px` : "-9999px",
    visibility: settTogg ? 'visible' : 'hidden',
    position: settTogg ? "fixed" : "absolute",
  };
  return (
    // sometime we need to use inline style
    // becz I cannot get a reference of an element
    // when component is not mounted 
    <div className="winstartbox wintaskbar-item-border0" 
        ref={toolbarMenuEleRef}
        style={contextMenuStyle}>
        <div>setting1</div>
        <div>setting2</div>
        <div>setting3</div>
        <div>setting4</div>
    </div>
  )
}

