import React from 'react';
import Button from '../Button/Button';

const UserInfo = () => {
  return (
    <div className="header">
    <h1>Welcome back<br />Tony Jarvis!</h1>
    <Button text="Edit Name" className="edit-button" />
    </div>
  );
};

export default UserInfo;