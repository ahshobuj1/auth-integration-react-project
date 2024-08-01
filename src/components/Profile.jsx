import {useContext} from 'react';
import {AuthContext} from './auth/UserContext';

const Profile = () => {
    const {user} = useContext(AuthContext);

    return (
        <div>
            <h1 className="text-3xl">
                This your profile , Your email is:{' '}
                <a href="" className="underline">
                    {user.email}
                </a>
            </h1>
        </div>
    );
};

export default Profile;
