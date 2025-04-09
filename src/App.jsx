import "./css/App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="xl:h-screen flex justify-center items-center bg-(--color-Slate100)">
      <div
        className="rounded-3xl xl:flex xl:flex-row xl:m-5 xl:justify-center
        items-center bg-(--color-white)"
      >
        <div className="xl:w-120 xl:h-125 flex flex-col xl:px-5 items-center">
          <Header />
          <Form />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
