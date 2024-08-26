import React from 'react';

const ThankYouPage: React.FC = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Thank You</h2>
                <p className="text-center">You have successfully logged in.</p>
            </div>
        </div>
    );
};

export default ThankYouPage;
