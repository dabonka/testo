import React, {Component} from 'react';
import './App.css';


const list = [
  {
    title: 'React1',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'React2',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 1,
  },
  {
    title: 'React3',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 2,
  },
  {
    title: 'React4',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 3,
  },
  {
    title: 'React5',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 4,
  },
  {
    title: 'Redux6',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 5,
  },
];

class App extends Component {
  constructor(props){
    super(props);
    
    this.state = {
      list,
    }
  }

  render(){
    return(
      <div>
        {this.state.list.map(item => {
          return (
            <div key={item.objectID}>
              <p>{item.title}</p>
            </div>
          )
        })}
      </div>
    )
  }
}


export default App;