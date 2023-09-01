import React from "react";
import {FieldArray, FieldArrayRenderProps} from "formik";

interface CityData {
    city: string;
}

interface CitiesProps {
    itemName: string;
    sortedCitiesData: CityData[];
    value: Record<string, unknown>;
}

const Cities: React.FC<CitiesProps> = ({itemName, sortedCitiesData}) => {
    return (
        <div className="form-input__container">
            <label className="form-input__label" htmlFor="cities-input">
                Ваш город
            </label>
            <FieldArray
                name={itemName}
                render={(arrayHelpers: FieldArrayRenderProps) => (
                    <select
                        id="cities-input"
                        className="form-input__field"
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