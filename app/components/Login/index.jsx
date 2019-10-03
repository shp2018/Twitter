import React            from 'react';
import axios            from 'axios';

class Login extends React.Component {
  constructor (props) {
    super (props);
    console.log(props)
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeInput = this.changeInput.bind(this);

    this.state = {
        username: '',
        password: '',
        error: ''
    
    };
  }
  changeInput(event) {
    const type = event.target.dataset.type;
    const value = event.target.value;

    this.setState({
      [type]: value
    });
  }
  handleSubmit(e) {
    const context = this;
    e.preventDefault();
    axios.post('/auth/login', {
       username: context.state.username,
       password: context.state.password,
       
    })
    .then((response) => {
      console.log("line 34", response);
      window.location = '/profile/' + context.state.username;
    })
    .catch((err) => {
      this.setState({
        error: err.response.data.message
      });
    })
  }
  render() {
    return (
    
    <div>
      <div className= "login-container">
        
         <img className = "logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/800px-Instagram_logo.svg.png"  height="100" width="300"/>
        <div className ="error-message">{this.state.error}</div>
       
        <form onSubmit={this.handleSubmit}>
          
          <div className="form-inputs" >
            <input id="username"
              onChange={this.changeInput}
              className="login-input"
              type='text'
              placeholder='username, username, or username'
              data-type='username'
              />
            <div ></div>
            <input id="password"
              onChange={this.changeInput}
              className="login-input"
              type='password' 
              placeholder='password'
              data-type='password'
              />
            <div></div>
            <div className="submit">
              <button id="submit" className="btn btn-success">Log In</button>
            </div>
            <div id= "OR">
            -------------------------------- OR --------------------------------
            </div>
            <div className= "forgot">
              <a href="https://media.makeameme.org/created/sorry-i-cant-0vq1g8.jpg">Forgot Password?</a>
              
            </div>
            <div className ="forgot add-margin">
                
            </div>
            
          </div>
       
        
        </form>
        <div id="error">
        </div>
      </div>
      <div id="signup">
            Don't have an Account? <a href ="/signup">Signup</a>
          </div>
        <div >
          <a href="https://github.com/shp2018">
                        <img id="github" src="http://pngimg.com/uploads/github/github_PNG67.png"/>
                    </a>
             
          </div>
          <div>
          Check out my Github.
          </div>
    </div>
      
    );
  }
}


    
  
  

    


module.exports = Login;