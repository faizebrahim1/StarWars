import React, { Component } from 'react';
import './App.css';
import { IFilmStore } from '../stores/filmStores'
import Header from './Header'
import Body from './Body'
import { inject, observer } from 'mobx-react';

interface AppProps {
  filmStore?: IFilmStore
}

@inject('filmStore')
@observer
class App extends Component<AppProps> {
  // function App() {
  render() {
    return (
      <div>
        <Header />
        <Body />
      </div>
    )
  }
}
export default App;