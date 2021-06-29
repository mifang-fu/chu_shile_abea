import React from 'react';

class Searchbar extends React.Component {
  
    constructor(props) {
        super(props);
        this.state = {
          data:[
            "Apples",
            "Broccoli",
            "Chicken",
            "Duck",
            "Eggs",
            "Fish",
            "Granola",
            "Hash Browns"
          ],
          search:'' 
        };//內部自定義的變數
       
      }

      insert_text = (e) => { //利用本身事件(e)找到自己
        this.setState({
            search:e.target.value
        })
        console.log(e.target.value);//印出State.search狀態
       
      }
  render() {

    return(
      <div>
         請輸入值:<input type="text" onChange={this.insert_text}/>
 
      </div>
    );
  } 

}
export default Searchbar;