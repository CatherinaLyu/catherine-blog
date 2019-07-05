/**
 * created by catherina at 2018/08/08 17:04
 * login page
 */

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render () {
    return (<div className="container-fluid">
      <div className="login_logo">
        <div className="logo"></div>
      </div>
      <div className="login_content">
        <form className="form-horizontal">
          <div className="form-group">
            <label for="userName" className="col-sm-2 control-label">用户名</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="用户名" placeholder="用户名" />
            </div>
          </div>
          <div className="form-group">
            <label for="password" className="col-sm-2 control-label">密码</label>
            <div className="col-sm-10">
              <input type="password" className="form-control" id="password" placeholder="密码" />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <div className="checkbox">
                <label>
                  <input type="checkbox" /> Remember me
                </label>
              </div>
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button type="submit" className="btn btn-default">登录</button>
            </div>
          </div>
        </form>
      </div>
    </div>);
  }
}