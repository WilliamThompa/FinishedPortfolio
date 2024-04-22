import React, { useEffect, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'

function LoaderSimple(props) {
    const [loading, setLoading] = useState(true)
    const controls = useAnimation()
    const [zaxis, setZAxis] = useState("z-50")

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
            setZAxis("-z-10")
        }, 4000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (loading) {
            controls.start({
                opacity: 1,
                transition: { duration: 2 },
                z: "z-50"
            });
        } else {
            controls.start({
                opacity: 0,
                transition: { duration: 1 },
                z: "z-0"
            });
        }
    }, [loading, controls]);

    return (
        <motion.div
            className={`fixed bg-slate-900 h-screen top-0 left-0 w-full flex justify-center items-center ${zaxis}`}
            animate={controls}
        >
            <div className="p-4 rounded-md">
                <div className="flex justify-center">
                    <>
                        <motion.span
                            className="w-4 h-4 my-12 mx-1 bg-yellow-400 rounded-full"
                            animate={{
                                y: [0, -20, 0],
                                opacity: [1, 0], // Fades out
                                transition: { duration: 1, repeat: 2 }
                            }}
                        />
                        <motion.span
                            className="w-4 h-4 my-12 mx-1 bg-yellow-400 rounded-full"
                            animate={{
                                y: [0, -20, 0],
                                opacity: [1, 0], // Fades out
                                transition: { duration: 1, repeat: 1.8, delay: 0.2 }
                            }}
                        />
                        <motion.span
                            className="w-4 h-4 my-12 mx-1 bg-yellow-400 rounded-full"
                            animate={{
                                y: [0, -20, 0],
                                opacity: [1, 0], // Fades out
                                transition: { duration: 1, repeat: 1.6, delay: 0.4 }
                            }}
                        />
                    </>
                </div>
            </div>
        </motion.div>
    );
}

export default LoaderSimple;