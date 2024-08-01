import {createContext} from 'react';
import PropTypes from 'prop-types';

export const AuthContext = createContext();

const UserContext = ({children}) => {
    const users = 'hello context';
    const authInfo = {users};

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
