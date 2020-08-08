import React from 'react';
import './App.css';


const App = () => {
    return (
        <div className="app-wrapper">
            <header className="header">
                <img src="https://pinfeeds.net/wp-content/uploads/2018/01/bower_logo_1-1024x900.png"/>
            </header>
            <nav className="nav">
                <div><a>Profile</a></div>
                <div><a>Messages</a></div>
                <div><a>News</a></div>
                <div><a>Music</a></div>
                <div><a>Settings</a></div>
            </nav>

            <div className="content">
                <img
                    src="https://www.tropicbreeze.co.uk/blog/wp-content/uploads/2017/08/Nisbet-Plantation-1200-500.jpg"/>
                <div>Ava + description</div>
                <div>
                    My post
                    <div>New post</div>
                    <div>
                        <div>post 1</div>
                        <div>post 2</div>
                        <div>post 3</div>
                        <div>post 4</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
