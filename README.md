# EA Login App  

Este repositório contém um aplicativo de login simples desenvolvido em React Native. O aplicativo permite ao usuário realizar login utilizando seu e-mail ou ID da EA. A interface inclui campos de entrada personalizados, exibição e ocultação de senha e um cabeçalho com ícones de redes sociais.

![EA login screenshot](./src/img/tela-login.png) 

## Funcionalidades

- Login com e-mail ou ID da EA.
- Exibição e ocultação de senha com ícone.
- Checkbox para manter o usuário conectado.
- Botão para realizar login.
- Interface estilizada com cores escuras e design responsivo.
- Opção para login com número de telefone.
- Seção de cabeçalho com logotipo da EA e ícones de redes sociais.

## Componentes

### 1. `App.js`

Responsável por gerenciar o formulário de login e os estados de entrada do usuário, como o e-mail/ID, senha e checkbox de "manter conectado".

**Funções principais:**
- Validação dos campos de login.
- Exibição/ocultação de senha através de ícones.
- Alerta para indicar quando o login por telefone não está disponível.

### 2. `Header.js`

Componente que exibe o cabeçalho com o logotipo da EA e ícones de redes sociais, além de uma linha separadora para destacar a opção de login alternativo.

---

## Dependências

- **React Native**: Framework para desenvolvimento de aplicativos mobile multiplataforma.
- **Expo**: Plataforma que facilita o desenvolvimento, execução e deploy de apps React Native.
- **@expo/vector-icons**: Biblioteca de ícones da Expo, usada para exibir ícones como o de exibição/ocultação de senha.

## Instalação

Siga os passos abaixo para instalar e rodar o projeto localmente:

1. Clone este repositório:
   ```bash
   git clone https://github.com/gustbaccas/study-login.git

2. Navegue até o diretório do projeto:
    ```bash
    cd study-login

3. Instale as dependências necessárias:
    ```bash
    npm install

4. Inicie o aplicativo usando o Expo:
    ```bash
    npx expo start

5. Escaneie o QR code com o aplicativo Expo Go em seu dispositivo móvel, ou inicie o emulador Android/iOS para testar o app.

**Nota:** Certifique-se de ter o Expo instalado globalmente:
```bash
npm install --global expo-cli

