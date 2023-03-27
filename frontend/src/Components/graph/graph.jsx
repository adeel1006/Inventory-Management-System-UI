import React from "react";
// import { LineChart,BarChart, Bar, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts";

export default function MyChart() {
  const data = [
    { name: "Jan", uv: 400, pv: 2400, amt: 2400 },
    { name: "Feb", uv: 300, pv: 800, amt: 1400 },
    { name: "Mar", uv: 80, pv: 400, amt: 300 },
    { name: "Apr", uv: 200, pv: 400, amt: 200 },
    { name: "May", uv: 100, pv: 200, amt: 400 },
    { name: "Jun", uv: 300, pv: 200, amt: 400 },
    { name: "Jul", uv: 200, pv: 200, amt: 400 },
    { name: "Aug", uv: 500, pv: 200, amt: 400 },
    { name: "Sep", uv: 700, pv: 200, amt: 400 },
    { name: "Oct", uv: 400, pv: 200, amt: 400 },
    { name: "Nov", uv: 100, pv: 200, amt: 400 },
    { name: "Dec", uv: 300, pv: 200, amt: 400 },
  ];
  return (
    <div>
      <BarChart height={500} width={1350} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip wrapperStyle={{ width: 100, backgroundColor: "#ccc" }} />
        <Bar dataKey="uv" fill="#4583F5 " barSize={70} />
      </BarChart>
    </div>
  );
}
