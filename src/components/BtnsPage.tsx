import {
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { chevronBack } from "ionicons/icons";
import { Link } from "react-router-dom";
import Button from "./Button";

interface Sections {
  route: String;
  name: String;
}

interface Props {
  items: Sections[];
  sectionTitle: String;
}

const BtnsPage: React.FC<Props> = (props) => {
  return (
    <IonPage>
      <IonHeader class="custom-header">
        <IonToolbar>
          <IonTitle>Ingeniería Automotriz</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="container">
          <Link to="/forms" className="btn-back">
            <IonIcon class="icon" icon={chevronBack}></IonIcon>
            <p>
              <strong>{props.sectionTitle}</strong>
            </p>
          </Link>

          {props.items.map((el, index) => {
            return (
              <Link key={index} to={`${el.route}`}>
                <Button title={`${el.name}`} />
              </Link>
            );
          })}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default BtnsPage;
