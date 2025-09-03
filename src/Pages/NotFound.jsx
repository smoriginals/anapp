// Pages/NotFound.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6 text-center">
            <div className="max-w-md">
                <p className="text-sm font-semibold text-green-600">404 error</p>
                <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-gray-900">
                    Page not found
                </h1>
                <p className="mt-3 text-gray-600 font-medium ">
                    Sorry, we couldn't find the page you're looking for.
                </p>

                <div className="mt-6 flex items-center justify-center gap-3">
                    <Link
                        to="/"
                        className="inline-flex items-center rounded-lg bg-green-600 px-4 py-2 text-white font-semibold shadow hover:bg-green-700 transition"
                    >
                        Go home
                    </Link>
                    <Link
                        to="/contact"
                        className="inline-flex items-center rounded-lg border border-gray-300 px-4 py-2 font-semibold text-gray-700 hover:bg-gray-100 transition"
                    >
                        Contact support
                    </Link>
                </div>

                <div className="mt-8">
                    <div className="text-9xl font-black text-gray-200 select-none">404</div>
                </div>
            </div>
        </div>
    );
}
