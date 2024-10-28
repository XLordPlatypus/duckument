import {useEffect, useState} from "react";
import {getPage} from "../api/Api";
import {useParams} from "react-router-dom";
import EditButton from "../components/buttons/EditButton";
import Edit from "../components/markdown/Edit";
import Read from "../components/markdown/Read";

function Page() {
    const { pageId } = useParams()
    const [text, setText] = useState("");
    const [isReading, setIsReading] = useState(false);

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
                <EditButton isReading={isReading} setIsReading={setIsReading} />
                {Render()}
            </main>
        </>
    )

    function Render() {
        if (isReading) {
            return (
                <>
                    <Edit text={text} setText={setText}/>
                    <Read text={text}></Read>
                </>
            )
        } else {
            return (
                <>
                    <Read text={text}/>
                </>
            )
        }
    }
}

export default Page;