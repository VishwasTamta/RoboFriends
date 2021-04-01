import React from 'react';

class ErrorBoundry extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, info){
        this.setState({hasError: true})
    }
    render(){
        if(this.state.hasError){
            return <h1 className='tc f1'>Oooops, That is not good something went wrong</h1>
        }else{
            return this.props.children
        }
    }
}

export default ErrorBoundry;