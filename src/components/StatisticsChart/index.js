import { useState } from 'react';
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
import { CustomizedDot, CustomizedTooltip } from '../../components';
import { nFormatter } from '../../utils';

export function StatisticsChart() {
  const [index, setIndex] = useState(0);

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
        <LineChart data={data} margin={{top: 15, right: 15, left: 15, bottom: 15}}>
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
            dot={<CustomizedDot fill="#3276C5" onMouseOver={() => setIndex(0)} />}
            activeDot={false}
            strokeWidth={4} />
          <Line
            type="monotone"
            dataKey="contacts"
            stroke="#FA9300"
            dot={<CustomizedDot fill="#FA9300" onMouseOver={() => setIndex(1)} />}
            activeDot={false}
            strokeWidth={4} />
          <Tooltip
            cursor={false}
            content={<CustomizedTooltip index={index} />}/>
          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}