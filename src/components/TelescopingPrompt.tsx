import { useContext } from "react";
import { telescopingStatesContext } from "./TelescopingRun";

export default function TPrompt({ children, tkey, onClick }: { children: string, tkey: string, onClick?: () => void }) {
    // @ts-ignore
    const { telescopingStates, setTelescopingStates } = useContext(telescopingStatesContext);
    // setTelescopingStates({ ...telescopingStates, [tkey]: false })

    // return !telescopingStates[key] ? (

    // ) : null;
    return !telescopingStates[tkey] ? (
        <span
            className="cursor-pointer transition hover:bg-stone-700 hover:text-amber-100 underline"
            onClick={() => {
                if (onClick) onClick();
                setTelescopingStates({ ...telescopingStates, [tkey]: true })
            }}
        > {children}</span >
    ) : (
        <span>{children}</span>
    )
}