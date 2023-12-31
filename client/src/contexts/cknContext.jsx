import axios from "axios";
import React, { createContext, useState, useEffect } from "react";

export const authContext = createContext();

export default function CknContext({ children }) {
  const [pendingOrder, setPendingOrder] = useState(false);
  const [successOrder, setSuccessOrder] = useState(false);
  const [newDate, setNewDate] = useState("");
  const [orderNumber, setOrderNumber] = useState(1);
  const [getOrder, setGetOrder] = useState(false);
  const [auth, setAuth] = useState(false);
  const [showOrder, setShowOrder] = useState(false);
  const [token, setToken] = useState("");
  // const [URL, setURL] = useState("http://localhost:5050/api");
  // const [URL, setURL] = useState("https://chai-ke-nashedi.onrender.com/api");
  const [URL, setURL] = useState("https://chaikenashedi-com.onrender.com/api");

  const [chai, setChai] = useState(false);
  const [chaiAmount, setChaiAmount] = useState(0);
  const [chaiQuantity, setChaiQuantity] = useState(0);
  const [coffee, setCoffee] = useState(false);
  const [coffeeAmount, setCoffeeAmount] = useState(0);
  const [coffeeQuantity, setCoffeeQuantity] = useState(0);
  const [cigarette, setCigarette] = useState(false);
  const [cigaretteAmount, setCigaretteAmount] = useState(0);
  const [cigaretteQuantity, setCigaretteQuantity] = useState(0);
  const [bottle, setBottle] = useState(false);
  const [bottleAmount, setBottleAmount] = useState(0);
  const [bottleQuantity, setBottleQuantity] = useState(0);
  const [drink, setDrink] = useState(false);
  const [drinkAmount, setDrinkAmount] = useState(0);
  const [drinkQuantity, setDrinkQuantity] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [paymentMode, setPaymentMode] = useState(true);
  const [orderNo, setOrderNo] = useState(0);




  const [editItem, setEditItem] = useState([]);
  // const loginActivity = () => {
  //   axios.get('http://localhost:8080/loginActivity');
  // }
  const dateSet = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    const formattedToday = dd + '/' + mm + '/' + yyyy;
    setNewDate(formattedToday);
  }
  const getOrderNumber = () => {
    axios.get(`${URL}/getCounterNumber`, {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("tokens")}`
      },
    }).then(resp => {
      const orderNum = parseInt(resp.data.data[0].sequenceNo) + 1;

      setOrderNumber(orderNum);
    })
  }
  useEffect(() => {
    dateSet();

  }, [0]);
  useEffect(() => {
    getOrderNumber();
    // loginActivity();
  }, [getOrder]);

  return (
    <authContext.Provider
      value={{
        pendingOrder, setPendingOrder,
        successOrder, setSuccessOrder,
        editItem, setEditItem,
        URL, setURL,
        newDate, setNewDate,
        orderNumber, setOrderNumber,
        getOrder, setGetOrder,
        auth, setAuth,
        token, setToken,
        showOrder, setShowOrder,
        chai, setChai,
        chaiAmount, setChaiAmount,
        chaiQuantity, setChaiQuantity,
        coffee, setCoffee,
        coffeeAmount, setCoffeeAmount,
        coffeeQuantity, setCoffeeQuantity,
        cigarette, setCigarette,
        cigaretteAmount, setCigaretteAmount,
        cigaretteQuantity, setCigaretteQuantity,
        bottle, setBottle,
        bottleAmount, setBottleAmount,
        bottleQuantity, setBottleQuantity,
        drink, setDrink,
        drinkAmount, setDrinkAmount,
        drinkQuantity, setDrinkQuantity,
        totalAmount, setTotalAmount,
        paymentMode, setPaymentMode,
        orderNo, setOrderNo


      }}
    >
      {children}
    </authContext.Provider>
  );
}
