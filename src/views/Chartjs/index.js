import { Line } from 'react-chartjs-2';
import { customTooltip } from './components';
import { nFormatter } from '../../utils';
import './index.css';

export function Chartjs() {
  const data = {
    labels: ['16 mar', '17 mar', '18 mar', '19 mar', '20 mar', '21 mar', '22 mar'],
    datasets: [
      {
        label: 'Visitas',
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
        label: 'Contactos',
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
    scales: {
      x: {
        grid: {
          display: false,
          drawBorder: false
        },
      },
      y: {
        min: 90000,
        max: 400000,
        grid: {
          drawBorder: false
        },
        ticks: {
          callback: function(value, index, values) {
            return nFormatter(value);
          }
        }
      }
    },
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        enabled: false,
        external: customTooltip,
        callbacks: {
          label: (context) => {
            return {
              label: context.dataset.label,
              value: context.formattedValue,
            };
          },
        },
      }
    },
  };

  return (
    <div className="c-chart">
      <Line data={data} options={options} />
    </div>
  );
}