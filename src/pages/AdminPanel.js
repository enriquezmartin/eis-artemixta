import "./styles/AdminPanel.css";
import Button from "../atoms/Button";
import {useNavigate} from 'react-router-dom';

const AdminPanel = () => {
    const navigate = useNavigate();
    const handleNewCourseClick = () => {
        navigate('/nuevocurso');
    }
    const handleVerCursosClick = () => {
        navigate('/vercursos');
    }
    return (
        <div className='adminPanelContainer'>
            <p>Opciones de administrador.</p>
            <Button text="Nuevo curso" handleClick={handleNewCourseClick} />
            <Button text="Ver cursos" handleClick={handleVerCursosClick} />
        </div>
    )
};

export default AdminPanel