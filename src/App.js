

import './App.css';

function App() {
  return (
    <div className="App minimal-app">
      <h1 className="minimal-title">Confession</h1>
      <form className="minimal-form">
        <textarea className="minimal-textarea" placeholder="What's on your mind?" rows={4} />
        <button className="minimal-button" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
