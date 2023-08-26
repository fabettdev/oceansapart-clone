import "./header.css";

import MainMenu from "./MainMenu";
import TopMenu from "./TopMenu";

export default function Header(): React.ReactElement {
  return (
    <header>
      <TopMenu />
      <MainMenu />
    </header>
  );
}
