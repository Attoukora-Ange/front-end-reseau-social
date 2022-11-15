import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PublicRoute = ({id}) => {
  
    if (id) {
        return <Navigate to='/' replace />;
      }
    
      return <Outlet/>;
};

export default PublicRoute;