
import React from "react";
// import Chart from 'react-apexcharts'

const Dashboard = ()=>{
    return (
        <>
          <div className="breadcrumb_dashboard">
            <h6 className="text-white ms-1 ms-lg-5 ms-md-5 redhat_SB ">
              Welcome to SYPSS
            </h6>
            <h3 className="text-white ms-1 ms-lg-5 ms-md-5 font_42 outfit_SB">
              DASHBOARD
            </h3>
          </div>
          <div className="container dashboard_margin">
            <div className="row gap-2 gap-lg-0 gap-md-0">
              <div className="col-md-4 "  title="guru" id="dashboardTitle">
                <div className="dashboard_cards rounded-1">
                  <div className="dashboard_card_detail ">
                    <div className=" card_img d-flex align-item-center">
                      <img
                        // src={`${process.env.PUBLIC_URL}/assets/Images/Component_14.svg`}
                        alt=""
                        className="mx-3"
                      />
                      <img
                        // src={`${process.env.PUBLIC_URL}/assets/Images/Path 5533.png`}
                        alt=""
                        className="ms-auto"
                      />
                    </div>
                    <div className="dashboard_cards_text">
                      <span className="font_14 outfit_R  gray_theme_color ms-3">
                        Branch Reports
                      </span>
                      <h6 className="font_28 outfit_B ms-3">
                       6000
                      </h6>
                      <div className="dasboard_card_footer d-flex">
                        <p className="mx-3 mt-2">Learn More</p>
                        <div
                        //   src={`${process.env.PUBLIC_URL}/assets/Images/Component_18.svg`}
                          alt=""
                          className="ms-auto mx-4"
                        />
                        Reports
                      </div>
                    </div>
                  </div>
    
                  
                </div>
              </div>
              <div className="col-md-4 " >
                <div className="dashboard_cards rounded-1">
                  <div className="dashboard_card_detail" >
                    <div className=" card_img d-flex align-item-center">
                      <img
                        // src={`${process.env.PUBLIC_URL}/assets/Images/Component_14.svg`}
                        alt=""
                        className="mx-3"
                      />
                      <img
                        // src={`${process.env.PUBLIC_URL}/assets/Images/Path 5533.png`}
                        alt=""
                        className="ms-auto"
                      />
                    </div>
                    <div className="dashboard_cards_text">
                      <span className="font_14 outfit_R  gray_theme_color mx-3">
                        Events Reports
                      </span>
                      <h6 className="font_28 outfit_B ms-3">
                        {/* {eventYogaBandhuReport} */}
                      </h6>
                    </div>
                  </div>
                  <div className="dasboard_card_footer d-flex">
                    <span className="mx-3 mt-2 mb-2">
                      <select
                        style={{ height: "2rem" }}
                        className="selectpicker me-2 border_colo rounded-1"
                      >
                       
                      </select>
                      select events
                    </span>
                    <img
                    //   onClick={EventshReports}
                    //   src={`${process.env.PUBLIC_URL}/assets/Images/Component_18.svg`}
                      alt=""
                      className="ms-auto mx-4"
                    />
                  </div>
                  {/* <div className="dasboard_card_footer">
                    <p className="mx-3">Learn More</p> */}
                  {/* <img src={`${process.env.PUBLIC_URL}/assets/Images/`} alt="" /> */}
                  {/* </div> */}
    
                  {/* <div className="card_img">
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/Images/Path 5533.png`}
                      alt=""
                      className="img-fluid"
                    />
                  </div> */}
    
                  {/* <div className="card_boarder">
                    <span className="primary_text_color text-center font_12 outfit_R">
                      Learn More
                    </span>
                  </div> */}
                </div>
              </div>
              <div className="col-md-4 " >
                <div className="dashboard_cards rounded-1">
                  <div className="dashboard_card_detail">
                    <div className=" card_img d-flex align-item-center">
                      <img
                        // src={`${process.env.PUBLIC_URL}/assets/Images/Component_14.svg`}
                        alt=""
                        className="mx-3"
                      />
                      <img
                        // src={`${process.env.PUBLIC_URL}/assets/Images/Path 5533.png`}
                        alt=""
                        className="ms-auto"
                      />
                    </div>
                    <div className="dashboard_cards_text">
                      <span className="font_14 outfit_R  gray_theme_color mx-3">
                        Yoga Bandhus Reports
                      </span>
                      <h6 className="font_28 outfit_B ms-3">
                        {/* {branchAndYodaReport.yogaBandhuReports} */}
                      </h6>
                    </div>
                  </div>
                  <div className="dasboard_card_footer d-flex">
                    <p className="mx-3 mt-2">Learn More</p>
                    <img
                    //   src={`${process.env.PUBLIC_URL}/assets/Images/Component_18.svg`}
                      alt=""
                      className="ms-auto mx-4"
                    />
                  </div>
                  {/* <div className="dasboard_card_footer">
                    <p className="mx-3">Learn More</p> */}
                  {/* <img src={`${process.env.PUBLIC_URL}/assets/Images/`} alt="" /> */}
                  {/* </div> */}
    
                  {/* <div className="card_img">
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/Images/Path 5533.png`}
                      alt=""
                      className="img-fluid"
                    />
                  </div> */}
    
                  {/* <div className="card_boarder">
                    <span className="primary_text_color text-center font_12 outfit_R">
                      Learn More
                    </span>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
    
          <div class="container">
            <div class="row">
              <div class="col-md-12 col-sm-8 col-lg-8">
                <div className="d-flex mt-3">
                 
                  <h4 className="fw-bold fixed " style={{ color: "#2D4356" }}>
                    Select Year
                  </h4>
                </div>
                <div className="graph_scroll">
                <div >
                    {/* <Chart
                      options={{
                        colors: ["#FF6E31"],
                        chart: { id: "Branch Detail" },
                        xaxis: { categories: [1,2,3,4,5,6,7,8,9,10], },
                       
                      }}
                      series={[{ name: "Total Branch", data: [1,2,3,4,5,6,7,8,9,10] }]}
                      type="bar"
                      height={"310px"}
                    /> */}
                  </div> 
                </div>
              </div>
              <div class="col-md-12 col-sm-4 col-lg-4 mt-2 ">
                <h4 style={{ color: "#2D4356" }} className="mt-3 fw-bold fixed">
                  Recent Events
                </h4>
                <div className="height_scroll " style={{ height: "320px" }}>
                  {[1,2,3,4,5].map((dt) => (
                    <div className="today_Event shadow p-3 rounded-2 mt-2">
                      <p className="fw-bold">{dt.eventName}</p>
                      <div className="row">
                        <div className="col-6">
                          <div className="d-flex">
                            <img
                            //   src={`${process.env.PUBLIC_URL}/assets/Images/Component_14.svg`}
                              alt=""
                              className=" "
                            />
                            <div className="Font_family mx-3">
                              <span className=" mt-2 " style={{ color: "#A3A8AD" }}>
                                Total Mens
                              </span>
                              <span
                                className="d-block fw-bold"
                                style={{ color: "#A3A8AD" }}
                              >
                                100
                              </span>
                            </div>
                            <div class="vr ms-auto"></div>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="d-flex">
                            <img
                            //   src={`${process.env.PUBLIC_URL}/assets/Images/Component_14.svg`}
                              alt=""
                              className=" "
                            />
                            <div className="Font_family mx-3">
                              <span className=" mt-2 " style={{ color: "#A3A8AD" }}>
                                Total womens
                              </span>
                              <span
                                className="d-block fw-bold"
                                style={{ color: "#A3A8AD" }}
                              >
                               200
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <hr className="hrLine"></hr>
                      <span style={{ color: "#A3A8AD", fontSize: "80%" }}>
                      Total Yoga Bandhus
                      </span>
                      <span
                        className="d-block fw-bold"
                        style={{ color: "#A3A8AD" }}
                      >
                      </span>
                    </div>
                  ))} 
                </div>
              </div>
              {/* <div class="col">
          Column
        </div> */}
            </div>
          </div>
    
          <div className="row">
            <div className="col-md-7">
              <div className="mt_50 align-item-center">
                {/* <h1>{value}</h1> */}
              </div>
            </div>
          </div>
        </>
      );
}

export default Dashboard;