import { InputChangeEventDetail, IonButton, IonContent, IonHeader, IonIcon, IonInput, IonModal, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { chevronBack, chevronForward } from "ionicons/icons";
import { FormEvent, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Firebase } from "../../firebase/Firebase";
import { MyContext } from "../../context/DictamenContext";



const DatosPropietario:React.FC = ()=>{

    const [data, setData] = useState({propietario:'', direccion:'', calleNo:'', colonia:'', estado:'', localidad:'', cp:'', telefono:''});

    const { dataDictamen } = useContext(MyContext);

    useEffect(()=>{
        if(dataDictamen && dataDictamen.datos_propietario){
            setData({
                ...data,
                ...dataDictamen.datos_propietario
            })
        }
    },[])

    const handleForm = (e: FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        const firebaseInstance = Firebase.getInstance()
        firebaseInstance.setData(data)
        firebaseInstance.guardarDatosPropietario()
    }

    const handleInput = (e: any)=>{
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

                <h2 className="title">Datos Propietario</h2>

                <form action="" className="form" onSubmit={handleForm}>

                    <IonInput name="propietario" value={data.propietario} class="input" label="Propietario" label-placement="stacked" fill="outline" onInput={handleInput} />
                    <IonInput name="direccion" value={data.direccion} label="Dirección" label-placement="stacked" fill="outline" onInput={handleInput}/>
                    <IonInput name="calleNo" value={data.calleNo} label="Calle y No" label-placement="stacked" fill="outline" onInput={handleInput}/>
                    <IonInput name="colonia" value={data.colonia} label="Colonia" label-placement="stacked" fill="outline" onInput={handleInput}/>
                    <IonInput name="estado" value={data.estado} label="Estado" label-placement="stacked" fill="outline" onInput={handleInput}/>
                    <IonInput name="localidad" value={data.localidad} label="Localidad" label-placement="stacked" fill="outline" onInput={handleInput}/>
                    <IonInput name="cp" value={data.cp} label="CP" label-placement="stacked" fill="outline" onInput={handleInput} />
                    <IonInput name="telefono" value={data.telefono} label="Telefono" label-placement="stacked" fill="outline" onInput={handleInput} />

                
                    <IonButton type="submit" expand="block">Guardar</IonButton>
                </form>

                <div className="btns-bottom">
                    <Link to="datosTramiteDictamen" className="btn-prev">
                        <IonIcon class="icon" icon={chevronBack}></IonIcon>
                        <p><strong>Datos Tramite Dictamen</strong></p>
                    </Link>

                    <Link to="datosSedeOficialHidalgo" className="btn-next">
                        <p><strong>Datos Sede Oficina Hidalgo Pago</strong></p>
                        <IonIcon class="icon" icon={chevronForward}></IonIcon>
                    </Link>
                </div>

            </div>

        </IonContent>
        </IonPage>
    )
}

export default DatosPropietario;