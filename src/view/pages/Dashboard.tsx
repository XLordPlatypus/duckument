import {getWorkspaces} from "../api/Api"

function Dashboard() {
    getWorkspaces();
    return (
        <>
            <main>

            </main>
        </>
    )
}

/*
// TODO: Put this in a general file
const createButton = (id: string, name: string) => {
    return (
        <button id={id}>
            {name}
        </button>
    )
}
*/
export default Dashboard;