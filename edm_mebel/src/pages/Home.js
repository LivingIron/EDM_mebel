import React,{useState,useEffect} from 'react'
import logoExtra from '../pics/logoExtra.png'
import '../Components/Home.css'
import '../Components/global.css'
import { Link } from 'react-router-dom'

function Home() {

    const [picClass,setPicClass] = useState(window.innerWidth);
    useEffect(()=>{
        const updateLogoSize =() =>{
            setPicClass(window.innerWidth);
        }
        window.addEventListener('resize',updateLogoSize);
        return () => window.removeEventListener('resize',updateLogoSize);
    },[picClass])

    
    const checkSize=()=>{
        if(picClass>=700){
            return "firstPic homeBackground";
        }else if(picClass<700 && picClass>450){
            return "firstPic homeBackgroundSmall";
        }else if(picClass<=450){
            return "firstPic homeBackgroundExtraSmall";
        }
    }

    const triCheckSize=()=>{
        if(picClass>=1200){
            return "tri-img-horizontal";
        }else{
            return "tri-img-vertical";
        }
    }

    const headerCheckSize=()=>{
        if(picClass>=501){
            return "header-big-variant";
        }
        else{
            return "header-small-variant";
        }
    }

    const paragraphCheckSize=()=>{
        if(picClass>=501){
            return "paragraph-big-variant";
        }
        else{
            return "paragraph-small-variant";
        }
    }

    return (
        <div className="home">
            <div className={checkSize()}>
                <img src={logoExtra} alt="Company logo" />
            </div>

            <div className="intro-icon-container-header">
                <h1>Изберете комфорта</h1>
                <p>Високо качествени мебели по поръчка</p>
                <div className="intro-icon-container">
                    <ul className={triCheckSize()}>
                        <li key="1" id="firstLi">
                            <div id="firstPic">
                            </div>
                            <hr/>
                            <h3>Качество</h3>
                            <p>Постоянство за изграждане на най-добрия възможен продукт.</p>
                        </li>
                       
                        <li key="2" id="secondLi">
                            <div id="secondPic">
                            </div>
                            <hr/>
                            <h3>Детайл</h3>
                            <p>Мебели направено изцяло по вашите желания.</p>
                        </li>
                        <li key="3" id="thirdLi">
                            <div id="thirdPic">
                            </div>
                            <hr/>
                            <h3>10 години опит</h3>
                            <p>Над десетилетие опит в сферата на меката мебел.</p>
                        </li>
                    </ul>
                </div>    
            </div>
            <div className="second-imagine-class">
               <h1 className={headerCheckSize()}>Вашите мебели по вашите желания!</h1>
               <p className={paragraphCheckSize()}>
                    Ръчно изработени високо-качествени меки мебели, направени по вашите желания. 
               </p>
               <p className={paragraphCheckSize()}>
                    Свържете се с нас чрез e-mail , viber или телефон.
               </p>
                <Link to="/contacts">
                   <input type="button" value="Контакти" />
                </Link>
            </div>
        </div>
    )
}

export default Home
