import React ,{useState,useEffect} from 'react'
import * as AiIcons from 'react-icons/ai'
import * as GoIcons from 'react-icons/go'
import { IconContext } from 'react-icons'
import './global.css'
import './Carousel.css'
import logo from '../pics/logoExtra.png'


function Carousel() {
    const[indexImage,setIndexImage]=useState(1);

    const goLeft=()=>{
        if(indexImage===1){
            setIndexImage(5);
        }
        else{
            setIndexImage(indexImage-1);
        }
    }
    const goRight=()=>{
        if(indexImage===5){
            setIndexImage(1);
        }
        else{
            setIndexImage(indexImage+1);
        }
    }

    const checkFirstDot=()=>indexImage===1?'carousel-dot-black':'carousel-dot-white';
    const checkSecondDot=()=>indexImage===2?'carousel-dot-black':'carousel-dot-white';
    const checkThirdDot=()=>indexImage===3?'carousel-dot-black':'carousel-dot-white';
    const checkFourthDot=()=>indexImage===4?'carousel-dot-black':'carousel-dot-white';
    const checkFifthDot=()=>indexImage===5?'carousel-dot-black':'carousel-dot-white';

    const checkIndex=()=>{
        switch(indexImage){
            case 1: return `carousel-container index1`;
            case 2: return `carousel-container index2`;
            case 3: return `carousel-container index3`;
            case 4: return `carousel-container index4`;
            case 5: return `carousel-container index5`;
            default:return `carousel-container index5`;
        }
    }

    const[checkSize,setCheckSize]=useState(window.innerWidth);
    const checkLogo=()=>{
        if(checkSize>=630){
            return 'carousel-logo-big';
        }
        else if(checkSize>=415 && checkSize<630){
            return 'carousel-logo-small';
        }
        else {
            return 'carousel-logo-extra-small';
        }
    }

    useEffect(()=>{
        const changeSize=()=>setCheckSize(window.innerWidth);
        window.addEventListener('resize',changeSize);
        return()=> window.removeEventListener('resize',changeSize);
    },[checkSize]);

    return (
        <div className={checkIndex()}>
            <div className="arrow-container">
                <IconContext.Provider value={{ className: 'arrow-icon-left' ,size:'3rem'}}>
                    <AiIcons.AiOutlineArrowLeft onClick={goLeft}/>
                </IconContext.Provider>

                <img src={logo} className={checkLogo()} alt="big logo"></img>

                <IconContext.Provider value={{ className: 'arrow-icon-right' ,size:'3rem'}}>
                    <AiIcons.AiOutlineArrowRight onClick={goRight} />
                </IconContext.Provider>
            </div>
            <div className="dot-container">
                <IconContext.Provider value={{ className:checkFirstDot() ,size:'1.75rem'}}>
                    <GoIcons.GoPrimitiveDot/>
                </IconContext.Provider>
                <IconContext.Provider value={{ className: checkSecondDot() ,size:'1.75rem'}}>
                    <GoIcons.GoPrimitiveDot />
                </IconContext.Provider>

                <IconContext.Provider value={{ className: checkThirdDot() ,size:'1.75rem'}}>
                    <GoIcons.GoPrimitiveDot />
                </IconContext.Provider>

                <IconContext.Provider value={{ className: checkFourthDot() ,size:'1.75rem'}}>
                    <GoIcons.GoPrimitiveDot />
                </IconContext.Provider>

                <IconContext.Provider value={{ className: checkFifthDot() ,size:'1.75rem'}}>
                    <GoIcons.GoPrimitiveDot />
                </IconContext.Provider>
            </div>
        </div>
    )
}

export default Carousel
