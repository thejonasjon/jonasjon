import { section } from "framer-motion/client"
import ProductCard from "./productCard"
import { motion } from "framer-motion";


function Products(){
    const productDetails = {
        id: "1",
        name: "Neurolink",
        subname: "Brain-Computer Interface",
        description: "Descriptions",
        longDescription: "Quantum OS fundamentally reimagines the computing paradigm by replacing traditional window-based interfaces with a spatial environment where information exists as manipulable objects in three-dimensional space. The system uses advanced spatial mapping to create persistent virtual workspaces that can be navigated intuitively using gestures, gaze, and voice. Applications exist as dynamic entities that can be combined, separated, and transformed through direct manipulation, creating workflows that are impossible in conventional computing. The architecture includes a revolutionary data representation system that allows information to maintain contextual relationships across different applications and use cases.",
        secondaryImage: "/placeholder.svg?height=600&width=800",
        category: "Spatial Computing",
        technologies: ["HTML", "CSS", "JS", "Git", "Github", "Vercel", "React"],
        year: "2024",
        prodLink: "https://example.com/project",
        github: "https://github.com/yourusername/project",
        gradient: "conic-gradient(from 90deg at 50% 50%, #8EC5FC 0%, #E0C3FC 50%, #8EC5FC 100%)",

    }

    console.log(productDetails)

    return (
        <section id="experience" className="relative">
            <div className="px-10 py-20 h-full w-full bg-[linear-gradient(to_right,_#414345,_#232526)]">
                <div className="heading mb-32">
                    <h2 className='text-4xl md:text-6xl text-white font-bold mb-3'>Product Products</h2>
                    <p className="text-lg sm:text-xl font-normal text-gray-300 w-full sm:w-4/6 md:w-3/6">Exploring the boundaries of digital experience through innovative projects that challenge conventional paradigms..</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <ProductCard productDetails={productDetails}
                    />
                    <ProductCard productDetails={productDetails}
                    />
                    <ProductCard productDetails={productDetails}
                    />
                    <ProductCard productDetails={productDetails}
                    />

                </div>
            </div>
        </section>
    )
}

export default Products