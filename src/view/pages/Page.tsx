import Markdown from "react-markdown";
import {useEffect, useState} from "react";
import {getPage, updatePage} from "../api/Api";
import {useParams} from "react-router-dom";

function Page() {
    const { pageId } = useParams()
    const [text, setText] = useState("");

    useEffect(() => {
        const getData = async () => {
            if (pageId) {
                const data = await getPage(pageId)
                setText(data.content)
            }
        }

        getData()
    }, [pageId])

    return (
        <>
            <main>
                {MarkdownEdit()}
                {MarkdownRendered()}
            </main>
        </>
    )


    function MarkdownRendered() {

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

    function MarkdownEdit() {
        return (
            <>
                <textarea spellCheck={false} className="text-field" value={text} onChange={(e) => {
                    setText(e.target.value)
                    updatePage(null, e.target.value, pageId);
                }}></textarea>
            </>
        )
    }
}

export default Page;