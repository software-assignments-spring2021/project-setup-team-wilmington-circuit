import React, {useState} from 'react';
import {GoogleLogin, GoogleLogout} from 'react-google-login';

const clientId = '943141841763-aiogdumhgsrv58o0o27gmu2pquiro6gm.apps.googleusercontent.com';

function Login() {
  
  const [user, setUser] = useState(null);
  
  const loginSuccess = (res) => {
    console.log('Login success', res);
    setUser(res.profileObj);
  };
  
  const loginFailure = error => {
    console.log('Login failure', error);
  };
  
  const logoutSuccess = (res) => {
    console.log('Logout success', res);
    setUser(null);
  };
  
  const logoutFailure = error => {
    console.log('Logout failure', error);
  }
  
  return (
     <div>
      {user ? <div>
        <GoogleLogout
          clientId={clientId}
          onLogoutSuccess={logoutSuccess}
          onFailure={logoutFailure}
        />
      </div> :
        <GoogleLogin
          clientId={clientId}
          buttonText="Login"
          onSuccess={loginSuccess}
          onFailure={loginFailure}
          isSignedIn={true}
        />}
    </div>
  );
}

export default Login;
