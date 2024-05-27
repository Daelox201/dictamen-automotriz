import { IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { chevronBack } from "ionicons/icons";

import Button from "../../components/Button";
import './Datos.css'
import { Link } from "react-router-dom";


const Datos: React.FC = ()=>{
    return(
        <IonPage>
        <IonHeader class='custom-header'>
          <IonToolbar>
            <IonTitle>Ingeniería Automotriz</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>

            <div className="container">

                <Link to="forms" className="btn-back">
                    <IonIcon class="icon" icon={chevronBack}></IonIcon>
                    <p><strong>Datos</strong></p>
                </Link>

                <Link to="datosVehiculo">
                  <Button title="Datos del Vehiculo"/>
                </Link>

                <Link to="datosTramiteDictamen">
                  <Button title="Datos Tramite Dictamen"/>
                </Link>

                <Link to="datosPropietario">
                  <Button title="Datos Propietario"/>
                </Link>

                <Link to="datosSedeOficialHidalgo">
                  <Button title="Datos Sede Oficial Hidalgo Pago"/>
                </Link>

            </div>

        </IonContent>
      </IonPage>
    )
}


export default Datos;