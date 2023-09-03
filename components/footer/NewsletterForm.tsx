"use client";
import "./newsletter-form.css";

// Components
import Container from "../layout/Container";
import Button from "../ui/Button";
import Section from "../layout/Section";

export default function NewsletterForm(): React.ReactElement {
  return (
    <Section id="newsletter-form" className="section bottom lg">
      <Container small>
        <header>
          <div className="title">Iscriviti alla Newsletter</div>
          <p className="subtitle">
            Il seguente form è a solo scopo illustrativo. Nessun dato viene
            raccolto e/o inviato.
          </p>
        </header>
        <form>
          <div className="name">
            <label htmlFor="name">Nome</label>
            <input type="text" id="name"></input>
          </div>
          <div className="email">
            <label htmlFor="email">E-mail</label>
            <input type="text" id="email"></input>
          </div>
          <div className="surprise">
            <label htmlFor="surprise">
              Vuoi ricevere una sorpresa per il tuo compleanno?
            </label>
            <input type="text" id="surprise" placeholder="DD.MM"></input>
          </div>
          <div className="privacy">
            <input id="privacy" type="checkbox"></input>
            <label id="privacy" htmlFor="privacy">
              Ho letto l&lsquo;informativa sulla privacy.
            </label>
          </div>
          <Button label="Iscriviti" className="newsletter" />
        </form>
        <p className="warning">
          Il seguente form è a solo scopo illustrativo. Nessun dato viene
          raccolto e/o inviato.
        </p>
      </Container>
    </Section>
  );
}
