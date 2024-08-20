import Image from 'next/image';
import React from 'react';

// import { Container } from './styles';
import Criança from '../../assets/imgs/crianca.png'
import Mulher from '../../assets/imgs/mulher.png'
import Amizade from '../../assets/imgs/amizade.png'
import styles from './Carrossel.module.css'
const Carrossel: React.FC = () => {
    return (
        <>
            <div className={styles.containerCarrosels}>
                <div className={styles.carrossel}>
                    <Image src={Criança} alt='logo caveirinha' className={styles.logo} />
                    <p>
                        O Jiu Jitsu é excelente para crianças,
                        pois ensina valores importantes como respeito,
                        disciplina e trabalho em equipe, além de melhorar a coordenação
                        motora e a autoconfiança, contribuindo para seu desenvolvimento físico e mental.
                    </p>
                </div>
                <div className={styles.carrossel}>
                    <Image src={Mulher} alt='logo caveirinha' className={styles.logo} />
                    <p>
                        O Jiu Jitsu traz muitos benefícios para mulheres, incluindo a melhoria da qualidade de vida e alto nível de defesa pessoal. Com a prática constante,
                        as mulheres podem se sentir mais confiantes e seguras,
                        tanto no tatame quanto em sua vida cotidiana.
                    </p>
                </div>
                <div className={styles.carrossel}>
                    <Image src={Amizade} style={{height: '49%', marginTop: 15}} alt='logo caveirinha' className={styles.logo} />
                    <p>
                        O Jiu Jitsu é uma família que ensina valores como amizade, respeito e companheirismo. Além dos treinamentos no
                        tatame, os alunos se apoiam dentro e fora da academia, criando uma união forte entre eles.
                        Essa conexão torna a prática do
                        Jiu Jitsu um estilo de vida que proporciona benefícios físicos, emocionais e sociais.
                    </p>
                </div>
            </div>
        </>
    );
}

export default Carrossel;