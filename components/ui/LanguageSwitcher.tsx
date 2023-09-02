"use client";
import "./language-switcher.css";
import { SyntheticEvent, useState } from "react";
import Image from "next/image";

const menu: string[] = ["it", "de", "fr", "pl", "es", "en"];

interface LanguageSwitcherState {
  active: string | undefined;
  show: boolean;
}

export default function LanguageSwitcher(): React.ReactElement {
  const [state, setState] = useState<LanguageSwitcherState>({
    active: "it",
    show: false,
  });

  const filteredLanguages: string[] = menu.filter(
    (item: string) => item !== state.active
  );

  function toggleSwitcher() {
    setState((prevState) => ({
      ...state,
      show: !prevState.show,
    }));
  }

  function mapLanguages(item: string, index: number) {
    return (
      <li
        onClick={switchLanguage}
        data-language={item}
        key={index + Math.random()}
        className="single"
      >
        <Image
          alt="logo"
          width={25}
          height={25}
          src={`/images/languages/${item}-flag.png`}
        />
        oceansapart {item}
      </li>
    );
  }

  function switchLanguage(e: SyntheticEvent) {
    const { attributes }: Element = e.currentTarget;

    setState({
      show: false,
      active: attributes.getNamedItem("data-language")?.value,
    });
  }

  return (
    <nav id="language-switcher">
      <ul>
        <li onClick={toggleSwitcher}>
          <Image
            alt="logo"
            width={25}
            height={25}
            src={`/images/languages/${state.active}-flag.png`}
          />{" "}
          oceansapart {state.active}
        </li>
        {!!state.show && filteredLanguages.map(mapLanguages)}
      </ul>
    </nav>
  );
}
