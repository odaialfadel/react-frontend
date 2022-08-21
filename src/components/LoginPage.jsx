import React, {Component} from 'react';

class LoginPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            emailId: '',
            password: ''
        }
        this.changeEmailIdHandler = this.changeEmailIdHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.login = this.login.bind(this);
    }

    changeEmailIdHandler = (event) => {
        this.setState({emailId: event.target.value});
    }

    changePasswordHandler = (event) => {
        this.setState({password: event.target.value});
    }

    login() {
        this.props.history.push('/employees');
    }

    render() {
        return (
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className='card col-md-6 offset-md-3'>
                            <h3 className='text-center'>Add Employee</h3>
                            <div className='card-body'>
                                <form>
                                    <div className='form-group'>
                                        <label>Email Address:</label>
                                        <input placeholder='Email Address' name='emailId' className='form-control'
                                               value={this.state.emailId} onChange={this.changeEmailIdHandler}/>
                                    </div>
                                    <div className='form-group'>
                                        <label>Password:</label>
                                        <input placeholder='Password' name='emailId' className='form-control'
                                               value={this.state.password} onChange={this.changePasswordHandler}/>
                                    </div>
                                    <button className='btn btn-success' onClick={this.login}>Login</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginPage;