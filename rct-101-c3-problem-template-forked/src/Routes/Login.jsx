import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../Context/AppContext";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const auth = useContext(AppContext);
  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
      .then((res) => res.json())
      .then((res) => {
        // alert({res.token});
        // console.log(res);
        // auth.handleLogin(res.token);
        navigate("/dashboard");
      })
      .catch((err) => {});
  }
  return (
    <div>
      <form data-testid="login-form" onSubmit={handleSubmit}>
        <div>
          <label>
            Email
            <input
              value={formData.email}
              data-testid="email-input"
              type="email"
              placeholder="email"
              onChange={handleChange}
              name="email"
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              value={formData.password}
              data-testid="password-input"
              type="password"
              placeholder="password"
              onChange={handleChange}
              name="password"
            />
          </label>
        </div>
        <div>
          <input data-testid="form-submit" type="submit" value="SUBMIT" />
        </div>
      </form>
      <div>
        <Link to="/">Go Back</Link>
      </div>
    </div>
  );
}
export default Login;
