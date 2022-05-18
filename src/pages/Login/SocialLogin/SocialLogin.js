import React from 'react';
import google from '../../../images/social/google.png';
import facebook from '../../../images/social/facebook.png';
import github from '../../../images/social/github.png';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const SocialLogin = () => {

    let errorElement;

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user2, loading2, error2] = useSignInWithGithub(auth);

    const navigate = useNavigate();

    const location = useLocation()
    let from = location.state?.from?.pathname || "/";

    if (loading || loading2) {
        return <Loading></Loading>
    }

    if (user || user2) {
        navigate(from, { replace: true });
    };

    if (error || user2) {
        errorElement =
            <div>
                <p className=' text-red-500 text-center'>Error: {error?.message}{error2?.message}</p>
            </div>
    }

    return (
        <div>
            {errorElement}
            <div className="flex flex-row items-center justify-center lg:justify-start">
                <p className="text-lg mb-0 mr-4 font-bold">Sign in with</p>
                <button
                    onClick={() => signInWithGoogle()}
                    className="inline-block p-3 bg-sky-100 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-300 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
                >

                    <img style={{ width: '30px' }} src={google} alt="" />

                </button>

                <button
                    className="inline-block p-3 bg-sky-100 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-300 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
                >
                    <img style={{ width: '30px' }} src={facebook} alt="" />

                </button>

                <button
                    onClick={() => signInWithGithub()}
                    className="inline-block p-3 bg-sky-100 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-300 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
                >
                        <img style={{ width: '30px' }} src={github} alt="" />
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;