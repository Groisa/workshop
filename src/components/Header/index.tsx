import React, { useEffect, useState } from 'react';

// import { Container } from './styles';
import styles from './Header.module.css';
import LogoArtec from '../../assets/imgs/artelogo.png';
import LogoArtecExtends from '../../assets/imgs/arte.png'
import Studio from '../../assets/imgs/studio-_1_ (1).jpg';
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


            <div className={styles.containerHome}>
                <h4>Nosso Espaço</h4>

                <div className={styles.aboutSpace}>
                    <img src={Studio.src} alt={Studio.src} />
                    <div className={styles.contentText}>
                        <p>Estamos prontos para receber você em um ambiente cuidadosamente preparado para oferecer o melhor em qualidade e confiança. Cada detalhe foi pensado para garantir que sua experiência conosco seja excepcional, desde o atendimento até a execução dos serviços. Nossa equipe está comprometida em proporcionar um serviço de excelência, garantindo que você tenha a certeza de estar escolhendo o que há de melhor no mercado. Venha nos visitar e sinta a diferença de ser atendido por quem realmente entende e valoriza as suas necessidades.</p>
                    </div>
                </div>
            </div>
            <h3 style={{ textAlign: 'center', fontSize: 23, marginTop: 30 }}>Avaliações dos clientes</h3>
            <div className={styles.containerCliente}>
                <div className={styles.containerAvaliation}>
                    <h3>João Amorok</h3>
                    <p>A melhor loja de serviços de ar-condicionado automotivo da região. Atendimento impecável e resultados de alta qualidade.</p>
                    <p>⭐⭐⭐⭐⭐</p>
                </div>
                <div className={styles.containerAvaliation}>
                    <h3>Caio Jetta</h3>
                    <p>Além da higienização completa, meu carro ficou incrivelmente limpo. Serviço de primeira linha!</p>
                    <p>⭐⭐⭐⭐⭐</p>
                </div>
                <div className={styles.containerAvaliation}>
                    <h3>Vitor Cruze</h3>
                    <p>Sem dúvida, o melhor atendimento da região. Profissionalismo e eficiência em cada detalhe.</p>
                    <p>⭐⭐⭐⭐⭐</p>
                </div>
            </div>
            <div className={styles.iframe} id="contato">
                <FormPersonal />
            </div>
        </div >
    );
}

export default HomeStructure;
