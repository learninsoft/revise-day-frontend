import React, { Component } from "react";
import axios from "axios";
import styles from "./launch.css";
import browser_img from "./img/browser.png"

class LaunchApp extends Component {
  constructor() {
    super();
    this.state = {
      hello: "Hey",
      launchdata: {
        social_media_links:[]
      },
    };
  }
  componentDidMount() {
    this.getData();
  }
  async getData() {
    let axiosConfig = {
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
      },
    };
    const response = await axios.get(
      `/api/launch/`,
      axiosConfig
    );
    this.setState({ launchdata: response.data });
  }
  render() {

    return (
      <div style={styles}>
        <div id="h">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2">
                <h1> {this.state.launchdata.title}</h1>
                <h4>
                  {this.state.launchdata.headline}
                </h4>
                <h2>
                  {this.state.launchdata.banner_description}
                </h2>
                <div className="countdown-header">
                  <div className="countdown" id="launchDate" data-date="2022/10/05 09:10">
                    <h3>Launching on <h2>{this.state.launchdata.launch_date}</h2></h3>
                  </div>
                </div>
              </div>
            </div>
            {/* <!--/row--> */}
          </div>
          {/* <!--/container--> */}
        </div>
        {/* <!--/H--> */}

        <div className="container ptb">
          <div className="row">
            <div className="col-md-6">
              <h2>{this.state.launchdata.brief_description_title}</h2>
              <br />
              <h4>LOREM IPSUM IS SIMPLY DUMMY TEXT.</h4>

              <p>
                {this.state.launchdata.brief_description}
              </p>
              <p>
                <button className="btn btn-conf btn-blue">Learn More</button>
              </p>
            </div>
            {/* <!--/col-md-6--> */}
            <div className="col-md-6">
              <img
                src={browser_img}
                alt=""
                className="aligncenter"
                width="350"
              />
            </div>
            {/* <!--/col-md-6 --> */}
          </div>
          {/* <!--/row--> */}
        </div>
        {/* <!--/container--> */}

        <div id="g">
          <div className="container">
            <div className="row centered">
              <h1>{this.state.launchdata.contact_information}</h1>
              <div className="col-md-6 col-md-offset-3">
              </div>
            </div>
            {/* <!-- /row --> */}

            <div className="row mt">
              <div className="col-md-3">
                <h4>SOCIAL MEDIA</h4>
                <p>
                  <a href={this.state.launchdata.social_media_links[0]}>
                    <i className="ion-social-linkedin"></i>
                  </a>
                  <a href={this.state.launchdata.social_media_links[1]}>
                    <i className="ion-social-github"></i>
                  </a>
                  <a href={this.state.launchdata.social_media_links[2]}>
                    <i className="ion-social-twitter"></i>
                  </a>
                  <a href={this.state.launchdata.social_media_links[3]}>
                    <i className="ion-social-facebook"></i>
                  </a>

                </p>
              </div>
              <div className="col-md-5">
                <h4>ABOUT {this.state.launchdata.title}</h4>
                <p>
                  {this.state.launchdata.short_description}
                </p>
              </div>
              <div className="col-md-4">
                <h4>CONTACT INFORMATION</h4>
                <p>
                  {this.state.launchdata.contact_address}
                </p>
              </div>
            </div>
            {/* <!--/row--> */}
          </div>
          {/* <!--/container--> */}
        </div>

        <div id="copyrights">
          <div className="container">
            <p>
              &copy; Copyrights <strong>{this.state.launchdata.title}</strong>. All Rights Reserved
            </p>
            <div className="credits">
              Created with Soon template by{" "}
              <a href="https://templatemag.com/">TemplateMag</a>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default LaunchApp;
