import "./ExploreContainer.css";
import Button from "./Button";
import { Link, useHistory } from "react-router-dom";
import { IonAlert, IonButton } from "@ionic/react";
import { useState } from "react";

import "../pages/Forms.css";
import { Firebase } from "../firebase/Firebase";

const ExploreContainer: React.FC = () => {
  const history = useHistory();
  const [showAlert, setShowAlert] = useState(false);
  const [showAlertError, setShowAlertError] = useState(false);

  const handleBtnEliminar = () => {
    setShowAlert(true);
  };

  const deleteDictamen = () => {
    let resDelete = Firebase.getInstance().deleteDocument(
      `${localStorage.getItem("idDictamen")}`
    );
    localStorage.removeItem("idDictamen");
    resDelete
      .then(() => {
        history.push("/home");
      })
      .catch((err) => {
        console.log("Error al eliminar Dictamen");
        setShowAlertError(true);
      });
  };

  const handleAlertDismiss = () => {
    setShowAlertError(false);
  };

  const handleBtnCerrar = () => {
    localStorage.removeItem("idDictamen");
    localStorage.removeItem("dataDictamenLocal");
    history.push("/home");
  };

  return (
    <div className="container">
      <div className="btns">
        <IonButton onClick={handleBtnEliminar}>
          Eliminar Este Dictamen
        </IonButton>
        <IonButton onClick={handleBtnCerrar}>Cerrar</IonButton>
      </div>

      <IonAlert
        isOpen={showAlert}
        onDidDismiss={() => setShowAlert(false)}
        header={"Confirmar"}
        message={"¿Estás seguro de que quieres eliminar este Dictamen?"}
        buttons={[
          {
            text: "Cancelar",
            role: "cancel",
            cssClass: "secondary",
            handler: () => {
              setShowAlert(false);
            },
          },
          {
            text: "Eliminar",
            handler: deleteDictamen,
          },
        ]}
      />

      <IonAlert
        isOpen={showAlertError}
        onDidDismiss={handleAlertDismiss}
        header={"Error"}
        message={"Error al eliminar"}
        buttons={["OK"]}
      />

      <Link to="/datos">
        <Button title="Datos" />
      </Link>

      <Link to="/sistemasMotor">
        <Button title="Motor" />
      </Link>

      <Link to="/automotrices">
        <Button title="Automotrices" />
      </Link>

      <Link to="/carroceria">
        <Button title="Carrocería" />
      </Link>

      <Link to="/interiores">
        <Button title="Interiores" />
      </Link>

      <Link to="evaluaciones">
        <Button title="Evaluaciones" />
      </Link>

      <Link to="preliminar">
        <Button title="Preliminar" />
      </Link>

      <Button title="Dictamen" />
      <Button title="E. Propietario" />
      <Button title="Generales" />
    </div>
  );
};

export default ExploreContainer;
