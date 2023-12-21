import React from "react";
import mobileRechargeLogo from "../image/icons/mobile-recharge.png";
function Home() {
  return (
    <div>
      <div className="mobile-recharge">
        <img src={mobileRechargeLogo} alt="Recharge" className="service-icon" />
      </div>
    </div>
  );
}

export default Home;
