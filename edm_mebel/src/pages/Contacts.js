import React ,{useState,useEffect}from 'react'
import '../Components/global.css'
import '../Components/Contacts.css'



function Contacts() {

    const [currentSize,setCurrentSize]=useState(window.innerWidth);
    useEffect(() => {
        const setNewCheckSize=()=>setCurrentSize(window.innerWidth);
        window.addEventListener('resize',setNewCheckSize);
        return () => {
            window.removeEventListener('resize',setNewCheckSize);
        }
    }, [currentSize])

    const checkSize=()=>{
        if(currentSize>=600){
            return 'big-telephone-container';
        }
        else{
            return 'small-telephone-container';
        }
    }

    const checkSizeTextArea=()=>{
        if(currentSize>=550){
            return 'big-textarea';
        }
        else if(currentSize<550 && currentSize>350){
            return 'small-textarea';
        }
        else{
            return 'extra-small-textarea'
        }
    }


    return (
        <div className="contacts">
            <div id="map">
                <iframe title="EDM-Mebel" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d892.0638384263298!2d27.817951629253447!3d43.25003957551723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a5ab6d40667fc1%3A0x4fb2815a1f2beee4!2s9154%20Aksakovo!5e1!3m2!1sen!2sbg!4v1606841530211!5m2!1sen!2sbg" width="1920" height="1080" frameborder="0"  allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
            </div>
            <div id={checkSize()}>
                <h1>Свържете се с нас чрез следните телефони</h1>
                <h3>+089-640-7709</h3> 
                <h3>+089-577-3254</h3> 
                <h4>..или ни изпратете запитване чрез формата отдолу!</h4>
            </div>
            <div id="form-container">
                <h1>Форма за контакт</h1>
                <form>
                    <label>
                        Име:
                        <input type="text" className="text-input"></input>
                    </label>
                    <label>
                        Ймеил:
                        <input type="text" className="text-input"></input>
                    </label>
                    <label>
                        Телефон:
                        <input type="text" className="text-input"></input>
                    </label>
                    <label>
                        Запитване:
                        <textarea className={checkSizeTextArea()}></textarea>
                    </label>
                    <input type="submit" value="Изпрати" className="submit-input"></input>
                </form>
            </div>
        </div>
        
    )
}

export default Contacts
