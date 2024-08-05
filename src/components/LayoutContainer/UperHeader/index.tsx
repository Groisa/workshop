import React from 'react';
import { Container } from './styles';
import { HeaderData } from '@/contants/header';

// import { Container } from './styles';

const UperHeader: React.FC = () => {
    return (
        <Container>
            <article>
                <p>{HeaderData.ADDRRES}</p>
                <p>{HeaderData.PHONE}</p>
            </article>
            <article>

            </article>

        </Container>
    );
}

export default UperHeader;