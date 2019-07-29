
import React from 'react';
import DangerButton from './danger-button.component';


export class Filediff extends React.Component {
  state = {
    hits: undefined,
    isLoading: null,
    datafield: '21',
    datafield2: '333'

  }

  constructor(props) {
    super(props);
    const { params } = this.props.match;
    this.handleInputChange = this.handleInputChange.bind(this);

    console.warn(params);

  }
  handleReverse = event => {
    event.preventDefault();
    console.warn(this.state);

    console.warn(event);
    this.getHits(this.state.datafield);

  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }


  render() {
    const { isLoading, hits } = this.state;
    let loadingsection;
    if (isLoading === null) {
      loadingsection = <div >Please hit submit</div>;
    } else if (isLoading === true) {
      loadingsection = <div >          <h3>Loading...</h3></div>;
    } else if (isLoading === false) {
      loadingsection = hits.map((hit, index) => {
        return (
          <DangerButton hit={hit} key={hit.objectID}></DangerButton>
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
      </form>
      {loadingsection}
    </React.Fragment>);
  }

  getHits(valueSearch) {
    this.setState({
      isLoading: true
    })
    fetch(`https://hn.algolia.com/api/v1/search?query=${valueSearch}`)
      .then(response => response.json())
      .then((data) => {
        console.warn(data.hits);

        this.setState({
          isLoading: false,
          hits: data.hits
        });
      })

  }
  componentDidMount() {
  }
}


export default Filediff;