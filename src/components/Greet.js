import React, { Component } from 'react';
import axios from "axios";

class Greet extends Component{
    constructor(props){

        super(props);
this.state={
    posts:[],
    errorMsg:"",
};


    }

    componentDidMount() {
        
        axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((response)=>{
          this.setState({
              posts:response.data,
          });

        })
        .catch((error)=>{

            this.setState({errorMsg:"Error loading page!!"});
        });

    }
    
    render(){

        const{posts,errorMsg}=this.state;
        return(
           
<div>
<h1>Dashboard</h1>
<table>
      <thead>
        <tr>
        <th>Id</th>
          <th>User Id</th>
          <th>Title</th>
          
          <th>Body</th>
         
        </tr>
      </thead>
      <tbody>
    {
        posts.length
        ?posts.map((post)=>
        <tr>
          <td>{post.id}</td>
          <td>{post.userId}</td>
          <td>{post.titke}</td>
          <td>{post.body}</td>
          
        </tr>
        )
        :null
    }
    </tbody>
    </table>
    {errorMsg ? <div>{errorMsg}</div>:null}
</div>

        );
    }
}
export default Greet