import {useState} from "react";

function MarkdownText() {
    const [text, setText] = useState("");
    return {text, setText};
}

export default MarkdownText;