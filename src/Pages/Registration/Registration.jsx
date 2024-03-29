import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import { FaArrowAltCircleRight } from "react-icons/fa";



const Registration = () => {
    const axiosPublic = useAxiosPublic();

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();
    const onSubmit = data => {

        console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        // console.log('User Profile info Updated')
                        // Create User Entry in the DataBase
                        const userInfo = {
                            name: data.name,
                            email: data.email
                        }
                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    reset();
                                    Swal.fire({
                                        position: "top-end",
                                        icon: "success",
                                        title: "User Created Successfully",
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate('/');
                                }
                            })


                    }).catch((error) => {
                        console.error(error)
                    });
            })
    };
    // console.log(watch("example"))
    return (
        <div>
            <Helmet>
                <title>Elara travel | Register</title>
            </Helmet>

            <section style={{ backgroundImage: 'url(https://i.ibb.co/80WV4LR/1279674.jpg)' }} className="relative flex flex-wrap lg:h-screen lg:items-center">
                <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
                    <div className="mx-auto max-w-lg text-center">
                        <h1 className="text-2xl font-bold sm:text-3xl">Get started today!</h1>

                        <p className="mt-4 text-gray-50 text-lg">
                            Register here and enjoy the thril
                        </p>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="mx-auto mb-0 mt-8 max-w-md space-y-4">
                        {/* Name */}
                        <div>
                            <label htmlFor="name" className="sr-only">Name</label>
{/* Todo : Require {...register("name", { required: true })} */}
                            <div className="relative">
                                <input
                                    type="text"  name="name"
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                    placeholder="Enter Your Name"
                                />
                                {errors.name && <span>This field is required</span>}

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
                        {/* Photo */}
                        <div>
                            <label htmlFor="name" className="sr-only">Photo URL</label>

                            <div className="relative">
                                <input
                                    type="text" name="photo"
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                    placeholder="Photo Url"
                                />
                                {errors.photoURL && <span>PhotoURL is required</span>}

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
                        {/* Email  */}
                        <div>
                            <label htmlFor="email" className="sr-only">Email</label>

                            <div className="relative">
                                <input
                                    type="email"  {...register("email")} name="email"
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

                        <div>
                            <label htmlFor="password" className="sr-only">Password</label>

                            <div className="relative">
                                <input
                                    type="password"  {...register("password")} name="password"
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

                        <div className="flex items-center justify-between mb-8">


                            <input className="inline-block w-full rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white" type="submit" value="Register " />
                        </div>
                        <div className="p-10 items-center " >
                            <div className=" divider text-red-50"> Log in with Social Accounts </div>
                            <div className="text-center   p-2">
                                <SocialLogin></SocialLogin>

                                <p className="text-sm justify-center flex mt-2 items-center text-gray-50">
                                    Already Have an account
                                    <Link to='/login' className="underline flex items-center text-xl ml-2 text-blue-200 font-bold">  Login Here <button><FaArrowAltCircleRight className="flex  ml-2 " /></button></Link>
                                </p>
                            </div>
                        </div>
                    </form>

                </div>

                <div className=" items-center text-center sm:h-96  lg:w-1/2">
                    {/* <img
                        alt="Welcome"
                        src="https://i.ibb.co/zSKjNQs/login3-removebg.png"
                        className="absolute inset-0  w-full object-cover"
                    /> */}
                    <h1 className="text-5xl uppercase font-bold ">Join us </h1>
                    <p className="m-8 ">Be A Member Of Elara Travels ,Explore the world <br />
                    in a different way.</p>
                </div>

            </section>
        </div>
    );
};

export default Registration;