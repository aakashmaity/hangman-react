import { Link, useNavigate } from "react-router-dom"
import TextInputFormContainer from "../../components/TextInputForm/TextInputFormContainer"

function StartGame() {
  const navigate = useNavigate();

  function handleSubmit(value) {
    console.log(value);
    navigate('/play',{ state: {wordSelected: value}})
  }

  return (
    <div>
        <h1>StartGame</h1>
        <TextInputFormContainer onSubmit={handleSubmit}/>
    </div>
  )
}

export default StartGame