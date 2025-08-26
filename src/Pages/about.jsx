import React from "react";
import { Link } from "react-router-dom";

export default function About() {
    return (
        <>

            <div className="bg-green-500 text-white text-center py-14">
                <h1 className="text-4xl font-bold">About Us</h1>
                <p className="mt-3 text-lg">
                    Creating beautiful spaces for your special moments.
                </p>
            </div>

            {/* About Content */}
            <div className="max-w-4xl mx-auto px-6 py-12 text-center">
                <h2 className="text-3xl font-semibold mb-4">Who We Are</h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                    We are a team of passionate decorators dedicated to making every
                    event unique and unforgettable. From weddings and birthdays to
                    corporate functions, we bring creativity, precision, and elegance
                    to every project we handle.
                </p>
            </div>

            {/* Mission Section */}
            <div className="bg-gray-100 py-12">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        To turn your ideas into stunning realities and ensure every
                        detail reflects your vision perfectly.
                    </p>
                </div>
            </div>

            {/* Call to Action */}
            <div className="text-center py-12">
                <h2 className="text-3xl font-bold mb-4">Want to Work With Us?</h2>
                <a
                    href="/contact"
                    className="bg-green-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-green-600"
                >
                    Contact Us
                </a>
            </div>
            {/* Hero Section */}
            <div className="bg-green-500 text-white text-center py-16">
                <h1 className="text-5xl font-bold">Welcome to Our Platform</h1>
                <p className="text-lg mt-4">
                    Build, Manage & Explore the best solutions for your needs.
                </p>
                <div className="mt-6 flex justify-center gap-4">
                    <Link to="/signup" className="bg-white text-green-500 px-6 py-2 rounded-md font-semibold hover:bg-gray-200">
                        Get Started
                    </Link>
                    <Link to="/about" className="border-2 border-white px-6 py-2 rounded-md font-semibold hover:bg-white hover:text-green-500">
                        Learn More
                    </Link>
                </div>
            </div>

            {/* Features Section */}
            <div className="px-6 py-10 bg-gray-100">
                <h2 className="text-3xl font-bold text-center mb-8">Our Key Features</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-md shadow-md text-center">
                        <h3 className="text-xl font-semibold">Fast & Secure</h3>
                        <p className="text-gray-600 mt-2">
                            Experience top-notch performance with industry-level security.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-md shadow-md text-center">
                        <h3 className="text-xl font-semibold">User Friendly</h3>
                        <p className="text-gray-600 mt-2">
                            Simple and intuitive design for a seamless experience.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-md shadow-md text-center">
                        <h3 className="text-xl font-semibold">24/7 Support</h3>
                        <p className="text-gray-600 mt-2">
                            Our support team is available anytime you need help.
                        </p>
                    </div>



                </div>
            </div>

            {/* Call to Action */}
            <div className="bg-green-500 text-white text-center py-12">
                <h2 className="text-4xl font-bold">Ready to Get Started?</h2>
                <p className="mt-4 text-lg">Join thousands of users who trust our platform.</p>
                <Link
                    to="/signup"
                    className="inline-block mt-6 bg-white text-green-500 px-8 py-3 rounded-md font-bold hover:bg-gray-200"
                >
                    Sign Up Now
                </Link>
            </div>


            <div className="relative h-40 w-full">
                <img
                    src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                    alt="decor"
                    className="opacity-100"
                />
            </div>

        </>
    );
}
