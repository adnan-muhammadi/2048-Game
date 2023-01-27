import React from "react";
import ReactDOM from "react-dom/client";
import BoardView from "./components/Board";
import "./main.scss";
import "./styles.scss";

const App = () => {
  return <BoardView />;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <h1>2048 Made by <a href="https://theadnan.vercel.app">Adnan</a>😋</h1>
    <App />
    <footer>
      <div className="footer">
        You can follow me on...<br/>
        <span className="spans"><span className="imgs"><img src="https://www.iconpacks.net/icons/2/free-linkedin-logo-icon-2430-thumb.png" width={30} alt="linkedin-icon"/></span>
        <a href="https://linkedin.com/in/theadnan">LinkedIn</a></span>
        <span className="spans"><span className="imgs"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png" width={25} alt="facebook-icon"/></span>
        <a href="https://facebook.com/adnan.joiya.muhammadi">Facebook</a></span>
        <span className="spans"><span className="imgs"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png" width={25} alt="facebook-icon"/></span>
        <a href="https://instagram.com/adnan.muhammadi">Instagram</a></span>
      </div>
    </footer>
  </>
);
