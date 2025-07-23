"use client";
import { ReactTyped } from "react-typed";

function PromotText() {
  return (
    <div>
      <ReactTyped
        strings={[
          "Find Your Dream Smartwatch Here!",
          "Increase Your Productivity with a Smartwatch",
          "A Healthy Lifestyle Starts at Your Wrist",
          "Connect Yourself to the World Through a Smartwatch",
          "Unlimited Convenience with the Latest Smartwatch",
          "Special Smartwatch Discount, Limited Stock!",
          "Buy a Smartwatch Now, Get Attractive Bonuses!",
          "Quality Smartwatches at the Best Prices, Only Here!",
          "Exclusive Offers for Your First Smartwatch Purchase",
        ]}
        typeSpeed={40}
        backSpeed={50}
        loop
      />
    </div>
  );
}

export default PromotText;
