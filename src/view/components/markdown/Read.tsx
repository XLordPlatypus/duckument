import Markdown from "react-markdown";
import MarkdownText from "../hooks/MarkdownText";

function Read() {
    const {text} = MarkdownText();
    return (
        <>
            <div className={"text-field"}>
                <Markdown>
                    {text}
                </Markdown>
            </div>
        </>
    )
}

export default Read;