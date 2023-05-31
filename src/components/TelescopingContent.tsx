import { ReactNode, useContext } from "react";
import { telescopingStatesContext } from "./TelescopingRun";

export default function TContent({ children, tkey }: { children: ReactNode | string, tkey: string }) {

    // @ts-ignore
    const { telescopingStates, setTelescopingStates } = useContext(telescopingStatesContext);
    const isOpen = telescopingStates[tkey];
    return (
        <>
            <span
                className={`transition duration-500 ${isOpen ? "opacity-100" : "opacity-0 absolute"}`}
                style={{
                    zIndex: -1,
                    top: -10000,
                }}
            > {children}</span >
        </>
    )

}