import {useContext} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {AuthContext} from './auth/UserContext';
import {FaGoogle} from 'react-icons/fa';

const Login = () => {
    const {loginUser, logInWithGoogle} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLoggedIn = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        loginUser(email, password)
            .then((res) => {
                console.log('user logged successfully', res.user);
                e.target.reset();
            })
            .catch((err) => console.log(err.message));

        navigate('/');
    };

    const handleGoogleLogIn = () => {
        logInWithGoogle()
            .then((result) => console.log(result.user))
            .catch((err) => console.log(err.message));
    };

    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat
                            fugiat ut assumenda excepturi exercitationem quasi.
                            In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleLoggedIn} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="email"
                                    className="input input-bordered"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="password"
                                    className="input input-bordered"
                                    required
                                />
                                <label className="label">
                                    <a
                                        href="#"
                                        className="label-text-alt link link-hover">
                                        Forgot password?
                                    </a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button
                                    type="submit"
                                    className="btn btn-primary">
                                    Login
                                </button>
                            </div>
                            <p>
                                Do not have an account!{' '}
                                <Link
                                    to="/register"
                                    className="underline text-blue-700">
                                    Please Register
                                </Link>
                            </p>
                        </form>
                        <div className="my-4 px-10">
                            <h2 className="text-2xl">
                                Sign up with social link
                            </h2>
                            <div className=" flex justify-center mt-3">
                                <button
                                    onClick={handleGoogleLogIn}
                                    className="text-2xl btn text-red-500">
                                    <FaGoogle />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
