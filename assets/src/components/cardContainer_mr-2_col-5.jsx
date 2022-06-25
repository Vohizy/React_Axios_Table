import React from "react";
export function Container_mr2_col5(props){
    const{children}=props;
    return(
        <div className="card container mr-2 col-5">
          <div className="m-3">
            <h3 className="ui header">Request about reservation 1</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa quis placeat quaerat suscipit similique at et atque veritatis, iste nesciunt sunt ex voluptatum ducimus facere porro commodi aliquid maiores odit?</p>
            {children}
          </div>
        </div>
    )
}