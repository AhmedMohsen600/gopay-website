"use client";

import { Area, AreaChart, ResponsiveContainer } from "recharts";

interface MiniLineChartProps {
  data: number[];
  id: string;
  variant?: "oneTime" | "recurring";
}

export function MiniLineChart({
  data,
  id,
  variant = "oneTime",
}: MiniLineChartProps) {
  // Transform data to Recharts format
  const chartData = data.map((value, index) => ({
    index,
    value,
  }));

  // Color schemes based on variant
  const colors = {
    oneTime: {
      stroke: "#C4DEFF",
      fill: "#6AA7F7",
      fillOpacity: 0.3,
    },
    recurring: {
      stroke: "#F1E0C5",
      fill: "#F1AD48",
      fillOpacity: 0.2,
    },
  };

  const currentColors = colors[variant];

  return (
    <div className="w-full h-[107px]">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={chartData}
          margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id={`gradient-${id}`} x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="0%"
                stopColor={currentColors.fill}
                stopOpacity={currentColors.fillOpacity}
              />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity={0} />
            </linearGradient>
          </defs>
          <Area
            type="monotone"
            dataKey="value"
            stroke={currentColors.stroke}
            strokeWidth={1.62}
            fill={`url(#gradient-${id})`}
            // isAnimationActive={false}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
