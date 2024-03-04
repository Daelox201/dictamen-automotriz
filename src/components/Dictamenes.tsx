import { useEffect, useState } from "react";
import Dictamen from "./Dictamen";
import { Firebase } from "../firebase/Firebase";

import './Estilos.css'

interface Dictamenes{
    id:String
    [key: string]: any;
}


interface Props {
    idDictamen: String;
}

const Dictamenes:React.FC<Props> = (props)=>{

    const [dictamenes, setDictamenes] = useState<Dictamenes[]>()


    useEffect(()=>{
        console.log(props.idDictamen)
        if(props.idDictamen == ""){
            Firebase.getInstance().getDocuments("dictamenes")
            .then(res=>{
                setDictamenes(res)
            })
            .catch(err=>{
                console.log(err)
            })
        }else{
            Firebase.getInstance().getDocument((props.idDictamen).trim())
            .then(res=>{
                console.log(res)
                setDictamenes([res])
            })
            .catch(err=>{
                console.log(err)
            })
        }
        
    },[props.idDictamen])

    return(
        <div className="dictamenes-container">
            
            {
                !dictamenes &&
                <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
            }

            {
            dictamenes &&
                dictamenes.map(el=>{
                    let date, dia, mes, anio
                    try {
                        date = new Date((el.datos_tramite_dictamen.Elaboracion_Dictamen.seconds) * 1000)
                        dia = date.getDate().toString().padStart(2, "0"); 
                        mes = (date.getMonth() + 1).toString().padStart(2, "0");
                        anio = date.getFullYear();
                    } catch (error) {
                        
                    }
                    let fechaFormateada = ''
                    if(date && dia && mes && anio){
                        fechaFormateada = `Finalizado: ${dia}/${mes}/${anio}`;
                    }

                    return <Dictamen key={`${el.id}`} id={el.id} name={el.id} date={fechaFormateada}/>
                })
            }
        </div>
    )
}

export default Dictamenes;