import React, { useState } from 'react';

const AccountPage = () => {
  const [username, setUsername] = useState('JohnDoe');
  const [email, setEmail] = useState('johndoe@example.com');

  const handleSave = () => {
    alert('Account details saved!');
  };

  return (
    <div className="account-page">
      <h2>Account Information</h2>
      <form>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="button" onClick={handleSave} className="btn btn-primary">Save</button>
      </form>
    </div>
  );
};

export default AccountPage;
