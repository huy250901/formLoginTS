import React from "react";
import "./loginform.css";

interface ILoginFormProps {
  onSubmit: (username: string, password: string) => void;
}

const LoginForm: React.FC<ILoginFormProps> = ({ onSubmit }) => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validateForm()) {
      alert("Login success");
    }
  };

  const validateForm = () => {
    if (!username || !password) {
      alert("Vui lòng nhập đầy đủ thông tin!");
      return false;
    }
    return true;
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username-input">Username:</label>
        <input
          id="username-input"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="password-input">Password:</label>
        <input
          id="password-input"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default LoginForm;
