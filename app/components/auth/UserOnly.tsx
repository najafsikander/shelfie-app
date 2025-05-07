import { useRouter } from "expo-router";
import { useUser } from "../../../hooks/useUser";
import { useEffect } from "react";
import { Text } from "react-native";

import { ReactNode } from "react";

const UserOnly = ({ children }: { children: ReactNode }) => {
    const {user,authChecked} = useUser();
    const router = useRouter();

    useEffect(() => {
        if(authChecked && user === null) return router.replace("/login");
    },[user,authChecked]);

    if(!authChecked || !user) return (<Text>Loading</Text>)
    return children;
}

export default UserOnly;