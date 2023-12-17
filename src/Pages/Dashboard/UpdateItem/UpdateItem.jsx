import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

// Image Hosting Api 
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;



const UpdateItem = () => {
    const { name, type, description, price, country, _id } = useLoaderData();
    // console.log(item);


    const { register, handleSubmit } = useForm()
    const axiosSecure = useAxiosSecure();
    const axiosPublic = useAxiosPublic();
    const onSubmit = async (data) => {
        console.log(data)
        // Uploading Image to image bb
        const imageFile = { image: data.image_url[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
       
        if (res.data.success) {
            // Sending data to the server 
            const tourItem = {
                name: data.name,
                type: data.type,
                price: parseFloat(data.price),
                description: data.description,
                country: data.country,
                image_url: res.data.data.display_url
            }
            console.log(res.data.data.display_url);
            const tourRes = await axiosSecure.patch(`/services/${_id}`, tourItem)
            console.log(tourRes.data);
            if (tourRes.data.modifiedCount > 0) {
                //  Success pop up here
                // reset();
                Swal.fire({
                    title: "Tour Service Added!",
                    text: `${data.name} is Updated to the service`,
                    icon: "success",
                    background: "gray",
                    color: 'white',
                    timer: 1000
                });
            }
        }
        console.log(res.data);

    }
    return (
        <div>
            <SectionTitle heading={'Update Tour'} subHeading={'Refetch Information'}></SectionTitle>

            {/* Update Form */}
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div >
                        <label className="label">
                            <span className="label-text">Destination Name*</span>
                        </label>
                        <div className="relative w-full border rounded-xl h-14">

                            <input
                                defaultValue={name}
                                {...register("name")}
                                required
                                className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                                placeholder=" " />
                            <label
                                className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">Destination Name*
                            </label>
                        </div>
                    </div>
                    <div className="grid grid-cols-2  gap-6">
                        {/* Type */}
                        <div>
                            <label className="label">
                                <span className="label-text">Type *</span>
                            </label>
                            <select defaultValue={type} {...register("type")}
                                className="select select-success w-full ">
                                {/* <option disabled value='default'>Select The Destination</option> */}
                                <option value="Mountains">Mountains</option>
                                <option value="Camping">Camping</option>
                                <option value="River">River</option>
                                <option value="Beach">Beach</option>
                                <option value="Safari">Safari</option>
                                <option value="City">City</option>
                                <option value="Historical">Historical</option>
                                <option value="Island">Island</option>
                                <option value="Cruise">Cruise</option>
                                <option value="Winery">Winery</option>
                                <option value="Natural Phenomenon">Natural Phenomenon</option>
                            </select></div>

                        {/* Price */}
                        <div>
                            <label className="label">
                                <span className="label-text">Price *</span>
                            </label>
                            <input type="number"
                                defaultValue={price}
                                placeholder="Price"
                                {...register('price')}
                                className="input input-bordered input-accent w-full " />
                        </div>
                    </div>
                    {/* Description */}
                    <div>
                        <label className="label">
                            <span className="label-text">Description *</span>
                        </label>
                        <textarea {...register('description')}
                            defaultValue={description}
                            className="textarea w-full h-32 textarea-success" placeholder="Description Here"></textarea>
                    </div>
                    <div className="grid grid-cols-2 gap-6 my-4 items-center">
                        {/* country */}
                        <div >
                            <div className="relative h-30">
                                <select defaultValue={country} {...register("country")}
                                    className="peer h-30 w-full rounded-xl border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-gray-900 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50">
                                    {/* <option disabled value='default'>Select The Country</option> */}
                                    <option value="USA">USA</option>
                                    <option value="Bangladesh">Bangladesh</option>
                                    <option value="Canada">Canada</option>
                                    <option value="India">India</option>
                                    <option value="Italy">Italy</option>
                                    <option value="UAE">UAE</option>
                                    <option value="Africa">Africa</option>
                                    <option value="Australia">Australia</option>
                                    <option value="Nepal">Nepal</option>
                                </select>
                                <label
                                    className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                    Select a Country
                                </label>
                            </div>
                        </div>
                        {/* Picture  */}
                        <div className="my-4 ">
                            <input {...register('image_url')}
                                type="file" className="file-input file-input-bordered file-input-accent w-full" />
                        </div>
                    </div>
                    <button className="btn w-full">
                        Update Destination <FaRegArrowAltCircleRight />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateItem;