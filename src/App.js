// import './App.css';
import MyHeader from './MyHeader';
import MyFooter from './MyFooter';

const style = {
  App : {
    backgroundColor : "black",
  },
  h2: {
    color: "red",
  },
  bold_text: {
    color:"green",
  } ,
};


function App() {
  return (
    <div style={style.App}>
      <MyHeader/>
      <header className="App-header">
        <h2 style={style.h2}>dd</h2>
        <b style={style.bold_text}>React.js</b>
      </header>
      <MyFooter/>
    </div>
  );
}

export default App;
