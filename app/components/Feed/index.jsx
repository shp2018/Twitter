import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

class Feed extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: this.props.params.username,
      tweets: [],
      currentTweet: "",
      bio: "",
    };
  }

  componentDidMount() {
    
   
  }
  handleTweetSubmit(e) {
    alert("Updating Tweet! Click Ok to Redirect to Profile Page");
    axios
      .post("/posts/tweet", {
        tweet: this.state.currentTweet
      })
      .then(tweet => {
        window.location = "/profile/" + this.state.username;
      });
  }

  handleTweets(e) {
    this.setState({
      currentTweet: e.target.value
    });
  }
  handleChangebio(e){
    this.setState({
        bio: e.target.value
    })
}
handleClickbio(){
  alert('Updating Bio Click ok to redirect to Profile Page')
axios
.post("/users/bio", {
  bio: this.state.bio,
  filetoUpload: new FormData()
})
.then(res => {
    window.location = "/profile/" + this.state.username;

});
}

  render() {
    return (
      <div>
          <div>edit your bio!</div>
           <div>
            <input type= 'text' onChange={this.handleChangebio.bind(this)}></input>
            <button onClick={this.handleClickbio.bind(this)}>Submit</button>
           

        </div>
        <div>upload a new tweet!</div>
        <input type="text" onChange={this.handleTweets.bind(this)}></input>
        <button onClick={this.handleTweetSubmit.bind(this)}>Tweet!</button>
        <div>
        
        </div>
      </div>
    );
  }
}

module.exports = Feed;
