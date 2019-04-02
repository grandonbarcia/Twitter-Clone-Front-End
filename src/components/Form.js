import React from "react";

class Form extends React.Component{
    constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
      event.preventDefault();
      const API_URL="https://apricot-tart-74469.herokuapp.com/tweets";
      const data = new FormData(event.target);
      const name = data.get('name');
      const message = data.get('message');
      document.getElementById("form").reset();

      const tweet = {
        name,
        message
      };


      fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify(tweet),
        headers: {
          'content-type' : 'application/json'
        }
      }).then(res => res.json())
        .then(newTweet => console.log(newTweet));



    }


    render() {
        return(
            <div>
                <form id="form" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Name</label>
                        <input type="text" className="form-control"  aria-describedby="name" placeholder="Enter Name" name="name"/>

                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">Tweet</label>
                        <textarea className="form-control" name="message" rows="3"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}

export default Form;
