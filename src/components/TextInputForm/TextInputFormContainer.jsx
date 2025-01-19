// Container component (Logical part only)

import { useState } from "react";
import TextInputForm from "./TextInputForm";

function TextInputFormContainer({ onSubmit }) {
    const [value, setValue] = useState("");
    const [inputType, setInputType] = useState("password");

    function handleFormSubmit(e) {
        e.preventDefault()
        console.log("Form submitted", value)
        onSubmit?.(value);  //if onSubmit is defined, call it with the value
        setValue("");
    }
    function handleInputChange(e) {
        setValue(e.target.value)
    }

    // Calling the Presentation component
    return (

        <TextInputForm
            handleFormSubmit={handleFormSubmit}
            handleInputChange={handleInputChange}
            value={value}
            inputType={inputType}
            setInputType={setInputType}
        />
  )
}

export default TextInputFormContainer