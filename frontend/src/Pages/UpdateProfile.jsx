import React, { useState } from "react";

export default function UpdateProfile() {
    const [profile, setProfile] = useState({
        picture: null,
        name: "John Doe",
        mobile: "1234567890",
        email: "johndoe@example.com",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile({ ...profile, [name]: value });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setProfile({ ...profile, picture: URL.createObjectURL(file) });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Profile Updated ✅");
        console.log(profile);
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg mt-6">
            <h2 className="text-2xl font-bold mb-4 text-center">My Profile</h2>

            {/* Profile Picture */}
            <div className="flex justify-center mb-4">
                <label className="cursor-pointer">
                    <img
                        src={
                            profile.picture ||
                            "https://via.placeholder.com/100?text=Profile+Pic"
                        }
                        alt="Profile"
                        className="w-24 h-24 rounded-full object-cover border"
                    />
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="hidden"
                    />
                </label>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                    <label className="block font-medium">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={profile.name}
                        onChange={handleChange}
                        className="border rounded w-full px-3 py-2"
                    />
                </div>

                <div>
                    <label className="block font-medium">Mobile No</label>
                    <input
                        type="text"
                        name="mobile"
                        value={profile.mobile}
                        onChange={handleChange}
                        className="border rounded w-full px-3 py-2"
                    />
                </div>

                <div>
                    <label className="block font-medium">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={profile.email}
                        onChange={handleChange}
                        className="border rounded w-full px-3 py-2"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
                >
                    Save Changes
                </button>
            </form>
        </div>
    );
}
