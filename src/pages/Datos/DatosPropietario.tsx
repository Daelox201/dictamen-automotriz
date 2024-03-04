// Importa los componentes y módulos necesarios de Ionic, React y Firebase
import { InputChangeEventDetail, IonButton, IonContent, IonHeader, IonIcon, IonInput, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { chevronBack, chevronForward } from "ionicons/icons";
import { FormEvent, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Firebase } from "../../firebase/Firebase";
import { MyContext } from "../../context/DictamenContext";

// Definición del componente DatosPropietario
const DatosPropietario: React.FC = () => {

    // Estado local para almacenar los datos del propietario
    const [data, setData] = useState({ propietario: '', direccion: '', calleNo: '', colonia: '', estado: '', localidad: '', cp: '', telefono: '' });

    // Contexto para acceder a los datos del dictamen
    const { dataDictamen } = useContext(MyContext);

    // Efecto que se ejecuta al montar el componente para cargar los datos del propietario
    useEffect(() => {
        if (dataDictamen && dataDictamen.datos_propietario) {
          console.log("Data loaded successfully:", dataDictamen.datos_propietario);
          setData({
            ...data,
            ...dataDictamen.datos_propietario,
          });
        }
      }, [dataDictamen]);

    // Maneja el envío del formulario
    const handleForm = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Instancia de Firebase para interactuar con la base de datos
        const firebaseInstance = Firebase.getInstance();
        
        // Establece los datos en Firebase y guarda los datos del propietario
        firebaseInstance.setData(data);
        firebaseInstance.guardarDatosPropietario();
    }

    // Maneja los cambios en los campos del formulario
    const handleInput = (e: any) => {
        // Actualiza el estado local con el nuevo valor del campo modificado
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    }

    // Renderiza el componente DatosPropietario
    return (
        <IonPage>
            <IonHeader class='custom-header'>
                <IonToolbar>
                    <IonTitle>Ingeniería Automotriz</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>

                <div className="container">

                    {/* Enlace de navegación de regreso */}
                    <Link to="/datos" className="btn-back">
                        <IonIcon class="icon" icon={chevronBack}></IonIcon>
                        <p><strong>Datos</strong></p>
                    </Link>

                    {/* Título de la sección */}
                    <h2 className="title">Datos Propietario</h2>

                    {/* Formulario para ingresar los datos del propietario */}
                    <form action="" className="form" onSubmit={handleForm}>

                        {/* Campos de entrada para cada atributo del propietario */}
                        <IonInput name="propietario" value={data.propietario} class="input" label="Propietario" label-placement="stacked" fill="outline" onInput={handleInput} />
                        <IonInput name="direccion" value={data.direccion} label="Dirección" label-placement="stacked" fill="outline" onInput={handleInput} />
                        <IonInput name="calleNo" value={data.calleNo} label="Calle y No" label-placement="stacked" fill="outline" onInput={handleInput} />
                        <IonInput name="colonia" value={data.colonia} label="Colonia" label-placement="stacked" fill="outline" onInput={handleInput} />
                        <IonInput name="estado" value={data.estado} label="Estado" label-placement="stacked" fill="outline" onInput={handleInput} />
                        <IonInput name="localidad" value={data.localidad} label="Localidad" label-placement="stacked" fill="outline" onInput={handleInput} />
                        <IonInput name="cp" value={data.cp} label="CP" label-placement="stacked" fill="outline" onInput={handleInput} />
                        <IonInput name="telefono" value={data.telefono} label="Telefono" label-placement="stacked" fill="outline" onInput={handleInput} />

                        {/* Botón para enviar el formulario */}
                        <IonButton type="submit" expand="block">Guardar</IonButton>
                    </form>

                    {/* Enlaces de navegación anterior y siguiente */}
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
    );
}

// Exporta el componente DatosPropietario
export default DatosPropietario;
