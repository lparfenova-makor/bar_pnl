
import './App.css';
import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
// import data from './data/income.json'
import CheckboxLabels from './checkbox';
import OutlinedButtons from './buttons';
import income from './data/income.json';
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
    },
    {
      label: '2019',
      backgroundColor: 'red',
      borderColor: 'rgba(100,100,100,100)',
      borderWidth: 2,
      data: [65, 59, 80, 81, 56, 60, 50, 70, 71, 46]
    },
    {
      label: '2018',
      backgroundColor: 'blue',
      borderColor: 'rgba(100,100,100,100)',
      borderWidth: 2,
      data: [65, 59, 80, 81, 56, 60, 50, 70, 71, 46]
    }
  ]
};

function App () {
  const [data, setData] = useState({});
  const [showData, setShowData] = useState({});

  useEffect(() => {
    zalupka();
  }, []);

  function zalupka () {
    const result = {
      labels: ['January', 'February', 'March',
        'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      datasets: []
    };

    const years = Object.keys(income);
    for (const year of years) {
      const data = income[year];
      const values = Object.values(data);
      result.datasets.push({
        label: year,
        backgroundColor: 'red',
        borderColor: 'rgba(100,100,100,100)',
        borderWidth: 2,
        data: values
      });
    }

    setData(result);
    const something = { ...result };
    something.datasets = something.datasets.filter(dt => dt.label === '2020');
    setShowData(something);
  }

  function parent (prop) {
    console.log('prop', prop);
    const localState = { ...state };
    localState.datasets[0].data = prop;
    setShowData(localState);
    console.log('state', state);
  }

  function updateYears (params) {
    const copyData = { ...data };
    const datasets = copyData.datasets;
    const newDatasets = datasets.filter(dt => params[dt.label]);
    copyData.datasets = newDatasets;
    setShowData(copyData);
  }

  return (
    <div>
      <OutlinedButtons parent={parent} />
      <Bar
        data={showData}
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
      <CheckboxLabels updateYears={updateYears} />
    </div>
  );
}

export default App;
