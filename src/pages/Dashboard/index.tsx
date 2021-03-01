import React from 'react';
import { FiBook, FiPackage, FiTrello } from 'react-icons/fi';
import profileImg from '../../assets/profile-gitinter.svg';
import './styles.css';

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
                    <div className="card">
                        <div className="symbol">
                            <FiBook/>
                        </div>
                        <span>Repositórios</span>
                    </div>
                    <div className="card">
                        <div className="symbol">
                            <FiTrello/>
                        </div>
                        <span>Projetos</span>
                    </div>
                    <div className="card">
                        <div className="symbol">
                            <FiPackage/>
                        </div>
                        <span>Pacotes</span>
                    </div>
                </div>
            </header>
        
            <section className="data-github-user">
                <h1>Os dados de um #DEV 💻</h1>
                <h2>Os dados estão sendo mostrados aqui para que consiga olhar o quanto vem evoluindo como DEV</h2>
                <div className="card-data">
                    <div>
                        <img src={profileImg} alt=''/>
                    </div>
                    <aside>
                        <h2>CEO at Newhappen and CTO at Sangue Bom<br/>Academic at the Federal Technological University of Paraná and student at Rocketseat<br/>I'm currently learning about Elixir and cybersecurity</h2>
                    </aside>
                </div>
            </section>
        </div>
    );
}

export default Dashboard;