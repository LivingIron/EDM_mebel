import React,{useState,useEffect} from 'react'
import Carousel from '../Components/Carousel'
import '../Components/global.css'
import '../Components/Gallery.css'


function Gallery() {

    const [currentSize,setCurrentSize]=useState(window.innerWidth);

    useEffect(() => {
        const setNewCheckSize=()=>setCurrentSize(window.innerWidth);
        window.addEventListener('resize',setNewCheckSize);
        return () => {
            window.removeEventListener('resize',setNewCheckSize);
        }
    }, [currentSize])

    const checkSize=()=>{
        if(currentSize>=506){
            return 'big-header-text';
        }
        else{
            return 'small-header-text';
        }
    }


    return (
        <div className="gallery">
            <Carousel/>
            <hr/>
            <div className="second-image-container">
                <h1 className={checkSize()}>
                    Може да намерите повече 
                    наши снимки като посетите
                    нашата Facebook страница
                    чрез  бутона под текста.
                </h1>
               
                <a href="https://www.facebook.com/EDMmebel">
                    <input type="button"value="Facebook" className="facebook-button"></input>
                </a>
            </div>
        </div>
    )
}

export default Gallery

