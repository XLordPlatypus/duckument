import {useState} from "react";

function IsReading() {
    const [isReading, setIsReading] = useState(false);
    return {isReading, setIsReading};
}

export default IsReading;