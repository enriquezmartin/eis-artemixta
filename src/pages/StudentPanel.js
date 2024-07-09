import "./styles/AdminPanel.css";
import Button from "../atoms/Button";
import {useNavigate} from 'react-router-dom';

const StudentPanel = () => {
    const navigate = useNavigate();
    const handleVerCursosClick = () => {
        navigate('/vercursos');
    }
    return (
        <div className='adminPanelContainer'>
            <p>Opciones de estudiante.</p>
            <Button text="Ver cursos" handleClick={handleVerCursosClick} />
        </div>
    )
};

export default StudentPanel