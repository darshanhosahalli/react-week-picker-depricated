import React from 'react';
import ReactDOM from 'react-dom';
import WeeklyCalendar from './lib/weekly-calendar';

interface AppProps {
  color?: string,
}

class App extends React.Component<AppProps> {
  render() {
    return <div>
              <WeeklyCalendar/>
              <h1>title</h1>
              <h2>title</h2>
              <h3>title</h3>
            </div>;
  }
}

ReactDOM.render(<App/>, document.querySelector('#root'));
