import React, { Component } from 'react';

class Component1 extends Component {
  constructor(props) {
    super(props)
  }
  
  componentWillMount() {
    console.log(11111111111111111)
    this.getInfo();
  }
  
  render() {
    return (
      <div>
        <div>Hello World!</div>
        <div>11111111111</div>
      </div>
    )
  }
  
  getInfo() {
//  let msg = fetch(`${urls}/users/getAll`);
  fetch('/workspace/users/getAll').then(function(res) { 
        if (res.status !== 200) { 
            console.log('Looks like there was a problem. Status Code: ' + res.status); return; 
        }  
        // 处理响应中的文本信息  
        res.json().then(function(data) { 
            console.log(data); 
        }); 
    }) 
    .catch(function(err) { 
        console.log('Fetch Error : %S', err); 
    })
  }
}

export default Component1;