import './styles.css';
import MyImage from './assets/me.jpg';
import LOGO from './assets/logo.svg';
import { Counter } from './counter';

export const App = () => {
  return (
    <div>
      <h1>Hugo Dorfling Portfolio</h1>
      <img src={MyImage} alt="Hugo" width="300" height="300" />
      <img src={LOGO} alt="Logo" width="300" height="300" />
      <Counter />
    </div>
  );
};
