import logo from '/public/MyLogo.png'; // Assicurati che il path sia corretto

export default function Footer() {
  return (
    <footer className="app-footer">
      <div className="footer-top">
      <span className="footer-dev">2025 | SalzilloDev</span>
        <img src={logo} alt="Tool Logo" className="footer-logo" />
      </div>

      <div className="footer-bottom">
        <p>
          I contenuti sono condivisi secondo le licenze 
          <em> Open Game License (OGL) 1.0a </em> e 
          <em> Fan Content Policy </em> di Wizards of the Coast.
        </p>
      </div>
    </footer>
  );
}