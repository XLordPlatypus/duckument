import { updatePage } from "../../api/Api";
import { useParams } from "react-router-dom";

function Edit({ text, setText }) {
    const { pageId } = useParams();
    return (
        <>
            <textarea spellCheck={false} className="text-field" value={text} onChange={(e) => {
                setText(e.target.value);
                if (pageId) {
                    updatePage(null, e.target.value, pageId);
                }
            }}></textarea>
        </>
    );
}

export default Edit;
