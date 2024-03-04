import { InputChangeEventDetail, IonButton, IonContent, IonHeader, IonIcon, IonInput, IonLabel, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { chevronBack, chevronForward } from "ionicons/icons";
import { FormEvent, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ContainerForm from "../../components/ContainerForm";
import { Firebase } from "../../firebase/Firebase";
import { MyContext } from "../../context/DictamenContext";


interface FormData {
    [key: string]: any;
}

const data = [
    {routeSection:"sistemasMotor", nameSection:"Sistemas Alternos de Motor", nameForm:"Sistema de Emision de Gases", nextSection:'Sistema de Enfriamento', prevSection:'Sistema de Admisión de Aire', nextRoute:'sistemaEnfriamento', prevRoute:'sistemaAdmisionAire'}
]

const inputs = [

    {
        name:"",
        inputs:[
            {label:'Multiple de Escape', nameElement:'multipleEscape'},
            {label:'Silenciadores', nameElement:'silenciadores'},
            {label:'Resonadores', nameElement:'resonadores'},
            {label:'Juntas Flexibles', nameElement:'juntasFlexibles'},
            {label:'Juntas de Escape', nameElement:'juntasEscape'},
            {label:'Caño o Tubo de Escape', nameElement:'cañoTuboEscape'},
            {label:'Fugas', nameElement:'fugas'},
            {label:'Soportes', nameElement:'soportes'},
            {label:'Sujeciones', nameElement:'sujeciones'}
        ]
    },
    {
        name:"Con Control Electronico",
        inputs:[
            {label:'Convertidor Catalitico', nameElement:'convertidorCatalitico'},
            {label:'Sensor O2', nameElement:'sensorO2'},
            {label:'Cableado y Conectores', nameElement:'cableadosConectores'},
            {label:'Conexiones E&E', nameElement:'conexionEE'}
        ]
    }    
]

const SistemaEmisionGases:React.FC = ()=>{

    const [dataForm, setDataForm] = useState({
        select_multipleEscape:"",
        select_silenciadores:"",
        select_resonadores:"",
        select_juntasFlexibles:"",
        select_juntasEscape:"",
        select_cañoTuboEscape:"",
        select_fugas:"",
        select_soportes:"",
        select_sujeciones:"",

        select_convertidorCatalitico:"",
        select_sensorO2:"",
        select_cableadosConectores:"",
        select_conexionEE:"",
        au_multipleEscape:0,
        or_multipleEscape:0,
        rt_multipleEscape:0,
        rc_multipleEscape:0,
        ev_multipleEscape:0,
        observaciones_multipleEscape:'',
        au_silenciadores:0,
        or_silenciadores:0,
        rt_silenciadores:0,
        rc_silenciadores:0,
        ev_silenciadores:0,
        observaciones_silenciadores:'',
        au_resonadores:0,
        or_resonadores:0,
        rt_resonadores:0,
        rc_resonadores:0,
        ev_resonadores:0,
        observaciones_resonadores:'',
        au_juntasFlexibles:0,
        or_juntasFlexibles:0,
        rt_juntasFlexibles:0,
        rc_juntasFlexibles:0,
        ev_juntasFlexibles:0,
        observaciones_juntasFlexibles:'',
        au_juntasEscape:0,
        or_juntasEscape:0,
        rt_juntasEscape:0,
        rc_juntasEscape:0,
        ev_juntasEscape:0,
        observaciones_juntasEscape:'',
        au_cañoTuboEscape:0,
        or_cañoTuboEscape:0,
        rt_cañoTuboEscape:0,
        rc_cañoTuboEscape:0,
        ev_cañoTuboEscape:0,
        observaciones_cañoTuboEscape:'',
        au_fugas:0,
        or_fugas:0,
        rt_fugas:0,
        rc_fugas:0,
        ev_fugas:0,
        observaciones_fugas:'',
        au_soportes:0,
        or_soportes:0,
        rt_soportes:0,
        rc_soportes:0,
        ev_soportes:0,
        observaciones_soportes:'',
        au_sujeciones:0,
        or_sujeciones:0,
        rt_sujeciones:0,
        rc_sujeciones:0,
        ev_sujeciones:0,
        observaciones_sujeciones:0,
        au_convertidorCatalitico:0,
        or_convertidorCatalitico:0,
        rt_convertidorCatalitico:0,
        rc_convertidorCatalitico:0,
        ev_convertidorCatalitico:0,
        observaciones_convertidorCatalitico:'',
        au_sensorO2:0,
        or_sensorO2:0,
        rt_sensorO2:0,
        rc_sensorO2:0,
        ev_sensorO2:0,
        observaciones_sensorO2:'',
        au_cableadosConectores:0,
        or_cableadosConectores:0,
        rt_cableadosConectores:0,
        rc_cableadosConectores:0,
        ev_cableadosConectores:0,
        observaciones_cableadosConectores:'',
        au_conexionEE:0,
        or_conexionEE:0,
        rt_conexionEE:0,
        rc_conexionEE:0,
        ev_conexionEE:0,
        observaciones_conexionEE:''
    });

    const [radioBtn, setRadioBtn] = useState({})

    const { dataDictamen } = useContext(MyContext);

    useEffect(()=>{
        if(dataDictamen && dataDictamen.sistemas_motor && dataDictamen.sistemas_motor.sistema_emison_gases){
            setDataForm({
                ...dataForm,
                ...dataDictamen.sistemas_motor.sistema_emison_gases
            })
        }
    },[])

    const updateDataForm = (e: CustomEvent<InputChangeEventDetail>) => {

        let elementsQuantity;

        if(e.target.localName  ==  "ion-select") return

        let prevParameter;
        let index;

        //Manejar solo los Radio Btns
        if(e.target.localName != "ion-input"){

            //Obtenemos el anterior radio btn seleccionado
            let prevSelectedBtn = radioBtn[e.target.name];
            let name = ((e.target.name).split('_'))[1];//Obtenemos el nombre del elemento a calificar

            //Estos es cuando pulsamos sobre el mismo radio btn para deseleccionar
            if(!e.target.value){
                //console.error("Deseleccionar")
                prevParameter = prevSelectedBtn.split('_')[1] //Obtenemos anterior parametro seleccionado AU, OR, RT o RC
                index = prevSelectedBtn.split('_')[2] // Obtenemos el numero de la sección en la que corresponde el anterior radio btn 0 o 1 o +
                elementsQuantity = (inputs[index].inputs).length //Obtenemos la cantidad de elementos evaluados esta sera usada para realizar el calculo matematico y mostrar los resultados de evaluación al final de cada sección 

                //console.log(prevSelectedBtn, '', prevParameter,' ',index,' ',elementsQuantity)

                //Verificamos se ha seleccionado radio btn de las secciones 1...n
                if(index > 0){
                    elementsQuantity = 0;
                    for (let i = 0; i <= index; i++) {//Esto es para sumar la cantidad del elementos hasta la sección actual
                        elementsQuantity += (inputs[i].inputs).length
                    }
                }

                let copyDataForm = {...dataForm}

                copyDataForm = {
                    ...copyDataForm,
                    [prevSelectedBtn]:copyDataForm[prevSelectedBtn] - 1 || 0,//Quitamos uno si se actualiza el input correspondiente de la sección "Sumatoria"
                    [`select_${name}`]:"",//Vaciamos esta atributo el cual quitara la selección del radio btn
                    [`res_${prevParameter}_${index}`]:parseInt(((copyDataForm[prevSelectedBtn] - 1 || 0) * 100)/elementsQuantity) //Actualizamos la sección de "Resultados Evaluación"
                }

                if(index == 0){
                    let sectionQuantity = inputs.length //Obtenemos la cantidad de secciones en casí todos los formularios seran entre 1 - 2 secciones
    
                    for (let i = 1; i < sectionQuantity; i++) {
                        elementsQuantity += (inputs[i].inputs).length
                        copyDataForm = {
                            ...copyDataForm,
                            [`sum_${prevParameter}_${i}`]:copyDataForm[prevSelectedBtn] || 0,//Aplicamos la sumatorioa
                            [`res_${prevParameter}_${i}`]:Math.round(((copyDataForm[prevSelectedBtn] || 0) * 100)/elementsQuantity),//Actualizamos los resultados de evaluación
                        }
                    }
                    setDataForm(copyDataForm); // Actualizar el estado    
                    
                    return
                }            

                setDataForm(copyDataForm);
                return
            }

            //console.error("Seleccionado")

            let nameRadioBtn = ((e.target.value).split('-'))[0]//Obtenemos el nombre del radio btn para actulizar la sumatoria y guardarlo como boton seleccionado
            let nameElement = ((e.target.value).split('-'))[1]//Obtenemos el nombre del elemento para guardar el elemento seleccionado

            let parameter = ((nameRadioBtn).split('_'))[1] //Obtenemos el parametro seleccionado AU, OR, RT o RC
            let nameEvaluated = ((nameElement).split('_'))[1]//Obtenemos el nombre del elemento que se esta evaluando

            index = (nameRadioBtn.split('_')[2]) // Obtenemos el numero de la sección en la que corresponde el anterior radio btn 0 o 1 o +
            elementsQuantity = (inputs[index].inputs).length //Obtenemos la cantidad de elementos evaluados esta sera usada para realizar el calculo matematico y mostrar los resultados de evaluación al final de cada sección 

            //console.log(nameRadioBtn,' ',nameElement,' ',parameter,' ',nameEvaluated,' ', index,' ',elementsQuantity)

            //Guardamos el boton seleccionado el cual contara como el previo boton seleccionado cuando se selecciono otro para evaluar el mismo elemento
            setRadioBtn({
                ...radioBtn,
                [e.target.name]:nameRadioBtn
            })

            //Verificamos si dataForm ya tiene un boton seleccionado para ese mismo elemento
            if(dataForm[prevSelectedBtn] > 0){
                //console.error("Hay un previo boton seleccionado")
                //console.log(prevSelectedBtn)
                //console.log(dataForm[prevSelectedBtn])

                prevParameter = prevSelectedBtn.split('_')[1]//Obtenemos el anterior parametro seleccionado los cuales puede ser AU, OR, RT o RC
                
                //Verificamos se ha seleccionado radio btn de las secciones 1...n
                if(index > 0){
                    elementsQuantity = 0;
                    for (let i = 0; i <= index; i++) {//Esto es para sumar la cantidad del elementos hasta la sección actual
                        elementsQuantity += (inputs[i].inputs).length
                    }
                }


                let copyDataForm = {...dataForm}

                if(dataForm[`sum_${parameter}_0`] && prevParameter == parameter){
                    //console.warn("Exist")
                    //console.log(prevParameter)
                    //console.log(dataForm[`sum_${parameter}_0`])

                    //Actualizamos Datos
                    copyDataForm = {
                        ...copyDataForm,
                        [`sum_${parameter}_${index}`]:copyDataForm[nameRadioBtn] + 1 || 1,//Aplicamos la sumatorioa                    [prevSelectedBtn]:copyDataForm[prevSelectedBtn] - 1 || 0,//Le quitamos uno al anterior
                        [nameElement]:e.target.value,
                        [`au_${nameEvaluated}`]:0,
                        [`or_${nameEvaluated}`]:0,
                        [`rt_${nameEvaluated}`]:0,
                        [`rc_${nameEvaluated}`]:0,
                        [`${parameter}_${nameEvaluated}`]:1,//Ahora establecemos uno al parametro (radio Btn) seleccionado para el elemento evaluado
                        [`res_${parameter}_${index}`]:Math.round(((copyDataForm[nameRadioBtn] + 1 || 1) * 100)/elementsQuantity),//Actualizamos los resultados de evaluación
                    }

                    setDataForm(copyDataForm)

                    return
                }


                //Actualizamos Datos
                copyDataForm = {
                    ...copyDataForm,
                    [nameRadioBtn]:copyDataForm[nameRadioBtn] + 1 || 1,//Aplicamos la sumatorioa
                    [prevSelectedBtn]:copyDataForm[prevSelectedBtn] - 1 || 0,//Le quitamos uno al anterior
                    [nameElement]:e.target.value,
                    [`au_${nameEvaluated}`]:0,
                    [`or_${nameEvaluated}`]:0,
                    [`rt_${nameEvaluated}`]:0,
                    [`rc_${nameEvaluated}`]:0,
                    [`${parameter}_${nameEvaluated}`]:1,//Ahora establecemos uno al parametro (radio Btn) seleccionado para el elemento evaluado
                    [`res_${parameter}_${index}`]:Math.round(((copyDataForm[nameRadioBtn] + 1 || 1) * 100)/elementsQuantity),//Actualizamos los resultados de evaluación
                    [`res_${prevParameter}_${index}`]:Math.round(((copyDataForm[prevSelectedBtn] - 1 || 0) * 100)/elementsQuantity),//Debemos disminuir al resultado de evaluación anterior para el parametro anterior
                }

                setDataForm(copyDataForm)
                return
            }

            //Este es el caso cuando aun no se ha seleccionado ningun radio btn para el elemento evaluado
            //console.log(parameter, ' ' ,nameRadioBtn, ' ', index,' ', elementsQuantity)

            //Verificamos se ha seleccionado radio btn de las secciones 1...n
            if(index > 0){
                elementsQuantity = 0;
                for (let i = 0; i <= index; i++) {//Esto es para sumar la cantidad del elementos hasta la sección actual
                    elementsQuantity += (inputs[i].inputs).length
                }
            }

            let copyDataForm = {...dataForm}
            copyDataForm = {
                ...copyDataForm,
                [`sum_${parameter}_${index}`]:copyDataForm[nameRadioBtn] + 1 || 1,//Aplicamos la sumatorioa
                [nameElement]:e.target.value,
                [`au_${nameEvaluated}`]:0,
                [`or_${nameEvaluated}`]:0,
                [`rt_${nameEvaluated}`]:0,
                [`rc_${nameEvaluated}`]:0,
                [`${parameter}_${nameEvaluated}`]:1,//Ahora establecemos uno al parametro (radio Btn) seleccionado para el elemento evaluado
                [`res_${parameter}_${index}`]:Math.round(((copyDataForm[nameRadioBtn] + 1 || 1) * 100)/elementsQuantity),//Actualizamos los resultados de evaluación
            }

            if(index == 0){

                let sectionQuantity = inputs.length //Obtenemos la cantidad de secciones en casí todos los formularios seran entre 1 - 2 secciones
                console.log(elementsQuantity)
                for (let i = 1; i < sectionQuantity; i++) {
                    elementsQuantity += (inputs[i].inputs).length
                    copyDataForm = {
                        ...copyDataForm,
                        [`sum_${parameter}_${i}`]:copyDataForm[[`sum_${parameter}_${i}`]] + 1 || 1,//Aplicamos la sumatorioa
                        [`res_${parameter}_${i}`]:Math.round(((copyDataForm[[`sum_${parameter}_${i}`]] + 1 || 1) * 100)/elementsQuantity),//Actualizamos los resultados de evaluación
                    }
                }
                setDataForm(copyDataForm); // Actualizar el estado

                
                return
            }            

            setDataForm(copyDataForm); // Actualizar el estado

        }else{

            //Este es para los input tipo texto que para estos formularios solo es para controlar los input para ingresar obsevaciones
            setDataForm({
                ...dataForm,
                [e.target.name]:e.target.value
            })
        }

    }
    
    const handleInputSelect = (e: CustomEvent<InputChangeEventDetail>)=>{

        console.clear()
        
        let indice = ((e.target.name).split('_'))[((e.target.name).split('_')).length - 1]
        let index = ((e.target.name).split('_'))[((e.target.name).split('_')).length - 2]
        let nameElement = ((e.target.name).split('_'))[((e.target.name).split('_')).length - 3]

        let ev = []
        let suma = 0

        let elementsQuantity = (inputs[index].inputs).length //Obtenemos la cantidad de elementos evaluados esta sera usada para realizar el calculo matematico y mostrar los resultados de evaluación al final de cada sección 

        if(!dataForm[`ev_${index}`]){
            setDataForm({
                ...dataForm,
                [`ev_${index}`]:[e.target.value],
            })

            
            ev[indice] = e.target.value
        }else{
            ev.push(...dataForm[`ev_${index}`])
            ev[indice] = e.target.value
            setDataForm({
                ...dataForm,
                [`ev_${index}`]:ev,
            })
        }

        for (let i = 0; i < ev.length; i++) {
            if(!ev[i]){
                ev[i] = "0"
            }
        }
        
        ev.map(el=>{
            suma += (parseInt(el) || 0)
        })

        if(index > 0){
            elementsQuantity = 0;
            for (let i = 0; i <= index; i++) {//Esto es para sumar la cantidad del elementos hasta la sección actual
                elementsQuantity += (inputs[i].inputs).length
            }
        }

        if(dataForm[`sum_ev_0`] && index == 1){
            console.warn('Exist')

            suma += dataForm[`sum_ev_0`]
            let copyDataForm = {...dataForm}

            console.log(elementsQuantity * 4)

            copyDataForm={
                ...copyDataForm,
                [`ev_${index}`]:ev,
                [`ev_${nameElement}`]:e.target.value,
                [`sum_ev_${index}`]:suma,
                [`res_ev_${index}`]:Math.round((suma * 100)/(elementsQuantity * 4)) //Actualizamos la sección de "Resultados Evaluación"
            }

            setDataForm(copyDataForm)

            return
        }

        let copyDataForm = {...dataForm}

        copyDataForm={
            ...copyDataForm,
            [`ev_${index}`]:ev,
            [`ev_${nameElement}`]:e.target.value,
            [`sum_ev_${index}`]:suma,
            [`res_ev_${index}`]:Math.round((suma * 100)/(elementsQuantity * 4)) //Actualizamos la sección de "Resultados Evaluación"
        }

        if(index == 0){

            let sectionQuantity = inputs.length //Obtenemos la cantidad de secciones en casí todos los formularios seran entre 1 - 2 secciones

            for (let i = 1; i < sectionQuantity; i++) {
                elementsQuantity += (inputs[i].inputs).length
                console.log(suma)
                copyDataForm={
                    ...copyDataForm,
                    [`ev_${nameElement}`]:e.target.value,
                    [`sum_ev_${i}`]:suma,
                    [`res_ev_${i}`]:Math.round((suma * 100)/(elementsQuantity * 4)) //Actualizamos la sección de "Resultados Evaluación"
                }

            }
            setDataForm(copyDataForm); // Actualizar el estado    
            
            return
        }         
        
        setDataForm(copyDataForm); // Actualizar el estado 


    }

    const handleForm = (e: FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        const firebaseInstance = Firebase.getInstance()
        firebaseInstance.setData(dataForm)
        firebaseInstance.guardarSistemaEmisionGases()
    }

    return(
        <ContainerForm data={data} handleForm={handleForm} inputs={inputs} dataForm={dataForm} handleInput={updateDataForm} handleInputSelect={handleInputSelect}/>
    )
}

export default SistemaEmisionGases;
export type { FormData };