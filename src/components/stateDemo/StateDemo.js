import React, { Component } from "react";
import SignIn from "../signIn/SignIn";
import Comments from "../comments/Comments";

export default class StateDemo extends Component {
  render() {
    return (
      //   <div className="container-fluid border rounded" style={{width:"98%",marginLeft:"12px",marginRight:"20px", marginTop:"5px", marginBottom:"5px"}}>
      //     <div className="row">
      //       <div className="col">
      //         <SignIn></SignIn>
      //       </div>
      //       <div className="col">
      //         <Comments></Comments>
      //       </div>
      //     </div>
      //   </div>
      <table width={"100%"}>
        <tr>
          <td>
            <SignIn></SignIn>
          </td>
          <td>
            <Comments></Comments>
          </td>
        </tr>
      </table>
    );
  }
}
