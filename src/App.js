import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';

// @material-ui/core components
import CheckboxLabels from './checkbox';
import dataService from './data/data.service';

const income = dataService.query();
function App () {
  const [data, setData] = useState({});
  const [showData, setShowData] = useState({});

  useEffect(() => {
    const result = update(income);
    setData(result);
    const yearFilter = { ...result };
    yearFilter.datasets = yearFilter.datasets.filter(dt => dt.label === '2020');
    setShowData(yearFilter);
  }, []);

  function update (values) {
    const result = {
      labels: ['January', 'February', 'March',
        'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      datasets: []
    };

    const yearColor = {
      2020: 'rgba(255, 206, 86, 0.9)',
      2019: 'rgba(54, 162, 235, 0.6)',
      2018: 'rgba(255, 99, 132, 0.6)'
    };

    const years = Object.keys(values);
    for (const year of years) {
      const data = values[year];
      const serverData = Object.values(data);
      result.datasets.push({
        label: year,
        backgroundColor: yearColor[year],
        borderColor: 'rgba(100,100,100,100)',
        borderWidth: 2,
        data: serverData
      });
    }

    return result;
  }

  function updateYears (params) {
    const copyData = { ...data };
    const datasets = copyData.datasets;
    const newDatasets = datasets.filter(dt => params[dt.label]);
    copyData.datasets = newDatasets;
    setShowData(copyData);
  }

  return (
    <div style={{ margin: 100, width: 1280 }}>
      <Bar
        data={showData}
        options={{
          title: {
            display: true,
            text: 'Enigma monthly sales and P&L history',
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