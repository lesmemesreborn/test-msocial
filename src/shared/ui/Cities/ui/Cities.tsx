import React from "react";
import {FieldArray, FieldArrayRenderProps} from "formik";
import "./Cities.scss";

interface CityData {
    city: string;
}

interface CitiesProps {
    itemName: string;
    sortedCitiesData: CityData[];
}

const Cities: React.FC<CitiesProps> = ({itemName, sortedCitiesData}) => {
    return (
        <div className="cities-container">
            <label className="cities-label" htmlFor="cities-input">
                Ваш город
            </label>
            <FieldArray
                name={itemName}
                render={(arrayHelpers: FieldArrayRenderProps) => (
                    <select
                        id="cities-input"
                        className="cities-input"
                        onChange={(e) => {
                            arrayHelpers.form.setFieldValue(itemName, e.target.value);
                        }}
                    >
                        {sortedCitiesData.map((item) => (
                            <option
                                key={item.city}
                                value={item.city}
                                className="cities-input__option"
                            >
                                {item.city}
                            </option>
                        ))}
                    </select>
                )}
            />
        </div>
    );
};

export default Cities;