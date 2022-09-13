import Categories from "./Categories";
import Header from "./Header";

function App() {
  return (
    <div className="bg-yellow-50 h-screen overflow-y-scroll">
      <div className="container mx-auto">
        <Header />
        <Categories />
      </div>
    </div>
  );
}
export default App;
