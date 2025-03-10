"use client";
import { useParams } from "next/navigation";
import React from "react";

const DetailIdPage = () => {
  const params = useParams();
  console.log("params : ", params);
  return <div>DetailIdPage</div>;
};

export default DetailIdPage;
