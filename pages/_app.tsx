import "../styles/globals.css";
import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <footer className={"footer"} style={{ marginTop: 0 }}>
        <FontAwesomeIcon width="22" icon={faLinkedin} />
        <FontAwesomeIcon width="22" icon={faInstagram} />
        <FontAwesomeIcon width="22" icon={faFacebook} />
        <a className={"a"}>Copyright © Docsly d.o.o</a>
      </footer>
    </>
  );
}

export default MyApp;
