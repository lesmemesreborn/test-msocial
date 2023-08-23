import React, { useState } from "react";
import "./Submit.scss";
import {Button} from "../../../shared/ui/Button";
import {LastChangeDate} from "../../../shared/ui/LastChangeDate";


export const Submit: React.FC = () => {
    const [date, setDate] = useState<Date>(new Date());

    const handleButtonClick = () => {
        setDate(new Date());
    };

    return (
        <div className="submit-container">
            <Button onClick={handleButtonClick} />
            <LastChangeDate date={date} />
        </div>
    );
};