import React from 'react';
import { CircularProgress } from '@material-ui/core';
const Loading = () => {
    return (
        
            <div className="loading-page"><CircularProgress/> <br/> <h2 className="loading-header">Loading...</h2></div>
        
    );
};

export default Loading;