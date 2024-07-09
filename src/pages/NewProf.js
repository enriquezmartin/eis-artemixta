import "./styles/AdminPanel.css";
import ProfForm from "../molecules/ProfForm";

const NewProf = () => {
    return (
        <div className='adminPanelContainer'>
            <p>Agregar profesor:</p>
            <ProfForm/>
        </div>
    )
};

export default NewProf