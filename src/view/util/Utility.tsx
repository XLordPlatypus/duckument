export const createButton = (data: string): JSX.Element => {
    const parsedData = JSON.parse(JSON.stringify(data));
    return (
        <button key={parsedData._id} id={parsedData._id}>
            {parsedData.name}
        </button>
    );
}

export const getInput = () => {
    const input = prompt("Enter name:")
    if (input) {
        return input;
    } else {
        return "NewElement";
    }
}