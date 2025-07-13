import React from 'react';
class userClass extends React.Component{
   constructor(props) {
        super(props); // ✅ Always call super(props) first!;
        console.log("Child class constructor")
        this.state={
            count:0,
            userInfo:{
                name:"Deafult", // Initial values like in useState 
                login:"Default"
            }
        }
        console.log("Constructor - props:", this.props.name); // 👀 See what props are passed
    }
            
    async componentDidMount(){
        console.log("Child class componentDidMount", this.props.name);
        const api=await fetch("https://api.github.com/users/SinghGurnoor283")
        const data=await api.json()
        console.log(data);
        this.setState({
            userInfo:data,
        })
    }
    render(){
        const {name,login,avatar_url}=this.state.userInfo
        console.log("child render method",this.props.name)
        return (
            <div className="userCard">
                {/* <h2>Name: {this.props.name}</h2>
                <h3>singhgurnoor283@gmail.com</h3>
                <h4>Full stack developer</h4>*/}
                <h5>Count:{this.state.count}</h5> 
                <h2>Name: {name}</h2>
                <h3>{login}</h3>
                <h4>Full stack developer</h4>
                <img src={avatar_url}></img>
                <button onClick={()=>{
                    this.setState({
                        count:this.state.count+1
                    })
                }}>Counter</button>
            </div>
        )
    }
}
export default userClass;