import {TmsReadMe} from "./TmsReadMe";
import React from "react";

export const DocumentationGroup = ({ title, repositories}) => {
    return (
        <div className={"documentation-group"} id={`${title.toLowerCase()}-documentation`}>
            <h2>{title}</h2>
            {repositories.map((repository) => (
                <TmsReadMe repository={repository}/>
            ))}
        </div>

    );
}