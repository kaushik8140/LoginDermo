import React, {Component, useEffect} from 'react';
import Providers from './navigation';
import {requestUserPermission,notificationListener} from './utils/NotificationService';

const App = () => {
  useEffect(() => {
    requestUserPermission();
    notificationListener();
  }, []);

  return <Providers />;
};
export default App;
