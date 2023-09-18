import React from 'react'
import close from '../../asset/image/close.gif';
import maximize from '../../asset/image/max.gif';
export const WinCommonExplorer= ({
    winExplorerName,
    children
}) => {
  return (
    <div className='explorer-main-container wintaskbar-item-border0 c-dummy-0'>
        <div className='explorer-outer-item c-dummy-0'>
            <div className='c-dummy-0 just-font'>{winExplorerName}</div>
            <div className='explorer-outer-item1 c-dummy-0'>
                <div className='explorer-inner-item c-dummy-0 wintaskbar-item-border0'>
                    <img src={maximize} alt="maximize" width={14} height={14} />
                </div>
                <div className='explorer-inner-item c-dummy-0 wintaskbar-item-border0'>
                    <img src={close} alt="close" width={14} height={14} />
                </div>
            </div>
        </div>
        <div>
            {
                children
            }
        </div>
    </div>
  )
}
