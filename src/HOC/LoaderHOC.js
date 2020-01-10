import React, { Component } from "react";
import './loader.css';
const LoaderHOCCC= (WrappedComponent) =>{
    return class LoaderHOC extends Component{
        render(){
            return this.props.count === 30 ?  <div className="loader"></div> : <WrappedComponent {...this.props}/>
            // return <div className="loader"></div>;
        }
    }
}
export default LoaderHOCCC;