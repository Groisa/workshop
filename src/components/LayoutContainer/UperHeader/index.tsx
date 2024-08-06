import React from 'react';
import { Container } from './styles';
import { HeaderData } from '@/contants/header';
import ResponsiveAppBar from '../AppBar';

// import { Container } from './styles';

const UperHeader: React.FC = () => {
    return (
        <Container>
            <ResponsiveAppBar />
        </Container>
    );
}

export default UperHeader;