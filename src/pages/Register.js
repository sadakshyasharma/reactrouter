import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Register = ({ setUser }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email) return;
    setUser({ name: name, email: email , password: password });
    navigate("/dashboard");
  };

  return (
    <section className="section1">
      <form className="form1" onSubmit={handleSubmit}>
        <h5>Register</h5>
        <div className="form-row1">
          <label htmlFor="name" className="form-label1">
            name
          </label>
          <input
            type="text"
            className="form-input1"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-row1">
          <label htmlFor="email" className="form-label1">
            email
          </label>
          <input
            type="email"
            className="form-input1"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-row1">
          <label htmlFor="password" className="form-label1">
           Set password
          </label>
          <input
            type="password"
            className="form-input1"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-block">
          Register
        </button>
      </form>
      <hr />
      <h2>If you are a member then go to Loginpage </h2>
      <Link to="/login" className="btn">
        Loginpage
      </Link>
      <hr />
    </section>
  );
};
export default Register;
