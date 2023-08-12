import React,{useContext} from 'react';
import { SettingContext } from './Manager';
import  myComputer from "../asset/image/my-computer.png";
export const WinMyComp = () => {
  const { winMyComp , myCompStyle } = useContext(SettingContext);
  return (
    <>
        <div className='my-computer c-dummy-0'
            onMouseDown={winMyComp}
            style={myCompStyle}>
            <img className='c-dummy-0' src={myComputer} alt="myComputer" width={35} height={35} />
            <span className='c-dummy-0'>My Computer</span>
        </div>
    </>
  )
}
