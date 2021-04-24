import "./App.css";
import ScatterGrid from "./ScatterPlots/ScatterGrid";
import LineGrid from "./LineCharts/LineGrid";
import BarGrid from "./BarCharts/BarGrid";
import PieGrid from "./PieCharts/PieGrid";
import Home from "./Components/Home";
import NotFound from "./Components/NotFound";
import BubbleGrid from "./BubbleCharts/BubbleGrid";
import TimeSeriesGrid from "./TimeSeries/TimeSeriesGrid";
import Navbar from "./Components/Navbar";
import { Route, Switch } from "react-router-dom";
function App() {
  return (
    <div>
    <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/scatterz" component={ScatterGrid} />
        <Route exact path="/piez" component={PieGrid} />
        <Route exact path="/barz" component={BarGrid} />
        <Route exact path="/linez" component={LineGrid} />
        <Route exact path="/bubblez" component={BubbleGrid} />
        <Route exact path="/timeseries" component={TimeSeriesGrid} />
        <Route path="*" exact={true} component={NotFound} />
      </Switch>
    </div>
  );
}
export default App;
