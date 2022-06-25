import React from "react";
export function Footer(){
    return(
    <div className="ui inverted vertical footer segment bg-success" id="contact">
      <div className="ui container  mt-4 mb-4">
        <div className="ui stackable inverted divided equal height stackable grid">
          <div className="three wide column">
            <h4 className="ui inverted header">About</h4>
            <div className="ui inverted link list">
              <a href="index.html" className="item">Sitemap</a>
              <a href="index.html" className="item">Contact Us</a>
              <a href="index.html" className="item">Religious Ceremonies</a>
              <a href="index.html" className="item">Gazebo Plans</a>
            </div>
          </div>
          <div className="three wide column">
            <h4 className="ui inverted header">Services</h4>
            <div className="ui inverted link list">
              <a href="index.html" className="item">Banana Pre-Order</a>
              <a href="index.html" className="item">DNA FAQ</a>
              <a href="index.html" className="item">How To Access</a>
              <a href="index.html" className="item">Favorite X-Men</a>
            </div>
          </div>
          <div className="seven wide column">
            <h4 className="ui inverted header">Footer Header</h4>
            <p>Extra space for a call to action inside the footer that could help re-engage users.</p>
          </div>
        </div>
      </div>
    </div>
    )
}