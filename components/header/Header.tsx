import "./header.css";

import MainMenu from "./MainMenu";
import TopMenu from "./TopMenu";
import Container from "../layout/Container";

export default function Header(): React.ReactElement {
  return (
    <header id="main-header" data-show="false">
      <TopMenu />
      <Container>
        <MainMenu />
      </Container>
    </header>
  );
}
