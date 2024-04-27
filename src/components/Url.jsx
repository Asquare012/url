import { useState } from "react";
import "../styles/Url.scss";

const Url = () => {
  const [input, setInput] = useState("");

  //   const fetchApi = () => {
  //     fetch(XwPzqOhW87lO6vD7iRfdZKpm4kswNYrFS4uQUuGubNLIC9RJQWIPtiF3v5y0);
  //   };

  return (
    <div className="Url">
      <div className="Search-Section">
        <div className="Url-Container">
          <input
            type="url"
            placeholder="  
  Shorten a link here..."
            onChange={(e) => setInput(e.target.value)}
          />
          <button>Shorten It!</button>
        </div>
      </div>
      <div className="Result-Section">
        <ul>
          <li>
            <div className="Inputed-Url">www.google.com</div>
            <div className="Shortened-Url">www.result.com</div>
            <div className="Button">
              <button>copy</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Url;
