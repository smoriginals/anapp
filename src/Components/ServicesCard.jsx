import React from "react";

export default function ServicesCard() {
    const services = [
        {
            title: "Plant Delivery & Setup",
            desc: "We deliver plants to your doorstep and help with setup & potting.",
            link: "#",
        },
        {
            title: "Garden & Balcony Design",
            desc: "Transform your balcony, terrace, or garden into a beautiful green space.",
            link: "#",
        },
        {
            title: "Plant Care & Maintenance",
            desc: "Regular maintenance, pruning, repotting & plant health checks.",
            link: "#",
        },
        {
            title: "Custom Gifting",
            desc: "Personalized plant gifts for birthdays, festivals, and events.",
            link: "#",
        },
        {
            title: "Workshops & Consultation",
            desc: "Learn plant care basics, bonsai, and get expert consultations.",
            link: "#",
        },
        {
            title: "Subscription Plans",
            desc: "Monthly delivery of curated plants and seasonal plant boxes.",
            link: "#",
        },
        {
            title: "Corporate & Office Setup",
            desc: "Indoor plant setups for offices, cafes, and commercial spaces.",
            link: "#",
        },
        {
            title: "Event Decoration",
            desc: "Green decoration for weddings, parties, and festive occasions.",
            link: "#",
        },
        {
            title: "Soil & Fertilizer Supply",
            desc: "Organic soil, compost, and fertilizers delivered to your home.",
            link: "#",
        },
        {
            title: "Plant Doctor Consultation",
            desc: "Expert advice on plant health, pest issues, and best practices.",
            link: "https://www.google.com",
        },
    ];

    return (
        <div className="min-h-screen bg-gray-100 px-4 py-8">
            <h2 className="mb-6 text-center text-2xl font-bold">Our Services</h2>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                {services.map((service, index) => (
                    <a
                        key={index}
                        href={service.link}             // ✅ this makes it clickable 
                        target="_blank"                // ✅ opens in new tab 
                        rel="noopener noreferrer"     // ✅ safe external linking
                        className="cursor-pointer rounded-xl bg-white p-4 shadow transition duration-300 ease-in-out hover:shadow-lg"
                    >
                        <h3 className="mb-2 text-xl font-semibold">{service.title}</h3>
                        <p className="text-gray-600">{service.desc}</p>
                    </a>
                ))}
            </div>
        </div>
    );
}
