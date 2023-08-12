import React,{useContext}from 'react';
import { WinCommonMenuItem } from './common/WinCommonMenuItem';
import { WinCommonLine } from './common/WinCommonLine';
import { SettingContext } from './Manager';
import {ReactComponent as Linkedin} from '../asset/icons/linkedin.svg';
import {ReactComponent as Github} from '../asset/icons/github.svg';
import {ReactComponent as Facebook} from '../asset/icons/facebook.svg';
import {ReactComponent as Instagram} from '../asset/icons/instagram.svg';


export const WinStartBox = () => {
  const { winStartboxStyle ,
          winStartBoxRef ,
          winStartboxOuterItem1Style ,
          winStartboxOuterItem2Style ,
          transform1 ,
          setSettTogg  
      } = useContext(SettingContext);
  const contextMenuStyle = {
    border: "none",
    transform: transform1
  };
  return (
    <div className="winstartbox wintaskbar-item-border0 c-dummy-1" 
        onClick={()=>setSettTogg(false)}
        ref={winStartBoxRef}
        style={winStartboxStyle}>
        <div className='winstartbox-outer-item-1 c-dummy-1'
             style={winStartboxOuterItem1Style}>
          <div className='winstartbox-inner-bottom c-dummy-1'>SHUAIB KHAN</div>
          <div className='winstartbox-inner-top c-dummy-1'>95</div>
        </div>
        <div className='winstartbox-outer-item-2 c-dummy-1'
             style={winStartboxOuterItem2Style}>
            <WinCommonMenuItem 
              items={["about","projects","contact","resume","blog"]}
              divIndices={[]}
              elemRefernce={null}
              elemStyle={contextMenuStyle}
            />
            <WinCommonLine style={{margin: '6px 4px'}}/>
            <SocialMedia 
              style={{transform : transform1}}
              items={[<Linkedin />,<Github />,<Facebook />,<Instagram />]}
              links={['https://www.linkedin.com/in/shuaib-khan-51376424b/',
                      'https://github.com/ShuaibKhan786',
                      'https://www.facebook.com/shuaib.sk.3/',
                      'https://www.instagram.com/someone.may.be/']}
            />
        </div>
    </div>
  )
}

function SocialMedia({items,links,style}){
  return(
      <div className='socialmedia'
          style={style}>
        {items.map((item, index) => (
          <a
            href={links[index]} 
            key={index}
            className='socialmedia-item c-dummy-1'
            target='_blank'
            rel='noopener noreferrer' 
          >
            {item}
          </a>
        ))}
      </div>
  )
}

