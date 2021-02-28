import React from 'react';

const Dashboard: React.FC = () => {
    return(
        <div className="dashboard-container">
            <header className="dashboard-header">
                <div className="dashboard-header-info-user">
                    <h3>Meus dados</h3>
                    <h1>18 <span>Followers</span> 28 <span>Following</span> 17 <span>Stars</span></h1>
                    <h3>Atualizado nesse momento</h3>
                </div>
                <div className="dashboard-header-info-avatar">
                    <h1>GH</h1>
                </div>
                <div className="dashboard-header-cards">
                    
                </div>
            </header>
        </div>
    );
}

export default Dashboard;