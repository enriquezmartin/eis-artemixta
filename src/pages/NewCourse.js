import "./styles/AdminPanel.css";
import CourseForm from "../molecules/CourseForm";

const AdminPanel = () => {
    return (
        <div className='adminPanelContainer'>
            <p>Crear un curso</p>
            <CourseForm/>
        </div>
    )
};

export default AdminPanel