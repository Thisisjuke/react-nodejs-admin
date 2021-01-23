import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UserPage from './pages/Users';
import ChatPage from './pages/Chat';
import HomePage from './pages/Home';
import AdminLayout from './layouts/AdminLayout';
import UserProfile from "./pages/UserProfile";

export default function App() {
    return (
        <Router>
            <AdminLayout>
                <Switch>
                    <Route path="/profile/:id">
                        <UserProfile />
                    </Route>
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
            </AdminLayout>
        </Router>
    );
}
