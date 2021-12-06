import React from 'react';
import './App.scss';
import Header from "./components/Header";
import Calc from "./components/Calc";
import {Provider} from "react-redux";
import store from './redux/reducer';

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <div className="App-content">
                    <Header />
                    <Calc />
                </div>
            </div>
        </Provider>
    );
}

export default App;
