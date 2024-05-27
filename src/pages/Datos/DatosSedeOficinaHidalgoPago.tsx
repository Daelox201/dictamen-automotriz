import { InputChangeEventDetail, IonButton, IonContent, IonHeader, IonIcon, IonInput, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { chevronBack, chevronForward } from "ionicons/icons";
import { FormEvent, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Firebase } from "../../firebase/Firebase";
import { MyContext } from "../../context/DictamenContext";


const DatosSedeOficinaHidalgoPago:React.FC = ()=>{

    const [data, setData] = useState({sede:'Pacuca', direccion:'Camino Real de la Plata No.100 Locales 153 al 156 Complejo Zona Plateada Pachuca de Soto Hidalgo'});


    const { dataDictamen } = useContext(MyContext);

    useEffect(()=>{
        console.log(dataDictamen)
        if(dataDictamen && dataDictamen.datos_sede_oficial_hidalgo_pago){
            setData({
                ...data,
                ...dataDictamen.datos_sede_oficial_hidalgo_pago
            })
        }
    },[])


    const handleForm = (e: FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        const firebaseInstance = Firebase.getInstance()
        firebaseInstance.setData(data)
        firebaseInstance.guardarDatosSedeOficialHidalgoPago()
    }

    const handleInput = (e: CustomEvent<InputChangeEventDetail>)=>{
        setData({
            ...data,
            [e.target.name]:e.target.value
        })

    }

    return(
        <IonPage>
        <IonHeader class='custom-header'>
        <IonToolbar>
            <IonTitle>Ingeniería Automotriz</IonTitle>
        </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>

            <div className="container">

                <Link to="/datos" className="btn-back">
                    <IonIcon class="icon" icon={chevronBack}></IonIcon>
                    <p><strong>Datos</strong></p>
                </Link>

                <h2 className="title">Datos Sede Oficial Hidalgo Pago</h2>

                <form action="" className="form" onSubmit={handleForm}>

                    <IonInput name="sede" value={data.sede} class="input" label="Sede" label-placement="stacked" fill="outline" onIonChange={handleInput} />
                    <IonInput name="direccion" value={data.direccion} label="Dirección" label-placement="stacked" fill="outline" onIonChange={handleInput}/>
                
                    <IonButton type="submit" expand="block">Guardar</IonButton>
                </form>

                <div className="btns-bottom">
                    <Link to="datosPropietario" className="btn-prev">
                        <IonIcon class="icon" icon={chevronBack}></IonIcon>
                        <p><strong>Datos del Propietario</strong></p>
                    </Link>

                    <Link to="" className="btn-next">
                        <p><strong>Datos Técnicos UPPachuca</strong></p>
                        <IonIcon class="icon" icon={chevronForward}></IonIcon>
                    </Link>
                </div>

            </div>

        </IonContent>
        </IonPage>
    )
}

export default DatosSedeOficinaHidalgoPago;