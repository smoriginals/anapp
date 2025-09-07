import React from "react";

export default function PrivacyPolicy() {
    return (
        <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg mt-6">
            <h1 className="text-3xl font-bold mb-4 text-center">Privacy Policy</h1>
            <p className="text-gray-600 mb-4 text-center">
                Last updated: September 4, 2025
            </p>

            <div className="space-y-4 text-gray-700">
                <section>
                    <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
                    <p>
                        Your privacy is important to us. This Privacy Policy explains how we
                        collect, use, and protect your information when you use our
                        services.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-2">2. Information We Collect</h2>
                    <p>We may collect the following types of information:</p>
                    <ul className="list-disc pl-6">
                        <li>Personal details (name, email, phone number, etc.)</li>
                        <li>Account information (username, password)</li>
                        <li>Usage data (how you use our website)</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-2">3. How We Use Your Information</h2>
                    <ul className="list-disc pl-6">
                        <li>To provide and improve our services</li>
                        <li>To communicate with you</li>
                        <li>To ensure account security</li>
                        <li>To comply with legal obligations</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-2">4. Data Protection</h2>
                    <p>
                        We take appropriate security measures to protect your personal
                        information against unauthorized access, alteration, disclosure, or
                        destruction.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-2">5. Sharing of Information</h2>
                    <p>
                        We do not sell or rent your personal information. We may share data
                        only with trusted partners or when required by law.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-2">6. Your Rights</h2>
                    <ul className="list-disc pl-6">
                        <li>Access your personal data</li>
                        <li>Request correction of your data</li>
                        <li>Request deletion of your account</li>
                        <li>Withdraw consent at any time</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-2">7. Changes to This Policy</h2>
                    <p>
                        We may update this Privacy Policy from time to time. Any changes
                        will be posted here with an updated date.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-2">8. Contact Us</h2>
                    <p>
                        If you have any questions about this Privacy Policy, please contact
                        us at:{" "}
                        <a href="mailto:support@example.com" className="text-blue-600">
                            support@example.com
                        </a>
                    </p>
                </section>
            </div>
        </div>
    );
}
