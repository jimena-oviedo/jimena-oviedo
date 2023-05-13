import { FiMail, FiPhone } from "react-icons/fi";

const TELEPHONE = "+49 159 03125878";
const EMAIL = "jimeoa@hotmail.com";

export function Footer() {
  return (
    <footer className="text-center pt-12 pb-24 md:pt-20 md:pb-36">
      <p className="font-sans text-lg lg:text-xl font-bold leading-loose pb-1">
        Imprint
      </p>
      <address className="font-serif not-italic text-gray-600 text-sm lg:text-base leading-normal">
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
