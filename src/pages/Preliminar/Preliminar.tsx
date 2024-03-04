import {
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonContent,
  IonIcon,
  IonButton,
} from "@ionic/react";
import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { chevronBack } from "ionicons/icons";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import PreliminarPDF from "./PreliminarPDF";
import { useLocalStorage } from "../../hooks/useLocalStorage";

const Preliminar: React.FC = () => {
  const history = useHistory();

  const [totalesLocal, setTotalesLocal] = useLocalStorage(
    `Totales_Local`,
    null
  );

  if (Object.keys(totalesLocal).length < 2) {
    history.push("/evaluaciones");
    return;
  }

  return (
    <IonPage>
      <IonHeader class="custom-header">
        <IonToolbar>
          <IonTitle>Ingeniería Automotriz</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="container">
          <Link to={`/forms`} className="btn-back">
            <IonIcon class="icon" icon={chevronBack}></IonIcon>
            <p>
              <strong>Preliminar</strong>
            </p>
          </Link>

          <PDFDownloadLink
            document={<PreliminarPDF />}
            fileName="Preliminar.pdf"
          >
            <IonButton expand="full">Descargar Preliminar PDF</IonButton>
          </PDFDownloadLink>

          <PDFViewer
            style={{ marginTop: "2em", width: "100%", height: "90vh" }}
          >
            <PreliminarPDF />
          </PDFViewer>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Preliminar;
