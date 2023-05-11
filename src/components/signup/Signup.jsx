import "./signup.css";
import React, { useState } from "react";

export default function Signup() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");
  const [secretKey, setSecretKey] = useState("");

  const handleSubmit = (e) => {
    if (userType == "Admin" && secretKey != "max") {
      e.preventDefault();
      alert("Admin incorrect, vous êtes un imposteur !");
    } else {
      e.preventDefault();

      console.log(fname, lname, email, password);
      fetch("http://localhost:5000/register", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          fname,
          email,
          lname,
          password,
          userType,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data, "userRegister");
          if (data.status == "ok") {
            alert("Inscription réussi");
          } else {
            alert("Quelque chose s'est mal passé");
          }
        });
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form onSubmit={handleSubmit}>
          <h3>Inscrivez-vous</h3>
          <div>
            S'enregister comme
            <input
              type="radio"
              name="UserType"
              value="User"
              onChange={(e) => setUserType(e.target.value)}
            />
            Utilisateur
            <input
              type="radio"
              name="UserType"
              value="Admin"
              onChange={(e) => setUserType(e.target.value)}
            />
            Admin
          </div>
          {userType == "Admin" ? (
            <div className="input_wrapper">
              <label>Secret Key</label>
              <input
                type="text"           
                placeholder="Secret Key"
                onChange={(e) => setSecretKey(e.target.value)}
              />
            </div>
          ) : null}

          <div className="input_wrapper">
            <label>Prénom</label>
            <input
              type="text"
              placeholder="Entrez votre prénom.."
              onChange={(e) => setFname(e.target.value)}
            />
          </div>

          <div className="input_wrapper">
            <label>Nom</label>
            <input
              type="text"
              placeholder="Entrez votre nom.."
              onChange={(e) => setLname(e.target.value)}
            />
          </div>

          <div className="input_wrapper">
            <label>Adresse E-mail</label>
            <input
              type="email"
              className="form-control"
              placeholder="Entrez votre e-mail.."
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input_wrapper">
            <label>Mot de passe</label>
            <input
              type="password"            
              placeholder="Enter votre mot de passe.."
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="submit_wrapper">
            <button type="submit" className="btn">
              S'inscrire
            </button>
          </div>
          <p className="forgot-password">
            Déjà inscrit ? <a href="/sign-in">Se connecter</a>
          </p>
        </form>
      </div>
    </div>
  );
}
