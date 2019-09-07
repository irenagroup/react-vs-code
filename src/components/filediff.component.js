
import React from 'react';
import { getSearch } from '../services/search.service';
import StockItem from './stock.component';
import { addStock,VisibilityFilters, addAllStocks } from '../redux/actions';
import { connect } from "react-redux";
import Footer from '../components/footer'

// @TODO: fix isLoading apply to state
// @TODO: fix remove stock option
// @TODO: implement sorting based on stock


export class Filediff extends React.Component {
  loadingTest= false;
  state = {
    error: undefined,
    stocks: undefined,
    stockNamefield: undefined,
    stockPriceField: undefined,
    stockTickerfield: undefined,
    isLoading: null,
    datafield: '21',
    datafield2: '333'

  }

  constructor(props) {
    super(props);
    const { params } = this.props.match;
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStockSubmit = this.handleStockSubmit.bind(this);
    console.warn(params);

  }
  handleReverse = event => {
    event.preventDefault();
    this.getStocks(this.state.datafield);

  }

  handleStockSubmit = event => {
    event.preventDefault();
    this.props.addStock({
      securityDescription : this.state.stockNamefield,
      symbol: this.state.stockTickerfield,
      totalCost: this.state.stockPricefield
    });

   console.warn(this.props.stocks);

  }


  
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  shouldComponentUpdate(nextProps){
    if(nextProps.stocks !== this.props.stocks) {
      this.loadingTest = false;
      // this.render();
      return true;
    }
    return false;
  }

  render() {
    const {  error } = this.state;
    let loadingsection;
    const stocks = this.props.stocks;
    if (error && this.loadingTest === false) {
      loadingsection = <div >Error found!</div>;

    }
    else if (!this.loadingTest === null) {
      loadingsection = <div >Please hit submit</div>;
    } else if (this.loadingTest === true) {
      loadingsection = <div >          <h3>Loading...</h3></div>;
    } else if (this.loadingTest === null || (this.loadingTest === false && stocks)) {
      loadingsection = stocks.map((stock, index) => {
        return (
          <StockItem stock={stock} key={stock.id}></StockItem>
        );

      });
    }


    return (<React.Fragment>
      <h3>{this.props.match.params.fileId}</h3>
      <form onSubmit={this.handleReverse}>
        <input type='text' name='datafield'
          onChange={this.handleInputChange}
          defaultValue={this.state.datafield} />
        <input type='text' name='datafield2'
          onChange={this.handleInputChange}
          defaultValue={this.state.datafield2} />
        <button>Submit</button>
      </form><hr/>
      Add stock fields
      <form onSubmit={this.handleStockSubmit}>
       Ticker: <input type='text' name='stockTickerfield'
          onChange={this.handleInputChange}
           /><br/>
        Description: <input type='text' name='stockNamefield'
          onChange={this.handleInputChange} /><br/>
           Price: <input type='text' name='stockPricefield'
          onChange={this.handleInputChange} /><br/>
        <button>Add stock</button>
      </form><hr/>
      
      {loadingsection}
      <Footer />

    </React.Fragment>);
  }

  getStocks(valueSearch) {
    this.setState({
      isLoading: true
    });
    this.loadingTest = true;
    this.render();

    getSearch(valueSearch)
      .then((data) => {
        this.props.addAllStocks(data.accounts.account[0].securityDetails.securityDetail);
        console.warn(this.props.stocks);

      }).catch((error)=>{
        console.warn(error);
        this.setState({
          isLoading: false,
          error: error.errorType
        });
      })
      

  }
  componentDidMount() {
  }
}


const getVisibleStocks = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos.stocks;
    case VisibilityFilters.SHOW_COMPLETED:
      debugger;
      return todos.stocks.filter(t => t.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.stocks.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = state => ({
//  stocks: state
  stocks: getVisibleStocks(state, state.visibilityFilter)
});


const mapDispatchToProps = dispatch => ({
  addStock: stock => dispatch(addStock(stock)),
  addAllStocks: stocks=> dispatch(addAllStocks(stocks))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)((Filediff));