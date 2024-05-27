import { InputChangeEventDetail, IonButton, IonContent, IonHeader, IonIcon, IonInput, IonModal, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { chevronBack, chevronForward } from "ionicons/icons";
import { FormEvent, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import './Datos.css'
import { Firebase } from "../../firebase/Firebase";
import { MyContext } from "../../context/DictamenContext";


const DatosTramiteDictamen:React.FC = () =>{

    const [data, setData] = useState({Inicio_Tramite_Dictamen:'', Elaboracion_Dictamen:'', Entrega_Dictamen:'', Cita_Dictamen:'', Elaboracion_Dictamen_direccion:'', Entrega_Dictamen_direccion:'', Estado:''});
    const [showModal, setShowModal] = useState(false)

    const { dataDictamen } = useContext(MyContext);

    useEffect(()=>{
        if(dataDictamen && dataDictamen.datos_tramite_dictamen){
            setData({
                ...data,
                ...dataDictamen.datos_tramite_dictamen
            })
        }
    },[])

    const handleForm = (e: FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        
        const firebaseInstance = Firebase.getInstance()
        firebaseInstance.setData(data)
        firebaseInstance.guardarDatosTramiteDictamen()
    }

    const handleInput = (e: CustomEvent<InputChangeEventDetail>)=>{
        setData({
            ...data,
            [e.target.name]:e.target.value
        })

        console.log(data)
    }

    const handleShowModal = ()=>{
        setShowModal(true)
    }

    const handleCloseModal = () =>{
        setShowModal(false)
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

                <h2 className="title">Datos Tramite Dictamen</h2>

                <form action="" className="form" onSubmit={handleForm}>

                    <p>Fechas</p>
                    <IonInput type="date" name="Inicio_Tramite_Dictamen" value={data.Inicio_Tramite_Dictamen} class="input" label="Inicio de Tramite de Dictamen" label-placement="stacked" fill="outline" onIonChange={handleInput}/>
                    <IonInput type="date" name="Elaboracion_Dictamen" value={data.Elaboracion_Dictamen} label="Elaboracion del Dictamen" label-placement="stacked" fill="outline" onIonChange={handleInput}/>
                    <IonInput type="date" name="Entrega_Dictamen" value={data.Entrega_Dictamen} label="Entrega del Dictamen" label-placement="stacked" fill="outline" onIonChange={handleInput}/>
                    <p>Localidades</p>
                    <IonInput type="text" name="Cita_Dictamen" value={data.Cita_Dictamen} label="Cita Dictamen" label-placement="stacked" fill="outline" onIonChange={handleInput}/>
                    <IonInput type="text" name="Elaboracion_Dictamen_direccion" value={data.Elaboracion_Dictamen_direccion} label="Elaboracion del Dictamen" label-placement="stacked" fill="outline" onIonChange={handleInput}/>
                    <IonInput type="text" name="Entrega_Dictamen_direccion" value={data.Entrega_Dictamen_direccion} label="Entrega del Dictamen" label-placement="stacked" fill="outline" onIonChange={handleInput}/>
                    <IonInput type="text" name="Estado" value={data.Estado} label="Estado" label-placement="stacked" fill="outline" onIonChange={handleInput} />

                
                    <IonButton type="submit" expand="block">Guardar</IonButton>
                </form>


                <div className="btns-bottom">
                    <Link to="datosVehiculo" className="btn-prev">
                        <IonIcon class="icon" icon={chevronBack}></IonIcon>
                        <p><strong>Datos del Vehiculo</strong></p>
                    </Link>

                    <Link to="datosPropietario" className="btn-next">
                        <p><strong>Datos Propietario</strong></p>
                        <IonIcon class="icon" icon={chevronForward}></IonIcon>
                    </Link>
                </div>

            </div>

        </IonContent>
        </IonPage>
    )
}

export default DatosTramiteDictamen;