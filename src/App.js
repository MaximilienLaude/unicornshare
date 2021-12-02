import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from './Header'
import Nav from './Nav'
import Footer  from './Footer';
import Main from './Main'
import Image from './Image'




class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      image: []
    }
  };

  componentDidMount(){
    this.getAllPicture();
  }

  componentDidUpdate(){
    console.log('message', this.state.image, typeof(this.state.image))
  }

  getAllPicture = () => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ image: data });
      });
  }



  render(){
    return(
      <>
        <Header />
        <Router>
          <Switch>
            <Route path='/' exact>
              <Nav />
              <Main image={this.state.image} />
            </Route>
            <Route path='/pictures/:id' component={Image}>
            </Route>
          </Switch>
        </Router>
        <Footer />
      </>
    )
  }
}

export default App;