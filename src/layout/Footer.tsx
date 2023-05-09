import { FiMail, FiPhone } from "react-icons/fi";

const TELEPHONE = "+4915903125878";
const EMAIL = "jimeoa@gmail.com";

export function Footer() {
  return (
    <footer className="text-center">
      <p className="font-sans text-lg leading-loose">Imprint</p>
      <address className="font-serif text-sm not-italic">
        Jimena Oviedo Aucejo
        <br />
        Wilhelmsaue 19
        <br />
        10715 Berlin
        <br />
        <FiPhone className="inline" />{" "}
        <a className="hover:underline" href={`tel:${TELEPHONE}`}>
          {TELEPHONE}
        </a>
        <br />
        <FiMail className="inline" />{" "}
        <a className="hover:underline" href={`mailto:${EMAIL}`}>
          {EMAIL}
        </a>
      </address>
    </footer>
  );
}
