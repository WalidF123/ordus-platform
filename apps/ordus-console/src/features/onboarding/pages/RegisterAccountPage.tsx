import { useState } from "react";
import "../../../styles/auth.css";

import registerIcon from "../../../assets/ordus-mini-logo.png";

export default function RegisterAccountPage() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const passwordsMatch =
    password.length > 0 &&
    confirmPassword.length > 0 &&
    password === confirmPassword;

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!passwordsMatch) return;

    console.log("Account password set");
  };

  return (
    <main className="auth-page">
      <section className="auth-card">
        <img
          src={registerIcon}
          alt=""
          className="auth-top-icon"
        />

        <h1>Register Account</h1>

        <form
          className="auth-form"
          onSubmit={handleSubmit}
        >
          <div className="auth-input-wrapper">
            <div className="auth-input-icon" />

            <input
              className="auth-input-field"
              type="email"
              value="James@ordus.co.au"
              disabled
            />

            <div className="auth-input-end-icon">
              🔒
            </div>
          </div>

          <div className="auth-input-wrapper">
            <div className="auth-input-icon" />

            <input
              className="auth-input-field"
              type="password"
              placeholder="Set Password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
            />
          </div>

          <div className="auth-input-wrapper">
            <div className="auth-input-icon" />

            <input
              className="auth-input-field"
              type="password"
              placeholder="Re-enter Password"
              value={confirmPassword}
              onChange={(e) =>
                setConfirmPassword(e.target.value)
              }
            />
          </div>

          <button
            className="auth-button"
            type="submit"
          >
            Set Password
          </button>
        </form>

        {confirmPassword.length > 0 &&
          !passwordsMatch && (
            <p className="auth-error">
              Passwords do not match.
            </p>
          )}

        <p className="auth-footer">
          Already have an account?

          <button
            className="text-button"
            type="button"
          >
            [ Sign In ]
          </button>
        </p>
      </section>
    </main>
  );
}