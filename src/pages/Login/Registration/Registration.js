import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import registration from '../../../images/login/registration.jpg'
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';

const Registration = () => {
    const [agree, setAgree] = useState(false);
    const navigate = useNavigate()

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const location = useLocation()
    let from = location.state?.from?.pathname || "/";

    if (loading || updating) {
        return <Loading></Loading>
    }

    if (error || updateError) {

    }

    if (user) {
        console.log('user', user)
    }

    const handleRegister = async (event) => {
        event.preventDefault();

        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmPassword.value;

        if (agree & password===confirmPassword) {
            await createUserWithEmailAndPassword(email, password);
            await updateProfile({ displayName: name });
            console.log('Updated profile');
            navigate(from, { replace: true });
        }
    }

    return (
        <section class=" md:h-screen">
            <div class="px-6 h-full text-gray-800">
                <div
                    class="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6"
                >
                    {/* 1st part */}
                    <div
                        class="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0"
                    >
                        <img className='w-full' src={registration} alt=" simple img" />

                    </div>

                    {/* 2nd article */}
                    <div
                        class="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0"
                    >
                        <form onSubmit={handleRegister}>
                            {/* Name field */}
                            <div class="mb-6">
                                <input
                                    type="text"
                                    name='name'
                                    class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    id="exampleFormControlInput2"
                                    placeholder="Name"
                                />
                            </div>
                            {/* Email input */}
                            <div class="mb-6">
                                <input
                                    type="email"
                                    name='email'
                                    class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    id="exampleFormControlInput2"
                                    placeholder="Email address"
                                />
                            </div>

                            {/* Password input */}
                            <div class="mb-6">
                                <input
                                    type="password"
                                    name='password'
                                    class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    id="exampleFormControlInput2"
                                    placeholder="Password"
                                />
                            </div>
                            {/*Confirm Password input */}
                            <div class="mb-6">
                                <input
                                    type="password"
                                    name='confirmPassword'
                                    class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    id="exampleFormControlInput2"
                                    placeholder="Confirm Password"
                                />
                            </div>

                            <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                            <label
                                className={`ml-2 ${agree ? 'text-blue-700' : 'text-red-500'}`}
                                htmlFor="terms">Accept Genius Car Terms and Conditions
                            </label>

                            <div>
                                <button
                                    disabled={!agree}
                                    class="inline-block mt-3 h-14 bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                                    type='submit'
                                    data-mdb-ripple="true"
                                    data-mdb-ripple-color="light"
                                >
                                    Registration
                                </button>
                            </div>
                        </form>

                        <div
                            class="flex items-center my-2 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
                        >
                            <p class="text-center font-semibold mx-4 mb-0">Or</p>
                        </div>

                        <SocialLogin></SocialLogin>

                        <div>
                            <p className='text-sm md:text-2xl mt-5 md:mt-12 text-center font-semibold'>Don't have an account?<span className='cursor-pointer ml-2 text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out' onClick={() => navigate('/login')}>Login</span></p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Registration;