import './Chart.css';
import ChartBar from './ChartBar';
function Chart(props) {
  let dataPoints = props.chartData.map(result => result.count);
  let maximumValue = Math.max(...dataPoints);
  return (
    <div className='chart'>
      {
        props.chartData.map(result => <ChartBar key={result.label} count={result.count} label={result.label} maxValue={maximumValue} />)
      }
    </div>
  )
}
export default Chart;
