import Image from 'next/image';
import React from 'react';

// import { Container } from './styles';
import Criança from '../../assets/imgs/Fonte-Reprodução-do-site-Revista-AutoMotivo.jpg'
import Mulher from '../../assets/imgs/manutençãocar.jpg'
import Amizade from '../../assets/imgs/Design-sem-nome-29-1.png'
import styles from './Carrossel.module.css'
const Carrossel: React.FC = () => {
    return (
        <>
            <div className={styles.containerCarrosels}>
                <div className={styles.carrossel}>
                    <Image src={Criança} alt='logo caveirinha' className={styles.logo} />
                    <p>
                        Solução de Problemas Complexos: Quando o sistema já apresenta falhas, a manutenção corretiva entra em ação para identificar e resolver o problema de forma eficaz.
                    </p>
                </div>
                <div className={styles.carrossel}>
                    <Image src={Mulher} alt='logo caveirinha' className={styles.logo} />
                    <p>
                        Eficiência Energética: Equipamentos bem mantidos consomem menos energia, reduzindo os custos operacionais e contribuindo para a preservação do meio ambiente.
                    </p>
                </div>
                <div className={styles.carrossel}>
                    <Image src={Amizade} style={{ height: '49%', marginTop: 15 }} alt='logo caveirinha' className={styles.logo} />
                    <p>
                        Aumento da Vida Útil do Ar-Condicionado: Ao realizar manutenções regulares, você previne o desgaste prematuro dos componentes, garantindo que o sistema funcione por mais tempo.
                    </p>
                </div>
            </div>
        </>
    );
}

export default Carrossel;