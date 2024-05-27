import { IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { chevronBack } from "ionicons/icons";
import { Link } from "react-router-dom";
import Button from "../../components/Button";


const SistemasMotor:React.FC = ()=>{
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
                    <p><strong>Motor</strong></p>
                </Link>

                <Link to="sistemaCargaArranque">
                  <Button title="Sistema de Carga y Arranque"/>
                </Link>

                <Link to="sistemaAdmisionAire">
                  <Button title="Sistema de Admisión de Aire"/>
                </Link>

                <Link to="sistemaEmisionGases">
                  <Button title="Sistema de Emision de Gases"/>
                </Link>

                <Link to="sistemaEnfriamento">
                  <Button title="Sistema de Enfriamento"/>
                </Link>

                <Link to="sistemaEncendidoIgnicion">
                  <Button title="Sistema de Encendido o Ignicion"/>
                </Link>

                <Link to="sistemaInyeccionCombustible">
                  <Button title="Sistema de Inyección de Combustible"/>
                </Link>

                <Link to="sistemaEvaporativo">
                  <Button title="Sistema Evaporativo"/>
                </Link>

            </div>

        </IonContent>
      </IonPage>
    )
}


export default SistemasMotor;