import { useEffect, useState } from "react";
import styles from "./style.module.scss";

export default function (){
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        new Promise(resolve => {
            setTimeout(() => resolve(), 1000);
        }).then(() => setLoading(false));
    }, []);

    return (
        <div>
            { loading? (<> Loading </>) : (
                <>Main Page</>
            )}

        </div>
    )
}