import { useState } from "react";
import setPinIcon from "../../../assets/ordus-mini-logo.png";
import "../../../styles/auth.css";
export default function SetPinPage() {
  const [pin, setPin] = useState("");
  const [confirmPin, setConfirmPin] = useState("");

  const pinsMatch =
    pin.length === 4 &&
    confirmPin.length === 4 &&
    pin === confirmPin;

  const handlePinChange = (
    value: string,
    setter: React.Dispatch<React.SetStateAction<string>>
  ) => {
    const numericValue = value.replace(/\D/g, "").slice(0, 4);
    setter(numericValue);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!pinsMatch) return;

    console.log("PIN confirmed:", pin);
  };

  return (
    <main className="auth-page">
      <section className="auth-card">
        <img
          src={setPinIcon}
          alt=""
          className="auth-top-icon"
        />

        <h1>Set Pin</h1>

        <form className="auth-form" onSubmit={handleSubmit}>

  <div className="auth-input-wrapper">
    <div className="auth-input-icon">
      🔒
    </div>

    <input
      className="auth-input-field"
      type="email"
      value="James@ordus.co.au"
      disabled
    />
  </div>


  <div className="auth-input-wrapper">
    <div className="auth-input-icon" />

    <input
      className="auth-input-field"
      type="password"
      inputMode="numeric"
      placeholder="Set Pin"
      value={pin}
      onChange={(e) =>
        handlePinChange(e.target.value, setPin)
      }
    />
  </div>


  <div className="auth-input-wrapper">
    <div className="auth-input-icon" />

    <input
      className="auth-input-field"
      type="password"
      inputMode="numeric"
      placeholder="Confirm Pin"
      value={confirmPin}
      onChange={(e) =>
        handlePinChange(e.target.value, setConfirmPin)
      }
    />
  </div>


  <button className="auth-button" type="submit">
    Set Pin
  </button>

</form>

        <p className="auth-footer">
          Already have an account?
          <button className="text-button" type="button">
            [ Sign In ]
          </button>
        </p>
      </section>
    </main>
  );
}