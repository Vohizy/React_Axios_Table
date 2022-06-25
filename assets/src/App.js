import React from "react";
import FixedSideItems from "./components/fixedSideItems";
import Reservation from "./components/Reservation";
import Ville from "./components/Ville";
import Voyage from "./components/voyage";
import { Card } from "./components/Cardmt-3_mb-5";
import { Container_mr2_col5 } from "./components/cardContainer_mr-2_col-5";
import { Footer } from "./components/footer";
import "../public/res/style2.css"
function App() {
  return (
  <>
  <div className="pusher">
    <nav className="ui inverted vertical masthead center aligned segment" id="banner">
      <div className="navbar fixed-top navbar-expand-lg navbar-nav nav-link col-12">
        <div className="ui large bg-success inverted pointing menu">
          <a href="index.html" className="toc item">
            <img className="ui avatar image" src="notreLogo.png" alt="logo" height="20"></img>
          </a>
          <a href="#trip" className="item">Acceuil</a>
          <a href="#offers" className="item">Offres</a>
          <a href="#reservation" className="item">Reserver</a>
          <a href="#contact" className="item">Contacts</a>
          <a href="#root" className="Right item">Intranet</a>
        </div>
      </div>

      <div className="ui text container jumbotron bg-transparent">
        <h1 className="ui inverted header">
          Toky_Transport
        </h1>
        <h2>Une compagnie de transport pour vous.</h2>
        <div className="ui huge success button btn-group-toggle text-success mt-4">Decouvrez-nous </div>
      </div>

    </nav>
    <FixedSideItems />
    <div className="ui vertical stripe segment container m-2" id="trip">
      <div className="ui middle aligned stackable grid container">
        <div className="row">
          <div className="card eight wide column bg-success">
          
            <Card label1="Request about trip1" label2="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa quis placeat quaerat suscipit similique at et atque veritatis, iste nesciunt sunt ex voluptatum ducimus facere porro commodi aliquid maiores odit?"/>
            <Card label1="Request about trip2" label2="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa quis placeat quaerat suscipit similique at et atque veritatis, iste nesciunt sunt ex voluptatum ducimus facere porro commodi aliquid maiores odit?"/>
          
          </div>
          <div className="six wide right floated column">
            <img src="notreLogo.png" className="ui large bordered rounded image" alt="sary"></img> 
          </div>
        </div>
      </div>
    </div>
    <Ville />
    <Voyage />

    <div className="ui vertical stripe quote segment container d-flex m-2" id="offers">
      <div className="ui equal width stackable internally celled grid">
        <div className="center aligned row card ">
          <div className="column ">
            <h3>Request about Offers1</h3>
            <p>That is what they all say about our offers</p>
          </div>
          <div className="column ">
            <h3>Request about Offers2</h3>
            <p>
              <b>Special:</b> Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="ui vertical stripe segment d-flex align-items-stretch" id="reservation">
      <div className="d-flex ui text m-auto">
        <Container_mr2_col5>
            <a href="index.html" className="ui large button bg-success">Reserve</a>
            <h4 className="ui horizontal header divider">
            </h4>
        </Container_mr2_col5>
       
        <Container_mr2_col5 />
      </div>
    </div>
    <Reservation />
    <Footer />
    </div>
  </>
  );
}

export default App;