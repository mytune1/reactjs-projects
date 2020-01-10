import React from 'react';
import './App.css';
import Playground from './Hooks-App/Playground';
import Paint from './Hooks-App/Component/Paint';
// import LoaderHOCCC from '../src/HOC/LoaderHOC';


import { connect } from 'react-redux'
import { anotherName ,addWish} from './Action/Action'

// import useFetch from './Hooks/HookReact';
// import AsyncAwait from '../src/AsyncAwait';

// referance :  https://www.valentinog.com/blog/hooks/


//@LoaderHOCCC   //passing value by decoratore in HOC


function App(props) {
  // const data = useFetch("https://api.coinmarketcap.com/v1/ticker/?limit=10");
  const mywish = props.mywish.map((item, key) => {
    return <h1 key={Math.random()}>{item}</h1>
  })
  console.log(props)
  return (

    <div className="App">
      <h1>My name is {props.myname} </h1>
      {mywish}
      <button onClick={() => { props.changeName() }}>Change It</button>
      <button onClick={() => { props.addWish() }}>Add It</button>
      <header className="App-header">

        {/* <useFetch/> */}
        {/* <AsyncAwait/> */}
        {/* <ul>
          {data.map(el => (
            <li key={el.id}>{el.available_supply}</li>
          )).}
        </ul> */}

        <Playground />
        <Paint />
      </header>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    myname: state.name,
    mywish: state.wish
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeName: () => { dispatch(anotherName()) },
    addWish : ()=>{ dispatch(addWish()) }
  }
}

// export default LoaderHOCCC(App);
export default connect(mapStateToProps, mapDispatchToProps)(App);
