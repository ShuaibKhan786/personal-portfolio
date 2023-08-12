import React, { useContext } from 'react';
import { SettingContext } from './Manager';

export const WinTaskbar = () => {
  const {
    theme,
    themeEleRef,
    themeEleTextContent,
    startEleRef,
    start,
    WinStart,
    taskbarEleRef,
    winTaskbarStyle,
    startDisabled,
    turnOffCompo,
    winTaskbar,
    time
  } = useContext(SettingContext);

  return (
    <div
      className={`wintaskbar`}
      style={winTaskbarStyle}
      ref={taskbarEleRef}
      onContextMenu={winTaskbar}
      onClick={turnOffCompo}
    >
      <div className="wintaskbar-outer-item">
        {/* Window Start Button */}
        <div
          className={`wintaskbar-item wintaskbar-item-border0 winstart-item-start c-dummy-0 dummy-1`}
          onClick={start}
          ref={startEleRef}
          style={startDisabled}
        >
          <WinStart />
          <div className="c-dummy-0 dummy-1">Start</div>
        </div>
        {/* Window Input Welcome Section */}
        <input
          type="text"
          placeholder="Welcome"
          className={`wintaskbar-item wintaskbar-item-border1 wintaskbar-item-inp c-dummy-0 ${
            themeEleTextContent === 'dark'
              ? 'wintaskbar-item-inp-dark'
              : 'wintaskbar-item-inp-light'
          }`}
        />
      </div>
      <div className="wintaskbar-outer-item">
        {/* Window Theme Button */}
        <div
          className={`wintaskbar-item wintaskbar-item-border0 c-dummy-0`}
          onClick={theme}
          ref={themeEleRef}
        >
          {themeEleTextContent === 'dark' ? (
            <div className="c-dummy-0">Light</div>
          ) : (
            <div className="c-dummy-0">Dark</div>
          )}
        </div>
        {/* Window Time Display */}
        <div
          className={`wintaskbar-item wintaskbar-item-border2 wintaskbar-item-time c-dummy-0`}
        >
          {time.toLocaleString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
          })}
        </div>
      </div>
    </div>
  );
};
