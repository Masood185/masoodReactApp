import React, { Component } from 'react'
import axios from 'axios'

class PostData extends Component {
constructor(props){
    super(props)
     this.state={
         userId:'',
         title:'',
         body:'',
     }
}


txtvalidate1=e=>{
    const regex = /^[0-9]/;
    function validate(e) {
      const chars = e.target.value.split('');
      const char = chars.pop();
      if (!regex.test(char)) {
        e.target.value = chars.join('');
        console.log(`${char} is not a valid character.`);
      }
    }
    document.querySelector('#myInput').addEventListener('input', validate);

}

txtvalidate2=e=>{
    const regex = /[A-Za-z]/;
    function validate(e) {
      const chars = e.target.value.split('');
      const char = chars.pop();
      if (!regex.test(char)) {
        e.target.value = chars.join('');
        console.log(`${char} is not a valid character.`);
      }
    }
    document.querySelector('#myInput2').addEventListener('input', validate);

}

txtvalidate3=e=>{
    const regex = /[A-Za-z]/;
    function validate(e) {
      const chars = e.target.value.split('');
      const char = chars.pop();
      if (!regex.test(char)) {
        e.target.value = chars.join('');
        console.log(`${char} is not a valid character.`);
      }
    }
    document.querySelector('#myInput3').addEventListener('input', validate);

}

changeHandler = e =>{

    this.setState({[e.target.name]:e.target.value})

   
}



submitHandler =e=>{

    e.preventDefault()
    console.log(this.state)

    axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
    .then(response=>{
        alert(response.data,"Data Post Successfuly..")
        console.log(response)
    })
    .catch(error=>{
        console.log(error)
    })
}


    render(){  
        const{userId,title,body}=this.state  
        return (
        <div>
  <section className="content">
    <div className="container-fluid">
      <div className="row">
        {/* left column */}
        <div className="col-md-12">
          {/* jquery validation */}
          <div className="card card-primary">
            <div className="card-header">
              <h1 className="card-title">Post Data </h1>
            </div>
            {/* /.card-header */}
            {/* form start */}
            <form id="quickForm" onSubmit={this.submitHandler}>
              <div className="card-body">
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">User Id</label>
                  <input type="text" name="userId" id="myInput" onKeyPress={this.txtvalidate1} required className="form-control"  value={userId}  onChange={this.changeHandler}  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Title</label>
                  <input type="text" name="title" id="myInput2" required onKeyPress={this.txtvalidate2} value={title} className="form-control"  onChange={this.changeHandler}  />
                </div> <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Body</label>
                  <input type="text" name="body" id="myInput3" value={body}  onKeyPress={this.txtvalidate3} className="form-control"  onChange={this.changeHandler}  />
                </div>
               
              </div>
              {/* /.card-body */}
              <div className="card-footer">
                <button type="submit" className="btn btn-primary">Submit</button>
              </div>
            </form>
          </div>
          {/* /.card */}
        </div>
        {/*/.col (left) */}
        {/* right column */}
        <div className="col-md-6">
        </div>
        {/*/.col (right) */}
      </div>
      {/* /.row */}
    </div>{/* /.container-fluid */}
  </section>
</div>

    )
}
}
export default PostData