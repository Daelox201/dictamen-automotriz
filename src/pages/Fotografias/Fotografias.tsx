import React, { useRef, useState, useEffect, useCallback } from 'react';
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
import { Firebase } from "../../firebase/Firebase";

const Fotografias: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [photo, setPhoto] = useState<string>('');
  const [capturedPhotos, setCapturedPhotos] = useState<string[]>([]);
  const [deletedIndexes, setDeletedIndexes] = useState<number[]>([]);
  const history = useHistory();

  useEffect(() => {
    const firebaseInstance = Firebase.getInstance();

    const loadFirebasePhotos = async () => {
      try {
        // Llamada corregida sin argumento
        const firebasePhotos = await firebaseInstance.obtenerFotosDeFirebase();
        const filteredPhotos = firebasePhotos.filter((_: any, index: number) => !deletedIndexes.includes(index));
        setCapturedPhotos(filteredPhotos);
      } catch (error) {
        console.error('Error al cargar fotos desde Firebase:', error);
        alert('Error al cargar fotos desde Firebase.');
      }
    };

    loadFirebasePhotos();
    startCamera();

    return () => {
      stopCamera();
    };
  }, [deletedIndexes]);

  useEffect(() => {
    const unlisten = history.listen(() => {
      stopCamera();
    });

    return () => {
      unlisten();
    };
  }, [history]);

  const startCamera = useCallback(async () => {
    if ('mediaDevices' in navigator && navigator.mediaDevices.getUserMedia) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          (videoRef.current as HTMLVideoElement).srcObject = stream;
        }
      } catch (error) {
        console.error('Error accessing the camera:', error);
        alert('No se pudo acceder a la cámara. Asegúrate de que tu navegador tiene permisos para acceder a la cámara.');
      }
    } else {
      console.error('La API de getUserMedia no es compatible con este navegador.');
      alert('Tu navegador no soporta la API de cámara o el acceso está restringido.');
    }
  }, []);

  const stopCamera = useCallback(() => {
    const stream = videoRef.current?.srcObject;
    if (stream) {
      const tracks = (stream as MediaStream).getTracks();
      tracks.forEach((track) => track.stop());
      if (videoRef.current) {
        (videoRef.current as HTMLVideoElement).srcObject = null;
      }
    }
  }, []);

  const capturePhoto = useCallback(() => {
    const canvas = document.createElement('canvas');
    const video = videoRef.current as HTMLVideoElement;

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
  }, [videoRef]);

  const confirmPhoto = useCallback(async (imageData: string) => {
    if (imageData) {
      const firebaseInstance = Firebase.getInstance();

      try {
        await firebaseInstance.guardarFotoEnFirebase(imageData);
        // Llamada corregida sin argumento
        const updatedPhotos = await firebaseInstance.obtenerFotosDeFirebase();
        setCapturedPhotos(updatedPhotos);
        setPhoto('');
      } catch (error) {
        console.error('Error al guardar la foto en Firebase:', error);
        alert('No se pudo guardar la foto. Inténtalo de nuevo.');
      }
    }
  }, []);

  const deletePhoto = useCallback(async (index: number) => {
    const firebaseInstance = Firebase.getInstance();

    try {
      const url = capturedPhotos[index];
      const nombreArchivo = obtenerNombreArchivoDesdeURL(url);

      await firebaseInstance.eliminarFotoEnFirebase(nombreArchivo);
      // Llamada corregida sin argumento
      const updatedPhotos = await firebaseInstance.obtenerFotosDeFirebase();
      setCapturedPhotos(updatedPhotos);

      setDeletedIndexes((prevIndexes) => [...prevIndexes, index]);
    } catch (error) {
      console.error('Error al eliminar la foto en Firebase:', error);
      alert('No se pudo eliminar la foto. Inténtalo de nuevo.');
    }
  }, [capturedPhotos]);

  const obtenerNombreArchivoDesdeURL = (url: string) => {
    const decodedUrl = decodeURIComponent(url);
    const ultimaBarraIndex = decodedUrl.lastIndexOf('/');
    const ultimoSignoInterrogacionIndex = decodedUrl.lastIndexOf('?');
    const nombreArchivoConExtension = decodedUrl.substring(ultimaBarraIndex + 1, ultimoSignoInterrogacionIndex !== -1 ? ultimoSignoInterrogacionIndex : undefined);
    return nombreArchivoConExtension;
  };

  return (
    <IonPage>
      <IonHeader className='custom-header'>
        <IonToolbar>
          <IonTitle>Ingeniería Automotriz</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="container">
          <Link to="/forms" className="btn-back">
            <IonIcon className="icon" icon={chevronBack}></IonIcon>
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
  return localStorage.getItem('idDictamen') || '';
};
