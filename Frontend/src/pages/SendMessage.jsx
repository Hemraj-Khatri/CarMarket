import React from 'react';

function SendMessage() {
    return (
        <div className='bg-blue-50 min-h-screen flex flex-col items-center justify-center'>
            <div className='bg-white rounded-lg shadow-lg p-8 max-w-lg mx-auto'>
                <h2 className='text-center font-semibold text-3xl text-blue-600 mb-4'>Thank You for Your Message!</h2>
                <p className='text-center text-gray-700 text-lg mb-6'>
                    We have received your message and our team will get back to you shortly.
                </p>
                <div className='text-center'>
                    <p className='text-gray-500'>If you have any urgent queries, feel free to reach us at:</p>
                    <a href="mailto:support@example.com" className='text-blue-500 hover:underline'>support@example.com</a>
                </div>
            </div>

        </div>
    );
}

export default SendMessage;
