import {useContext} from 'react';
import {AuthContext} from '../components/auth/UserContext';
import {Navigate} from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext);

    if (loading) {
        return <span className="loading loading-spinner loading-lg"></span>;
    }

    if (user) {
        return children;
    }

    return <Navigate to="/login" />;
};

export default PrivateRoutes;

PrivateRoutes.propTypes = {
    children: PropTypes.node,
};
