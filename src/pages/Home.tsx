import React, { useState, useEffect } from 'react';
import { IonButton, IonContent, IonHeader, IonInput, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';
import { useHistory } from 'react-router';
import { Firebase } from '../firebase/Firebase';
import Dictamenes from '../components/Dictamenes';

const Home: React.FC = () => {
  const history = useHistory();
  const [data, setData] = useState({ idDictamen: '' });
  const [idDictamen, setIdDictamen] = useState('');
  const [dictamenPhotos, setDictamenPhotos] = useState<{ [key: string]: string[] }>({});

  const handleBtn = () => {
    const firebaseInstance = Firebase.getInstance();
    firebaseInstance.guardarDatosSedeOficialHidalgoPagoAuto();

    setDictamenPhotos((prevPhotos) => ({
      ...prevPhotos,
      [idDictamen]: getCapturedPhotos(),
    }));

    history.push('/forms');
  };

  useEffect(() => {
    localStorage.getItem('idDictamen')
      ? history.push('/forms')
      : history.push('/home');
  }, []);

  const handleInput = (e: any) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSearch = () => {
    console.log('Realizando búsqueda con el valor:', data.idDictamen);
    setIdDictamen(data.idDictamen);
  };

  const getCapturedPhotos = () => {
    // Lógica para obtener fotos capturadas (puedes adaptar según tu implementación)
    return JSON.parse(localStorage.getItem('capturedPhotos')) || [];
  };

  return (
    <IonPage>
      <IonHeader class="custom-header">
        <IonToolbar>
          <IonTitle>Ingeniería Automotriz</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="home-container">
          <IonButton onClick={handleBtn}>Nuevo Dictamen</IonButton>
          <div className="buscador">
            <div>
              <IonInput
                name="idDictamen"
                type="search"
                value={data.idDictamen}
                class="input"
                label="Buscar Dictamen"
                label-placement="stacked"
                fill="outline"
                onInput={handleInput}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    handleSearch();
                  }
                }}
              />
            </div>
          </div>
          <p>
            <strong>Dictamenes Anteriores</strong>
          </p>
          <br />
          <Dictamenes idDictamen={idDictamen} photos={dictamenPhotos[idDictamen] || []} />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
