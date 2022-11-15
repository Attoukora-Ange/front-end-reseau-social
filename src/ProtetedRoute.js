import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtetedRoute = ({id}) => {  
 
    if (!id ) {
        return <Navigate to='/connexion' replace />;
      }
    
      return <Outlet />;
};

export default ProtetedRoute;