import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from "../../Provider/AuthProvider";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import {  FaRegArrowAltCircleRight } from "react-icons/fa";



const Login = () => {
    const [ setDisable] = useState(true)
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])


    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: "Logged In Successfully",
                    showClass: {
                        popup: `
                        animate__animated
                        animate__fadeInUp
                        animate__faster
                      `
                    },
                    hideClass: {
                        popup: `
                        animate__animated
                        animate__fadeOutDown
                        animate__faster
                      `
                    }
                });
                navigate(from, { replace: true });
            })


    }

    const handleValidateCapcha = (e) => {
        const user_capcha_value = e.target.value;
        if (validateCaptcha(user_capcha_value)) {
            setDisable(false);
        }
        else {
            setDisable(true)
        }
    }

    return (
        <div>
            <Helmet>
                <title>Elara travel | login</title>
            </Helmet>
            <section className="relative flex flex-wrap lg:h-screen lg:items-center">
                <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
                    <div className="mx-auto max-w-lg text-center">
                        <h1 className="text-2xl font-bold sm:text-3xl">WE'RE GLAD YOU'RE HERE!</h1>

                        <p className="mt-4 text-gray-500">
                            Please Login Here and explore more
                        </p>
                    </div>

                    <form onSubmit={handleLogin} className="mx-auto mb-0 mt-8 max-w-md space-y-4">
                        {/* email  */}
                        <div>
                            <label htmlFor="email" className="sr-only">Email</label>

                            <div className="relative">
                                <input
                                    type="email"
                                    name="email"
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                    placeholder="Enter email"
                                />

                                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4 text-gray-400"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                        />
                                    </svg>
                                </span>
                            </div>
                        </div>
                        {/* Password */}
                        <div>
                            <label htmlFor="password" className="sr-only">Password</label>

                            <div className="relative">
                                <input
                                    type="password"
                                    name="password"
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                    placeholder="Enter password"
                                />

                                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4 text-gray-400"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                        />
                                    </svg>
                                </span>
                            </div>
                        </div>
                        {/* Recapcha */}
                        <div className="form-control">
                            <label className="label">
                                <LoadCanvasTemplate />
                            </label>
                            <input onBlur={handleValidateCapcha} type="text" name="captcha" placeholder="Type the text above" className="input input-bordered" />
                            {/* <button className="btn btn-outline btn-xs mt-2">Validate </button> */}
                        </div>
                        {/* Login Here */}
                        <div className="flex items-center justify-between">
                        {/*  todo : Disabled : disable */}
                            <input disabled={false} className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white w-full" type="submit" value="Login" />

                        </div>
                        <div className="p-10 items-center " >
                            <div className=" divider text-red-700"> Log in with Social Accounts </div>
                            <div className="text-center p-2">
                                <SocialLogin></SocialLogin>

                                <p className="text-sm justify-center flex mt-2 text-gray-500">
                                No account?
                                    <Link to='/register' className="underline flex items-center ml-2 text-blue-600 font-bold">  Register Here <FaRegArrowAltCircleRight className="flex  ml-2 " /></Link>
                                </p>
                            </div>
                        </div>
                    </form>
                </div>

                <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
                    <img
                        alt="Welcome"
                        src="https://images.unsplash.com/photo-1630450202872-e0829c9d6172?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                </div>
            </section>
        </div>
    );
};

export default Login;