import { useState, useEffect } from "react";
import "./Nav.css";

function Nav() {

    const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav_container ${show && "nav_black"}`}>
      <svg
        className="netflex"
        xmlns="http://www.w3.org/2000/svg"
        width="256"
        height="70"
        viewBox="0 0 256 69.186"
      >
        <path
          d="M35.2 64.726c-3.85.676-7.77.88-11.823 1.42L11.013 29.93V67.7c-3.85.405-7.364.946-11.013 1.486V0h10.27l14.053 39.255V0H35.2v64.726zm21.283-39.39l14.46-.203v10.8l-14.46.203v16.08l19.12-1.15v10.404l-29.93 2.365V0h29.93v10.8h-19.12v14.526zm59.32-14.526H104.59v49.727l-10.8.135V10.81H82.564V0h33.24v10.81zm17.567 13.783h14.797v10.8H133.37V59.93h-10.608V0h30.202v10.8H133.37v13.783zm37.16 25.877c6.15.135 12.364.608 18.377.946V62.09l-29.187-1.42V0h10.8v50.47zm27.5 12.364c3.446.203 7.094.406 10.607.81V0H198.03v62.835zM256 0l-13.716 32.904L256 69.186c-4.054-.54-8.108-1.284-12.162-1.96l-7.77-19.998-7.904 18.378c-3.92-.676-7.703-.88-11.62-1.42l13.918-31.688L217.894 0h11.62l7.094 18.175L244.176 0H256z"
          fill="#d81f26"
        />
      </svg>
      <svg
        className="smile"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M9.7 22.3c-2.7 0-5.1-1.3-6.6-3.5-1.6-2.4-1.7-5.6-.4-8.7.1-.3.3-.4.5-.4h18.5c.2 0 .3.1.4.2s.1.3 0 .5c-3.3 7.7-7.7 11.9-12.4 11.9zM3.5 10.7c-1.1 2.7-1 5.4.4 7.5 1.3 1.9 3.4 3.1 5.7 3.1 5.5 0 9.3-6.3 11.3-10.6H3.5zM6.9 5.4c-1.5 0-2.6-.8-2.6-1.8s1.2-1.8 2.6-1.8c1.5 0 2.6.8 2.6 1.8S8.3 5.4 6.9 5.4zm0-2.7c-.9 0-1.6.4-1.6.8s.7.8 1.6.8c.9 0 1.6-.4 1.6-.8s-.7-.8-1.6-.8zM16.4 5.4c-1.5 0-2.6-.8-2.6-1.8s1.2-1.8 2.6-1.8c1.5 0 2.6.8 2.6 1.8s-1.1 1.8-2.6 1.8zm0-2.7c-.9 0-1.6.4-1.6.8s.7.8 1.6.8c.9 0 1.6-.4 1.6-.8s-.7-.8-1.6-.8z" />
      </svg>
    </div>
  );
}

export default Nav;
