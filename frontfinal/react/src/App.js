/* eslint-disable */
import 'react-perfect-scrollbar/dist/css/styles.css';
import { useRoutes } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import GlobalStyles from 'src/components/GlobalStyles';
import 'src/mixins/chartjs';
import theme from 'src/theme';
import routes from 'src/routes';
import { Provider } from './Context';
import { Actions } from './Actions';
import React, { Component } from 'react';

const App = () => {
  //const [ authState, setAuthState ] = useState(false);
  const routing = useRoutes(routes);
  const data = Actions();

  class FilteredList extends Component{
    constructor(props){
      super(props)
      this.state = {
        data:[],
        search:''
      }
    }
    componentDidMount(){
      this.setState({
         data:[
           data
         ],
        search:''
      }
      )
    }
    updateSearch(){
      this.setState({
        data:this.state.data,
        search:event.target.value
      })
    }
    filterList(){
      let updatedList = this.state.data.filter((item)=>{
        return item.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
      })
      let data = updatedList.map((item,index,array)=>{
        return <li className="list-group-item" data-category={item} key={index}>{item}</li>
      })
      return data
    }
    render(){
      return(
        <div>
          <fieldset className="form-group">
          <input className="form-control form-control-lg" placeholder="Search" onChange={()=>this.updateSearch()} value={this.state.search} type="text"/>
          </fieldset>
          <ul className="list-group">
            {this.filterList()}
          </ul>
        </div>
      )
    }
  }
  return (
    //<AuthContext.Provider value={[authState, setAuthState]}>
    <Provider value={data}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {routing}
      </ThemeProvider>
    </Provider>

  );
};

export default App;
