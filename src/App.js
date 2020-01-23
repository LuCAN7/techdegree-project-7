import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import API_KEY from './config';

import Search from './components/Search';
import Nav from './components/Nav';
import Gallery from './components/Gallery';
import NotFound from './components/NotFound';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      isLoading: true,
      query: null,
      imgs: []
    };
   
  }
 
  componentDidMount(){
    // After App Component mounts run search method 
    this.handleSearch('sunsets'); 
  }

  handleSearch = (query) => {
    // Place interpolate stirng into a string
    const URL = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY}&tags=${query}&content_type=1&per_page=24&format=json&nojsoncallback=1`;
     
    fetch(URL)
      .then( (response) => {
        return response.json();
      })
      .then( (data) => {
          this.setState({
          isLoading: false,
          query: query,
          imgs: data.photos.photo
        })
      })
      .catch((error) => {
        console.log('Oops...Something went wrong!', error.message);
      })  
  }


  render(){
    
    return (
      <div className="App">
        <p>Welcome! to ReactGallery</p>

        <Search onSearch={this.handleSearch} {...this.props}/>      
        <Nav onSearch={this.handleSearch} />        
            
        <Switch>
          <Route exact path="/" render={(props) => <Gallery onSearch={this.handleSearch} data={this.state.imgs} query={this.state.query} loading={this.state.isLoading} {...props}/> }/>

          <Route  path="/Cats" render={(props) => <Gallery onSearch={this.handleSearch} data={this.state.imgs} query={'Cats'} loading={this.state.isLoading} {...props}/> }/>
          <Route  path="/Dogs" render={(props) => <Gallery onSearch={this.handleSearch} data={this.state.imgs} query={'Dogs'} loading={this.state.isLoading} {...props}/> }/>
          <Route  path="/Computers" render={(props) => <Gallery onSearch={this.handleSearch} data={this.state.imgs} query={'Computers'} loading={this.state.isLoading} {...props}/> }/>
  
          <Route path="/search/:id" render={(props) => <Gallery onSearch={this.handleSearch} data={this.state.imgs} query={this.state.query} loading={this.state.isLoading} {...props}/> }/> 
         
          <Route render={() => <NotFound />} />
        </Switch>
        
      </div>
     
    )
  } 
}

export default App;