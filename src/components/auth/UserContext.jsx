import {createContext, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
} from 'firebase/auth';
import auth from '../../Firebase/firebase';

export const AuthContext = createContext();

const UserContext = ({children}) => {
    const [user, setUser] = useState('');

    //create user
    const registerUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // log in user
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    //Get the currently signed-in user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                console.log(currentUser);
                setUser(currentUser);
            }
        });

        return () => unsubscribe();
    }, []);

    const authInfo = {user, registerUser, loginUser};

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UserContext;

UserContext.propTypes = {
    children: PropTypes.node,
};
