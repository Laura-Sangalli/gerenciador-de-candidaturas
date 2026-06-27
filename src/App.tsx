import Home from "./pages/Home";
import BackgroundDecoration from "./components/BackgroudDecoration";
function App(){
  return (
    <div className="app">
      <BackgroundDecoration />

      <main className="content">
        <Home />
      </main>
    </div>
  );
}

export default App;
