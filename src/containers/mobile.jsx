import React from 'react';
import Sidebar from '../containers/sidebar/sidebar';

import '../components/featured.css';

class Mobile extends React.Component{
    
    render(){
        
        return(
            <div className="mt-4">
                <Sidebar/>
            </div>
        )
    }
}
export default Mobile;