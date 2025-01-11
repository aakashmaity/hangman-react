// Presentation component (UI)
import Button from "../Button/Button"
import TextInput from "../TextInput/TextInput"

function TextInputForm({handleFormSubmit, handleInputChange,value, inputType='text', setInputType}) {
    return (
        <form className="flex items-end" onSubmit={handleFormSubmit}>
            <div className="mr-2 flex-1">
                <TextInput
                    label="Enter a word or phrase"
                    type={inputType}
                    value={value}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <Button
                    styleType="warning"
                    text={inputType === "password" ? "Show" : "Hide"}
                    onClickHandler={() => setInputType(inputType === "password" ? "text" : "password")}
                />
            </div>
            <div className="flex">
                <Button
                    text="OK"
                    buttonTypetype="submit"
                />
            </div>
        </form>
    )
}

export default TextInputForm