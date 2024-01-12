import CURD from "./componemt/CURD";
import Header from "./componemt/Header";
import ListItem from "./componemt/ListItem";



function App() {
  return (
    <>
    <Header/>
    <div className="container my-3">
      <CURD/>
    </div>
    <div className="container my-3">
      <ListItem/>
    </div>

    </>
      
      
    
  );
}

export default App;
