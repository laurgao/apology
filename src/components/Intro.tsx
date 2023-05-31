
// true means open, false means closed

import { useEffect } from "react";

function Intro({ onClick }: { onClick: () => void }) {
    useEffect(() => {
        // set body to be bg-stone-700
        document.body.classList.add("bg-stone-700");
        return () => {
            document.body.classList.remove("bg-stone-700");
        }
    }, [])

    return (
        <>
            <div className="text-stone-200 p-4 flex justify-center items-center text-4xl w-screen h-screen">
                <p className="max-w-2xl">i don't think i communicated well yesterday.{" "}
                    <span
                        className="cursor-pointer underline hover:bg-stone-200 hover:text-stone-700 transition"
                        onClick={onClick}
                    >so, here we try again.</span>
                </p>
            </div>


        </>
    )
}

export default Intro