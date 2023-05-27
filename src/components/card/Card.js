import React from "react";

export default function Card() {
  return (
    <div className="container" style={{ paddingTop: "3px" }}>
      <h2 className="text-center">This is simple Card</h2>
      <div className="card-group">
        <div className="card">
          <img src="https://cdn.pixabay.com/photo/2014/10/31/10/01/camera-510530_1280.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
        </div>
        <div className="card">
          <img src="https://cdn.pixabay.com/photo/2014/10/31/10/01/lens-510535_1280.jpg" className="card-img-top img-fluid" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This card has supporting text below as a natural lead-in to
              additional content.
            </p>
          </div>
        </div>
        <div className="card">
          <img src="https://cdn.pixabay.com/photo/2014/10/31/10/01/lens-510529_1280.jpg" className="card-img-top img-fluid" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
