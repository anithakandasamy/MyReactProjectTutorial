import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Product() {
  const [item, setItem] = useState({});
  const params = useParams();

  const getDetail = async () => {
    let response = await axios.get(`https://fakestoreapi.com/products/${params.id}`);
    setItem(response.data);
  };

  useEffect(() => {
    getDetail();
  }, [params.id]);

  return (
    <>
      <img src={item?.image} style={{width:"50px",height:"50px"}}></img>
      <span>{item?.title}</span>
    </>
  );
}
