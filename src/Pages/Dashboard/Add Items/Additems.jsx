import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const Additems = () => {
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => console.log(data)

    return (
        <div>
            <SectionTitle heading={' A New Destination'} subHeading={'What is the exciting place we are adding'}></SectionTitle>

            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div >
                        <label className="label">
                            <span className="label-text">Destination Name*</span>
                        </label>
                        <div className="relative w-full border rounded-xl h-14">

                            <input
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
                            <select {...register("type")}
                                className="select select-success w-full ">
                                <option disabled selected>Select The Destination</option>
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
                          className="textarea w-full h-32 textarea-success" placeholder="Description Here"></textarea>
                    </div>
                    {/* Picture  */}
                    <div className="my-4 ">
                        <input {...register('image_url')} 
                        type="file" className="file-input file-input-bordered file-input-accent w-full max-w-xs" />
                    </div>
                    <button className="btn w-full">
                        Add Destination <FaRegArrowAltCircleRight/>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Additems;