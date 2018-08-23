import React from 'react';  
import AppHeader from './AppHeader';
import AppContent from './AppContent';
import AppSidebar from './AppSidebar';


class ClientView extends React.Component {

    render(){
        return (
            <div>
                <AppHeader/>
                <div className={'o-flex o-flex--row--reverse'}>
                    <AppContent/>
                    <AppSidebar/>
                </div>
            </div>
        )
    }
}

export default ClientView