import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        username: this.props.params.username,
        bio: "",
        tweet: "",
        tweets:[]
    };
  }

  componentDidMount() {
    axios
    .get("/posts/tweet", {
      params: {
        username: this.state.username
      }
    })
    .then(res => {
      console.log(res, "tweets!");
      this.setState({
        tweets: res.data
      });
    });
   
    axios
    .get("/users/bio", {
        params:{
            username: this.state.username
        }

    })
    .then(bio=>{
        console.log(bio)
        this.setState({
            bio: bio.data.bio
        })
    })

   
  }



   

  render() {
    return <div>
        <div>
            <a href = {'/feed/' + this.state.username} >
            <img id= 'upload_twitter' src='https://thomasclowes.com/content/images/2017/08/upload-1.png'></img>
            </a>
        </div>

       
        this is {this.state.username}'s Profile
       
        <div>
            {this.state.bio}
        </div>
        <div>
            -----Tweets-----
        </div>
        <div>
        {this.state.tweets.map(x => {
            return ( 
              <div>
                <h100> {x.caption}</h100>
              </div>
            );
          })}
        </div>

    </div>
    

  }
}

module.exports = Profile;
