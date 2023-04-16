import "./App.css";
import LoginForm from "./components/pages/LoginForm";

function App() {
  return (
    <div className="App">
      <LoginForm
        onSubmit={function (username: string, password: string): void {
          throw new Error("Function not implemented.");
        }}
      />
    </div>
  );
}

export default App;
