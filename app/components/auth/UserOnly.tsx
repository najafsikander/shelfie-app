import { useRouter } from "expo-router";
import { useUser } from "../../../hooks/useUser";
import { useEffect } from "react";

import { ReactNode } from "react";
import ThemedLoader from "../ThemedLoader";

const UserOnly = ({ children }: { children: ReactNode }) => {
    const {user,authChecked} = useUser();
    const router = useRouter();

    useEffect(() => {
        if(authChecked && user === null) return router.replace("/login");
    },[user,authChecked]);

    if(!authChecked || !user) return (<ThemedLoader/>)
    return children;
}

export default UserOnly;