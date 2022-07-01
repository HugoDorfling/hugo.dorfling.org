import "./styles.css";
import MyImage from "./assets/me.jpg";
import LOGO from "./assets/logo.svg";

export const App = () => {
  return (
    <div>
      <h1>Hugo Dorfling Portfolio</h1>
      <img
        src={MyImage}
        alt="Image of Hugo"
        width="300"
        height="300"
      />
      <img src={LOGO} alt="Logo Image" width="300" height="300" />
    </div>
  );
};
