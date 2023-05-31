import { ReactNode } from "react";

export default function Lesson({ children }: { children: ReactNode | string }) {
    return (
        <div className="border-dashed border-4 border-amber-700 text-amber-700 font-sans px-8 my-16 mx-8 rounded-md">
            <div className="text-sm text-center font-bold font-sans">LESSON LEARNT</div>
            {children}
        </div>
    )
}