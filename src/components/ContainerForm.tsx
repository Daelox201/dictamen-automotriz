//Componente para mostrar formulario
import {
  InputChangeEventDetail,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonItemDivider,
  IonItemGroup,
  IonLabel,
  IonPage,
  IonRadio,
  IonRadioGroup,
  IonRow,
  IonSelect,
  IonSelectOption,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { chevronBack, chevronForward } from "ionicons/icons";
import { FormEvent } from "react";
import { Link } from "react-router-dom";

import { FormData } from "../pages/Automotrices/Suspencion";

interface Data {
  routeSection: String;
  nameSection: String;
  nameForm: String;
  nextSection: String;
  prevSection: String;
  nextRoute: String;
  prevRoute: String;
}

interface Input {
  label: String;
  nameElement: String;
  section: String;
}

interface Section{
  name:String,
  inputs:Input[]
}



interface Props{
    data:Data[];
    inputs:Section[];
    handleInput: (e: any) => void;
    handleForm:(e: FormEvent<HTMLFormElement>) => void;
    handleInputSelect:(e: any) => void,
    dataForm:FormData,
}

const ContainerForm: React.FC<Props> = (props) => {
  const handleForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(props.dataForm);
  };

  return (
    <IonPage>
      <IonHeader class="custom-header">
        <IonToolbar>
          <IonTitle>Ingeniería Automotriz</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="container">
          <Link to={`/${props.data[0].routeSection}`} className="btn-back">
            <IonIcon class="icon" icon={chevronBack}></IonIcon>
            <p>
              <strong>{props.data[0].nameSection}</strong>
            </p>
          </Link>

          <h2 className="title">{props.data[0].nameForm}</h2>

          <form action="" className="form" onSubmit={props.handleForm}>

            {
              props.inputs.map((inputs, index)=>{
                return <>
                  <p>{inputs.name}</p>

                  {inputs.inputs.map((input, indice) => {

                    return (
                        <div
                          key={`${input.nameElement}_${index}`}
                          style={{ marginBottom: "1rem" }}
                        >
                            <IonLabel key={index}>{input.label}</IonLabel>
                            <IonGrid key={`${input.nameElement}_${index}`}>
                              <IonRow>
                                <IonCol size="12" sizeSm="6">
                                  <IonRadioGroup value={`${props.dataForm[`select_${input.nameElement}`]}`} name={`btn_${input.nameElement}`} allowEmptySelection={true} onIonChange={props.handleInput}>
                                    <IonGrid>
                                      <IonRow>
                                        <IonCol>
                                          <IonItem>
                                            <IonRadio  value={`sum_au_${index}-select_${input.nameElement}`}>
                                              AU
                                            </IonRadio>
                                          </IonItem>
                                        </IonCol>
      
                                        <IonCol>
                                          <IonItem>
                                            <IonRadio  value={`sum_or_${index}-select_${input.nameElement}`}>
                                              OR
                                            </IonRadio>
                                          </IonItem>
                                        </IonCol>
      
                                        <IonCol>
                                          <IonItem>
                                            <IonRadio value={`sum_rt_${index}-select_${input.nameElement}`}>
                                              RT
                                            </IonRadio>
                                          </IonItem>
                                        </IonCol>
      
                                        <IonCol>
                                          <IonItem>
                                            <IonRadio value={`sum_rc_${index}-select_${input.nameElement}`}>
                                              RC
                                            </IonRadio>
                                          </IonItem>
                                        </IonCol>
      
                                        <IonCol>
                                          <IonSelect
                                            name={`ev_${input.nameElement}_${index}_${indice}`}
                                            onIonChange={props.handleInputSelect}
                                            label="EV"
                                            label-placement="stacked"
                                            fill="outline"
                                            interface="popover"
                                            placeholder="-"
                                            value={`${props.dataForm[`ev_${input.nameElement}`]}`}
                                          >
                                            <IonSelectOption value="-">
                                              -
                                            </IonSelectOption>
                                            <IonSelectOption value="0">
                                              0
                                            </IonSelectOption>
                                            <IonSelectOption value="1">
                                              1
                                            </IonSelectOption>
                                            <IonSelectOption value="2">
                                              2
                                            </IonSelectOption>
                                            <IonSelectOption value="3">
                                              3
                                            </IonSelectOption>
                                            <IonSelectOption value="4">
                                              4
                                            </IonSelectOption>
                                          </IonSelect>
                                        </IonCol>
                                      </IonRow>
                                    </IonGrid>
                                  </IonRadioGroup>
                                </IonCol>
      
                                <IonCol size="12" sizeSm="6">
                                  <IonInput
                                    type="text"
                                    name={`observaciones_${input.nameElement}`}
                                    value={`${
                                      props.dataForm[
                                        `observaciones_${input.nameElement}`
                                      ]
                                    }`}
                                    class="input obs"
                                    label="Observaciones"
                                    label-placement="stacked"
                                    fill="outline"
                                    onIonChange={props.handleInput}
                                  />
                                </IonCol>
                              </IonRow>
                            </IonGrid>
                        </div>
                    );

                  })}

                  <IonLabel>Sumatoria</IonLabel>
                  <div className="container-evaluacion">
                    <IonInput
                      type="number"
                            name="au"
                            value={props.dataForm[`sum_au_${index}`] || 0}
                            class="input"
                            label="AU"
                            label-placement="stacked"
                            fill="outline"
                    />
                    <IonInput
                      type="number"
                            name="or"
                            value={props.dataForm[`sum_or_${index}`] || 0}
                            class="input"
                            label="OR"
                            label-placement="stacked"
                            fill="outline"
                    />
                    <IonInput
                      type="number"
                            name="rt"
                            value={props.dataForm[`sum_rt_${index}`] || 0}
                            class="input"
                            label="RT"
                            label-placement="stacked"
                            fill="outline"
                    />
                    <IonInput
                      type="number"
                      name="rc"
                      value={props.dataForm[`sum_rc_${index}`] || 0}
                      class="input"
                      label="RC"
                      label-placement="stacked"
                      fill="outline"
                    />
                    <IonInput
                      type="number"
                      name="ev"
                      value={props.dataForm[`sum_ev_${index}`] || 0}
                      class="input"
                      label="EV."
                      label-placement="stacked"
                      fill="outline"
                    />
                  </div>

                  <IonLabel>Resultados Evaluación</IonLabel>
                  <div className="container-ResEvaluacion">
                    <IonInput
                      type="number"
                            name="au"
                            value={props.dataForm[`res_au_${index}`] || 0}
                            class="input"
                            label="AU"
                            label-placement="stacked"
                            fill="outline"
                    />
                    <IonInput
                      type="number"
                            name="or"
                            value={props.dataForm[`res_or_${index}`] || 0}
                            class="input"
                            label="OR"
                            label-placement="stacked"
                            fill="outline"
                    />
                    <IonInput
                      type="number"
                            name="rt"
                            value={props.dataForm[`res_rt_${index}`] || 0}
                            class="input"
                            label="RT"
                            label-placement="stacked"
                            fill="outline"
                    />
                    <IonInput
                      type="number"
                            name="rc"
                            value={props.dataForm[`res_rc_${index}`] || 0}
                            class="input"
                            label="RC"
                            label-placement="stacked"
                            fill="outline"
                    />
                    <IonInput
                      type="number"
                            name="ev"
                            value={props.dataForm[`res_ev_${index}`] || 0}
                            class="input"
                            label="EV."
                            label-placement="stacked"
                            fill="outline"
                    />
                  </div>
                </>
              })
            }


            <IonButton type="submit" expand="block">
              Guardar
            </IonButton>
          </form> 

          {!props.data[0].prevSection || !props.data[0].nextSection ? (
            props.data[0].prevSection ? (
              <div className="first">
                <Link
                  to={`${props.data[0].nextRoute || props.data[0].prevRoute}`}
                  className="btn-next"
                >
                  <IonIcon class="icon" icon={chevronBack}></IonIcon>
                  <p>
                    <strong>{props.data[0].prevSection}</strong>
                  </p>
                </Link>
              </div>
            ) : (
              <div className="first">
                <Link
                  to={`${props.data[0].nextRoute || props.data[0].prevRoute}`}
                  className="btn-next"
                >
                  <p>
                    <strong>{props.data[0].nextSection}</strong>
                  </p>
                  <IonIcon class="icon" icon={chevronForward}></IonIcon>
                </Link>
              </div>
            )
          ) : (
            <div className="btns-bottom">
              <Link to={`${props.data[0].prevRoute}`} className="btn-prev">
                <IonIcon class="icon" icon={chevronBack}></IonIcon>
                <p>
                  <strong>{props.data[0].prevSection}</strong>
                </p>
              </Link>

              <Link to={`${props.data[0].nextRoute}`} className="btn-next">
                <p>
                  <strong>{props.data[0].nextSection}</strong>
                </p>
                <IonIcon class="icon" icon={chevronForward}></IonIcon>
              </Link>
            </div>
          )}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default ContainerForm;
