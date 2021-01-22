import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import UserPage from "./pages/User";
import ChatPage from "./pages/Chat";
import HomePage from "./pages/Home";
import Navbar from "./components/Navbar";

export default function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <Switch>
                    <Route path="/users">
                        <UserPage />
                    </Route>
                    <Route path="/chats">
                        <ChatPage />
                    </Route>
                    <Route path="/">
                        <HomePage />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}