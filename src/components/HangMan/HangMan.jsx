import Chance1 from "../../assets/Images/1.svg";
import Chance2 from "../../assets/Images/2.svg";
import Chance3 from "../../assets/Images/3.svg";
import Chance4 from "../../assets/Images/4.svg";
import Chance5 from "../../assets/Images/5.svg";
import Chance6 from "../../assets/Images/6.svg";
import Chance7 from "../../assets/Images/7.svg";
import Chance8 from "../../assets/Images/8.svg";
function HangMan({ step }) {
  const images = [Chance1, Chance2, Chance3, Chance4, Chance5, Chance6, Chance7, Chance8];

  return (
    <div className="w-[300px] h-[300px]">
      <img src={step >= images.length ? images[images.length - 1] : images[step]} alt="Hangman" />
    </div>
  );
}

export default HangMan