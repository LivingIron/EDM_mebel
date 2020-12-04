import React ,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import './global.css';
import './Footer.css';
import * as FaIcons from 'react-icons/fa';
import { IconContext } from 'react-icons';

//610 breakpoint

function Footer() {

    const [checkSize,setCheckSize]=useState(window.innerWidth);
    useEffect(()=>{
        const updateSize=()=>{
            setCheckSize(window.innerWidth);
        }
        window.addEventListener('resize',updateSize);
        return ()=>window.removeEventListener('resize',updateSize);

    },[checkSize]);

    const ulclassName=()=>{
        if(checkSize>=610){
            return 'footer-list-ul-big';
        }
        else{
            return 'footer-list-ul-small';
        }
    }

    const containerclassName=()=>{
        if(checkSize>=610){
            return 'footer-container-big';
        }
        else{
            return 'footer-container-small';
        }
    }

    return (
        <>
            <div className={containerclassName()}>
                <ul className={ulclassName()}>
                    <li className="footer-list-li">
                        <h3>Страници</h3>
                        <hr/>
                        <Link to="/" style={{ textDecoration:'none'}}>
                            <p>Начало</p>
                        </Link>
                        <Link to="/gallery" style={{ textDecoration:'none'}}>
                            <p>Галерия</p>
                        </Link>
                        
                        <Link to="/aboutUs" style={{ textDecoration:'none'}}>
                            <p>За нас</p>
                        </Link>
                    
                        <Link to="/contacts"  style={{ textDecoration:'none'}}>
                            <p>Контакти</p>
                        </Link> 
                    </li>
                    <li className="footer-list-li">
                        <h3>Телефони</h3>
                        <hr/>
                        <p>+089-640-7709</p>
                        <p>+089-577-3254</p>
                    </li>
                    <li className="footer-list-li">
                        
                        <h3>Линкове</h3>
                        <hr/>
                        <IconContext.Provider value={{size:"5em",className: "footer-react-icons"}}>
                            <a href="https://www.facebook.com/EDMmebel">
                                <FaIcons.FaFacebookSquare/>
                            </a>
                            <a href="https://msng.link/o/?0889649574=vi">
                                <FaIcons.FaViber/>
                            </a>
                        </IconContext.Provider>
                    </li>
                </ul>
                
            </div>
        <div className="footer-copyright-container">
            <p>
                 © ЕДМ Мебел - Всички права запазени!
            </p>
        </div>
    </>
    )
}

export default Footer
