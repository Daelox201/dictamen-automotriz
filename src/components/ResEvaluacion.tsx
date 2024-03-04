import {
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
  IonInput,
  InputChangeEventDetail,
} from "@ionic/react";
import "./ResEvaluacion.css";
import { useContext, useEffect, useState } from "react";
import { MyContext } from "../context/DictamenContext";

interface Data {
  [key: string]: any;
}

interface Props {
  section: String;
  name: String[];
  nameObjFirestore: String[];
  sectiones: String[];
  //Cambia Number a number
  maximoPuntos: number;
  divisores: Number[];
}

let totalesOriginalidad = [];
let totalesFuncionalidad = [];

const ResEvaluacion: React.FC<Props> = ({
  section,
  name,
  nameObjFirestore,
  sectiones,
  maximoPuntos,
  divisores,
}) => {
  const { dataDictamen, setDataDictamen, totalesLocal, setTotalesLocal } =
    useContext(MyContext);

  const [data, setData] = useState();
  const [maximo, setMaximo] = useState<number>(20);
  const [totalesState, setTotalesState] = useState<Data>({
    originalidad_sin_control_electronico: 0,
    originalidad_con_control_electronico: 0,
    funcionalidad_sin_control_electronico: 0,
    funcionalidad_con_control_electronico: 0,
  });

  let totales = {
    originalidad_sin_control_electronico: [],
    originalidad_con_control_electronico: [],
    funcionalidad_sin_control_electronico: [],
    funcionalidad_con_control_electronico: [],
  };

  if (totalesLocal && !totalesLocal[section]) {
    setTotalesLocal({
      ...totalesLocal,
      [`${section}`]: { maximo: maximoPuntos, divisores, ...totales },
    });
  }

  const handleChange = (e: CustomEvent<InputChangeEventDetail>) => {
    if (!e.target.value) {
      setMaximo(parseInt(0));
    } else {
      setMaximo(parseInt(`${e.target.value}`));
    }
  };

  useEffect(() => {
    if (dataDictamen) {
      setData(dataDictamen[`${nameObjFirestore[0]}`]);
    }
    setMaximo(maximoPuntos);
  }, []);

  useEffect(() => {
    if (
      totalesLocal[section] &&
      totalesLocal[section].originalidad_sin_control_electronico &&
      totalesLocal[section].originalidad_sin_control_electronico !==
        totales.originalidad_sin_control_electronico
    ) {
      setTotalesLocal({
        ...totalesLocal,
        [`${section}`]: { maximo: maximoPuntos, divisores, ...totales },
      });
    }
  }, [totales]);

  return (
    <>
      {data && (
        <>
          {nameObjFirestore.map((section, index) => {
            let dataObj = data[section];

            if (!dataObj) return;

            return (
              <div className="accordion" key={index}>
                <IonAccordionGroup>
                  <IonAccordion value="first">
                    <IonItem slot="header" className="titleAccordion">
                      <IonLabel>{name[index - 1]}</IonLabel>
                    </IonItem>

                    <IonCard slot="content">
                      <IonCardHeader>
                        <IonCardTitle class="title-card">
                          {name[index - 1]}
                        </IonCardTitle>
                      </IonCardHeader>

                      {sectiones.map((subsections, indice) => {
                        //SIN CONTRO ELECTRONICO
                        if (indice == 0) {
                          totalesFuncionalidad = [];
                          totalesOriginalidad = [];

                          let totalOriginalidad =
                            (dataObj[`res_au_${indice}`] || 0) +
                            (dataObj[`res_or_${indice}`] || 0) +
                            (dataObj[`res_rt_${indice}`] || 0) +
                            (dataObj[`res_rc_${indice}`] || 0);
                          let totalFuncionalidad =
                            dataObj[`res_ev_${indice}`] || 0;

                          if (
                            totales &&
                            totales.originalidad_sin_control_electronico
                          ) {
                            totalesOriginalidad.push(
                              ...totales.originalidad_sin_control_electronico
                            );
                          }

                          if (
                            totales &&
                            totales.funcionalidad_sin_control_electronico
                          ) {
                            totalesFuncionalidad.push(
                              ...totales.funcionalidad_sin_control_electronico
                            );
                          }

                          totalesFuncionalidad.push(totalFuncionalidad);
                          totalesOriginalidad.push(totalOriginalidad);

                          totales.funcionalidad_sin_control_electronico =
                            totalesFuncionalidad;
                          totales.originalidad_sin_control_electronico =
                            totalesOriginalidad;
                        }

                        //CON CONTRO ELECTRONICO
                        if (indice > 0) {
                          totalesFuncionalidad = [];
                          totalesOriginalidad = [];

                          let totalOriginalidad =
                            (dataObj[`res_au_${indice}`] || 0) +
                            (dataObj[`res_or_${indice}`] || 0) +
                            (dataObj[`res_rt_${indice}`] || 0) +
                            (dataObj[`res_rc_${indice}`] || 0);
                          let totalFuncionalidad =
                            dataObj[`res_ev_${indice}`] || 0;

                          if (
                            totales &&
                            totales.originalidad_con_control_electronico
                          ) {
                            totalesOriginalidad.push(
                              ...totales.originalidad_con_control_electronico
                            );
                          }

                          if (
                            totales &&
                            totales.funcionalidad_con_control_electronico
                          ) {
                            totalesFuncionalidad.push(
                              ...totales.funcionalidad_con_control_electronico
                            );
                          }

                          totalesFuncionalidad.push(totalFuncionalidad);
                          totalesOriginalidad.push(totalOriginalidad);

                          totales.funcionalidad_con_control_electronico =
                            totalesFuncionalidad;
                          totales.originalidad_con_control_electronico =
                            totalesOriginalidad;
                        }

                        return (
                          <IonCardContent key={indice}>
                            {indice != 0 && (
                              <IonCardSubtitle class="subtitle">
                                {subsections}
                              </IonCardSubtitle>
                            )}

                            <IonGrid>
                              <IonRow>
                                <IonCol class="label">AU:</IonCol>
                                <IonCol>
                                  {dataObj[`res_au_${indice}`] || 0}
                                </IonCol>
                              </IonRow>

                              <IonRow>
                                <IonCol class="label">OR:</IonCol>
                                <IonCol>
                                  {dataObj[`res_or_${indice}`] || 0}
                                </IonCol>
                              </IonRow>
                              <IonRow>
                                <IonCol class="label">RT:</IonCol>
                                <IonCol>
                                  {dataObj[`res_rt_${indice}`] || 0}
                                </IonCol>
                              </IonRow>
                              <IonRow>
                                <IonCol class="label">RC:</IonCol>
                                <IonCol>
                                  {dataObj[`res_rc_${indice}`] || 0}
                                </IonCol>
                              </IonRow>
                              <IonRow>
                                <IonCol class="label-total">
                                  <strong>Totales</strong>
                                </IonCol>
                              </IonRow>
                              <IonRow>
                                <IonCol class="label">Originalidad:</IonCol>
                                <IonCol>
                                  {(dataObj[`res_au_${indice}`] || 0) +
                                    (dataObj[`res_or_${indice}`] || 0) +
                                    (dataObj[`res_rt_${indice}`] || 0) +
                                    (dataObj[`res_rc_${indice}`] || 0)}
                                </IonCol>
                              </IonRow>
                              <IonRow>
                                <IonCol class="label">Funcionalidad:</IonCol>
                                <IonCol>
                                  {dataObj[`res_ev_${indice}`] || 0}
                                </IonCol>
                              </IonRow>
                            </IonGrid>
                          </IonCardContent>
                        );
                      })}
                    </IonCard>
                  </IonAccordion>
                </IonAccordionGroup>
              </div>
            );
          })}

          <div className="accordion">
            <IonAccordionGroup>
              <IonAccordion value="first">
                <IonItem slot="header" className="titleAccordion">
                  <IonLabel>Resultados</IonLabel>
                </IonItem>

                <IonCard slot="content">
                  <IonCardHeader>
                    <IonCardTitle class="title-card">Resultados</IonCardTitle>
                  </IonCardHeader>

                  <IonCardContent>
                    <IonCardSubtitle class="subtitle">Totales</IonCardSubtitle>

                    <IonGrid>
                      {Object.keys(totales).map((el, index) => {
                        let text = "";

                        const suma = totales[el].reduce(
                          (acumulador, valorActual) => {
                            return acumulador + valorActual;
                          },
                          0
                        );

                        if (
                          /originalidad_sin_/.test(el) ||
                          /originalidad_con_/.test(el)
                        ) {
                          if (/originalidad_sin_/.test(el)) {
                            text = "Para Autos sin Control Electronico";
                            totales.originalidad_sin_control_electronico = suma;
                            totales.section = section;
                          } else if (/originalidad_con_/.test(el)) {
                            text = "Para Autos con Control Electronico";
                            totales.originalidad_con_control_electronico = suma;
                          }
                          return (
                            <>
                              {index == 0 && (
                                <IonRow>
                                  <IonCol class="">Originalidad</IonCol>
                                </IonRow>
                              )}

                              <IonRow>
                                <IonCol class="label">{text}</IonCol>
                                <IonCol>{suma}</IonCol>
                              </IonRow>
                            </>
                          );
                        } else if (
                          /funcionalidad_sin_/.test(el) ||
                          /funcionalidad_con_/.test(el)
                        ) {
                          if (/funcionalidad_sin_/.test(el)) {
                            text = "Para Autos sin Control Electronico";
                            totales.funcionalidad_sin_control_electronico =
                              suma;
                          } else if (/funcionalidad_con_/.test(el)) {
                            text = "Para Autos con Control Electronico";
                            totales.funcionalidad_con_control_electronico =
                              suma;
                          }

                          return (
                            <>
                              {index == 2 && (
                                <IonRow key={`index`}>
                                  <IonCol class="">Funcionalidad</IonCol>
                                </IonRow>
                              )}

                              <IonRow key={index}>
                                <IonCol class="label">{text}</IonCol>
                                <IonCol>{suma}</IonCol>
                              </IonRow>
                            </>
                          );
                        }
                      })}
                    </IonGrid>
                  </IonCardContent>

                  <IonCardContent>
                    <IonCardSubtitle class="subtitle">
                      Evaluacion basada en la Originalidad
                    </IonCardSubtitle>

                    <IonGrid>
                      <IonRow>
                        <IonCol class="label">
                          Maxima de puntos para esta seccion:
                        </IonCol>
                      </IonRow>

                      <IonRow>
                        <IonInput
                          type="number"
                          label=":"
                          value={maximo}
                          onIonInput={handleChange}
                        ></IonInput>
                      </IonRow>

                      <IonRow>
                        <IonCol class="label">
                          Obtenida en evaluacion para Dictamen:
                        </IonCol>
                      </IonRow>

                      {divisores.length > 1 ? (
                        <IonRow>
                          <IonCol>{`${Math.round(
                            (parseInt(
                              `${totales.originalidad_sin_control_electronico}`
                            ) *
                              maximo) /
                              divisores[0]
                          )}% Para Autos sin Control Electronico`}</IonCol>
                        </IonRow>
                      ) : (
                        <IonRow>
                          <IonCol>{`${Math.round(
                            (parseInt(
                              `${totales.originalidad_sin_control_electronico}`
                            ) *
                              maximo) /
                              divisores[0]
                          )}% Autos en General`}</IonCol>
                        </IonRow>
                      )}

                      {divisores.length > 1 && (
                        <>
                          <IonRow>
                            <IonCol class="label">
                              Obtenida en evaluacion para Dictamen:
                            </IonCol>
                          </IonRow>

                          <IonRow>
                            <IonCol>{`${Math.round(
                              (parseInt(
                                `${totales.originalidad_con_control_electronico}`
                              ) *
                                maximo) /
                                divisores[1]
                            )}% Para Autos con Control Electronico`}</IonCol>
                          </IonRow>
                        </>
                      )}
                    </IonGrid>
                  </IonCardContent>

                  <IonCardContent>
                    <IonCardSubtitle class="subtitle">
                      Evaluacion basada en la Funcionalidad
                    </IonCardSubtitle>

                    <IonGrid>
                      <IonRow>
                        <IonCol class="label">
                          Maxima de puntos para esta seccion:
                        </IonCol>
                      </IonRow>

                      <IonRow>
                        <IonInput
                          type="number"
                          label=":"
                          value={maximo}
                          onIonInput={handleChange}
                        ></IonInput>
                      </IonRow>

                      <IonRow>
                        <IonCol class="label">
                          Obtenida en evaluacion para Dictamen:
                        </IonCol>
                      </IonRow>

                      {divisores.length > 1 ? (
                        <IonRow>
                          <IonCol>{`${Math.round(
                            (parseInt(
                              `${totales.funcionalidad_sin_control_electronico}`
                            ) *
                              maximo) /
                              divisores[0]
                          )}% Para Autos sin Control Electronico`}</IonCol>
                        </IonRow>
                      ) : (
                        <IonRow>
                          <IonCol>{`${Math.round(
                            (parseInt(
                              `${totales.funcionalidad_sin_control_electronico}`
                            ) *
                              maximo) /
                              divisores[0]
                          )}% Autos en General`}</IonCol>
                        </IonRow>
                      )}

                      {divisores.length > 1 && (
                        <>
                          <IonRow>
                            <IonCol class="label">
                              Obtenida en evaluacion para Dictamen:
                            </IonCol>
                          </IonRow>

                          <IonRow>
                            <IonCol>{`${Math.round(
                              (parseInt(
                                `${totales.funcionalidad_con_control_electronico}`
                              ) *
                                maximo) /
                                divisores[1]
                            )}% Para Autos con Control Electronico`}</IonCol>
                          </IonRow>
                        </>
                      )}
                    </IonGrid>
                  </IonCardContent>
                </IonCard>
              </IonAccordion>
            </IonAccordionGroup>
          </div>
        </>
      )}
    </>
  );
};

export default ResEvaluacion;
