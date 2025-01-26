import Image from '../assets/Poster.png';

const Hero = () => {
    return (
        <div className="pt-16 bg-gradient-to-b from-blue-50 to-white">
            <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col md:flex-row items-center">
                <div className="text-center md:text-left md:w-1/2">
                    <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                        <span className="block">Welcome to</span>
                        <span className="block text-customBlue">
                            ABV-IIITM Alumni Network
                        </span>
                    </h1>
                    <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                        <span className="font-bold">Dear Alumni,</span>
                        <span>
                            We are glad to state that the institute is
                            organizing the Alumni Meet 2025 on the dates 15-16
                            February, 2025 (Sat-Sun). We cordially invite all
                            alumni to reunite at the campus and spend quality
                            time with our students, faculty, and staff; while
                            reliving the memories with each other and recalling
                            your golden days at the campus. This alumni meet is
                            especially important as we are celebrating the
                            Silver Jubilee of our first founding batch PGDMIT
                            1998-2000. It has been 25 years since our founding
                            batch left the abode of this institution and has
                            been serving mankind using the skills acquired. We
                            are also celebrating the Crystal Jubilee of our 2010
                            graduating batches: 2010 graduated PhDs, IPG
                            2005-2010, MTech 2008-2010, and MBA 2008-2010. The
                            members of these batches have never met in large
                            numbers physically for the last 15 years and this is
                            an excellent moment to travel back to the campus and
                            reunite.
                        </span>
                    </p>
                    <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:justify-start md:mt-8">
                        <div className="rounded-md shadow">
                            <a
                                href="https://forms.gle/3uHB9GgVaZDCNdUC6"
                                target="_blank"
                                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10">
                                Register Now
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center py-8 md:w-1/2">
                    <img
                        src={Image}
                        alt="Alumni Meet Poster"
                        className="w-full p-10 max-w-2xl h-full rounded-3xl"
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;
