import {
  ResponsiveContainer,
  LineChart,
  Line,
  Tooltip,
  YAxis,
  XAxis,
  CartesianGrid
} from 'recharts';
import './index.css';

function nFormatter(num, digits) {
  var si = [
    { value: 1, symbol: "" },
    { value: 1E3, symbol: "k" },
    { value: 1E6, symbol: "M" },
    { value: 1E9, symbol: "G" },
    { value: 1E12, symbol: "T" },
    { value: 1E15, symbol: "P" },
    { value: 1E18, symbol: "E" }
  ];
  var rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  var i;
  for (i = si.length - 1; i > 0; i--) {
    if (num >= si[i].value) {
      break;
    }
  }
  return (num / si[i].value).toFixed(digits).replace(rx, "$1") + si[i].symbol;
}

function CustomizedActiveDot({ cx, cy, fill }) {
  return (
    <circle cx={cx} cy={cy} r={10} stroke="#FFFFFF" strokeWidth={4} fill={fill} />
  );
}

export function StatisticsChart() {
  const data = [
    {
      month: '16 mar',
      visits: 240000,
      contacts: 120000
    },
    {
      month: '17 mar',
      visits: 210000,
      contacts: 130000
    },
    {
      month: '18 mar',
      visits: 250000,
      contacts: 210000
    },
    {
      month: '19 mar',
      visits: 270000,
      contacts: 250000
    },
    {
      month: '20 mar',
      visits: 250000,
      contacts: 250000
    },
    {
      month: '21 mar',
      visits: 290000,
      contacts: 280000
    },
    {
      month: '22 mar',
      visits: 265000,
      contacts: 255000
    }
  ]

  return (
    <div className="c-statistics-chart">
      <ResponsiveContainer width="100%" height={340}>
        <LineChart data={data}>
          <YAxis
            tickFormatter={(tick) => nFormatter(tick, 1)}
            type="number"
            domain={[90000, 400000]}
            axisLine={false}
            tickLine={false} />
          <CartesianGrid vertical={false} />
          <Line
            type="monotone"
            dataKey="visits"
            stroke="#3276C5"
            dot={false}
            strokeWidth={4} />
          <Line
            type="monotone"
            dataKey="contacts"
            stroke="#FA9300"
            dot={false}
            activeDot={<CustomizedActiveDot fill="#FA9300"/>}
            connectNulls
            strokeWidth={4} />
          <Tooltip cursor={false} />
          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}