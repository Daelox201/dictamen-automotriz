import { InputChangeEventDetail, IonButton, IonContent, IonHeader, IonIcon, IonInput, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { chevronBack } from "ionicons/icons";
import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";


const GeneralesMotor:React.FC = ()=>{

    const [data, setData] = useState({valvulaPurga:'', canister:'', manguerasDuctos:'', cableadosConectores:'', conexionesEE:'', fugas:'', soportes:'', sujeciones:''});

    const handleForm = (e: FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
    }
    
    const handleInput = (e: CustomEvent<InputChangeEventDetail>)=>{
        setData({
            ...data,
            [e.target.name]:e.target.value
        })
    }

    return(
        <IonPage>
        <IonHeader class='custom-header'>
          <IonToolbar>
            <IonTitle>Ingeniería Automotriz</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>

            <div className="container">

                <Link to="/forms" className="btn-back">
                    <IonIcon class="icon" icon={chevronBack}></IonIcon>
                    <p><strong>Generales Motor</strong></p>
                </Link>

                <Link to="juntas">
                  <Button title="Juntas"/>
                </Link>

                <Link to="tapones">
                  <Button title="Tapones"/>
                </Link>

                <Link to="filtros">
                  <Button title="Filtros"/>
                </Link>

                <Link to="tapasDepositos">
                  <Button title="Tapas y Depositos"/>
                </Link>

                <Link to="sujeciones">
                  <Button title="Sujeciones"/>
                </Link>

            </div>

        </IonContent>
      </IonPage>
    )

}

export default GeneralesMotor;