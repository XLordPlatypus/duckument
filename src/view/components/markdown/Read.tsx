import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

function Read({text}) {
    return (
        <>
            <div className={"text-field"}>
                <Markdown className="markdown-text" remarkPlugins={[remarkGfm]}>
                    {text}
                </Markdown>
            </div>
        </>
    )
}

export default Read;