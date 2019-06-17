import React from 'react';
import { connect } from 'react-redux';
import {getData} from '../../actions/index';
import './App.css';


class App extends React.Component {

  componentDidMount() {
    this.props.getData();
  }

  render() {
    const {data, loading} = this.props;

    if(data) {
      console.log("Data injected into render", data);
      console.log(loading);
    }
    return (
      <div className="App">
        <p>It's Working!!!</p>
      </div>
    )
  }
};

const mapDispatchToProps = {
  getData: getData
};

const mapStateToProps = (state) => ({
  data: state.data,
  loading: state.loading
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
