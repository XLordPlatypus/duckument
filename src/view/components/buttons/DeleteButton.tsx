import {useNavigate, useParams} from "react-router-dom";
import {deletePage, deleteWorkspace, getWorkspace} from "../../api/Api";
import {getInput} from "../../util/Utility";
import workspace from "../../pages/Workspace";

export default function DeleteButton() {
    const {pageId} = useParams();
    const {workspaceId} = useParams();
    const navigate = useNavigate();

    async function deleteElement() {
        try {
            if (window.location.href.match('.*pages.*') && pageId) {
                if (getInput("Enter \"delete\" to remove the page") === "delete") {
                    deletePage(pageId)
                    navigate(-1)
                }
            } else if (window.location.href.match('.*workspaces.*') && workspaceId) {
                if (getInput("Enter \"delete\" to remove the workspace") === "delete") {
                    const workspaceToDelete = await getWorkspace(workspaceId);
                    workspaceToDelete.pageIds.forEach((element: string) => {
                        console.log(element);
                        deletePage(element);
                    })
                    deleteWorkspace(workspaceId)
                    navigate("/")
                }
            }
            window.location.reload();
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <>
            <button className="nav-button" onClick={deleteElement}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                     className="bi bi-trash-fill" viewBox="0 0 16 16">
                    <path
                        d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
                </svg>
            </button>
        </>
    )
}