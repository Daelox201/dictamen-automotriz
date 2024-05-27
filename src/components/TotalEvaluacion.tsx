
import {useContext, useState, useEffect} from 'react'
import { MyContext } from '../context/DictamenContext';
import { IonAccordion, IonAccordionGroup, IonCard, IonCardHeader, IonCardTitle, IonItem, IonLabel } from '@ionic/react';

interface Props{
    nameObjFirestore:String[]
    sectiones:String[],
}

const TotalEvaluacion:React.FC<Props> = (props)=>{

    const {dataDictamen} = useContext(MyContext)

    const [data, setData] = useState()

    useEffect(()=>{
        if(!dataDictamen) return
        setData(dataDictamen[`${props.nameObjFirestore[0]}`][`${props.nameObjFirestore[1]}`])
    },[])

    return(
        <div className="accordion">
            <IonAccordionGroup>
                <IonAccordion value="first">
                    <IonItem slot="header" className="titleAccordion">
                        <IonLabel>Total Evaluación</IonLabel>
                    </IonItem>

                    <IonCard slot="content">
                        <IonCardHeader>
                            <IonCardTitle class="title-card" >Total Evaluacion</IonCardTitle>
                            {
                        data &&
                        
                        props.sectiones.map((section, index)=>{

                            console.count()

                            //SIN CONTROL ELECTRONICO
                            if(index == 0){

                                if(totalesEvaluacion && totalesEvaluacion.originalidad_sin_control_electronico){
                                    totalesOriginalidad.push(totalesEvaluacion.originalidad_sin_control_electronico)
                                }

                                if(totalesEvaluacion && totalesEvaluacion.funcionalidad_sin_control_electronico){
                                    totalesFuncionalidad.push(totalesEvaluacion.funcionalidad_sin_control_electronico)
                                }

                                let totalOriginalidad = data[`res_au_${index}`] || 0 + data[`res_or_${index}`] || 0 + data[`res_rt_${index}`] || 0 + data[`res_rc_${index}`] || 0
                                let totalFuncionalidad = data[`res_ev_${index}`]||0
                               
                                totalesOriginalidad.push(totalOriginalidad)
                                totalesFuncionalidad.push(totalFuncionalidad)
                                
                                console.log(totalesOriginalidad, ' ', totalesFuncionalidad)

                                /*if(totalesEvaluacion && totalesEvaluacion[`${props.nameObjFirestore[0]}`]){
                                    setTotalesEvaluacion({
                                        ...totalesEvaluacion,
                                        [`${props.nameObjFirestore[0]}`]:{
                                            ...totalesEvaluacion[`${props.nameObjFirestore[0]}`],
                                            'originalidad_sin_control_electronico':totalesOriginalidad,
                                            'funcionalidad_sin_control_electronico':totalesFuncionalidad
                                        }
                                    })
                                }else{
                                    setTotalesEvaluacion({
                                        ...totalesEvaluacion,
                                        [`${props.nameObjFirestore[0]}`]:{
                                            'originalidad_sin_control_electronico':totalesOriginalidad,
                                            'funcionalidad_sin_control_electronico':totalesFuncionalidad
                                        }
                                    })
                                }*/
                                
                            }

                            //CON CONTROL ELECTRONICO
                            /*if(index > 0){

                                totalesFuncionalidad = []
                                totalesOriginalidad = []

                                if(totalesEvaluacion && totalesEvaluacion.originalidad_con_control_electronico){
                                    totalesOriginalidad.push(totalesEvaluacion.originalidad_con_control_electronico)
                                }

                                if(totalesEvaluacion && totalesEvaluacion.funcionalidad_con_control_electronico){
                                    totalesFuncionalidad.push(totalesEvaluacion.funcionalidad_con_control_electronico)
                                }

                                
                                let totalOriginalidad = data[`res_au_${index}`] || 0 + data[`res_or_${index}`] || 0 + data[`res_rt_${index}`] || 0 + data[`res_rc_${index}`] || 0
                                let totalFuncionalidad = data[`res_ev_${index}`]||0

                                totalesOriginalidad.push(totalOriginalidad)
                                totalesFuncionalidad.push(totalFuncionalidad)
                                
                                
                                if(totalesEvaluacion && totalesEvaluacion[`${props.nameObjFirestore[0]}`]){
                                    setTotalesEvaluacion({
                                        ...totalesEvaluacion,
                                        [`${props.nameObjFirestore[0]}`]:{
                                            ...totalesEvaluacion[`${props.nameObjFirestore[0]}`],
                                            'originalidad_con_control_electronico':totalesOriginalidad,
                                            'funcionalidad_con_control_electronico':totalesFuncionalidad
                                        }
                                    })
                                }else{
                                    setTotalesEvaluacion({
                                        ...totalesEvaluacion,
                                        [`${props.nameObjFirestore[0]}`]:{
                                            'originalidad_con_control_electronico':totalesOriginalidad,
                                            'funcionalidad_con_control_electronico':totalesFuncionalidad
                                        }
                                    })
                                }
                                
                            }*/
                            

                            return 0
                        })

                      
                    }
                        </IonCardHeader>
                    </IonCard>
                </IonAccordion>
            </IonAccordionGroup>
        </div>
    )
}

export default TotalEvaluacion;