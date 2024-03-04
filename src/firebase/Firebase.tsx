import {db,storage} from "./Conexion";
import { ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";
import { addDoc, collection, doc, updateDoc, Timestamp, getDocs, getDoc, deleteDoc, documentId,arrayUnion, arrayRemove } from "firebase/firestore";

interface Data{
    [key: string]: any;
}

export class Firebase{

    private static instance: Firebase | null = null;
  private _funcion: Function;
  private _data: Data;

  private constructor(data: Data, event: Function) {
    this._data = data;
    this._funcion = event;
  }

  public static getInstance(): Firebase {
    if (!Firebase.instance) {
      Firebase.instance = new Firebase({}, () => {});
    }

    return Firebase.instance;
  }




    public setData(data:Data){
        this._data = data;
    }

    public getData(){
        return this._data
    }

    public setEvent(event:Function){
        return this._funcion
    }

    async guardarDatosSedeOficialHidalgoPagoAuto(){
        try {
            let idDictamen = localStorage.getItem('idDictamen');        
            if(idDictamen){
                let dictamenId = doc(db, "dictamenes", idDictamen);
                await updateDoc(dictamenId, {datos_sede_oficial_hidalgo_pago:{
                    sede:'Pachuca',
                    direccion:'Camino Real de la Plata No.100 Locales 153 al 156 Complejo Zona Plateada Pachuca de Soto Hidalgo'
                }})
            }else{
                const docRef = await addDoc(collection(db, 'dictamenes'),({datos_sede_oficial_hidalgo_pago:{
                    sede:'Pachuca',
                    direccion:'Camino Real de la Plata No.100 Locales 153 al 156 Complejo Zona Plateada Pachuca de Soto Hidalgo'
                }}));
                localStorage.setItem('idDictamen', docRef.id)
            }
        } catch (error) {
            console.log(error)
        }
    }

    async guardarDatosSedeOficialHidalgoPago(){
        try {
            let idDictamen = localStorage.getItem('idDictamen');            
            if(idDictamen){
                let dictamenId = doc(db, "dictamenes", idDictamen);
                await updateDoc(dictamenId, {datos_sede_oficial_hidalgo_pago:this._data})
            }else{
                const docRef = await addDoc(collection(db, 'dictamenes'),({datos_sede_oficial_hidalgo_pago:this._data}));
                localStorage.setItem('idDictamen', docRef.id)
            }
        } catch (error) {
            console.log(error)
        }
    }

    async guardarDatosVehiculo(){
        try {

            let idDictamen = localStorage.getItem('idDictamen');            
            if(idDictamen){
                let dictamenId = doc(db, "dictamenes", idDictamen);
                await updateDoc(dictamenId, {data_vehiculo:this._data})
            }else{
                const docRef = await addDoc(collection(db, 'dictamenes'),({data_vehiculo:this._data}));
                localStorage.setItem('idDictamen', docRef.id)
            }
            
        } catch (error) {
            console.log(error)
        }
    }

    async guardarDatosPropietario(){
        try {

            let idDictamen = localStorage.getItem('idDictamen');            
            if(idDictamen){
                let dictamenId = doc(db, "dictamenes", idDictamen);
                await updateDoc(dictamenId, {datos_propietario:this._data})
            }else{
                const docRef = await addDoc(collection(db, 'dictamenes'),({datos_propietario:this._data}));
                localStorage.setItem('idDictamen', docRef.id)
            }
            
        } catch (error) {
            console.log(error)
        }
    }

    async guardarDatosTramiteDictamen(){

        try {
            let idDictamen = localStorage.getItem('idDictamen');            
            if(idDictamen){
                let dictamenId = doc(db, "dictamenes", idDictamen);
                await updateDoc(dictamenId, {
                    datos_tramite_dictamen:{
                        ...this._data, 
                        Inicio_Tramite_Dictamen: Timestamp.fromDate(new Date(this._data.Inicio_Tramite_Dictamen)),
                        Elaboracion_Dictamen: Timestamp.fromDate(new Date(this._data.Elaboracion_Dictamen)),
                        Entrega_Dictamen: Timestamp.fromDate(new Date(this._data.Entrega_Dictamen))
                    }
                })
            }else{
                const docRef = await addDoc(collection(db, 'dictamenes'),({
                    datos_tramite_dictamen:{
                        ...this._data, 
                        Inicio_Tramite_Dictamen: Timestamp.fromDate(new Date(this._data.Inicio_Tramite_Dictamen)),
                        Elaboracion_Dictamen: Timestamp.fromDate(new Date(this._data.Elaboracion_Dictamen)),
                        Entrega_Dictamen: Timestamp.fromDate(new Date(this._data.Entrega_Dictamen))
                    }
                }));
                localStorage.setItem('idDictamen', docRef.id)
            }
        } catch (error) {
            console.log(error)
        }

    }

    // ...

    async guardarFotoEnFirebase(imageData) {
        try {
            console.log("ImageData:", imageData); // Agrega este console.log
            const blobData = dataURItoBlob(imageData); // Línea original
    
            const dictamenId = localStorage.getItem('idDictamen');
            if (dictamenId) {
                // Generar un nombre único para la imagen
                const imageName = `${Date.now()}_${Math.floor(Math.random() * 1000)}.png`;
    
                // Crear una referencia al almacenamiento de Firebase (reemplaza 'fotos' con tu ruta en Storage)
                const storageRef = ref(storage, `dictamenes/fotos/${dictamenId}/${imageName}`);
    
                // Subir la imagen a Firebase Storage
                await uploadBytes(storageRef, blobData); // Actualizado para usar blobData en lugar de imageData
    
                // Obtener la URL de la imagen almacenada
                const downloadURL = await getDownloadURL(storageRef);
    
                // Actualizar la base de datos con la URL de la imagen
                const dictamenDocRef = doc(db, "dictamenes", dictamenId);
                await updateDoc(dictamenDocRef, {
                    fotos: arrayUnion(downloadURL),  // Asumiendo que tienes un campo 'fotos' en tu documento dictamen
                });
    
                console.log("Foto guardada en Firebase exitosamente");
            } else {
                console.error("No hay un ID de dictamen válido.");
            }
        } catch (error) {
            console.error("Error al guardar la foto en Firebase:", error);
        }
    }
  
  async obtenerFotosDeFirebase() {
    try {
      const dictamenId = localStorage.getItem('idDictamen');
      if (dictamenId) {
        // Obtener la información del dictamen desde la base de datos
        const dictamenDocRef = doc(db, "dictamenes", dictamenId);
        const dictamenDocSnap = await getDoc(dictamenDocRef);
  
        if (dictamenDocSnap.exists()) {
          const dictamenData = dictamenDocSnap.data();
          return dictamenData.fotos || [];
        } else {
          console.log("No existe el dictamen con el ID especificado.");
          return [];
        }
      } else {
        console.error("No hay un ID de dictamen válido.");
        return [];
      }
    } catch (error) {
      console.error("Error al obtener las fotos desde Firebase:", error);
      return [];
    }
  }
  
  async eliminarFotoEnFirebase(photoURL) {
    try {
      const dictamenId = localStorage.getItem('idDictamen');
        console.log(dictamenId);

      if (dictamenId) {
        // Eliminar la foto de Firebase Storage (reemplaza 'fotos' con tu ruta en Storage)
        const storageRef = ref(storage, `dictamenes/fotos/${dictamenId}/${photoURL}`);
        console.log("URL");

        console.log(photoURL);

        console.log("Storage");

        console.log(storageRef);
        await deleteObject(storageRef);
  
        // Eliminar la URL de la foto de la base de datos
        const dictamenDocRef = doc(db, "dictamenes", dictamenId);
        console.log("doc");

        console.log(dictamenDocRef);
        await updateDoc(dictamenDocRef, {
          fotos: arrayRemove(photoURL),
        });
  
        console.log("Foto eliminada de Firebase exitosamente");
      } else {
        console.error("No hay un ID de dictamen válido.");
      }
    } catch (error) {
      console.error("Error al eliminar la foto desde Firebase:", error);
    }
  }
  
  
  // ...
  
  

    

    //CONTROL DE FORMULARIOS
    guardarSistemaCargaArranque(){
        this.updateDocument("sistemas_motor", {sistema_carga_arranque:this._data})
    }

    guardarSistemaAdmisionAire(){
        this.updateDocument("sistemas_motor", {sistema_admision_aire:this._data})
    }

    guardarSistemaEmisionGases(){
        this.updateDocument("sistemas_motor", {sistema_emison_gases:this._data})
    }

    guardarSistemaEnfriamento(){
        this.updateDocument("sistemas_motor", {sistema_enfriamento:this._data})
    }

    guardarSistemaEncendidoIgnicion(){
        this.updateDocument("sistemas_motor", {sistema_encendido_ignicion:this._data})
    }

    guardarSistemaInyeccionCombustible(){
        this.updateDocument("sistemas_motor", {sistema_inyeccion_combustible:this._data})
    }

    guardarSistemaEvaporativo(){
        this.updateDocument("sistemas_motor", {sistema_evaporativo:this._data})
    }

    guardarMotorJuntas(){
        this.updateDocument("generales_motor", {motores_juntas:this._data})
    }

    guardarMotorTapones(){
        this.updateDocument("generales_motor", {motores_tapones:this._data})
    }

    guardarMotorFiltros(){
        this.updateDocument("generales_motor", {motores_filtros:this._data})
    }

    guardarMotorTapasDepositos(){
        this.updateDocument("generales_motor", {motores_tapas_depositos:this._data})
    }

    guardarMotorSujeciones(){
        this.updateDocument("generales_motor", {motores_sujeciones:this._data})
    }

    guardarAutomotricesDireccion(){
        this.updateDocument("automotrices", {sitemas_automotrices_direccion:this._data})
    }

    guardarAutomotricesSuspension(){
        this.updateDocument("automotrices", {sitemas_automotrices_suspension:this._data})
    }

    guardarAutomotricesChassis(){
        this.updateDocument("automotrices", {sitemas_automotrices_chassis:this._data})
    }

    guardarAutomotricesFrenos(){
        this.updateDocument("automotrices", {sitemas_automotrices_frenos:this._data})
    }

    guardarAutomotricesTrasmision(){
        this.updateDocument("automotrices", {sitemas_automotrices_trasmision:this._data})
    }


    //CARROCERÍA
    guardarCarroceriaPintura(){
        this.updateDocument("carroceria", {carroceria_pintura:this._data})
    }

    guardarCarroceriaLienzosColision(){
        this.updateDocument("carroceria", {carroceria_lienzos_partes_colision:this._data})
    }

    guardarCarroceriaCristalesVentanas(){
        this.updateDocument("carroceria", {carroceria_cristales_ventanas:this._data})
    }

    guardarCarroceriaCarrajeriasEnclaves(){
        this.updateDocument("carroceria", {carroceria_cerrajerias_enclaves:this._data})
    }
    
    guardarCarroceriaRuedas(){
        this.updateDocument("carroceria", {carroceria_ruedas:this._data})
    }

    guardarCarroceriaAccesorios(){
        this.updateDocument("carroceria", {carroceria_accesorios:this._data})
    }

    guardarCarroceriaMolduras(){
        this.updateDocument("carroceria", {carroceria_molduras:this._data})
    }

    guardarCarroceriaLuces(){
        this.updateDocument("carroceria", {carroceria_luces:this._data})
    }

    //INTERIORES
    guardarInterioresAsientos(){
        this.updateDocument("interiores", {interiores_asientos:this._data})
    }

    guardarInterioresTablero(){
        this.updateDocument("interiores", {interiores_tablero:this._data})
    }

    guardarInterioresPuertasLienzosFijos(){
        this.updateDocument("interiores", {interiores_puertas_lienzos_fijos:this._data})
    }

    guardarInterioresDomoTraseroCajuela(){
        this.updateDocument("interiores", {interiores_domo_trasero_cajuela:this._data})
    }

    guardarInterioresLucesInteriores(){
        this.updateDocument("interiores", {interiores_luces_interiores:this._data})
    }

    guardarInterioresTapiceriasAlfombrados(){
        this.updateDocument("interiores", {interiores_tapicerias_alfombrados:this._data})
    }
    //FIN DE CONTROL DE FORMULARIOS


    //Obtner todo los Dictamenes
    
    async getDocuments(coleccion:String){
        const querySnapshot = await getDocs(collection(db, `${coleccion}`));
        const documents = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        return documents;
    }

    async getDocument(id: string) {
        const docRef = doc(db, "dictamenes", `${id}`);
        const docSnap = await getDoc(docRef);
      
        if (docSnap.exists()) {
          const data = docSnap.data();
          return data;
        } else {
          console.log("No existe el documento con el ID especificado.");
          return null;
        }
      }

    async updateDocument(objeto:String ,data:Data){
        try {
            let idDictamen = localStorage.getItem('idDictamen');            
            if(idDictamen){
                //console.log(data)
                let dictamenId = doc(db, "dictamenes", idDictamen);

                //Obtenemos el contenido actual del documento
                const documentSnapshot = await getDoc(dictamenId)
                const currentData = documentSnapshot.data();//Accedemos a los datos
                if(!currentData) return

                console.log(currentData)
                //Creamos un nuevo objeto con los datos obtenidos del documento(currentData) más los nuevos datos(data)
                const newData = {
                    ...currentData,
                    [`${objeto}`]: {
                      ...currentData[`${objeto}`],
                      ...data
                    }
                 };

                 //Ahora llamo al metodo updateDoc para actualizar el documento conociendo su id
                await updateDoc(dictamenId, newData)
            }else{
                const docRef = await addDoc(collection(db, 'dictamenes'),(data));
                localStorage.setItem('idDictamen', docRef.id)
            }
        } catch (error) {
            console.error("Error to make the request, in Firebase.tsx Line 145", error)
        }
    }

    async deleteDocument(id:String){
        const docRef = doc(db, "dictamenes", `${id}`);
        return deleteDoc(docRef)        
    } 
    
}
// Función para convertir un data URI a Blob
function dataURItoBlob(dataURI) {
    // Dividir el data URI en tipo y datos
    const splitDataURI = dataURI.split(",");
    // Obtener el tipo de datos (ej. 'image/png')
    const type = splitDataURI[0].split(":")[1].split(";")[0];
    // Obtener los datos base64
    const byteString = atob(splitDataURI[1]);
    // Crear un ArrayBuffer
    const buffer = new ArrayBuffer(byteString.length);
    // Crear una vista de octetos
    const view = new Uint8Array(buffer);
    // Llenar el ArrayBuffer con los datos convertidos de base64
    for (let i = 0; i < byteString.length; i++) {
      view[i] = byteString.charCodeAt(i);
    }
    // Crear un Blob a partir del ArrayBuffer
    return new Blob([buffer], { type });
  }