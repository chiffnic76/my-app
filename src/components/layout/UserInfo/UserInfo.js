/* src/components/layout/UserInfo/UserInfo.js */
import React from 'react';
import { useAuth } from '../../../context/AuthContext';
import LogoutButton from '../../ui/buttons/LogoutButton';
import './UserInfo.css';

function UserInfo() {
  const { user } = useAuth();
  return (
    <div className="user-info">
      <span className="mail"> {user.email} </span>
      <LogoutButton />
    </div>
  );
}

export default UserInfo;