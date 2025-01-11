import TextInputFormContainer from "./components/TextInputForm/TextInputFormContainer"

const App = () => {
  return (
    <div>
      <h1 className="text-3xl font-semibold">Welcome to Hangman</h1>
      <TextInputFormContainer onSubmit={(value) => console.log("Submitted", value)}/>
    </div>
  )
}

export default App