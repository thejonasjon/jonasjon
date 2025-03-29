import { motion } from "framer-motion";

export function Button(props) {
    return (
        <motion.button whileTap={{scale:0.8}} className={`flex items-center gap-4 rounded-sm px-6 py-3 cursor-pointer ${props.className}`}>
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
