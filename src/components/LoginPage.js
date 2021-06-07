import React, { useState, useContext } from 'react';
import Users from '../data/users.json';
import FormModal from './FormModal';
import FoodList from './FoodList';
import FoodCard from './FoodCard';
import { CardProvider } from '../context/cardContext';

const LoginPage = (props) => {
    const [user, setUser] = useState({ email: "", password: "" });
    const [error, setError] = useState("");
    const [modalIsOpen, setIsOpen] = useState(false);

    const Login = (details) => {
        console.log(details);
        if (details.email === Users.email && details.password === Users.password) {
            console.log('Logged in');
            setUser({
                email: details.email,
                password: details.password
            })
        } else {
            console.log('detais do not match');
            setError("Detais do not match");
        }
    }

    const Logout = () => {
        console.log("Logout");
        setUser({
            email: "",
            password: ""
        });
    }

    return (
        <div className="listcontainer">
            {(user.email !== "") ? (
                <div>
                    <div className="userInfo">
                        User, {user.email}
                        <button onClick={Logout} className="button">Logout</button>
                    </div>
                    <CardProvider>
                        <FoodCard />
                        <FoodList />
                    </CardProvider>
                </div>
            ) : (
                <div>
                    <button onClick={() => setIsOpen(true)} className="button">Login</button>
                    <FormModal
                        Login={Login}
                        error={error}
                        modalIsOpen={modalIsOpen}
                        setIsOpen={setIsOpen}
                    />
                </div>
            )}
        </div>
    )
}

export { LoginPage as default };