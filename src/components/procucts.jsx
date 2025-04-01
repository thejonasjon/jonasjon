import { motion } from "framer-motion";
import ProductCard from "./productCard";

function Products() {
    const productDetails = [
        {
            id: "1",
            name: "Mana Credit",
            subname: "Credit Access for Immigrants",
            description: "A fintech solution that helps immigrants build credit profiles and verify employment in new countries.",
            longDescription: "Global Credit Connect simplifies financial integration for immigrants by providing a seamless platform for credit profile acceleration, employment verification, and financial education. Using AI and strategic partnerships, we bridge the gap between immigrants' past financial history and their future opportunities, ensuring immediate access to essential financial services upon arrival.",
            secondaryImage: "/placeholder.svg?height=600&width=800",
            category: ["Fintech"],
            technologies: ["AI", "React", "Github", "Next.js"],
            role: "CTO",
            year: "2025",
            imageURL: "https://res.cloudinary.com/dgfz1qbhj/image/upload/v1743503666/Screenshot_2025-04-01_at_11.33.49_AM_okf8ny.png",
            prodLink: "https://manacredit.com/",
            // github: "https://github.com/yourusername/global-credit-connect",
            gradient: "conic-gradient(from 90deg at 50% 50%, #1E3A8A 0%, #3B82F6 50%, #1E3A8A 100%)"
        },
        {
            id: "2",
            name: "HandiGo",
            subname: "On-Demand Skilled Labor Marketplace",
            description: "A platform connecting skilled laborers with individuals and businesses in need of their services.",
            longDescription: "HandiGo revolutionizes the way skilled laborers and businesses connect by providing a seamless on-demand marketplace. With a focus on accessibility and efficiency, HandiGo ensures that professionals can find work opportunities while businesses and individuals access reliable, verified talent quickly. Our platform enhances workforce engagement, offering fair pricing, secure payments, and a trust-driven environment.",
            secondaryImage: "/placeholder.svg?height=600&width=800",
            category: ["Marketplace"],
            technologies: ["React", "Taiwinds", "Django", "Github", "AWS"],
            role: "Lead Frontend Developer",
            year: "2024",
            imageURL: "https://res.cloudinary.com/dgfz1qbhj/image/upload/v1743504105/Screenshot_2025-04-01_at_11.40.51_AM_zowalz.png",
            prodLink: "https://handigo-app.netlify.app/",
            // github: "https://github.com/yourusername/handigo",
            gradient: "conic-gradient(from 90deg at 50% 50%, #4CAF50 0%, #8BC34A 50%, #4CAF50 100%)"
        },
        {
            id: "3",
            name: "GoFlex",
            subname: "Seamless Invoice Management & Compliance",
            description: "A web-based invoicing platform enabling freelancers and service providers to send invoices and receive payments with built-in compliance services.",
            longDescription: "GoFlex streamlines invoicing and payment processing for freelancers, service providers, and small businesses. By serving as a merchant of record, GoFlex provides a registered business name, tax ID, and compliance handling, eliminating the need for users to create their own business entities. With integration into third-party payment processors like Stripe, GoFlex ensures a seamless and hassle-free payment experience.",
            secondaryImage: "/placeholder.svg?height=600&width=800",
            category: ["Fintech", "Invoicing"],
            technologies: ["Postman", "Locust", "Django", "React", "AWS", "APISIX", "Postman", "Jira"],
            role: "QA Engineer",
            year: "2024",
            imageURL: "https://res.cloudinary.com/dgfz1qbhj/image/upload/v1743504200/Screenshot_2025-04-01_at_11.42.31_AM_vc4dui.png",
            prodLink: "https://gonomadhq.com/goflex",
            // github: "https://github.com/yourusername/goflex",
            gradient: "conic-gradient(from 90deg at 50% 50%, #FF9800 0%, #FFC107 50%, #FF9800 100%)"
        },
        {
            id: "4",
            name: "Townsmeet",
            subname: "Empowering Businesses with Digital Solutions",
            description: "Experience the Digital Advantage. Townsmeet empowers businesses and organisations through innovative digital solutions.",
            longDescription: "Townsmeet provides cutting-edge digital solutions designed to help businesses and organisations thrive in the digital era. With a focus on innovation, efficiency, and growth, Townsmeet delivers tailored strategies that enhance digital engagement and operational success.",
            secondaryImage: "/placeholder.svg?height=600&width=800",
            category: ["Digital Solutions"],
            technologies: ["Django", "Vuejs", "Github", "Github Actions", "ClickUp", "Postman"],
            role: "Backend Developer",
            year: "2022",
            imageURL: "https://res.cloudinary.com/dgfz1qbhj/image/upload/v1743504296/Screenshot_2025-04-01_at_11.44.26_AM_ybjzoe.png",
            prodLink: "https://www.townsmeet.com/",
            // github: "https://github.com/yourusername/townsmeet",
            gradient: "conic-gradient(from 90deg at 50% 50%, #4CAF50 0%, #8BC34A 50%, #4CAF50 100%)"
        }

    ];

    return (
        <section id="experience" className="relative">
            <div className="px-10 py-20 h-full w-full bg-gray-white">
                <div className="heading text-center mb-32">
                    <h2 className='text-4xl md:text-6xl text-gray-900 font-bold mb-3'>Exlpore Featured Products</h2>
                    <p className="text-lg sm:text-xl font-normal m-auto text-gray-700 w-full sm:w-4/6 md:w-4/6">Honored to have played a role in building innovative products that drive change, enhance productivity, streamline processes, and continue to scale over the years..</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {productDetails.map((productDetail, index) => (
                        <ProductCard key={index} productDetails={productDetail} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Products;
