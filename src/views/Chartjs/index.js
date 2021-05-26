import { Line } from 'react-chartjs-2';
import './index.css';

const data = {
  labels: ['16 mar', '17 mar', '18 mar', '19 mar', '20 mar', '21 mar', '22 mar'],
  datasets: [
    {
      label: '# of visits',
      data: [240000, 210000, 250000, 270000, 250000, 290000, 265000],
      fill: false,
      borderColor: '#3276C5',
      borderWidth: 4,
      pointBackgroundColor: '#3276C5',
      pointBorderColor: '#3276C5',
      pointHoverBackgroundColor: '#3276C5',
      pointHoverBorderColor: '#FFFFFF',
      tension: 0.4
    },
    {
      label: '# of contacts',
      data: [120000, 130000, 210000, 250000, 250000, 280000, 255000],
      fill: false,
      borderColor: '#FA9300',
      borderWidth: 4,
      pointBackgroundColor: '#FA9300',
      pointBorderColor: '#FA9300',
      pointHoverBackgroundColor: '#FA9300',
      pointHoverBorderColor: '#FFFFFF',
      tension: 0.4
    },
  ],
};

const options = {
  responsive: true,
  elements: {
    point: {
      hoverRadius: 10,
      hoverBorderWidth: 4
    }
  },
  plugins: {
    legend: {
      display: false
    }
  },
  scales: {
    x: {
      grid: {
        display: false
      },
    },
    y: {
      suggestedMin: 90000,
      suggestedMax: 400000
    },
  },
};

export function Chartjs() {
  return (
    <div className="c-chart">
      <Line data={data} options={options} />
    </div>
  );
}