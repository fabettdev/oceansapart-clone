import "./header.css";

import MainMenu from "./MainMenu";
import TopMenu from "./TopMenu";

export default function Header(): React.ReactElement {
  return (
    <header id="main-header" data-show="false">
      <TopMenu />
      <MainMenu />
    </header>
  );
}
