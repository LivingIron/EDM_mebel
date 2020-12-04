import React,{useState,useEffect} from 'react'
import '../Components/AboutUs.css'
import '../Components/global.css'

function AboutUs() {

    const [currentSize,setCurrentSize]=useState(window.innerWidth);
    useEffect(()=>{
        const changeSize=()=>setCurrentSize(window.innerWidth);
        window.addEventListener('resize',changeSize);
        return ()=> window.removeEventListener('resize',changeSize);
    },[currentSize]);

    const checkSize=()=>{
        if(currentSize>=450){
            return 'big-first-image-container';
        }
        else{
            return 'small-first-image-container';
        }
    }

    return (
        <div className="aboutUs">
            <div className={checkSize()}>
                <h1>
                    Информация за нас
                </h1>
                <p>
                    Създадохме ЕДМ-Мебел през 2015
                    година , като за цел си поставихме
                    високо-качественото произдводство на 
                    мека мебел. Имаме над десет години 
                    опит в областта на меката мебел.
                </p>
                <p>
                    Разполагаме с голям асортимент
                    от кожи ,дамаски и механизми за
                    създаването на мебелите на вашите мечти
                    както и опита да ги осъществим.
                </p>
            </div>
        </div>
    )
}

export default AboutUs
