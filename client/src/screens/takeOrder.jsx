import React, { useState, useEffect } from "react";
import "./screen.css";
import "./dropDownCircle.css";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import CloseIcon from '@mui/icons-material/Close';
import DoneIcon from "@mui/icons-material/Done";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import { authContext } from "../contexts/cknContext";
import TableRowsRoundedIcon from '@mui/icons-material/TableRowsRounded';
import $ from "jquery";
import { NavLink, useNavigate } from "react-router-dom";
import { useSwipeable } from "react-swipeable";
import ShowTotal from "./showTotal";
import TextField from '@mui/material/TextField';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function TakeOrder() {
  const history = useNavigate();

  const {
    pendingOrder,
    setPendingOrder,
    editItem,
    setEditItem,
    URL,
    newDate,
    setNewDate,
    successOrder,
    setSuccessOrder,
    orderNumber, setOrderNumber,
    getOrder, setGetOrder,
    showOrder, setShowOrder,
    token,
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
    totalAmount, setTotalAmount,
    paymentMode, setPaymentMode,
    orderNo, setOrderNo,


  } = React.useContext(authContext);
  // const [totalAmount, setTotalAmount] = useState(0);
  // const [paymentMode, setPaymentMode] = useState(true);
  // const [orderNo, setOrderNo] = useState(0);
  // const [chai, setChai] = useState(false);
  // const [chaiAmount, setChaiAmount] = useState(0);
  // const [chaiQuantity, setChaiQuantity] = useState(0);
  // const [coffee, setCoffee] = useState(false);
  // const [coffeeAmount, setCoffeeAmount] = useState(0);
  // const [coffeeQuantity, setCoffeeQuantity] = useState(0);
  // const [cigarette, setCigarette] = useState(false);
  // const [cigaretteAmount, setCigaretteAmount] = useState(0);
  // const [cigaretteQuantity, setCigaretteQuantity] = useState(0);
  // const [bottle, setBottle] = useState(false);
  // const [bottleAmount, setBottleAmount] = useState(0);
  // const [bottleQuantity, setBottleQuantity] = useState(0);
  const [dropDown, setDropDown] = useState(false);
  const [dateTotal, setDateTotal] = useState();
  const [totalRevenue, setTotalRevenue] = useState([]);
  const [showChaiBtn, setShowChaiBtn] = useState(false);

  const chaiItem = [10, 12, 15];
  const coffeeItem = [20, 25, 60];
  const cigaretteItem = [8, 12, 15, 20];
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



  const addAmount = (e) => {
    const { name, value } = e.target;
    if (name === "chaiAmount") {
      if (chai === true) {
        const chai = parseInt(chaiAmount) - parseInt(value);
        setChaiQuantity(parseInt(chaiQuantity) - 1);
        setChaiAmount(chai);
      } else {
        const chai = parseInt(chaiAmount) + parseInt(value);
        setChaiQuantity(parseInt(chaiQuantity) + 1);
        setChaiAmount(chai);
      }
    }
    else if (name === "coffeeAmount") {
      if (coffee === true) {
        const coffee = parseInt(coffeeAmount) - parseInt(value);
        setCoffeeQuantity(parseInt(coffeeQuantity) - 1);
        setCoffeeAmount(coffee);


      } else {
        const coffee = parseInt(coffeeAmount) + parseInt(value);
        setCoffeeQuantity(parseInt(coffeeQuantity) + 1);
        setCoffeeAmount(coffee);
      }
    }
    else if (name === "cigaretteAmount") {
      if (cigarette === true) {
        const cigarette = parseInt(cigaretteAmount) - parseInt(value);
        setCigaretteQuantity(parseInt(cigaretteQuantity) - 1);
        setCigaretteAmount(cigarette);

      }
      else {
        const cigarette = parseInt(cigaretteAmount) + parseInt(value);
        setCigaretteQuantity(parseInt(cigaretteQuantity) + 1);
        setCigaretteAmount(cigarette);
      }
    }
    else if (name === "bottleAmount") {
      if (bottle === true) {
        const bottle = parseInt(bottleAmount) - parseInt(value);
        setBottleQuantity(parseInt(bottleQuantity) - 1);
        setBottleAmount(bottle);

      }
      else {
        const bottle = parseInt(bottleAmount) + parseInt(value);
        setBottleQuantity(parseInt(bottleQuantity) + 1);
        setBottleAmount(bottle);
      }
    }
  };
  useEffect(() => {
    let total =
      parseInt(chaiAmount) + parseInt(coffeeAmount) + parseInt(cigaretteAmount) + parseInt(bottleAmount);
    setTotalAmount(total);
  }, [chaiAmount, coffeeAmount, cigaretteAmount , bottleAmount]);

  useEffect(() => {
    if (editItem.length > 0) {
      setOrderNo(editItem[0].orderNo);
      setCigaretteQuantity(editItem[0].cigaretteQuantity);
      setCigaretteAmount(editItem[0].cigarette);
      setCigarette(false);
      setCoffeeQuantity(editItem[0].coffeeQuantity);
      setCoffeeAmount(editItem[0].coffee);
      setCoffee(false);
      setChaiQuantity(editItem[0].chaiQuantity);
      setChaiAmount(editItem[0].chai);
      setChai(false);
      setBottleQuantity(editItem[0].bottleQuantity);
      setBottleAmount(editItem[0].bottle);
      setBottle(false);
      // setTotalAmount(editItem[0].orderTotal);
    }
  }, [editItem]);

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
  useEffect(() => {
    if (coffeeAmount <= 0 || coffeeQuantity <= 0) {
      setCoffeeQuantity(0);
      setCoffeeAmount(0);
      setCoffee(false);

    }
    if (chaiAmount <= 0 || chaiQuantity <= 0) {
      setChaiAmount(0);
      setChaiQuantity(0);
      setChai(false);

    }
    if (cigaretteAmount <= 0 || cigaretteQuantity <= 0) {
      setCigaretteAmount(0);
      setCigaretteQuantity(0);
      setCigarette(false);
    }
    if (bottleAmount <= 0 || bottleQuantity <= 0) {
      setBottleAmount(0);
      setBottleQuantity(0);
      setBottle(false);
    }
  }, [chaiAmount, coffeeAmount, cigaretteAmount , bottleAmount]);
  const logout = () => {
    localStorage.removeItem("tokens");
    localStorage.removeItem("time");
    localStorage.removeItem("wangdu");

    history("/login");
  }
  const swipeEvent = () => {
  }
  const handlers = useSwipeable({
    onSwipedRight: () => editItem.length > 0 ? editData() : addData()

  });
  const clearOrderNumber = () => {
    axios.put(`${URL}/deleteCounterNumber`);
    setGetOrder(!getOrder);

  }
  const handleTotalChange = (e) => {
    const dates = e.target.value;
    const my = dates.split("-");
    const myArray = `${my[2]}/${my[1]}/${my[0]}`;
    setDateTotal(myArray);
  }
  const getTodayRevenue = () => {
    axios.get(`${URL}/getTotalByDate?date=${dateTotal}`, {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("tokens")}`
      },
    }).then(resp => {
      setTotalRevenue(resp.data.data);
    }, err => {
      console.log(err)
    });
  }
  const [hide,setHide]=useState([
    { name:'chai',status:false},
    { name:'coffee',status:false},
    { name:'cigarette',status:false},
    { name:'bottle',status:false},

  
  ])
  const hideItems = (s,i)=>{
  
    var dt = hide
// var dt = [];
// .filter((dr)=>
//     // dr.status !== true
    
// );
// if(hide[i].status == true) {
//   hide[i]={'status':false} 
//   return ;
// }
// for (let i = 0; i < hide.length; i++) {
//   dt.push({status:false})
// }


  dt[i] = {"status":!dt[i].status}
    setHide(dt)

}
  return (
    <>
    <ToastContainer />
    <div className="mt-5" style={{ height: "" }}>
      <div className="row" style={{ height: "" }}>
        <div className="" style={{ height: "" }}>
          <div className="row ms-5">
          
            <div className="col-lg-12 tea col-xl-12 d-lg-flex col-md-12 mt-5">

              <div  className={` col-2 btn-g btn-blob glow-image-hover ${chai === true ? "imggg" : ""}`} onClick={(e) => {setChai(!chai);hideItems('chai',0)}}><img className="img-fluid d-flex align-item-center" src="/images/chai.png"></img></div>;
             { hide[0].status == true? <div className="ms-5 mt-3 buttonHolder">
                {[
                  { className: "button heart", value: "10" },
                  { className: "button cross", value: "12" },
                  // { className: "button flower", value: "20" },
                  { className: "button tick", value: "15" },
                ].map((c, i) => (

                  <button
                    onClick={(e) => addAmount(e)}
                    name="chaiAmount"
                    type="button"
                    className={` col-9 glow-on-hover text-light text-center fs-3  fw-bold ${c.className} ${chai === true ? "imggg" : ""}`}
                    value={c.value}
                    key={i}
                  >
                    {c.value}
                  </button>
                ))}
              </div>:''}
            </div>
            
            <div className="col-lg-12 d-lg-flex tea col-xl-12 col-md-12 mt-5">
              <div onClick={(e) => {setCoffee(!coffee);hideItems('coffee',1)}} className={`col-2 btn-g btn-blob glow-image-hover ${coffee === true ? "imggg" : ""}`}><img className="img-fluid d-flex align-item-center" src="/images/coffee.png"></img></div>

              {hide[1].status==true?<div className="ms-5 mt-3 buttonHolder">
                {[
                  { className: "button heart", value: "20" },
                  { className: "button cross", value: "22" },
                  { className: "button cross", value: "25" },
                  // { className: "button flower", value: "20" },
                  { className: "button tick", value: "59" },
                  { className: "button tick", value: "69" },
                  // { className: "button tick", value: "79" },
                  // { className: "button tick", value: "89" },
                ].map((c, i) => (

                  <button
                    onClick={(e) => addAmount(e)}
                    name="coffeeAmount"
                    type="button"
                    className={`col-9 glow-on-hover text-light text-center fs-3  fw-bold ${c.className} ${coffee === true ? "imggg" : ""}`}
                    value={c.value}
                    key={i}
                  >
                    {c.value}
                  </button>
                ))}
              </div>:''}




            </div>
          
       

            <div className="col-lg-12 tea d-lg-flex col-xl-12 col-md-12 mt-5">
              <div onClick={(e) => {setCigarette(!cigarette);hideItems('cigarette',2)}} className={`col-2 btn-g btn-blob glow-image-hover ${cigarette === true ? "imggg" : ""}`}><img className="img-fluid d-flex align-item-center" src="/images/cigrate.png"></img></div>

              {hide[2].status == true ?<div className="ms-5 mt-3 buttonHolder justify-content-center">
                {[
                  { className: "button heart", value: "8" },
                  { className: "button heart", value: "12" },
                  { className: "button heart", value: "15" },
                  { className: "button heart", value: "20" },
                ].map((c) => (

                  <button
                    onClick={(e) => addAmount(e)}
                    name="cigaretteAmount"
                    type="button"
                    className={`col-9 glow-on-hover text-light text-center fs-3  fw-bold ${c.className} ${cigarette === true ? "imggg" : ""}`}
                    value={c.value}
                    key={c.value}
                  >
                    {c.value}
                  </button>
                ))}
              </div>:""}
            </div>
          
            <div className="col-lg-12 d-lg-flex tea col-xl-12 col-md-12 mt-5 ">
              <div onClick={(e) => {setBottle(!bottle);hideItems('bottle',3)}} className={`col-2 btn-g btn-blob glow-image-hover ${bottle === true ? "imggg" : ""}`}><img className="img-fluid d-flex align-item-center" src="/images/waterBottleImg.png"></img></div>

              {hide[3].status==true?<div className="buttonHolder ms-5 mt-3 justify-content-center">
                {[
                  { className: "button heart", value: "10" },
                ].map((c) => (

                  <button
                    onClick={(e) => addAmount(e)}
                    name="bottleAmount"
                    type="button"
                    className={` glow-on-hover text-light text-center col-9 fs-3  fw-bold ${c.className} ${bottle === true ? "imggg" : ""}`}
                    value={c.value}
                    key={c.value}
                  >
                    {c.value}
                  </button>
                ))}
              </div>:""}
            </div>


            <div className="col-lg-12 tea col-xl-12">
              <div className="row">
                <div className="col-sm-5 col-md-5 col-lg-1 offset-lg-8 col-xl-1 ">


                  <div id="circularMenu1" className={`circular-menu circular-menu-left ${dropDown === true ? "active" : ""}`}>

                    <a className="floating-btn dropDownCircle-hover" onClick={(e) => setDropDown(!dropDown)}>
                      {dropDown === true ? <CloseIcon className="fs-1 mb-1"></CloseIcon> : <TableRowsRoundedIcon className="fs-1 mb-1" ></TableRowsRoundedIcon>}
                    </a>

                    <menu className="items-wrapper">
                      <button href="#" className="menu-item fs-6 dropDownMenu-hover" onClick={(e) => setShowOrder(!showOrder)}><p style={{ fontSize: "0.7rem", marginTop: "0.4rem" }}>{showOrder === false ? "Success" : "Pending"}</p></button>
                      <button href="#" className="menu-item dropDownMenu-hover"><p style={{ fontSize: "0.7rem", marginTop: "0.4rem" }} onClick={logout}>Logout</p></button>
                      {localStorage.getItem("wangdu") === "admin" ? <button href="#" className="menu-item dropDownMenu-hover"><p style={{ fontSize: "0.7rem", marginTop: "0.4rem" }} data-bs-toggle="modal"
                        data-bs-target="#myTotal">Total</p></button> : ""}
                      <button href="#" className="menu-item dropDownMenu-hover"><p style={{ fontSize: "0.7rem", marginTop: "0.4rem" }} data-bs-toggle="modal"
                        data-bs-target="#myModal">Clear</p></button>
                      {localStorage.getItem("wangdu") === "worker" ? <button href="#" className="menu-item dropDownMenu-hover">
                        <NavLink to="/expenses" style={{ textDecoration: "none", color: "white" }}>
                          <p style={{ fontSize: "0.7rem", marginTop: "0.4rem" }}>Catego</p>
                        </NavLink>
                      </button> : ""}
                    </menu>

                  </div>
                </div>
                <div id="myModal" className="modal fade">
                  <div className="modal-dialog modal-confirm">
                    <div className="modal-content">
                      <div className="modal-header flex-column">
                        <div className="icon-box">
                          <CloseIcon
                            className="material-icons"
                            type="button"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          >
                            &#xE5CD;
                          </CloseIcon>
                        </div>
                        <h4 className="modal-title w-100">Are you sure?</h4>
                      </div>
                      <div className="modal-body">
                        <p>
                          Do you really want to delete Order Numbers? This process cannot be
                          undone.
                        </p>
                      </div>
                      <div className="modal-footer justify-content-center">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        >
                          Cancel
                        </button>
                        <button
                          type="button"
                          onClick={clearOrderNumber}
                          className="btn btn-danger"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        >
                          Clear Order Number
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="myTotal" className="modal fade ">
                  <div className="modal-dialog modal-confirm">
                    <div className="modal-content">
                      <div className="modal-header flex-column">

                        <TextField
                          id="date"
                          label="Select Date"
                          color="secondary"
                          type="date"
                          className="text-white"
                          onChange={(e) => handleTotalChange(e)}
                          sx={{ width: 220 }}
                          InputLabelProps={{
                            shrink: true,
                          }}
                        />
                      </div>
                      {totalRevenue ?
                        totalRevenue.map((total) => <div className="modal-body">
                          <h6>Chai Amount ={total.chaiAmount} </h6>
                          <h6>Coffee Amount = {total.coffeeAmount}</h6>
                          <h6>Cigarette Amount = {total.cigaretteAmount}</h6>
                          <h4>Total Amount ={total.totalAmount}</h4>

                        </div>) : ""}
                      <div className="modal-footer justify-content-center">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        >
                          Cancel
                        </button>
                        <button
                          type="button"
                          onClick={getTodayRevenue}
                          className="btn btn-danger"
                        // data-bs-dismiss="modal"
                        // aria-label="Close"
                        >
                          Get Total
                        </button>
                      </div>
                    </div>
                  </div>
                </div> 
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
    </>
  );
}
