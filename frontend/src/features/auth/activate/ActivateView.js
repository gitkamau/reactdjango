import React, { useState } from 'react';
import { useParams, useNavigate  } from 'react-router-dom';
import { activateUserAccount } from './ActivateSlice';
import '../assets/css/auth.css';

export default function ActivateView() {
  const { uid, token } = useParams();
  const [verified, setVerified] = useState(false);
  const navigate = useNavigate();

  const verifyAccount = () => {
    activateUserAccount(uid, token);
    setVerified(true);
  };

  if (verified) {
    navigate("/login");
  }

  return (
    <div className="container">
      <div
        className="d-flex flex-column justify-content-center align-items-center"
        style={{ marginTop: '200px' }}
      >
        <h1>Verify your Account:</h1>
        <button
          onClick={verifyAccount}
          style={{ marginTop: '50px' }}
          type="button"
          className="btn btn-primary"
        >
          Verify
        </button>
      </div>
    </div>
  );
}
