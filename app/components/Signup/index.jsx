import React            from 'react';
import axios            from 'axios';

class Signup extends React.Component {
  constructor (props) {
    super (props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeInput = this.changeInput.bind(this);

    this.state = {
        username: '',
        password: '',
      
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
    axios.post('/auth/signup', {
       username: context.state.username,
       password: context.state.password,
      
    })
    .then((response) => {
      console.log(response, "line 39");
      window.location = '/login';
    })
    .catch((err) => {
      console.log(err, "line 42");
    })
  }

  render() {
    return (
      <div>
      <div className= "login-container">
         <img id = "logo-1" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/800px-Instagram_logo.svg.png"  height="100" width="300"/>
         <div id="OR-1">
           <div id= "signup-tosee">
           Sign up to see photos and videos from your friends.
           </div>
           <div >
          <a href="http://www.chicagonow.com/coming-to-terms/files/2015/09/Facebook-Down.png">
                        <img id = "facebook" src="https://support.shopgate.com/hc/en-us/article_attachments/207878347/log_in_with_facebook_button.png"/>
                    </a>
             
          </div>
         ----------------------------- OR -----------------------------
          </div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-inputs">
            <div >
            <input id="username-1"
              onChange={this.changeInput}
              className="login-input"
              type='text'
              placeholder='username'
              data-type='username'
              />
              </div>
            <div >
           
            <input id="username-2"
              onChange={this.changeInput}
              className="login-input"
              type='password' 
              placeholder='password'
              data-type='password'
              />
              </div>
           
           
           
           
            <div className="submit">
              <button id="submit-1" className="btn btn-success">Sign Up</button>
            </div>
          </div>
          <div id="by">
          By signing up, you agree to our Terms , Data Policy and Cookies Policy .
          </div>
        </form>
        <div id="error">
        </div>
      </div>
      <div id="signup">
            Have an Account? <a href ="/login">Login</a>
          </div>
        <div >
          <a href="https://github.com/shp2018">
                        <img id="github" src="http://pngimg.com/uploads/github/github_PNG67.png"/>
                    </a>
             
          </div>
          <div id = "checkout">
          Check out my Github.
          </div>
    </div>
    );
  }
}

module.exports = Signup;
