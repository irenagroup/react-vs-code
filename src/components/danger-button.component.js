import  React  from 'react';
export class DangerButton extends React.Component  {
    render() {
        return ( <div >
            <h2>{this.props.hit.title}</h2>
            <p>{this.props.hit.points}</p>
            <hr />
          </div>);
    }
}

export default DangerButton;