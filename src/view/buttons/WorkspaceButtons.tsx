import {useEffect, useState} from "react";
import {getPages} from "../api/Api";
import {selectedWorkspaceId} from "./DashboardButtons";

function WorkspaceButtons() {
    const [buttonData, setButtonData] = useState<[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getPages(selectedWorkspaceId);
            if (!data) {
                return;
            } else {
                setButtonData(data);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            {buttonData.map((data) => createButton(data))}
        </>
    );
}

const createButton = (data: string): JSX.Element => {
    const parsedData = JSON.parse(JSON.stringify(data));
    return (
        <button key={parsedData._id} id={parsedData._id}>
            {parsedData.name}
        </button>
    );
}

export default WorkspaceButtons;