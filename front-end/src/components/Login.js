import React, {useState} from 'react';
import {GoogleLogin, GoogleLogout} from 'react-google-login';

function Login(props) {
  
  const [user, setUser] = useState(null);

  const loginSuccess = (res) => {
    console.log('Login success', res);
    setUser(res.profileObj);
    props.onAuth(res.profileObj);
  };
  
  const loginFailure = error => {
    console.log('Login failure', error);
  };
  
  const logoutSuccess = (res) => {
    console.log('Logout success', res);
    setUser(null);
    props.onAuth(null);
    localStorage.removeItem('userObj');
  };
  
  const logoutFailure = error => {
    console.log('Logout failure', error);
  }
  
  return (
     <div>
      {user ? <div>
        <GoogleLogout
          clientId={'943141841763-aiogdumhgsrv58o0o27gmu2pquiro6gm.apps.googleusercontent.com'}
          onLogoutSuccess={logoutSuccess}
          onFailure={logoutFailure}
        />
      </div> :
        <GoogleLogin
          clientId={'943141841763-aiogdumhgsrv58o0o27gmu2pquiro6gm.apps.googleusercontent.com'}
          buttonText="Login"
          onSuccess={loginSuccess}
          onFailure={loginFailure}
          isSignedIn={true}
        />}
    </div>
  );
}

export default Login;
