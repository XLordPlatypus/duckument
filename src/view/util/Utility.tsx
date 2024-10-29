export const createButton = (data: string): JSX.Element => {
    const parsedData = JSON.parse(JSON.stringify(data));
    return (
        <button key={parsedData._id} id={parsedData._id}>
            {parsedData.name}
        </button>
    );
}

export const getInput = (message: string) => {
    const input = prompt(message)
    if (input) {
        return input;
    } else {
        return "";
    }
}