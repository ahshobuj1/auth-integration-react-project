import {createContext, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
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

    //log out user
    const loggedOut = () => {
        return signOut(auth);
    };

    //Get the currently signed-in user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                console.log(currentUser);
                setUser(currentUser);
            } else {
                setUser('');
            }
        });

        return () => unsubscribe();
    }, []);

    const authInfo = {user, registerUser, loginUser, loggedOut};

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
