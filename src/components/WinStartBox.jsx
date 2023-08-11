import React,{useContext}from 'react';
import { SettingContext } from './Manager';


export const WinStartBox = () => {
  const {  winStartboxStyle , winStartBoxRef , winStartboxOuterItem1 } = useContext(SettingContext);
  return (
    <div className="winstartbox wintaskbar-item-border0 c-dummy-1" 
        ref={winStartBoxRef}
        style={winStartboxStyle}>
        <div className='winstartbox-outer-item-1 c-dummy-1'
             style={winStartboxOuterItem1}>
          <div className='winstartbox-inner-bottom c-dummy-1'>SHUAIB KHAN</div>
          <div className='winstartbox-inner-top c-dummy-1'>95</div>
        </div>
        <div>

        </div>
    </div>
  )
}
