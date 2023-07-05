import React from "react";
import { authContext } from "../contexts/cknContext";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import { NavLink, useNavigate } from "react-router-dom";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { useSwipeable } from "react-swipeable";



function Current_Slip() {
  const history = useNavigate();
    
  const {
  
    editItem,setEditItem,
   
    orderNumber, setOrderNumber,
    chai, setChai,
    URL,
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
    totalAmount, setTotalAmount,
    paymentMode, setPaymentMode,
    orderNo, setOrderNo,
    newDate,
    pendingOrder, setPendingOrder,
    successOrder, setSuccessOrder,
    getOrder, setGetOrder,
    showOrder, setShowOrder,

    
  } = React.useContext(authContext);

  const logout = () => {
    localStorage.removeItem("tokens");
    localStorage.removeItem("time");
    localStorage.removeItem("wangdu");

    history("/login");
  }
  const handlers = useSwipeable({
    onSwipedRight: () => editItem.length > 0 ? editData() : addData()

  });
  const addData = async () => {
    const data = {
      orderNo: orderNumber,
      chai: chaiAmount,
      chaiQuantity: chaiQuantity,
      coffee: coffeeAmount,
      coffeeQuantity: coffeeQuantity,
      cigarette: cigaretteAmount,
      cigaretteQuantity: cigaretteQuantity,
      bottle: bottleAmount,
      bottleQuantity: bottleQuantity,
      date: newDate,
      time: new Date().toLocaleTimeString(),
      orderStatus: "PENDING",
      paymentMode: paymentMode === true ? "Online" : "Offline",
      orderTotal: totalAmount,
    };
    if (totalAmount > 0 && coffeeAmount >= 0 && chaiAmount >= 0 && cigaretteAmount >= 0 && bottleAmount >=0) {
      await axios.post(`${URL}/setCknItems`, data,
        {
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("tokens")}`
          },
        }
      ).then(
        async (resp) => {
          if (resp.status === 200) {
            clearData();
            setPendingOrder(!pendingOrder);
            setGetOrder(!getOrder);
          }
        },
        (err) => {
          console.log(err);
          if (err.response.data === "Forbidden") {
            logout();
          }
        }
      );
    } else {
      if (coffeeAmount <= 0) {
        setCoffeeQuantity(0);
        setCoffeeAmount(0);
      }
      if (chaiAmount <= 0) {
        setChaiAmount(0);
        setChaiQuantity(0);
      }
      if (cigaretteAmount <= 0) {
        setCigaretteAmount(0);
        setCigaretteQuantity(0);
      }
      if (bottleAmount <= 0) {
        setBottleAmount(0);
        setBottleQuantity(0);
      }
      alert("please add something");
    }
  };

  const editDataSuccess = (e, dt) => {
    const Id = editItem[0]._id;
    const data = {
      orderId: editItem[0].orderId,
      orderNo: editItem[0].orderNo,
      chai: chaiAmount,
      chaiQuantity: chaiQuantity,
      coffee: coffeeAmount,
      coffeeQuantity: coffeeQuantity,
      cigarette: cigaretteAmount,
      cigaretteQuantity: cigaretteQuantity,
      bottle: bottleAmount,
      bottleQuantity: bottleQuantity,
      date: newDate,
      time: editItem[0].time,
      orderStatus: "success",
      paymentMode: paymentMode === true ? "Online" : "Offline",
      orderTotal: totalAmount,
    };
    axios.put(`${URL}/updateCknItems?id=${Id}`, data, {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("tokens")}`
      },
    }).then(
      (resp) => {
        setPendingOrder(!pendingOrder);
        setSuccessOrder(!successOrder);
        if (resp.status === 200) {

          setEditItem([]);
          clearData();
          setGetOrder(!getOrder);
        }
      },
      (err) => {
        console.log(err);
        if (err.response.data === "Forbidden") {
          logout();
        }
      }
    );
  };

  const addSuccessData = async () => {
    const data = {
      orderNo: orderNumber,
      chai: chaiAmount,
      chaiQuantity: chaiQuantity,
      coffee: coffeeAmount,
      coffeeQuantity: coffeeQuantity,
      cigarette: cigaretteAmount,
      cigaretteQuantity: cigaretteQuantity,
      bottle: bottleAmount,
      bottleQuantity: bottleQuantity,
      date: newDate,
      time: new Date().toLocaleTimeString(),
      orderStatus: "success",
      paymentMode: paymentMode === true ? "Online" : "Offline",
      orderTotal: totalAmount,
    };
    if (totalAmount > 0) {
      await axios.post(`${URL}/setCknItems`, data, {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("tokens")}`
        },
      }).then(
        async (resp) => {
          if (resp.status === 200) {
            clearData();
            setPendingOrder(!pendingOrder);
            setSuccessOrder(!successOrder);
            setGetOrder(!getOrder);
            // toast("Loggin Successfully ✔");
            toast.success("Payment Successfully ✔", {
              position: toast.POSITION.TOP_RIGHT,
              autoClose: 2000,
            });
          }
        },
        (err) => {
          console.log(err);
          if (err.response.data === "Forbidden") {
            logout();
          }
        }
      );
    } else {
      alert("please add something");
    }
  };

  const clearData = () => {
    setCigaretteQuantity(0);
    setCigaretteAmount(0);
    setCigarette(false);
    setCoffeeQuantity(0);
    setCoffeeAmount(0);
    setCoffee(false);
    setChaiQuantity(0);
    setChaiAmount(0);
    setChai(false);
    setBottleQuantity(0);
    setBottleAmount(0);
    setBottle(false);
    setTotalAmount(0);
  };

  const editData = (e, dt) => {
    const Id = editItem[0]._id;
    const data = {
      orderId: editItem[0].orderId,
      orderNo: editItem[0].orderNo,
      chai: chaiAmount,
      chaiQuantity: chaiQuantity,
      coffee: coffeeAmount,
      coffeeQuantity: coffeeQuantity,
      cigarette: cigaretteAmount,
      cigaretteQuantity: cigaretteQuantity,
      bottle: bottleAmount,
      bottleQuantity: bottleQuantity,
      date: newDate,
      time: editItem[0].time,
      orderStatus: "PENDING",
      paymentMode: paymentMode === true ? "Online" : "Offline",
      orderTotal: totalAmount,
    };
    axios.put(`${URL}/updateCknItems?id=${Id}`, data, {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("tokens")}`
      },
    }).then(
      (resp) => {
        if (resp.status === 200) {
          setPendingOrder(!pendingOrder);
          setEditItem([]);
          clearData();
          setGetOrder(!getOrder);

          // setSuccessOrder(!successOrder);
          // setData(resp.data);
        }
      },
      (err) => {
        console.log(err);
        if (err.response.data === "Forbidden") {
          logout();
        }
      }
    );
  };

    return ( 

        <>
    <ToastContainer />

               <div className="col-lg-12 tea col-xl-12 col-md-12 mt-5"  {...handlers}  >
                  <section
                    style={{ maxHeight: "44rem", marginTop: "-1rem" }}
                  >
                    <div className="card col-lg-12 col-xl-12" style={{ borderBottom: "dashed" }}>
                      <div className="text-center fs-6 ">
                        <div className="d-flex justify-content-between">
                          <button className="btn" onClick={(e) => clearData(e)}>
                            <DeleteIcon className="text-danger fs-1" />
                          </button>
                          <div> Order No.{editItem.length > 0 ? orderNo : orderNumber} </div>

                          {editItem.length > 0 ? <button
                            className="btn text-success"
                            onClick={(e) => editDataSuccess(e)}
                          >
                            <CheckCircleIcon className="fs-1" />
                          </button> : <button
                            className="btn text-success"
                            onClick={(e) => addSuccessData(e)}
                          >
                            <CheckCircleIcon className="fs-1" />
                          </button>}
                        </div>
                      </div>

                      <div style={{ borderBottom: "dashed" }}></div>
                      {chaiAmount > 0 ? (
                        <div className="row d-flex justify-content-around mt-1">
                          <span
                            className="text-start col-8"
                            style={{ paddingLeft: "11%" }}
                          >
                            {`${chaiQuantity} x Chai`}
                          </span>
                          <span className="col-4">{chaiAmount} &#8377;</span>
                        </div>
                      ) : (
                        ""
                      )}
                      {coffeeAmount > 0 ? (
                        <div className="row d-flex justify-content-around mt-1">
                          <span
                            className="text-start col-8"
                            style={{ paddingLeft: "11%" }}
                          >
                            {`${coffeeQuantity} x Coffee`}
                          </span>
                          <span className="col-4">{coffeeAmount} &#8377;</span>
                        </div>
                      ) : (
                        ""
                      )}
                      {cigaretteAmount > 0 ? (
                        <div className="row d-flex justify-content-around mt-1">
                          <span
                            className="text-start col-8"
                            style={{ paddingLeft: "11%" }}
                          >
                            {`${cigaretteQuantity} x cigarette`}
                          </span>
                          <span className="col-4"> {cigaretteAmount} &#8377;</span>
                        </div>
                      ) : (
                        ""
                      )}
                      {bottleAmount > 0 ? (
                        <div className="row d-flex justify-content-around mt-1">
                          <span
                            className="text-start col-8"
                            style={{ paddingLeft: "11%" }}
                          >
                            {`${bottleQuantity} x bottle`}
                          </span>
                          <span className="col-4"> {bottleAmount} &#8377;</span>
                        </div>
                      ) : (
                        ""
                      )}

                      <div style={{ borderBottom: "dashed" }} className="my-2"></div>

                      <div className="fw-bold" style={{ fontSize: "0.9rem" }}>
                        <div className="d-flex mx-3 justify-content-between ">
                          <span className="">TOTAL AMOUNT</span>
                          <span>{totalAmount} &#8377;</span>
                        </div>
                        <div className="d-flex mx-3 justify-content-between">
                          <span className="mt-2">PAYMENT MODE</span>

                          <span
                            style={{ cursor: "pointer" }}
                            onClick={(e) => setPaymentMode(!paymentMode)}
                          >
                            {paymentMode === true ? (
                              <p className="text-primary fs-4">Online</p>
                            ) : (
                              <p className="text-danger fs-4">Offline</p>
                            )}
                          </span>
                        </div>
                      </div>
                       <div className="d-flex justify-content-center">
                        {editItem.length > 0 ? (
                          <button className="btn" onClick={(e) => editData(e)}>
                            <ArrowCircleRightIcon sx={{ fontSize: 40 }} />
                          </button>
                        ) : (
                          <button className="btn" onClick={(e) => addData(e)}>
                            <ArrowCircleRightIcon sx={{ fontSize: 40 }} />
                          </button>
                        )}
                      </div> 

                    </div>
                  </section>
          </div>
        </>
     );
}

export default Current_Slip;