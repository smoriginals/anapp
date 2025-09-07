import React from "react";

export default function Terms() {
    return (
        <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg mt-6">
            <h1 className="text-3xl font-bold mb-4 text-center">Terms & Conditions</h1>
            <p className="text-gray-600 mb-4 text-center">
                Last updated: September 4, 2025
            </p>

            <div className="space-y-4 text-gray-700">
                <section>
                    <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
                    <p>
                        Welcome to our website. By accessing or using our services, you
                        agree to comply with and be bound by these Terms & Conditions. If
                        you do not agree, please do not use our services.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-2">2. Use of Services</h2>
                    <ul className="list-disc pl-6">
                        <li>You must be at least 18 years old to use our services.</li>
                        <li>
                            You agree not to misuse our services for illegal or unauthorized
                            purposes.
                        </li>
                        <li>
                            You are responsible for maintaining the confidentiality of your
                            account.
                        </li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-2">3. Accounts</h2>
                    <p>
                        When you create an account, you agree to provide accurate and
                        complete information. You are responsible for safeguarding your
                        login credentials and notifying us immediately of any unauthorized
                        use of your account.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-2">4. Payments</h2>
                    <p>
                        If our services require payment, you agree to provide valid payment
                        details. All fees are non-refundable unless otherwise stated.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-2">5. Intellectual Property</h2>
                    <p>
                        All content on this site, including text, graphics, logos, and
                        software, is the property of our company and is protected by
                        copyright laws. You may not reproduce or distribute our content
                        without permission.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-2">6. Limitation of Liability</h2>
                    <p>
                        We are not liable for any damages that may result from the use or
                        inability to use our services. Your use of our website is at your
                        own risk.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-2">7. Termination</h2>
                    <p>
                        We reserve the right to suspend or terminate your account if you
                        violate these Terms & Conditions or misuse our services.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-2">8. Changes to Terms</h2>
                    <p>
                        We may update these Terms & Conditions at any time. Changes will be
                        posted on this page with an updated date.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-2">9. Contact Us</h2>
                    <p>
                        If you have any questions about these Terms & Conditions, please
                        contact us at:{" "}
                        <a href="mailto:support@example.com" className="text-blue-600">
                            support@example.com
                        </a>
                    </p>
                </section>
            </div>
        </div>
    );
}
