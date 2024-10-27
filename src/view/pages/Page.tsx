import {useEffect} from "react";
import {getPage} from "../api/Api";
import {useParams} from "react-router-dom";
import EditButton from "../components/buttons/EditButton";
import IsReading from "../components/hooks/IsReading";
import MarkdownText from "../components/hooks/MarkdownText";
import Edit from "../components/markdown/Edit";
import Read from "../components/markdown/Read";

function Page() {
    const { pageId } = useParams()
    const {setText} = MarkdownText();
    const {isReading} = IsReading()

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
                <EditButton/>
                {Render()}
            </main>
        </>
    )

    function Render() {
        if (isReading) {
            return (
                <>
                    <Read/>
                    <Edit/>
                </>
            )
        } else {
            return (
                <>
                    <Read/>
                </>
            )
        }
    }
}

export default Page;