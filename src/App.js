import React from "react";
import { useEffect, useState } from "react"
import Data from "./data"
import Content from "./Content";
import { Card } from 'antd';


const { Meta } = Card;

const App = () => (
  <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
  
);
export default App;


