import Markdown from "react-markdown";

function Read({text}) {
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