import React from 'react';
import { addStock, deleteStock } from '../redux/actions';
import { connect } from "react-redux";

export function formatNumber(value) {

  return value;
}

export class StockItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemove = this.handleRemove.bind(this);

  }
  componentWillReceiveProps(nextProps) {
    console.error(nextProps);
    for (const index in nextProps) {
      if (nextProps[index] !== this.props[index]) {
        console.log(index, this.props[index], '-->', nextProps[index]);
      }
    }
  }
  handleRemove(id) {
    console.warn('removing stock', id);
    this.props.deleteStock(id);

  }

  render() {
    return (<div attr-id={this.props.stock.stock.id}> {this.props.stock.stock.id} --
      <h2>{this.props.stock.stock.symbol}-{this.props.stock.stock.securityDescription}</h2>
      <p>{formatNumber(this.props.stock.stock.totalCost)}</p>
      <p><button onClick={() => this.handleRemove(this.props.stock.stock.id)}>Remove</button></p>

      <hr />
    </div>);
  }
}




const mapDispatchToProps = dispatch => ({
  addStock: stock => dispatch(addStock(stock)),
  deleteStock: id => dispatch(deleteStock(id))
});


export default connect(
  null,
  mapDispatchToProps
)((StockItem));