import React from 'react';  
import AppHeader from './AppHeader';
import AppContent from './AppContent';
import AppSidebar from './AppSidebar';
import AppFooter from './AppFooter';


class ClientView extends React.Component {

    render(){
        return (
            <div>
                <AppHeader/>
                <div className={'o-flex o-flex--row--reverse'}>
                    <AppContent/>
                    <AppSidebar/>
                </div>
                <AppFooter/>
            </div>
        )
    }
}

export default ClientView