import { IonContent, IonPage } from "@ionic/react";
import { useEffect, useRef } from "react";

import './Estilos.css'

const Loading:React.FC = ()=>{

    const text = useRef<HTMLParagraphElement>(null)

    /*useEffect(()=>{

        let count = 0;
        let interval = setInterval(()=>{
            text.current.textContent += ' .'
            if(count == 3){
                count = 0
                text.current.textContent = 'L o a d i n g .'
            }
            count++
        }, 600)

        return ()=>{
            clearInterval(interval)
        }
    },[])*/

    return(
        <IonPage>
        <IonContent fullscreen>
            <div className="loading">
                <img src="carro-viejo.png" alt="" />
                <div className="lds-ellipsis loading-animation"><div></div><div></div><div></div><div></div></div>

                {/*<p ref={text}>L o a d i n g</p>*/}
            </div>
        </IonContent>
      </IonPage>
    )
}

export default Loading;