import {updatePage} from "../../api/Api";
import MarkdownText from "../hooks/MarkdownText";
import {useParams} from "react-router-dom";

function Edit() {
    const {text, setText} = MarkdownText()
    const pageId = useParams()
    return (
        <>
            <textarea spellCheck={false} className="text-field" value={text} onChange={(e) => {
                setText(e.target.value)
                if (pageId) {
                    updatePage(null, e.target.value, pageId.toString());
                }
            }}></textarea>
        </>
    )
}

export default Edit;