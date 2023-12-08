"use client";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface ChartProps {
  chartData: { name: string; likes: number }[];
}

const Chart: React.FC<ChartProps> = ({ chartData }) => {
  return (
    <div>
      <h1 className="flex font-semibold justify-center font-mono">
        Likes 👍 Over Time
      </h1>
      <div style={{ width: "100%", height: "300px" }}>
        <ResponsiveContainer>
          <LineChart data={chartData}>
            <Line
              type="monotone"
              dataKey="likes"
              stroke="#2196F3"
              strokeWidth={3}
            />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Chart;
