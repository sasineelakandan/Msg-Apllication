import React, { useState } from 'react';

const ProfileSettings = () => {
    const [profile, setProfile] = useState({
        name: 'John Doe',
        email: 'john.doe@example.com',
        phone: '+1234567890',
        image: '',
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'image') {
            setProfile({
                ...profile,
                image: URL.createObjectURL(files[0]),
            });
        } else {
            setProfile({ ...profile, [name]: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic
        console.log('Profile updated:', profile);
    };

    return (
        <div className="min-h-screen bg-yellow-400 flex items-center justify-center">
            <div className="max-w-lg w-full p-6 bg-white shadow-lg rounded-lg border border-gray-200">
                <div className="flex flex-col items-center">
                    <label htmlFor="image-upload" className="relative">
                        <img 
                            className="w-32 h-32 rounded-full object-cover border-4 border-gray-300 cursor-pointer"
                            src={profile.image || 'https://via.placeholder.com/150'} 
                            alt="Profile"
                        />
                        <input 
                            type="file"
                            id="image-upload"
                            name="image"
                            className="absolute inset-0 opacity-0 cursor-pointer"
                            onChange={handleChange}
                        />
                    </label>
                    <h1 className="mt-4 text-3xl font-semibold text-gray-800">{profile.name}</h1>
                    <p className="text-gray-600">@{profile.name.toLowerCase().replace(' ', '_')}</p>
                </div>

                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            value={profile.name}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            value={profile.email}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            value={profile.phone}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                            Save Changes
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProfileSettings;
