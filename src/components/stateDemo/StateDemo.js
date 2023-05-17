import React, { Component } from "react";
import SignIn from "../signIn/SignIn";
import Comments from "../comments/Comments";

export default class StateDemo extends Component {
  render() {
    return (
      <table width={"100%"}>
        <tbody>
          <tr>
            <td>
              <SignIn></SignIn>
            </td>
            <td>
              <Comments></Comments>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}
