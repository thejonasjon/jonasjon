import { motion } from "framer-motion";

export function Button(props) {
    return (
        <motion.button whileTap={{scale:0.8}} className={`flex items-center gap-1 md:gap-4 rounded-sm px-3 md:px-4 lg:px-6 py-2 md:py-3 cursor-pointer ${props.className}`}>
           {
            props.leftIcon ? (
                <>
                    {props.Icon}
                    {props.name}
                </>
            ) : (
                <>
                    {props.name}
                    {props.Icon}
                </>
            )
           }
        </motion.button>
    );
}
