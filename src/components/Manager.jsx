import React,{createContext , useRef , useState , useEffect} from 'react';
import { WinTaskbar } from './WinTaskbar';
import { WinStartBox } from './WinStartBox';
import { WinTaskbarSett } from './WinTaskbarSett';
import { WinRightClick } from './WinRightClick';
import { WinCommonMenuItem } from './common/WinCommonMenuItem';
// all the svg icons to be used
import {ReactComponent as WinStart} from '../asset/icons/window95-start-logo (2).svg'
export const SettingContext = createContext();

export const Manager = () => {
// ***** all the states of WinTaskbar component manageses 
// ***** from here
  // refernce for the theme,start,taskbar elements in the WinTaskbar component
  const themeEleRef = useRef(null);
  const startEleRef = useRef(null);
  const taskbarEleRef = useRef(null);
  const rcMenuEleRef = useRef(null);
  const toolbarMenuEleRef = useRef(null);
  const toolbarInnerSettEleRef0 = useRef(null);
  const toolbarInnerSettEleRef1 = useRef(null);
  const winStartBoxRef = useRef(null);
  const [themeEleTextContent,setThemeEleTextContent] = useState(null);
  const [startTogg,setStartTogg] = useState(false);
  const [settTogg,setSettTogg] = useState(false);
  const [innerSettTogg0,setInnerSettTogg0] = useState(false);
  const [innerSettTogg1,setInnerSettTogg1] = useState(false);
  const [alignment,setAlignment] = useState("space-between");
  const [position,setPosition] = useState("bottom");
  const [border,setBorder] = useState("borderTop");
  const [transform,setTransform] = useState("rotate(180deg)");
  const [transform1,setTransform1] = useState("rotate(360deg)");
  // mouse position 
  // state for the mousePos of window taskbar
  const [clientX,setClientX] = useState(0);
  // state for the mousePos of window rightclick
  const [mousePos,setMousePos] = useState({});
  const [rightclickTogg,setRightclickTogg] = useState(false);
  // state for the position of the inner component of the window toolbar setting
  const [innerSettPos0,setInnerSettPos0] = useState({});
  const [innerSettPos1,setInnerSettPos1] = useState({});
  // # reusable () that removes and add className from an element
  const add = (eleRef,classname) =>{
    eleRef.current.classList.add(classname);
  }
  const remove = (eleRef,classname) =>{
    eleRef.current.classList.remove(classname);
  }
  // ##
  const theme = () =>{
    const flag = document.body.classList.toString();
    const themeEle = themeEleRef.current
    setSettTogg(false);
    setRightclickTogg(false);
    setThemeEleTextContent(themeEle.textContent.toLowerCase());
    
    if(flag === "light" && themeEle.textContent.toLowerCase() === "dark"){
      // for the body element
      document.body.classList.remove('light');
      document.body.classList.add('dark');
      // for the theme element
      remove(themeEleRef,'wintaskbar-item-border0');
      add(themeEleRef,'wintaskbar-item-border1');
    }else if(flag === "dark" && themeEle.textContent.toLowerCase() === "light"){
      // for the body element
      document.body.classList.remove('dark');
      document.body.classList.add('light');
      // for the theme element
      remove(themeEleRef,'wintaskbar-item-border1');
      add(themeEleRef,'wintaskbar-item-border0');
    }
  }
  //() to add an rightclick event to the window taskbar
  // added c-dummy-0 className to every taskbar item to achieve 
  // the rightclick popup using event-deligation concept
  const winTaskbar = (event) =>{
    event.preventDefault();
    setRightclickTogg(false);
    setInnerSettTogg0(false);
    setInnerSettTogg1(false);
    if (event.target.classList.contains('c-dummy-0')) {
      setSettTogg(false);
    } else {
      // in order to stop overflowing the WinTaskbarSett
      // in the right
      // I have to implement this
      setSettTogg(true);
      const menuWidth = toolbarMenuEleRef.current.offsetWidth;
      setClientX(Math.min(event.clientX,window.innerWidth - menuWidth));
    }
  }
  //common () to turn off the WinStartBox and WinTaskbarSett 
  // components  when click event is occured on taskbar components
  const turnOffCompo = (event) =>{
    if(!event.target.classList.contains('dummy-1')){
      setStartTogg(false);
      setSettTogg(false);
      setInnerSettTogg0(false);
      setInnerSettTogg1(false);
      remove(startEleRef,'wintaskbar-item-border1');
      add(startEleRef,'wintaskbar-item-border0');
    }
  }
  // () to calculate the height of the taskbar
  const taskbarHeigClac = () =>{
    return taskbarEleRef.current.offsetHeight - 0.5;
  }
  const start = () =>{
    setSettTogg(false);
    setRightclickTogg(false);
    setInnerSettTogg0(false);
    setInnerSettTogg1(false);
    if(startTogg === false){
      setStartTogg(true);
      setSettTogg(false);
      // for the start element
      remove(startEleRef,'wintaskbar-item-border0');
      add(startEleRef,'wintaskbar-item-border1');
    }else{
      setStartTogg(false);
      // for the start element
      remove(startEleRef,'wintaskbar-item-border1');
      add(startEleRef,'wintaskbar-item-border0');
    }
  }
  // for setting the time to display on the time-item
  const [time, setTime] = useState(new Date());
    useEffect(() => {
           setInterval(() => setTime(new Date()), 1000);
    }, []);
// till here *****

//**** all the WinRightCLick component of window starts here
  const rightCLick = (event) => {
    event.preventDefault();
    const classNamesToCheck = ['wintaskbar', 'c-dummy-0' , 'dummy-1' , 'wintaskbar-outer-item' , 'c-dummy-1'];
    const isAnyClassFound = classNamesToCheck.some(className => event.target.classList.contains(className));
    if(!isAnyClassFound){
      setMousePos({
        clientx: event.clientX,
        clienty: event.clientY
      });
     setRightclickTogg(true);
     setStartTogg(false);
     setSettTogg(false);
     setInnerSettTogg0(false);
     setInnerSettTogg1(false);
     remove(startEleRef,'wintaskbar-item-border1');
     add(startEleRef,'wintaskbar-item-border0');
    }
  };
  const turnOffCompo0 = (event) => {
    const classNamesToCheck = ['c-dummy-1' , 'dummy-1' ];
    const isAnyClassFound = classNamesToCheck.some(className => event.target.classList.contains(className));
    if (!isAnyClassFound) {
      setRightclickTogg(false);
      setStartTogg(false);
      setSettTogg(false);
      setInnerSettTogg0(false);
      setInnerSettTogg1(false);
      remove(startEleRef, 'wintaskbar-item-border1');
      add(startEleRef, 'wintaskbar-item-border0');
    }
  };

  // all these is just to make sure when the rightclick
  // menu pop ups it doesnt overflow in any sides
  // and overlap to the toolbar element too
  useEffect(() => {
    if (rightclickTogg) {
      const menuWidth = rcMenuEleRef.current.offsetWidth;
      const menuHeight = rcMenuEleRef.current.offsetHeight;

      const adjustedLeft = Math.min(mousePos.clientx, window.innerWidth - menuWidth);
      
      // Calculate maximum top position to avoid overlap with the taskbar
      const maxTop = window.innerHeight - menuHeight - (position === "bottom" ? taskbarHeigClac() : 0);
      const adjustedTop = Math.min(mousePos.clienty, maxTop);

      setMousePos({
        clientx: adjustedLeft,
        clienty: adjustedTop,
      });
    }
  }, [mousePos.clientx, mousePos.clienty, rightclickTogg ,position]);
  
  useEffect(() => {
    // Attach the event listener when the component mounts
    document.addEventListener('contextmenu', rightCLick);
    document.addEventListener('click', turnOffCompo0);
    // Remove the event listener when the component unmounts to avoid memory leaks
    return () => {
      document.removeEventListener('contextmenu', rightCLick);
      document.removeEventListener('click', turnOffCompo0);
    };
  }, []);
// till here ****
const commonSettFunc = (event) =>{
  // event deligation 
  const flag = event.target.textContent;
  switch (flag) {
    case "alignment":
      setInnerSettTogg0(true);
      setInnerSettTogg1(false);
      remove(startEleRef,'wintaskbar-item-border1');
      add(startEleRef,'wintaskbar-item-border0');
      setStartTogg(false);
      const alignInnerWidth = toolbarInnerSettEleRef0.current.offsetWidth;
      const alignOuterWidth = toolbarMenuEleRef.current.offsetWidth;
      const alignOuterHeight = position === "top" ? 0 : toolbarMenuEleRef.current.offsetHeight / 2;
      if(clientX+alignOuterWidth+alignInnerWidth > window.innerWidth){
        setInnerSettPos0({
          left: clientX - alignInnerWidth,
          bottom: taskbarHeigClac() + alignOuterHeight
        })
      }else{
        setInnerSettPos0({
          left: clientX + alignOuterWidth,
          bottom: taskbarHeigClac() + alignOuterHeight
        })
      }
      break;
    case "position":
      setInnerSettTogg1(true);
      setInnerSettTogg0(false);
      setStartTogg(false);
      remove(startEleRef,'wintaskbar-item-border1');
      add(startEleRef,'wintaskbar-item-border0');
      const posInnerWidth = toolbarInnerSettEleRef1.current.offsetWidth;
      const posOuterWidth = toolbarMenuEleRef.current.offsetWidth;
      const posOuterHeight = position === "bottom" ? 0 : toolbarMenuEleRef.current.offsetHeight / 2;
      if(clientX+posOuterWidth+posInnerWidth > window.innerWidth){
        setInnerSettPos1({
          left: clientX - posInnerWidth,
          bottom: taskbarHeigClac() + posOuterHeight
        })
      }else{
        setInnerSettPos1({
          left: clientX + posOuterWidth,
          bottom: taskbarHeigClac() + posOuterHeight
        })
      }
      break;
    case "left":
      setAlignment("left");
      setInnerSettTogg0(false);
      setSettTogg(false);
      break;
    case "center":
      setAlignment("center");
      setInnerSettTogg0(false);
      setSettTogg(false);
      break;    
    case "right":
      setAlignment("right");
      setInnerSettTogg0(false);
      setSettTogg(false);
      break;    
    case "default":
      setAlignment("space-between");
      setInnerSettTogg0(false);
      setSettTogg(false);
      break;
    case "top":
      setPosition("top");
      setBorder("borderBottom");
      setInnerSettTogg1(false);
      setSettTogg(false);
      setTransform("rotate(360deg)");
      setTransform1("rotate(180deg)");
      break;
    case "bottom":
      setPosition("bottom");
      setBorder("borderTop");
      setInnerSettTogg1(false);
      setSettTogg(false);
      setTransform("rotate(180deg)");
      setTransform1("rotate(0deg)");
      break;
      default:
    break;
  }
}
// these are style objects to be used for the inner window toolbar setting
// alignment
const toolbarInnerSettStyle0 = {
  visibility: innerSettTogg0 ? 'visible' : 'hidden',
  position: innerSettTogg0 ? "fixed" : "absolute",
  [position] : innerSettTogg0 ? `${innerSettPos0.bottom}px`: "-9999px" , 
  left: innerSettTogg0 ? `${innerSettPos0.left}px` : "-9999px",
};
// these are style objects to be used for the inner window toolbar setting
// position
const toolbarInnerSettStyle1 = {
  visibility: innerSettTogg1 ? 'visible' : 'hidden',
  position: innerSettTogg1 ? "fixed" : "absolute",
  [position] : innerSettTogg1 ? `${innerSettPos1.bottom}px`: "-9999px" , 
  left: innerSettTogg1 ? `${innerSettPos1.left}px` : "-9999px",
};
// these are style objects to be used for the window taskbar
// taskbar
const winTaskbarStyle = {
  justifyContent : alignment,
  [position] : 0,
  [border] : `2px solid ${position === "bottom" ? 'var(--borshade0)' : 'var(--borshade1)'}`
};
// () to calc position of the window startbox 
// according to the alignment it set by user`
const alignCalcOfWinStartBox = () =>{
  const startEleLeftPos = startEleRef.current.getBoundingClientRect().left;
  if (alignment === "left") {
    return startEleLeftPos;
  }else if(alignment === "right"){
    return startEleLeftPos;
  }else if(alignment === "center"){
    return startEleLeftPos
  }else if(alignment === "space-between"){
    return 0;
  }
}
// these are style objects to be used for the inner window start box
// position
const winStartboxStyle = {
  visibility: startTogg ? 'visible' : 'hidden',
  position: startTogg ? "fixed" : "absolute",
  [position]: startTogg ? (taskbarEleRef.current ? `${taskbarHeigClac()}px` : '0') : "-9999px",
  left : startTogg ? `${alignCalcOfWinStartBox()}px` : "-9999px",
};
// these are style objects to be used for the inner window start box banner item
// transform
const winStartboxOuterItem1Style = {
  transform: transform
};
const winStartboxOuterItem2Style = {
  transform: transform1,
};

  return (
    <SettingContext.Provider
      value={{theme,
        themeEleRef,
        themeEleTextContent,
        startEleRef,
        start,
        time,
        taskbarEleRef,
        taskbarHeigClac,
        winTaskbar,
        clientX,
        mousePos,
        rcMenuEleRef,
        rightclickTogg,
        toolbarMenuEleRef,
        winStartboxOuterItem1Style,
        winTaskbarStyle,
        winStartBoxRef,
        settTogg,
        setSettTogg,
        winStartboxStyle,
        turnOffCompo,
        position,
        transform1,
        winStartboxOuterItem2Style,
        commonSettFunc,
        WinStart
      }}>
      <WinTaskbar />
      <WinStartBox />
      <WinTaskbarSett />
      <WinRightClick />
      {/* this component is for the alignment of inner window toolbar setting */}
      <WinCommonMenuItem 
        items={['left','center','right','default']}
        divIndices={[0,1,2]}
        elemRefernce={toolbarInnerSettEleRef0}
        elemStyle={toolbarInnerSettStyle0}
      />
      {/* this component is for the position of inner window toolbar setting */}
      <WinCommonMenuItem 
        items={['top','bottom']}
        divIndices={[0,]}
        elemRefernce={toolbarInnerSettEleRef1}
        elemStyle={toolbarInnerSettStyle1}
      />
    </SettingContext.Provider>
  )
}


