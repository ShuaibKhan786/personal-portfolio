import React,{createContext , useRef , useState , useEffect} from 'react';
import { WinTaskbar } from './WinTaskbar';
import { WinStartBox } from './WinStartBox';
import { WinTaskbarSett } from './WinTaskbarSett';
import { WinRightClick } from './WinRightClick';
// all the svg icons to be used
import {ReactComponent as WinStart} from '../asset/icons/window95-start-logo (2).svg'
const SettingContext = createContext();

const App = () => {
// ***** all the states of WinTaskbar component manageses 
// ***** from here
  // refernce for the theme,start,taskbar elements in the WinTaskbar component
  const themeEleRef = useRef(null);
  const startEleRef = useRef(null);
  const taskbarEleRef = useRef(null);
  const rcMenuEleRef = useRef(null);
  const toolbarMenuEleRef = useRef(null);
  const [themeEleTextContent,setThemeEleTextContent] = useState(null);
  const [startTogg,setStartTogg] = useState(false);
  const [settTogg,setSettTogg] = useState(false);
  // mouse position 
  // state for the mousePos of window taskbar
  const [clientX,setClientX] = useState(0);
  // state for the mousePos of window rightclick
  const [mousePos,setMousePos] = useState({});
  const [rightclickTogg,setRightclickTogg] = useState(false);
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
  // added common-dummy-0 className to every taskbar item to achieve 
  // the rightclick popup using event-deligation concept
  const winTaskbar = (event) =>{
    event.preventDefault();
    setRightclickTogg(false);
    if (event.target.classList.contains('common-dummy-0')) {
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
      remove(startEleRef,'wintaskbar-item-border1');
      add(startEleRef,'wintaskbar-item-border0');
    }
  }
  // () to calculate the height of the taskbar
  const taskbarHeigClac = () =>{
    return taskbarEleRef.current.offsetHeight;
  }
  const start = () =>{
    setSettTogg(false);
    setRightclickTogg(false);
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
    const classNamesToCheck = ['wintaskbar', 'common-dummy-0' , 'dummy-1' , 'wintaskbar-outer-item'];
    const isAnyClassFound = classNamesToCheck.some(className => event.target.classList.contains(className));
    if(!isAnyClassFound){
      setMousePos(prevMousePos => ({
        ...prevMousePos,
        clientx: event.clientX,
        clienty: event.clientY
      }));
     setRightclickTogg(true);
     setStartTogg(false);
     setSettTogg(false);
     remove(startEleRef,'wintaskbar-item-border1');
     add(startEleRef,'wintaskbar-item-border0');
    }
  };
  const turnOffCompo0 = (event) => {
    if (!event.target.classList.contains('dummy-1')) {
      setRightclickTogg(false);
      setStartTogg(false);
      setSettTogg(false);
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
      const maxTop = window.innerHeight - menuHeight - taskbarHeigClac();
      const adjustedTop = Math.min(mousePos.clienty, maxTop);

      setMousePos({
        clientx: adjustedLeft,
        clienty: adjustedTop,
      });
    }
  }, [mousePos.clientx, mousePos.clienty, rightclickTogg  ]);
  
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
        settTogg,
        turnOffCompo,
        WinStart
      }}>
      <WinTaskbar />
      { startTogg ? <WinStartBox /> : null}
      <WinTaskbarSett />
      <WinRightClick />
    </SettingContext.Provider>
  )
}

export { SettingContext , App };

