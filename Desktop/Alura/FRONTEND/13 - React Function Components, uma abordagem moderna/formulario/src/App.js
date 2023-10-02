import React, { Component } from 'react';
import './App.css';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { Container, Typography } from '@mui/material';
class App extends Component {
    render(){
        return (
            <Container component="article" maxWidth="sm">
                <Typography variant='h3' component='h1' align='center'>Formulario de cadastro</Typography>
                <FormularioCadastro aoEnviar={aoEnviarForm} validarCPF={validarCPF} />
            </Container>
        );
    }
}

function aoEnviarForm(dados){
    console.table(dados);
}

function validarCPF(cpf) {
    if (cpf.length !== 11){
        return {valido:false, texto:"CPF deve ter 11 digitos!!"}
    }else{
        return {valido:true, texto:""}
    }
}

export default App;
