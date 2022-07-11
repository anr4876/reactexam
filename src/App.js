// import './App.css';
import MyHeader from './MyHeader';
import MyFooter from './MyFooter';
import Counter from './Counter';
import Container from './Container';



function App() {
  const counteProps = {
    a:1,
    b:2,
    c:3,
    d:4,
    e:5,
    
  }
  return (
    <Container>
      <div>
        <MyHeader/>
        <Counter  {...counteProps} />
        <MyFooter/>
      </div>
    </Container>
    
  );
}

export default App;
