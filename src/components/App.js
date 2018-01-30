import React from 'react';
import '../assets/stylus/reset.styl'
import './App.styl';

class App extends React.Component {
    render() {
        return (
            <div className="app">
                <header className="app-header">
                    <img className="app-logo" src={require('../assets/imgs/logo.png')} alt=""/>
                    <h1 className="app-title">Noom Music</h1>
                </header>
                <div className="music-tab">
                    <div className="tab-item">
                        <span>推荐</span>
                    </div>
                    <div className="tab-item">
                        <span>排行榜</span>
                    </div>
                    <div className="tab-item">
                        <span>搜索</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
