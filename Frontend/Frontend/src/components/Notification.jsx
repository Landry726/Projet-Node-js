import React from 'react';

const Notification = ({ message, type }) => {
  if (!message) return null;
  const bgColor = type === 'success' ? 'bg-green-500' : 'bg-red-500';
  return (
    <div className={`${bgColor} text-white p-3 rounded fixed top-4 right-4 z-50`}>
      {message}
    </div>
  );
};

export default Notification;
