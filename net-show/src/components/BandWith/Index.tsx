import { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { Chart } from "@antv/g2";
import { Data } from "@antv/g2/lib/interface";

import "./index.scss";

const testData: Data = [
  {
    node: "1",
    value: 320,
  },
  {
    node: "2",
    value: 220,
  },
  {
    node: "3",
    value: 120,
  },
  {
    node: "4",
    value: 200,
  },
  {
    node: "5",
    value: 170,
  },
  {
    node: "6",
    value: 190,
  },
  {
    node: "7",
    value: 128,
  },
  {
    node: "8",
    value: 80,
  },
  {
    node: "9",
    value: 32,
  },
  {
    node: "10",
    value: 110,
  },
  {
    node: "11",
    value: 120,
  },
  {
    node: "12",
    value: 300,
  },
  {
    node: "13",
    value: 280,
  },
  {
    node: "14",
    value: 310,
  },
  {
    node: "15",
    value: 270,
  },
  {
    node: "16",
    value: 130,
  },
];

const testData2: Data = [
  {
    node: "1",
    value: 30,
  },
  {
    node: "2",
    value: 120,
  },
  {
    node: "3",
    value: 320,
  },
  {
    node: "4",
    value: 100,
  },
  {
    node: "5",
    value: 370,
  },
  {
    node: "6",
    value: 290,
  },
  {
    node: "7",
    value: 328,
  },
  {
    node: "8",
    value: 180,
  },
  {
    node: "9",
    value: 22,
  },
  {
    node: "10",
    value: 310,
  },
  {
    node: "11",
    value: 220,
  },
  {
    node: "12",
    value: 100,
  },
  {
    node: "13",
    value: 380,
  },
  {
    node: "14",
    value: 210,
  },
  {
    node: "15",
    value: 170,
  },
  {
    node: "16",
    value: 230,
  },
];

let chart: Chart | null = null;
let data: Data = testData;
let timer: any;
const BandWidth: React.FC = () => {
  const ref = useRef(null);

  // 测试数据变更
  if (!timer) {
    timer = setInterval(() => {
      const ran = new Date().getTime() % 2 == 0;
      if (ran) {
        data = testData;
      } else {
        data = testData2;
      }
      chart?.changeData(data);
    }, 5000);
  }

  useEffect(() => {
    if (!chart) {
      chart = new Chart({
        container: ReactDOM.findDOMNode(ref.current) as HTMLElement,
        autoFit: true,
      });
      chart.scale("value", { nice: true });
      const insInterval = chart.interval();
      insInterval.position("node*value");
      chart.data(data);
      chart.render();
    }
  }, []);

  return <div className="band-width" ref={ref}></div>;
};

export default BandWidth;
