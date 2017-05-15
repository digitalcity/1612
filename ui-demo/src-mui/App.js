import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import RaisedButton from 'material-ui/RaisedButton';
// import DatePicker from 'material-ui/DatePicker';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
console.log(lightBaseTheme);

let myTheme = {
  fontFamily: '微软雅黑',
  palette:{
    primary1Color: '#000'
  }
}

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(myTheme)}>
        <div>
          <RaisedButton label="你好" primary={true}/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
