import react from "react";

export default class userList extends react.Component{
    state = {
        websitePage:'Your List',
    }
    
    render (){
        return (
            <div>
                <h1>{this.state.websitePage}</h1>
            </div>
        );
    }

}