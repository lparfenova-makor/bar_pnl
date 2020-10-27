
const chartData = require('./income.json');
const num = require('./num.json');

const query = () => {
  console.log('num');
  return num;
};

const getLabels = () => {
  const labels = chartData.map(data => data.month);
  return labels;
};

const getYear = () => {
  const year = chartData.map(data => data.datasets.label);
  return year;
};

const getIncomeTotals = () => {
  const incomeTotals = chartData.map(data => data.datasets.data);
  return incomeTotals;
};

export default {

  query,
  getLabels,
  getYear,
  getIncomeTotals
}
;