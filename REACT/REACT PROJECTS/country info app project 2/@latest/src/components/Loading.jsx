import "./Loading.css";
import countryLogo from "../assets/open.png";

function Loading() {
  return (
    <div className="loading-page">
      <div className="loading-box">

        <img
          src={countryLogo}
          alt="Country Info"
          className="country-logo"
        />

        <p>
          Loading data<span className="dots"></span>
        </p>

      </div>
    </div>
  );
}

export default Loading;