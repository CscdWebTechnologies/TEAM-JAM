import React from "react";
/*import footer from "./footer.css";*/
import  './footer.css';
import logo from "../Assets/logo.svg"

import {
  languages,
  company,
  learn,
  support,
  individuals,
  businesses,
  developers
} from "./footerItems";

const newDate = new Date();
const year = newDate.getFullYear();

function Footer() {
  return (
    <section className="footer__section">
    <div className="footer">
      <div className="foot_1">
        <img src={logo} alt="logo" className="w-28" />
        <form>
          <select>
              {languages.map((language) => (
                <option>{language}</option>
            ))}

          </select>
        </form>
        <p>©{year} Coinbase</p>
        <span>
          <a href="https://blog.coinbase.com/?gi=f942c79092">Blog </a>
          <a href="https://twitter.com/">•Twitter </a>
          <a href="https://web.facebook.com/">•Facebook</a>
        </span>
      </div>

      <div className="foot_2">
        <h5>Company</h5>
        {company.map((_item) => (
          <p>{_item}</p>
        ))}

        <h5 className="learn">Learn</h5>
        {learn.map((_item) => (
          <p>{_item}</p>
        ))}
      </div>

      <div className="foot_3">
        <h4>Individuals</h4>
        {individuals.map((_item) => (
          <p>{_item}</p>
        ))}

        <h4 className="business">Business</h4>
        {businesses.map((_item) => (
          <p>{_item}</p>
        ))}

        <h4 className="developers">Developers</h4>
        {developers.map((_item) => (
          <p>{_item}</p>
        ))}
      </div>

      <div className="foot_4">
        <h4>Support</h4>
        {support.map((_item) => (
          <p>{_item}</p>
        ))}
      </div>
    </div>
    </section>
  );
}

export default Footer;
