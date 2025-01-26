const Campus = () => {
    return (
        <section id="campus" className="py-16 bg-blue-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Campus Visit Guide
                    </h2>
                    <p className="mt-4 text-xl text-gray-500">
                        Welcome back to your alma mater
                    </p>
                </div>

                <div className="mt-12 grid gap-8 grid-cols-1 lg:grid-cols-2">
                    {/* Visitor Gate Pass */}
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">
                            Visitor Gate Pass
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <span className="flex-shrink-0 h-6 w-6 text-customBlue">
                                    •
                                </span>
                                <span className="ml-3 text-gray-600">
                                    If you have a digital or physical alumni
                                    card, no need for a gate pass.
                                </span>
                            </li>
                            <li className="flex items-start">
                                <span className="flex-shrink-0 h-6 w-6 text-customBlue">
                                    •
                                </span>
                                <span className="ml-3 text-gray-600">
                                    Inform us about your visit via email
                                    (alumninet@iiitm.ac.in) with intended visit
                                    dates.
                                </span>
                            </li>
                            <li className="flex items-start">
                                <span className="flex-shrink-0 h-6 w-6 text-customBlue">
                                    •
                                </span>
                                <span className="ml-3 text-gray-600">
                                    You can also use our social media handles to
                                    share your visit details.
                                </span>
                            </li>
                        </ul>
                    </div>

                    {/* Staying at the Campus */}
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">
                            Staying at the Campus
                        </h3>
                        <div className="space-y-4">
                            <p className="text-gray-600">
                                ABV-IIITM Gwalior offers a Visitor Hostel with a
                                special alumni discount. It's a great experience
                                to stay on campus and relive the old memories.
                            </p>
                            <a
                                href="https://iiitm.ac.in/images/2024/July_2024/Visitor-Hostel-Guest-House-Booking-Form-1.pdf"
                                target="_blank"
                                className="inline-block text-customBlue hover:text-customBlue">
                                Download Booking Form →
                            </a>
                            <p className="text-sm text-gray-500 mt-2">
                                Pro Tip: No need to print the form. Fill it out
                                at check-in. Digital payments are accepted at
                                checkout.
                            </p>
                        </div>
                    </div>

                    {/* Interacting with Students and Faculty */}
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">
                            Interacting with Students and Faculty
                        </h3>
                        <p className="text-gray-600 mb-4">
                            Connect with current students and faculty during
                            your visit:
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <span className="flex-shrink-0 h-6 w-6 text-customBlue">
                                    •
                                </span>
                                <span className="ml-3 text-gray-600">
                                    Informal walk-and-talks around campus.
                                </span>
                            </li>
                            <li className="flex items-start">
                                <span className="flex-shrink-0 h-6 w-6 text-customBlue">
                                    •
                                </span>
                                <span className="ml-3 text-gray-600">
                                    Interactions with student clubs and groups.
                                </span>
                            </li>
                            <li className="flex items-start">
                                <span className="flex-shrink-0 h-6 w-6 text-customBlue">
                                    •
                                </span>
                                <span className="ml-3 text-gray-600">
                                    Formal sessions through AlumniConnect talks
                                    (when available).
                                </span>
                            </li>
                        </ul>
                    </div>

                    {/* Visiting in Large Groups */}
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">
                            Visiting in Large Groups
                        </h3>
                        <p className="text-gray-600 mb-4">
                            Planning to visit with your batch or a large group?
                            The Alumni Cell can help arrange:
                        </p>
                        <ul className="space-y-2">
                            <li className="flex items-center">
                                <span className="text-customBlue mr-2">✓</span>
                                Campus tours
                            </li>
                            <li className="flex items-center">
                                <span className="text-customBlue mr-2">✓</span>
                                Student and faculty interactions
                            </li>
                            <li className="flex items-center">
                                <span className="text-customBlue mr-2">✓</span>
                                Accommodation and food coordination
                            </li>
                            <li className="flex items-center">
                                <span className="text-customBlue mr-2">✓</span>
                                Batch meetups and group activities
                            </li>
                        </ul>
                        <p className="text-sm text-gray-500 mt-2">
                            Please email the details of your group visit to
                            alumninet@iiitm.ac.in or contact us via our social
                            media handles.
                        </p>
                    </div>

                    {/* Organizing a Local Chapter or Batch Meetup */}
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">
                            Organizing a Local Chapter or Batch Meetup
                        </h3>
                        <p className="text-gray-600 mb-4">
                            Many alumni meet in different cities for reunions.
                            The Alumni Cell can assist with:
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <span className="flex-shrink-0 h-6 w-6 text-customBlue">
                                    •
                                </span>
                                <span className="ml-3 text-gray-600">
                                    Publicizing your meetup to the alumni
                                    network.
                                </span>
                            </li>
                            <li className="flex items-start">
                                <span className="flex-shrink-0 h-6 w-6 text-customBlue">
                                    •
                                </span>
                                <span className="ml-3 text-gray-600">
                                    Coordinating with alumni from the alumni
                                    directory.
                                </span>
                            </li>
                            <li className="flex items-start">
                                <span className="flex-shrink-0 h-6 w-6 text-customBlue">
                                    •
                                </span>
                                <span className="ml-3 text-gray-600">
                                    Assistance with faculty participation (if
                                    possible).
                                </span>
                            </li>
                            <li className="flex items-start">
                                <span className="flex-shrink-0 h-6 w-6 text-customBlue">
                                    •
                                </span>
                                <span className="ml-3 text-gray-600">
                                    Sharing photos and stories for us to post on
                                    our social media handles.
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Campus;
