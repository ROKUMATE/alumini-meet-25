// import React from 'react';

const ContactCard = () => {
    return (
        <section className="bg-blue-50 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg p-6">
                <h2 className="text-2xl font-semibold text-gray-900">
                    Get in Touch
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                    If you have any questions or need assistance, feel free to
                    reach out to us at:
                </p>
                <div className="mt-4 text-lg font-medium text-gray-800">
                    <a href="mailto:alumninet@iiitm.ac.in">
                        alumninet@iiitm.ac.in
                    </a>
                </div>
                <div className="mt-6 text-lg text-gray-600">
                    <p>Phone: +91-XXXXXXXXXX</p>
                </div>
            </div>
        </section>
    );
};

export default ContactCard;
