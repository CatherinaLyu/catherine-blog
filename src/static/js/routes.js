import React from 'react';

import { HashRoute as Router, IndexRoute } from 'react-router-dom';


class router extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (<div className="app">
      <aside>我是菜单栏</aside>
      <main>我是主界面。啦啦啦啦</main>
    </div>);
  }
}