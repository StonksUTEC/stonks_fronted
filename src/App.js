import React from 'react'
import Header from './components/Header'
import Body from './components/Body';
import "./App.css";

const App = () => {
    return (
        <div className="App">
            {/* Header */}
            <div className='app__header'>
                <Header />
            </div>
            {/* Body */}
            <div className='app__body'><Body /></div>
        </div>
    )
}

export default App