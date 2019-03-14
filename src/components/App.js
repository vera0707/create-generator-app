import React from 'react';
import {connect}  from 'react-redux';
import {fetchList,createProps} from '../actions/listActions';



class App extends React.Component{
    constructor(props){
        super(props);
        this.state = { title :'',body:'' };
    }

    componentDidMount(){
        this.props.fetchList();
    }

    componentWillReceiveProps(newProps){
        console.log('newProps:',newProps);
    }

    inputChange(e){
        const { name,value } = e.target;
        this.setState({ [name]: value });
    }

    dataSubmit(){
        this.props.createProps(this.state);
    }

    render(){
        const {title,body} = this.state;
        return(
            <div>
                <input type="text" placeholder="请输入标题" name="title" value={title} onChange={this.inputChange.bind(this)} />
                <input type="text" placeholder="请输入标题"  name="body" value={body} onChange={this.inputChange.bind(this)} />
                <button onClick={this.dataSubmit.bind(this)}>提交</button>
            </div>
        )
    }
}

const mapStateTpProps = state =>({
    list: state.list,
});

export default connect(mapStateTpProps,{fetchList,createProps})(App);