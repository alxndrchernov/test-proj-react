import React from 'react';
import {loginApi} from "./API/api";
import {setCookie} from "./common/cookie";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.name = '';
    this.password = '';
  }
  handleClick = async (e) => {
    const { handleLoginClick } = this.props;
    handleLoginClick(true);
    await loginApi(this.name,this.password).then(async res=>{
      const response = await res.json();
      setCookie('auth',response)
    })
  }

  render() {
    return (
      <div className="login">
        <form>
          <div>
            <input required onInput={e=>this.name = e.target.value} type="text" title="Введите логин" />
          </div>
          <div>
            <input required onInput={e=>this.password = e.target.value} type="text" title="Введите пароль" />
          </div>
          <button onClick={this.handleClick}> Войти </button>
        </form>
        Sminova Anastasia IVT-41-18
      </div>
    )
  }
}

export default LoginForm;
