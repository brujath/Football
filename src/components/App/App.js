import React from 'react';
import { connect } from 'react-redux';
import {getData} from '../../actions/index';
import './App.css';


class App extends React.Component {

  componentDidMount() {
    this.props.getData();
  }

  render() {
    const {data} = this.props;

    return (
      <div className="main-container">
        <h1>Match Highligths</h1>
        {data? data.map((indData, index) => {
          return (
            <div key={index} className="fixtures-container">
              <h2 >{indData.competition.name}</h2>
              <h4>{indData.title}</h4>
              <div className="indiFixture">
                <div className="video-container" dangerouslySetInnerHTML={{__html:indData.embed}}></div>
              </div>
            </div>
            )
        }): null}
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
