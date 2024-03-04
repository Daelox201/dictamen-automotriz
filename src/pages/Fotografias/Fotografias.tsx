// Fotografias.tsx
import React, { useRef, useState, useEffect } from 'react';
import "./Fotografias.css";
import {
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import { chevronBack } from "ionicons/icons";
import { Link, useHistory } from "react-router-dom";

// Importa la clase Firebase
import { Firebase } from "../../firebase/Firebase";

const Fotografias: React.FC = () => {
  const videoRef = useRef(null);
  const [photo, setPhoto] = useState('');
  const [capturedPhotos, setCapturedPhotos] = useState<string[]>([]);
  const [deletedIndexes, setDeletedIndexes] = useState<number[]>([]); // Nuevo estado para almacenar los índices eliminados
  const history = useHistory();

  useEffect(() => {
    const dictamenId = obtenerIdDelDictamenActual();
    const firebaseInstance = Firebase.getInstance();

    const loadFirebasePhotos = async () => {
      try {
        const firebasePhotos = await firebaseInstance.obtenerFotosDeFirebase(dictamenId);
        const filteredPhotos = firebasePhotos.filter((_, index) => !deletedIndexes.includes(index));
        setCapturedPhotos(filteredPhotos);
      } catch (error) {
        console.error('Error al cargar fotos desde Firebase:', error);
      }
    };

    loadFirebasePhotos();

    startCamera();

    return () => {
      stopCamera();
    };
  }, [deletedIndexes]); // Agregamos deletedIndexes como dependencia para que se recargue cuando cambie

  useEffect(() => {
    const unlisten = history.listen(() => {
      stopCamera();
    });

    return () => {
      unlisten();
    };
  }, [history]);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (error) {
      console.error('Error accessing the camera:', error);
    }
  };

  const stopCamera = () => {
    const stream = videoRef.current?.srcObject;

    if (stream) {
      const tracks = (stream as MediaStream).getTracks();

      tracks.forEach((track) => track.stop());
      videoRef.current.srcObject = null;
    }
  };

  const capturePhoto = () => {
    const canvas = document.createElement('canvas');
    const video = videoRef.current;

    if (video) {
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;

      const context = canvas.getContext('2d');
      if (context) {
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        const imageData = canvas.toDataURL('image/png');
        confirmPhoto(imageData);
      }
    }
  };

  const confirmPhoto = async (imageData) => {
    if (imageData) {
      const firebaseInstance = Firebase.getInstance();
      const dictamenId = obtenerIdDelDictamenActual();

      try {
        await firebaseInstance.guardarFotoEnFirebase(imageData);
        const updatedPhotos = await firebaseInstance.obtenerFotosDeFirebase(dictamenId);
        setCapturedPhotos(updatedPhotos);
        setPhoto('');
      } catch (error) {
        console.error('Error al guardar la foto en Firebase:', error);
      }
    }
  };

  const deletePhoto = async (index) => {
    const firebaseInstance = Firebase.getInstance();
    const dictamenId = obtenerIdDelDictamenActual();
  
    try {
      const url = capturedPhotos[index];
      const nombreArchivo = obtenerNombreArchivoDesdeURL(url);
  
      await firebaseInstance.eliminarFotoEnFirebase(nombreArchivo);
      const updatedPhotos = await firebaseInstance.obtenerFotosDeFirebase(dictamenId);
      setCapturedPhotos(updatedPhotos);
  
      // Actualizar el estado de los índices eliminados
      setDeletedIndexes((prevIndexes) => [...prevIndexes, index]);
  
    } catch (error) {
      console.error('Error al eliminar la foto en Firebase:', error);
    }
  };

  const obtenerNombreArchivoDesdeURL = (url) => {
    const decodedUrl = decodeURIComponent(url);
    const ultimaBarraIndex = decodedUrl.lastIndexOf('/');
    const ultimoSignoInterrogacionIndex = decodedUrl.lastIndexOf('?');
    const nombreArchivoConExtension = decodedUrl.substring(ultimaBarraIndex + 1, ultimoSignoInterrogacionIndex !== -1 ? ultimoSignoInterrogacionIndex : undefined);
    return nombreArchivoConExtension;
  };

  return (
    <IonPage>
      <IonHeader class='custom-header'>
        <IonToolbar>
          <IonTitle>Ingeniería Automotriz</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="container">
          <Link to="/forms" className="btn-back">
            <IonIcon class="icon" icon={chevronBack}></IonIcon>
            <p><strong>Fotografías</strong></p>
          </Link>

          <div className='containerfoto'>
            <video ref={videoRef} autoPlay playsInline />
            {photo && <img src={photo} alt="Captured Photo" />}
            <button onClick={capturePhoto}>Tomar foto</button>
          </div>

         {capturedPhotos.map((photo, index) => (
  <div key={index}>
    {!deletedIndexes.includes(index) && (
      <>
        <img src={photo} alt={`Captured Photo ${index + 1}`} />
        <button onClick={() => deletePhoto(index)}>Eliminar Foto</button>
      </>
    )}
  </div>
))}


          {capturedPhotos.length === 0 && (
            <p>No hay fotos disponibles.</p>
          )}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Fotografias;

const obtenerIdDelDictamenActual = () => {
  let idDictamen = localStorage.getItem('idDictamen');
  return idDictamen;
};
