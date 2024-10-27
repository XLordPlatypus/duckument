import {useNavigate} from "react-router-dom";

function DuckButton() {
    const navigate = useNavigate();
    return (
        <>
            <button onClick={() => navigate('/')} className="nav-button" id="duckButton">
                <img src="/duck.png" height="45" width="45" alt="Duck Logo"/>
            </button>
        </>
    )
}

export default DuckButton;