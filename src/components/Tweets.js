import React from "react";

//Create Tweets class
class Tweets extends React.Component{
    constructor(props){
    super(props);

    //Add 'tweets' property to state
    this.state = { tweets: [] };
    }

    //Show all tweets in db
    showTweets() {

      //Declare api url
      const API_URL="https://cherry-crumble-31789.herokuapp.com/tweets";

      //Make fetch request to api url
      fetch(API_URL, {
        method: 'GET'
        //convert resposne with json
      }).then(res => res.json())
        //set 'tweets' property to all of the data in db
        .then(data => this.setState({tweets: data}));

    }
    //clear interval
    componentDidMount() {
      clearInterval(this.interval);
    }

    //refresh page to show tweets every 1 millisecond
    componentWillMount() {
      this.interval = setInterval(() => this.showTweets(), 1000  );
    }



    //render tweets
    render() {

        //Set local variable 'tweets' to state 'tweets'
        var tweets = this.state.tweets;

        //Map all tweets to bootstrap cards
        var list = tweets.map(( tweet, i ) =>
        <div key={i} className="card">
          <div className="card-header">
            {tweet.created}
          </div>
          <div className="card-body">
            <blockquote className="blockquote mb-0">
              <p>{tweet.message}</p>
              <footer className="blockquote-footer">{tweet.name}</footer>
            </blockquote>
          </div>
        </div>
        );

        //Return list of tweets
        return(
            <div>

                {list.reverse()}

            </div>
        );
    }
}

export default Tweets;
