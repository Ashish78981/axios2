import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from './axios.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      kind: '',
      data: []
    };
  }
  
  componentDidMount(){
    axios
      .get('http://m.lowes.com/CatalogServices/product/nvalue/v1_0?nValue=4294857975&maxResults=6&showURL=1&rollUpVariants=1&showUrl=true&storeNumber=0595&priceFlag=rangeBalance&showMarketingBullets=1')
      .then(({ data })=> {
      	this.setState({ 
          kind: data.kind, 
          data: data.data.children
        });
      })
      .catch((err)=> {})
  }
      
  render() {
    const child = this.state.data.map((el, index) => {
      return <div key={index}>
        <p>Title - { el.data.title }</p>
        <p>Author - { el.data.author }</p>
      </div>
    });

    return <div>
      <p>{ this.state.kind }</p>
      <div>{ child }</div>
    </div>;
  }
}

ReactDOM.render(
  <TableUser />,
  document.getElementById('container')
);


export default App;
