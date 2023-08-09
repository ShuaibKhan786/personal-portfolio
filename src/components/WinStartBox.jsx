import React,{useContext}from 'react';
import { SettingContext } from '../components/App';


export const WinStartBox = () => {
  const {  taskbarHeigClac } = useContext(SettingContext);
  return (
    // sometime we need to use inline style
    // becz I cannot get a reference of an element
    // when component is not mounted 
    <div className="winstartbox wintaskbar-item-border0" 
        style={{bottom : `${taskbarHeigClac()}px`}}>
        <div>windowBox1</div>
        <div>windowBox2</div>
        <div>windowBox3</div>
        <div>windowBox4</div>
    </div>
  )
}
