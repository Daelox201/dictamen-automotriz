import { InputChangeEventDetail, IonButton, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonList, IonModal, IonPage, IonTitle, IonToolbar } from "@ionic/react"
import { chevronBack, chevronForward } from "ionicons/icons"

import './Datos.css'
import { FormEvent, useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"

import {Firebase} from '../../firebase/Firebase';
import { MyContext } from "../../context/DictamenContext"

const DatosVehiculo:React.FC=()=>{

    const [data, setData] = useState({marca:'', submarca:'', modelo:'', segmento:'', tipo:'', noSerie:'', vehiculo:''});
    const [showModal, setShowModal] = useState(false)

    const { dataDictamen } = useContext(MyContext);

    useEffect(()=>{
        if(dataDictamen && dataDictamen.data_vehiculo){
            setData({
                ...data,
                ...dataDictamen.data_vehiculo
            })
        }
    },[])

    const handleForm = (e: FormEvent<HTMLFormElement>) =>{
        e.preventDefault()

           
        const firebaseInstance = Firebase.getInstance()
        firebaseInstance.setData(data)
        firebaseInstance.setEvent(()=>{
            console.log("PERFECT")
        })
        firebaseInstance.guardarDatosVehiculo()
        


        //handleShowModal()
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

                    <h2 className="title">Datos del Vehiculo</h2>

                    <form action="" className="form" onSubmit={handleForm}>

                        <IonInput name="marca" value={data.marca} class="input" label="Marca" label-placement="stacked" fill="outline" onIonChange={handleInput} />
                        <IonInput name="submarca" value={data.submarca} label="Submarca" label-placement="stacked" fill="outline" onIonChange={handleInput}/>
                        <IonInput name="modelo" value={data.modelo} label="Modelo" label-placement="stacked" fill="outline" onIonChange={handleInput}/>
                        <IonInput name="segmento" value={data.segmento} label="Segmento" label-placement="stacked" fill="outline" onIonChange={handleInput}/>
                        <IonInput name="tipo" value={data.tipo} label="Tipo" label-placement="stacked" fill="outline" onIonChange={handleInput}/>
                        <IonInput name="noSerie" value={data.noSerie} label="No. de Serie" label-placement="stacked" fill="outline" onIonChange={handleInput}/>
                        <IonInput name="vehiculo" value={data.vehiculo} label="Vehículo" label-placement="stacked" fill="outline" onIonChange={handleInput} />

                    
                        <IonButton type="submit" expand="block">Guardar</IonButton>
                    </form>

                    <div className="first">                    
                        <Link to="datosTramiteDictamen" className="btn-next">
                            <p><strong>Datos Tramite Dictamen</strong></p>
                            <IonIcon class="icon" icon={chevronForward}></IonIcon>
                        </Link>
                    </div>

                    <IonModal class="modal" isOpen={showModal} onDidDismiss={handleCloseModal}>
                        <p>Los datos del formularios son:</p>
                        <p>Marca: {data.marca}</p>
                        <p>Submarca: {data.submarca}</p>
                        <p>Modelo: {data.modelo}</p>
                        <p>Segmento: {data.segmento}</p>
                        <p>Tipo: {data.tipo}</p>
                        <p>No. Serie: {data.noSerie}</p>
                        <p>Vehiculo: {data.vehiculo}</p>
                        <IonButton onClick={handleCloseModal}>Cerrar Modal</IonButton>
                    </IonModal>

                </div>

            </IonContent>
        </IonPage>
    )
}

export default DatosVehiculo