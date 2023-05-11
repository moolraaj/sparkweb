import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faSquareWhatsapp
} from "@fortawesome/free-brands-svg-icons";
export default function Footer(props) {
  return (
    <>
      <div className="footer-first-outer" style={{ background: props.theme === 'light' ? '#f24b74' : '#1E7CC0' }}>
        <div className="footer-first-inner">
          <div className="footer-first-flex">
            <div className="footer-first-div footer-div">
              <img src="my-images/footer-logo.png" alt="img" />
            </div>
            <div className='footer-second-div footer-div'>
              <h2>contact us</h2>
              <ul className='footer-ul'>
                <li><a href="tel:9999999999">9999999999</a></li>
                <li><a href="mailto:name@email.com">test12@gmail.com</a>
                </li>
              </ul>
            </div>
            <div className="footer-third-div footer-div">
              <h2>follow us</h2>
              <div className='social-icons'>

                <ul className='footer-social-icons'>
                  <li><a href='#'><FontAwesomeIcon icon={faFacebook} /></a></li>
                  <li><a href='#'><FontAwesomeIcon icon={faInstagram} /></a></li>
                  <li><a href='#'><FontAwesomeIcon icon={faSquareWhatsapp} /></a></li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="second-footer-outer">
        <div className="second-footer-inner">
          <div className="second-footer-flex">
            <div className="footer-second-left">
              <p style={{ color: props.theme === 'light' ? '#202021' : '#fff' }}>Near Central Bank Tara Mata House kasumpti,172001,HP</p>
            </div>
            <div className="footer-second-right">
              <p style={{ color: props.theme === 'light' ? '#202021' : '#fff' }}>© 2022 <a href="#" style={{ color: props.theme === 'light' ? '#f24b74' : '#1E7CC0' }}>sparkweb solutions</a> and resources all rights reserved</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
