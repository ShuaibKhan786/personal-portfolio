import React,{useContext} from 'react';
import { SettingContext } from '../components/App';


// c-dummy-0, dummy-1 are for event deligation
export const WinTaskbar = () => {
  const { theme,
    themeEleRef,
    themeEleTextContent,
    startEleRef,
    start,
    WinStart,
    taskbarEleRef,
    turnOffCompo,
    winTaskbar,
    time } = useContext(SettingContext);
  return (
    <div className={`wintaskbar`}
      ref={taskbarEleRef}
      onContextMenu={winTaskbar}
        onClick={turnOffCompo}>
        <div className="wintaskbar-outer-item">
        {/* window start button section */}
            <div className="wintaskbar-item wintaskbar-item-border0 winstart-item-start c-dummy-0 dummy-1"
              onClick={start}
              ref={startEleRef}>
                <WinStart/>
                <div className="c-dummy-0 dummy-1">Start</div>
            </div>
        {/* window input welcome section */}
            <input type="text" 
                placeholder='Welcome'
                className={`wintaskbar-item 
                wintaskbar-item-border1 
                wintaskbar-item-inp
                c-dummy-0
                ${themeEleTextContent === "dark" ? 
                "wintaskbar-item-inp-dark" : 
                "wintaskbar-item-inp-light"}`} />
        </div>
        <div className="wintaskbar-outer-item">
          {/* window theme button section */}
            <div className="wintaskbar-item wintaskbar-item-border0 c-dummy-0"
              onClick={theme}
              ref={themeEleRef}>
                { themeEleTextContent === "dark" ? <div className="c-dummy-0">Light</div> : <div className="c-dummy-0">Dark</div>}
            </div>
          {/* window time display section */}
            <div className="wintaskbar-item wintaskbar-item-border2 wintaskbar-item-time c-dummy-0">
              {time.toLocaleString('en-US', {
                  hour: 'numeric',
                  minute: 'numeric',
                  hour12: true,
              })}
            </div>
        </div>
    </div>
  )
}


