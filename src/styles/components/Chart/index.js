
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Chart = ({ transactions }) => {
  const expenseTotal = transactions
    .filter(item => item.expense)
    .reduce((acc, item) => acc + Number(item.amount), 0);
  const incomeTotal = transactions
    .filter(item => !item.expense)
    .reduce((acc, item) => acc + Number(item.amount), 0);

  const data = {
    labels: ['Entradas', 'Saídas'],
    datasets: [
      {
        label: 'Total',
        data: [incomeTotal, expenseTotal],
        backgroundColor: ['green', 'red'],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Relatório de Entradas e Saídas' },
    },
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div style={{ width: '100%', maxWidth: '600px', margin: '20px auto' }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default Chart;
