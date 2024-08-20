import Image from 'next/image';
import React from 'react';

// import { Container } from './styles';
import { Carousel } from 'react-bootstrap';
import Projeto5 from '../../assets/imgs/projeto5.jpeg';
import Projeto6 from '../../assets/imgs/projeto6.jpeg';
import Projeto7 from '../../assets/imgs/projeto7.jpeg';
import Projeto8 from '../../assets/imgs/projeto8.jpeg';
import styles from './Carrossel.module.css'
const CarrosselBootsTrap: React.FC = () => {
    return (
        <div className={styles.carrouselBoot}>
            <div
                className={styles.carrouselBootRoot}
            >
                <Carousel
                    interval={2000}
                >
                    <Carousel.Item>
                        <Image src={Projeto5} alt='logo caveirinha' className={styles.carrouselBootImage} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image src={Projeto6} alt='logo caveirinha' className={styles.carrouselBootImage} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image src={Projeto7} alt='logo caveirinha' className={styles.carrouselBootImage} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image src={Projeto8} alt='logo caveirinha' className={styles.carrouselBootImage} />
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
}

export default CarrosselBootsTrap;