import { IonIcon } from "@ionic/react";
import { chevronForward } from "ionicons/icons";
import { Redirect } from 'react-router-dom';

interface props {
    title: string
}

const Button: React.FC<props> = ({title})=>{
    return(
        <div className="ion-text-center ion-justify-content-center">
            <button className='btn'>
            {title}
                <IonIcon icon={chevronForward}></IonIcon>
            </button>
      </div>
    );
}

export default Button