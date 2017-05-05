import React from 'react';

import { withRouter } from 'react-router'

class Test extends React.Component{
  render(){
    console.log('test=====',this.props);
    return(
      <div>
        test
        <button >test 去about页面</button>
      </div>
    )
  }
}

export default withRouter(Test);
