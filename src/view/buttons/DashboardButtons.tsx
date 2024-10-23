import { useEffect, useState } from 'react';
import { getWorkspaces } from '../api/Api';
import {useNavigate} from "react-router-dom";

function DashboardButtons() {
    const [buttonData, setButtonData] = useState<[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getWorkspaces();
            setButtonData(data);
        };

        fetchData();
    }, []);

    const navigate = useNavigate();
    const routeChange = (workspaceId: string) =>{
        const path = `/workspaces/${workspaceId}`;
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

export default DashboardButtons;
