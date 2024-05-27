import { IonButton, IonContent, IonHeader, IonInput, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';
import { useHistory } from 'react-router';
import { useEffect, useState} from 'react';
import { Firebase } from '../firebase/Firebase';
import Dictamenes from '../components/Dictamenes';

const Home: React.FC = () => {
  const history = useHistory();
  const [data, setData] = useState({idDictamen:''});
  const [idDictamen, setIdDictamen] = useState("")

  const handleBtn = ()=>{
    const firebaseInstance = Firebase.getInstance()
    firebaseInstance.guardarDatosSedeOficialHidalgoPagoAuto()
    history.push('/forms')
  }

  useEffect(()=>{
    localStorage.getItem('idDictamen') ? 
      history.push("/forms")
    :
      history.push("/home")
  }, [])

  const handleInput = (e:any) =>{
    setData({
      ...data,
      [e.target.name]:e.target.value
    })
  }

  const handleSearch = () => {
    // Aquí puedes realizar la lógica de búsqueda usando data.idDictamen
    console.log('Realizando búsqueda con el valor:', data.idDictamen);
    setIdDictamen(data.idDictamen);
  };

  return (
    <IonPage>
      <IonHeader class='custom-header'>
        <IonToolbar>
          <IonTitle>Ingeniería Automotriz</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div  className='home-container'>
          <IonButton onClick={handleBtn}>Nuevo Dictamen</IonButton>
          <div className='buscador'>
            <div>
              <IonInput name="idDictamen" type="search" value={data.idDictamen} class="input" label="Buscar Dictamen" 
              label-placement="stacked" fill="outline" onInput={handleInput} onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault(); // Evita que se realice un salto de línea
                  handleSearch();
                }
              }}/>
            </div>
          </div>
          <p><strong>Dictamenes Anteriores</strong></p>
          <br />
          <Dictamenes idDictamen={idDictamen}/>
        </div>

      </IonContent>
    </IonPage>
  );
};

export default Home;
