import { ReactNode, useContext } from "react";
import { telescopingStatesContext } from "./TelescopingRun";

export default function TTitle({ children }: { children: ReactNode | string }) {
    // @ts-ignore
    const { telescopingStates, setTelescopingStates } = useContext(telescopingStatesContext);
    // const isOpen = ;
    // it's open if any of the tkeys are true
    const isOpen = Object.values(telescopingStates).some(value => value)
    return (
        <>
            <span className={`transition delay-500 duration-1000 ${isOpen ? "opacity-100" : "opacity-0"}`}>{children}</span>
        </>
    )

}