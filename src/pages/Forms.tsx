import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Forms.css";
import { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { Firebase } from "../firebase/Firebase";
import { MyContext } from "../context/DictamenContext";

interface RouteParams {
  id: string | undefined;
}

const Forms: React.FC = () => {
  const history = useHistory();
  const { id } = useParams<RouteParams>();

  const { dataDictamen, setDataDictamen, setTotalesLocal } =
    useContext(MyContext);

  useEffect(() => {
    if (id) {
      localStorage.setItem("idDictamen", id);
      setTotalesLocal({ idDictamen: id });
      const firebaseInstance = Firebase.getInstance();
      firebaseInstance
        .getDocument(id)
        .then((res) => {
          console.log(res);
          setDataDictamen(res);
          // setDataDictamenLocal(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  useEffect(() => {
    localStorage.getItem("idDictamen")
      ? history.push("/forms")
      : history.push("/home");
  }, []);

  return (
    <IonPage>
      <IonHeader class="custom-header">
        <IonToolbar>
          <IonTitle>Ingeniería Automotriz</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <ExploreContainer />
      </IonContent>
    </IonPage>
  );
};

export default Forms;
