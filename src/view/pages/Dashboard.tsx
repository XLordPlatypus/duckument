import {getWorkspaces} from "../api/Api.js"

function Dashboard() {
    // const workspaces = getWorkspaces();
    return (
        <>
            <main>
                {/*{workspaces.map((item: { _id: string; name: string; }) => (createButton(item._id, item.name)))}*/}
            </main>
        </>
    )
}

// TODO: Put this in a general file
const createButton = (id: string, name: string) => {
    return (
        <button id={id}>
            {name}
        </button>
    )
}

export default Dashboard;