import React from "react";
import { countries } from "countries-list";

const CountryDropdown = () => {
    return (
        <select> {
            Object.keys(countries).map((code) => (
                <option key={code} value={code}>
                    {countries[code].name}
                </option>))
        }
        </select>);
};
export default CountryDropdown;