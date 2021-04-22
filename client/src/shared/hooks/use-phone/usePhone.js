import { useState, useEffect } from "react";
// https://aircall.github.io/aircall-everywhere/
import AircallPhone from "aircall-everywhere";

export const usePhone = () => {
  const [phone, setPhone] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const airPhone = new AircallPhone({
      domToLoadPhone: "#phone"
    });
    if (isLoaded) {
      setPhone(airPhone);
    }
  }, [isLoaded]);

  const loadPhone = () => setIsLoaded(!isLoaded);

  const callNumber = number => {
    phone.isLoggedIn(isLoggedIn => {
      if (isLoggedIn) {
        phone.send("dial_number", { phone_number: number }, (success, data) => {
          console.log("success", success);
          console.log("data", data);
        });
      } else {
        alert("Phone is not loaded");
      }
    });
  };

  return { isLoaded, phone, loadPhone, callNumber };
};
