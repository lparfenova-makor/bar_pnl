
import './App.css';
import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
// import data from './data/income.json'
import CheckboxLabels from './checkbox';
import OutlinedButtons from './buttons';
// import num from './data/num.json'

const state = {
  labels: ['January', 'February', 'March',
    'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  datasets: [
    {
      label: '2020',
      backgroundColor: 'color(window.chartColors.red).alpha(0.5).rgbString(),',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [65, 59, 80, 81, 56, 60, 50, 70, 71, 46]
    }
  ]
};
function App () {
  const [showData, setShowData] = useState(state);

  function parent (prop) {
    console.log('prop', prop);
    const data = { ...showData };
    data.datasets[0].data = prop;
    setShowData(data);
  }

  return (
    <div>
      <OutlinedButtons parent={parent} />
      <Bar
        data={state}
        options={{
          title: {
            display: true,
            text: 'Average Rainfall per month',
            fontSize: 20
          },
          legend: {
            display: true,
            position: 'right'
          }
        }}
      />
      <CheckboxLabels />
    </div>
  );
}

export default App;
