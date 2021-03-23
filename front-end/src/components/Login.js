import React from 'react';

export default function Login() {
   
        return (
            <div class="login-pg">
                <form class='mx-auto' style={{ width: '50%'}}>
                    <h3>Log In to Your NYU Account</h3>

                    <div className="form-group">
                        <label>NetID</label>
                        <input type="email" className="form-control"/>
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control"/>
                    </div>

                    <div className="form-group">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                            <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary btn-block" href="/">Log In</button>
                    <p className="forgot-password text-right">
                        <a href="/">Forgot Password</a>
                    </p>
                    
                </form>
            </div>
        );
    }
