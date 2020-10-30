
import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';

// @material-ui/core components
import CheckboxLabels from './checkbox';
import dataService from './data/data.service';
// import OutlinedButtons from './buttons';


const state = {
  labels: ['January', 'February', 'March',
    'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  datasets: [
    {
      label: '2020',
      backgroundColor: 'color(window.chartColors.red).alpha(0.5).rgbString(),',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: dataService.query(),
    }
  ]
};

function App() {
  const [data, setData] = useState({});
  const [showData, setShowData] = useState({});
  const [label, setLabel] = useState('choose the data');
  const [isReportChanged, setIsReportChanged] = useState(false);
  


  useEffect(() => {
    const result = update(state);
    console.log('data', state.datasets.data)
    setData(result);
    const yearFilter = { ...result };
    yearFilter.datasets = yearFilter.datasets.filter(dt => dt.label === '2020');
    setShowData(yearFilter);
  }, []);

  function update(values) {
    const result = {
      labels: ['January', 'February', 'March',
        'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      datasets: dataService.query(),
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

  function parent(fetched, label) {
    console.log('query', fetched);

    const result = update(fetched);
    setData(result);
    handleReportChange(result);
    setLabel(label);

  }

  function updateYears(params, isReportChanged = false, result = data) {
    const copyData = { ...result };
    console.log(copyData);
    const datasets = copyData.datasets;
    const newDatasets = datasets.filter(dt => params[dt.label]);
    copyData.datasets = newDatasets;
    setShowData(copyData);
    setIsReportChanged(isReportChanged);
  }

  function handleReportChange(result) {
    const params = {
      2020: true,
      2019: false,
      2018: false
    };
    setIsReportChanged(true);
    updateYears(params, true, result);
  }

  return (
    <div style={{ margin: 100, width: 1280 }}>
      {/* <OutlinedButtons parent={parent} /> */}
      <Bar
        parent={parent}
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
      <CheckboxLabels updateYears={updateYears} isReportChanged={isReportChanged} />
    </div>
  );
}

export default App;