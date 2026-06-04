import * as C from "./App.styles";
import logoImage from "./assets/memory game logo.png";
import RestartIcon from './assets/reset.png';
import { Button } from "./components/Button";
import { InfoItem } from "./components/InfoItem";

const App = () => {

  const resetAndCreateGrid = () => {

  }

  return (
    <C.Container>
      <C.Info>
        <C.LogoLink href="">
          <img src={logoImage} width='150' alt="" />
        </C.LogoLink>

        <C.InfoArea>
          <InfoItem label="Time" value="00:00"/>
          <InfoItem label="Moves" value="0"/>
        </C.InfoArea>
        <Button icon={RestartIcon} label="Restart" onClick={resetAndCreateGrid}/>
      </C.Info>
      <C.GridArea>...</C.GridArea>
    </C.Container>
  );
};

export default App;
