import React, { useEffect, useState } from "react";
import "../css/landing.css";
import { useNavigate, Link } from "react-router-dom";
import logo from "../image/logo.jpg";
import heroImg from "../image/hero-img.png";
function Landing() {
  const navigate = useNavigate();
  return (
    <div>
      <header className="header">
        <nav className="nav">
          <img src={logo} alt="Bankist logo" className="nav__logo" id="logo" />
          <ul className="nav__links">
            <li className="nav__item">
              <Link className="nav__link" href="#section--1">
                Features
              </Link>
            </li>
            <li className="nav__item">
              <Link className="nav__link" href="#section--2">
                Operations
              </Link>
            </li>
            <li className="nav__item">
              <Link
                className="nav__link nav__link--btn btn--show-modal"
                to="/signup"
              >
                Sign Up
              </Link>
            </li>
          </ul>
        </nav>

        <div className="header__title">
          <h1>
            <span className="highlight">Banking </span>
            meets
            <br />
            <span className="highlight">Minimalist </span>
          </h1>
          <h4>A simpler banking experience for a simpler life.</h4>
          <button
            className="btn--text btn--scroll-to"
            onClick={() => navigate("/login")}
          >
            Learn more
          </button>
          <img
            src={heroImg}
            className="header__img"
            alt="Minimalist bank items"
          />
        </div>
      </header>

      <section className="section" id="section--1">
        <div className="section__title">
          <h2 className="section__description">Features</h2>
          <h3 className="section__header">
            Everything you need in a modern bank and more.
          </h3>
        </div>

        <div className="features">
          <img
            src="image/digital-lazy.jpg"
            data-src="image/digital.jpg"
            alt="Computer"
            className="features__img lazy-img"
          />
          <div className="features__feature">
            <div className="features__icon">
              {/* <svg>
              <use xlink:href="image/icons.svg#icon-monitor"></use>
            </svg> */}
            </div>
            <h5 className="features__header">100% digital bank</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              alias sint quos? Accusantium a fugiat porro reiciendis saepe
              quibusdam debitis ducimus.
            </p>
          </div>

          <div className="features__feature">
            <div className="features__icon">
              {/* <svg>
              <use xlink:href="image/icons.svg#icon-trending-up"></use>
            </svg> */}
            </div>
            <h5 className="features__header">Watch your money grow</h5>
            <p>
              Nesciunt quos autem dolorum voluptates cum dolores dicta fuga
              inventore ab? Nulla incidunt eius numquam sequi iste pariatur
              quibusdam!
            </p>
          </div>
          <img
            src="image/grow-lazy.jpg"
            data-src="image/grow.jpg"
            alt="Plant"
            className="features__img lazy-img"
          />

          <img
            src="imagecard-lazy.jpg"
            data-src="image/card.jpg"
            alt="Credit card"
            className="features__img lazy-img"
          />
          <div className="features__feature">
            <div className="features__icon">
              {/* <svg>
              <use xlink:href="image/icons.svg#icon-credit-card"></use>
            </svg> */}
            </div>
            <h5 className="features__header">Free debit card included</h5>
            <p>
              Quasi, fugit in cumque cupiditate reprehenderit debitis animi enim
              eveniet consequatur odit quam quos possimus assumenda dicta fuga
              inventore ab.
            </p>
          </div>
        </div>
      </section>

      <section className="section" id="section--2">
        <div className="section__title">
          <h2 className="section__description">Operations</h2>
          <h3 className="section__header">
            Everything as simple as possible, but no simpler.
          </h3>
        </div>

        <div className="operations">
          <div className="operations__tab-container">
            <button
              className="btn operations__tab operations__tab--1 operations__tab--active"
              data-tab="1"
            >
              <span>01</span>Instant Transfers
            </button>
            <button
              className="btn operations__tab operations__tab--2"
              data-tab="2"
            >
              <span>02</span>Instant Loans
            </button>
            <button
              className="btn operations__tab operations__tab--3"
              data-tab="3"
            >
              <span>03</span>Instant Closing
            </button>
          </div>
          <div className="operations__content operations__content--1 operations__content--active">
            <div className="operations__icon operations__icon--1">
              {/* <svg>
              <use xlink:href="image/icons.svg#icon-upload"></use>
            </svg> */}
            </div>
            <h5 className="operations__header">
              Tranfser money to anyone, instantly! No fees, no BS.
            </h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          <div className="operations__content operations__content--2">
            <div className="operations__icon operations__icon--2">
              {/* <svg>
              <use xlink:href="image/icons.svg#icon-home"></use>
            </svg> */}
            </div>
            <h5 className="operations__header">
              Buy a home or make your dreams come true, with instant loans.
            </h5>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
          </div>
          <div className="operations__content operations__content--3">
            <div className="operations__icon operations__icon--3">
              {/* <svg>
              <use xlink:href="image/icons.svg#icon-user-x"></use>
            </svg> */}
            </div>
            <h5 className="operations__header">
              No longer need your account? No problem! Close it instantly.
            </h5>
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--sign-up">
        <div className="section__title">
          <h3 className="section__header">
            The best day to join Bankist was one year ago. The second best is
            today!
          </h3>
        </div>
        <button className="btn btn--show-modal">
          Open your free account today!
        </button>
      </section>

      <footer className="footer">
        <ul className="footer__nav">
          <li className="footer__item">
            <a className="footer__link" href="#">
              About
            </a>
          </li>
          <li className="footer__item">
            <a className="footer__link" href="#">
              Pricing
            </a>
          </li>
          <li className="footer__item">
            <a className="footer__link" href="#">
              Terms of Use
            </a>
          </li>
          <li className="footer__item">
            <a className="footer__link" href="#">
              Privacy Policy
            </a>
          </li>
          <li className="footer__item">
            <a className="footer__link" href="#">
              Careers
            </a>
          </li>
          <li className="footer__item">
            <a className="footer__link" href="#">
              Blog
            </a>
          </li>
          <li className="footer__item">
            <a className="footer__link" href="#">
              Contact Us
            </a>
          </li>
        </ul>
        <p className="footer__copyright">
          &copy; Copyright by 4 BIT . Use for learning or your portfolio. Don't
          use to teach. Don't claim as your own product.
        </p>
      </footer>

      <div className="modal hidden">
        <button className="btn--close-modal">&times;</button>
        <h2 className="modal__header">
          Open your bank account <br />
          in just <span className="highlight">5 minutes</span>
        </h2>
        <form className="modal__form">
          <label>First Name</label>
          <input type="text" />
          <label>Last Name</label>
          <input type="text" />
          <label>Email Address</label>
          <input type="email" />
          <button className="btn">Next step &rarr;</button>
        </form>
      </div>
      <div className="overlay hidden"></div>
    </div>
  );
}
export default Landing;
