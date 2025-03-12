import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from './loading.module.css';
import Logo from "../images/logo_full.png";


export default function Loading() {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate("/home"); // Redireciona para a Home após 1 segundo
        }, 2000);

        return () => clearTimeout(timer); // Limpa o timer ao desmontar o componente
    }, [navigate]);

    return (
        <div className={styles.container}>
            <div className={styles.logoLoading}>
                <img src={Logo} alt="Ícone" className={styles.animatedLogo} />
            </div>
        </div>
    );
}