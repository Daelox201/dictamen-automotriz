
interface Props{
    id:String,
    name:String,
    date:String
}

import { useHistory } from 'react-router';
import './Estilos.css'



const Dictamen:React.FC<Props> = (props) =>{

    const history = useHistory();

    const handleBtn = ()=>{
        history.push(`/forms/${props.id}`)
    }

    return(
        <div onClick={handleBtn} className="dictamen-card">
            <figure>
                <img src="auto.jpg" alt="" />
            </figure>
            <p><strong>{props.name}</strong></p>
            <p>{props.date}</p>
        </div>
    )
}

export default Dictamen;