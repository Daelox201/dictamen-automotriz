import {
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonGrid,
  IonRow,
  IonCol,
  IonCardSubtitle,
  IonAccordion,
  IonAccordionGroup,
  IonItem,
  IonLabel,
  IonIcon,
} from "@ionic/react";
import { useContext } from "react";
import "./Evaluaciones.css";
import ResEvaluacion from "../../components/ResEvaluacion";
import { MyContext } from "../../context/DictamenContext";
import { Link } from "react-router-dom";
import { chevronBack } from "ionicons/icons";

const Evaluciones: React.FC = () => {
  const { dataDictamen } = useContext(MyContext);

  return (
    <IonPage>
      <IonHeader class="custom-header">
        <IonToolbar>
          <IonTitle>Ingeniería Automotriz</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="container evaluaciones">
          <Link to={`/forms`} className="btn-back">
            <IonIcon class="icon" icon={chevronBack}></IonIcon>
            <p>
              <strong>Evaluaciones</strong>
            </p>
          </Link>

          <div className="data">
            <p className="title">Datos del Vehiculo</p>

            {dataDictamen && (
              <div className="data-flex">
                <div>
                  <p>
                    Marca:{" "}
                    <span>
                      {(dataDictamen &&
                        dataDictamen.data_vehiculo.marca &&
                        dataDictamen.data_vehiculo.marca) ||
                        ""}
                    </span>
                  </p>
                  <p>
                    Submarca:{" "}
                    <span>
                      {(dataDictamen &&
                        dataDictamen.data_vehiculo.submarca &&
                        dataDictamen.data_vehiculo.submarca) ||
                        ""}
                    </span>
                  </p>
                  <p>
                    Modelo:{" "}
                    <span>
                      {(dataDictamen &&
                        dataDictamen.data_vehiculo.modelo &&
                        dataDictamen.data_vehiculo.modelo) ||
                        ""}
                    </span>
                  </p>
                  <p>
                    Segmento:{" "}
                    <span>
                      {(dataDictamen &&
                        dataDictamen.data_vehiculo.segmento &&
                        dataDictamen.data_vehiculo.segmento) ||
                        ""}
                    </span>
                  </p>
                </div>

                <div>
                  <p>
                    Tipo:{" "}
                    <span>
                      {(dataDictamen &&
                        dataDictamen.data_vehiculo.tipo &&
                        dataDictamen.data_vehiculo.tipo) ||
                        ""}
                    </span>
                  </p>
                  <p>
                    No. de Serie:{" "}
                    <span>
                      {(dataDictamen &&
                        dataDictamen.data_vehiculo.noSerie &&
                        dataDictamen.data_vehiculo.noSerie) ||
                        ""}
                    </span>
                  </p>
                  <p>
                    Propietario:{" "}
                    <span>
                      {(dataDictamen &&
                        dataDictamen.datos_propietario.propietario &&
                        dataDictamen.datos_propietario.propietario) ||
                        ""}
                    </span>
                  </p>
                </div>
              </div>
            )}

            <IonAccordionGroup>
              <IonAccordion value="first">
                <IonItem
                  slot="header"
                  color="primary"
                  className="accordion-title"
                >
                  <IonLabel>
                    Sistemas Alternos de Motor y Generales Motor
                  </IonLabel>
                </IonItem>

                <div slot="content">
                  <ResEvaluacion
                    section="Sistemas Alternos de Motor y Generales Motor"
                    name={[
                      "Sistema Carga y Arranque",
                      "Sistema de Encendido o Ignicion",
                      "Sistema de Admision de Aire",
                      "Sistema de Inyeccion de combustible",
                      "Sistema de Emision de Gases",
                      "Sistema Evaporativo",
                      "Sistema de Enfriamiento",
                    ]}
                    nameObjFirestore={[
                      "sistemas_motor",
                      "sistema_carga_arranque",
                      "sistema_encendido_ignicion",
                      "sistema_admision_aire",
                      "sistema_inyeccion_combustible",
                      "sistema_emison_gases",
                      "sistema_evaporativo",
                      "sistema_enfriamento",
                    ]}
                    sectiones={[
                      "Sistema Carga y Arranque",
                      "Con control Electronico",
                    ]}
                    maximoPuntos={20}
                    divisores={[600, 700]}
                  />
                </div>
              </IonAccordion>
            </IonAccordionGroup>

            <br />

            <IonAccordionGroup>
              <IonAccordion value="first">
                <IonItem
                  slot="header"
                  color="primary"
                  className="accordion-title"
                >
                  <IonLabel>Generales Motor</IonLabel>
                </IonItem>

                <div slot="content">
                  <ResEvaluacion
                    section="Generales Motor"
                    name={[
                      "Juntas",
                      "Tapas y Depositos",
                      "Tapones",
                      "Filtros",
                      "Sujeciones",
                    ]}
                    nameObjFirestore={[
                      "generales_motor",
                      "motores_juntas",
                      "motores_tapas_depositos",
                      "motores_tapones",
                      "motores_filtros",
                      "motores_sujeciones",
                    ]}
                    sectiones={["Juntas"]}
                    maximoPuntos={10}
                    divisores={[500]}
                  />
                </div>
              </IonAccordion>
            </IonAccordionGroup>

            <br />

            <IonAccordionGroup>
              <IonAccordion value="first">
                <IonItem
                  slot="header"
                  color="primary"
                  className="accordion-title"
                >
                  <IonLabel>Sistemas Automotrices</IonLabel>
                </IonItem>

                <div slot="content">
                  <ResEvaluacion
                    section="Sistemas Automotrices"
                    name={[
                      "Dirección",
                      "Suspension",
                      "Frenos",
                      "Trasmision",
                      "Chassis",
                    ]}
                    nameObjFirestore={[
                      "automotrices",
                      "sitemas_automotrices_direccion",
                      "sitemas_automotrices_suspension",
                      "sitemas_automotrices_frenos",
                      "sitemas_automotrices_trasmision",
                      "sitemas_automotrices_chassis",
                    ]}
                    sectiones={["Dirección", "Con control Electronico"]}
                    maximoPuntos={30}
                    divisores={[500, 500]}
                  />
                </div>
              </IonAccordion>
            </IonAccordionGroup>

            <br />

            <IonAccordionGroup>
              <IonAccordion value="first">
                <IonItem
                  slot="header"
                  color="primary"
                  className="accordion-title"
                >
                  <IonLabel>Carroceria</IonLabel>
                </IonItem>

                <div slot="content">
                  <ResEvaluacion
                    section="Carroceria"
                    name={[
                      "Pintura",
                      "Lienzos y Partes de Colision",
                      "Cristales y Ventanas",
                      "Cerrajerias y Enclaves",
                      "Ruedas",
                      "Accesorios",
                      "Molduras",
                      "Luces",
                    ]}
                    nameObjFirestore={[
                      "carroceria",
                      "carroceria_pintura",
                      "carroceria_lienzos_partes_colision",
                      "carroceria_cristales_ventanas",
                      "carroceria_cerrajerias_enclaves",
                      "carroceria_ruedas",
                      "carroceria_accesorios",
                      "carroceria_molduras",
                      "carroceria_luces",
                    ]}
                    sectiones={["Pintura"]}
                    maximoPuntos={20}
                    divisores={[800]}
                  />
                </div>
              </IonAccordion>
            </IonAccordionGroup>

            <br />

            <IonAccordionGroup>
              <IonAccordion value="first">
                <IonItem
                  slot="header"
                  color="primary"
                  className="accordion-title"
                >
                  <IonLabel>Interiores</IonLabel>
                </IonItem>

                <div slot="content">
                  <ResEvaluacion
                    section="Interiores"
                    name={[
                      "Asientos",
                      "Tablero",
                      "Puertas y/o Lienzos Fijos",
                      "Domo Trasero y/o Cajuela",
                      "Luces Interiores",
                      "Tapicerias y Alfombrados",
                    ]}
                    nameObjFirestore={[
                      "interiores",
                      "interiores_asientos",
                      "interiores_tablero",
                      "interiores_puertas_lienzos_fijos",
                      "interiores_domo_trasero_cajuela",
                      "interiores_luces_interiores",
                      "interiores_tapicerias_alfombrados",
                    ]}
                    sectiones={["Asientos"]}
                    maximoPuntos={20}
                    divisores={[600]}
                  />
                </div>
              </IonAccordion>
            </IonAccordionGroup>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Evaluciones;
