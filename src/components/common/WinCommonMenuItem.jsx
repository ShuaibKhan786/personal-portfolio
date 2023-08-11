import React,{useContext} from 'react';
import { SettingContext } from '../Manager';
import { WinCommonLine } from './WinCommonLine';
export const WinCommonMenuItem = ({ items , elemRefernce , elemStyle ,divIndices}) => {
  const {  commonSettFunc } = useContext(SettingContext);
  return (
    <div className='commonMenuBox wintaskbar-item-border0'
        ref={elemRefernce}
        onClick={commonSettFunc}
        style={elemStyle}>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <div  className='wincommon-item c-dummy-1'>{item}</div>
          {divIndices.includes(index) && <WinCommonLine />}
        </React.Fragment>
      ))}
    </div>
  );
};



