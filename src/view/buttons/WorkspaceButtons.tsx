import {useEffect, useState} from "react";
import {getPages} from "../api/Api";
import {useNavigate, useParams} from "react-router-dom";

function WorkspaceButtons() {
    const [buttonData, setButtonData] = useState<[]>([]);
    const { workspaceId } = useParams()

    useEffect(() => {
        const fetchData = async () => {
            const data = await getPages(workspaceId);
            if (!data) {
                return;
            } else {
                setButtonData(data);
            }
        };

        fetchData();
    }, [workspaceId]);

    const navigate = useNavigate();
    const routeChange = (workspaceId: string) =>{
        const path = `/pages/${workspaceId}`;
        navigate(path);
    }

    const createButton = (data: string): JSX.Element => {
        const parsedData = JSON.parse(JSON.stringify(data));
        return (
            <button key={parsedData._id} id={parsedData._id} onClick={() => {
                routeChange(parsedData._id);
            }}>
                {parsedData.name}
            </button>
        );
    }

    return (
        <>
            {buttonData.map((data) => createButton(data))}
        </>
    );
}

export default WorkspaceButtons;