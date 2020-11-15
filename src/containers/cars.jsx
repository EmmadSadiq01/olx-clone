import React from 'react';
import Sidebar from '../containers/sidebar/sidebar';

import '../components/featured.css';

class Cars extends React.Component{
    
    render(){
        
        return(
            <div className="mt-4">
                <Sidebar/>
            </div>
        )
    }
}
export default Cars;
