import React, { useEffect, useState } from 'react';

// import { Container } from './styles';
import styles from './Header.module.css';
import LogoArtec from '../../assets/imgs/artelogo.png';
import LogoArtecExtends from '../../assets/imgs/arte.png'
import Projeto from '../../assets/imgs/projeto.png';
import Projeto1 from '../../assets/imgs/projeto1.png';
import Projeto2 from '../../assets/imgs/projeto2.png';
import Projeto3 from '../../assets/imgs/projeto3.png';
import Projeto4 from '../../assets/imgs/projeto4.png';
import Instagram from '../../assets/imgs/instagram.png'
import Projeto9 from '../../assets/imgs/projeto9.png'
import Image from 'next/image';
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import Carrossel from '../Carrossel';
import CarrosselBootsTrap from '../Carrossel/carousel';
import ModalComponente from '../Modal';
import FormPersonal from '../FormPersonal';

const HomeStructure: React.FC = () => {
    const [width, setWidth] = useState<number>(0)
    const [show, setShow] = useState<boolean>(false)
    const [showMaps, setShowMaps] = useState<boolean>(false)
    useEffect(() => {
        if (typeof window !== undefined) {
            setWidth(window.screen.width)
        }
    }, [])
    const handleMensagem = () => {
        const phone = "5531993701153"
        const mensagem = "Olá, quero saber mais das aulas de Jiu Jitsu"
        const link = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(mensagem)}`;
        window.open(link)
    }
    return (
        <div className={styles.container}>

            <div className={styles.header}>
                <div className={styles.containerAbout}>

                    <Image src={LogoArtecExtends} alt="Logo" className={styles.subLogo} />

                    <div>
                        <div className={styles.textContainer2}>
                            <p className={styles.text}><a href='#inicio'>Sobre</a></p>
                            <p className={styles.text}><a href='#servicos'>Serviços</a></p>
                            <p className={styles.text}><a href='#contato'>Entre em Contato</a></p>
                            <div style={{ display: 'flex', gap: 10, flexDirection: 'row' }}>
                                <FaInstagram style={{ cursor: 'pointer' }} color='#fff' size={25} onClick={() => {
                                    if (width <= 768) {
                                        window.location.href = "instagram://user?username=studioartec_";
                                    } else {
                                        window.location.href = "https://www.instagram.com/studioartec_/";
                                    }
                                }} />

                                <GoLocation style={{ cursor: 'pointer' }} color='#fff' size={25}
                                    onClick={() => {
                                        setShowMaps(true)
                                    }}
                                />
                            </div>
                        </div>

                    </div>
                </div>
                <div className={styles.containerLogo}>
                    <Image src={LogoArtec} alt='logo caveirinha' className={styles.logo} />
                </div>

            </div>
            <div className={styles.containerInit}>
                <div>
                    <h2 style={{ color: '#000', fontSize: 35, marginBottom: 20 }}>- Studio Artec -</h2>
                    <h2 id='inicio'>
                        Nosso objetivo é proporcionar um ambiente onde a excelência técnica e a integridade se encontram.
                    </h2>
                    <h3 >
                        Através dos valores de qualidade, confiança e compromisso que aplicamos em cada serviço de ar-condicionado automotivo, buscamos não apenas reparar veículos, mas também fortalecer laços de confiança com nossos clientes.
                        Acreditamos que nosso trabalho vai além do técnico, contribuindo para a segurança e o conforto no dia a dia das pessoas. Na Studio Artec, incentivamos uma cultura de respeito, dedicação e responsabilidade, criando uma comunidade onde cada cliente é parte fundamental do nosso sucesso coletivo.
                    </h3>
                </div>
            </div>
            <div className={styles.carroselDiv} id="servicos">
                <Carrossel />
            </div>
            <div className={styles.iframe} id="contato">
                <FormPersonal />
            </div>


            <ModalComponente showModal={showMaps} setShowModal={setShowMaps} title={'Localização'} >
                <div className={styles.containerDivInstagrams}>
                    <p> 📍Av. helder candreva Rossi N.412</p>
                    <p>🌎Congonhas mg</p>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!4v1724197801437!6m8!1m7!1s47Q36IW3wJM2dBpatrctIQ!2m2!1d-20.49246172535781!2d-43.87016453018445!3f68.75623904278504!4f-1.1331551886797229!5f0.7820865974627469"
                        width="300"
                        height="250"
                        style={{ borderRadius: 10 }}
                        loading="lazy" >

                    </iframe>
                </div>
            </ModalComponente>
            <div className={styles.containerWhatss} title='Chamar no WhatsApp' onClick={() => handleMensagem()}>
                <FaWhatsapp size={width > 767 ? 50 : 30} color="#fff" />
            </div>
        </div >
    );
}

export default HomeStructure;
