import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  return <Car brand="Ford" model="Mustang" color="Red" />;
}

class Car extends React.Component {
  render() {
    return (
      <div>
        <h2>Brand: {this.props.brand}</h2>
        <p>Model: {this.props.model}</p>
        <p>Color: {this.props.color}</p>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default App;