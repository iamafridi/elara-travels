
const Contact = () => {
    return (
        <div className="mt-5 border p-4 rounded-xl text-center">
            <h1 className="text-4xl font-bold">Get in touch</h1>
            <section className="py-6  dark:bg-gray-800 dark:text-gray-50">
                <div className="grid  max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
                    <div className="py-6 md:py-0 md:px-6">
                        <p className="pt-2 pb-4">Contact Us to start a conversation</p>
                        <div className="space-y-4">
                            <p className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                                </svg>
                                <span>Patenga, Chittagong</span>
                            </p>
                            <p className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                                </svg>
                                <span>123456789</span>
                            </p>
                            <p className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                </svg>
                                <span>elara@business.com</span>
                            </p>
                        </div>
                    </div>
                    <img src="https://i.ibb.co/wCJ4tKS/contact-us.jpg" alt="" />
                </div>
            </section>
            <div>
                <section className="dark:bg-gray-800 dark:text-gray-100">
                    <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                        <h2 className="text-2xl font-semibold sm:text-4xl">Frequently Asked Questions</h2>
                        <p className="mt-4 mb-8 dark:text-gray-400">
                            "Booking Information and Procedures"</p>
                        <div className="space-y-4">
                            <details className="w-full border rounded-lg">
                                <summary className="px-4 py-6 focus:outline-none focus-visible:ri">What is your cancellation policy?</summary>
                                <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">Our cancellation policy varies depending on the type of tour and its terms. Typically, cancellations made within a specific timeframe before the tour start date may incur a fee. We highly recommend reviewing the terms and conditions for each tour package or contacting our customer service for detailed information about our cancellation policy. </p>
                            </details>
                            <details className="w-full border rounded-lg" open="">
                                <summary className="px-4 py-6 focus:outline-none focus-visible:ri">What is included in the tour package?</summary>
                                <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400"> Our tour packages include a variety of amenities and services depending on the specific tour. Generally, they cover accommodation, transportation during the tour, guided activities, and some meals. The inclusions can vary, so we encourage you to review the detailed itinerary of each tour on our website or contact our team for specific information regarding what is included in a particular package. </p>
                            </details>
                            <details className="w-full border rounded-lg" open="">
                                <summary className="px-4 py-6 focus:outline-none focus-visible:ri">How do I book a tour</summary>
                                <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400"> Booking a tour with us is simple! You can book through our website by selecting your desired tour, choosing the dates, and following the prompts to complete the reservation. Alternatively, you can contact our customer service team via phone or email, and they'll assist you in booking the tour and answering any queries you may have.</p>
                            </details>
                        </div>
                    </div>
                </section>
            </div>

        </div>

    );
};

export default Contact;