import { Col } from "antd";
import React from "react";
import { Loader } from "../Loader/Loader";

export function AppContainer({ loading, children }) {
  return <Col>{!loading ? children : <Loader />}</Col>;
}
