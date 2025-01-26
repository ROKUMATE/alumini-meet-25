const SubmitPhotoVideo = () => {
    return (
        <section className="bg-blue-50 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto border border-gray-200 rounded-lg p-8 shadow-lg">
                <h2 className="text-3xl font-bold text-gray-900 text-left mb-4">
                    Submit Photo/Video
                </h2>
                <p className="text-lg text-gray-600 text-left mb-4">
                    We are collecting photos/videos of the different batches of
                    the institute. We would love to see the photos/videos of
                    your time at the institute showing both the recreational
                    activities of your gang and the state of the institute at
                    that time. We highly encourage you to help us in this
                    endeavour.
                </p>
                <p className="text-lg text-gray-600 text-left mb-6">
                    Please drop some photographs/videos at
                </p>
                <div className="text-right">
                    <a
                        href="mailto:alumninet@iiitm.ac.in"
                        className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 shadow-md">
                        Submit via Email
                    </a>
                </div>
            </div>
        </section>
    );
};

export default SubmitPhotoVideo;
