# Guia de Configuração e Uso - Email

Este guia orientará você na configuração e utilização referente ao envio de e-mails utilizando a API da Brevo. Siga cada etapa para assegurar o correto funcionamento.

## 1. Instalação

Para começar, instale as dependências do projeto. Abra o terminal e execute o seguinte comando:

```bash
npm install
```

## 2. Configuração do Arquivo .env

Na raiz do projeto, crie um arquivo chamado .env (caso não exista) com base no arquivo .env.example fornecido.

Abra o arquivo .env e preencha as seguintes variáveis de acordo com suas informações:

```bash
# Configuração Brevo
EMAIL_API_KEY=Seu_token_da_API_fornecido_pela_Brevo
EMAIL_REMITTER=Seu_email_de_remetente
EMAIL_NAME=Nome_do_remetente

# Configuração MongoDB
MONGO_URL=Sua_URL_do_MongoDB
```

## 3. Iniciando o Projeto

Inicie o projeto executando o seguinte comando:

```bash
npm run start
```

O servidor estará disponível em http://localhost:3000.

## 4. Enviando um E-mail via API

Você pode enviar e-mails usando o método POST. Utilize a rota http://localhost:3000/email.

```bash
{
    "recipient": "jieff.cavalcanti@gmail.com",
    "subject": "Assunto do E-mail",
    "content": "Olá,\n\nEste é um exemplo de conteúdo de e-mail.\n\nAtenciosamente,\nSeu Nome"
}
```

Observação: Se você não fornecer a chave "content", o cliente receberá um e-mail com um template formatado automaticamente.
# Guia de Configuração e Uso - Email

Este guia orientará você na configuração e utilização referente ao envio de e-mails utilizando a API da Brevo. Siga cada etapa para assegurar o correto funcionamento.

## 1. Instalação

Para começar, instale as dependências do projeto. Abra o terminal e execute o seguinte comando:

```bash
npm install
```

## 2. Configuração do Arquivo .env

Na raiz do projeto, crie um arquivo chamado .env (caso não exista) com base no arquivo .env.example fornecido.

Abra o arquivo .env e preencha as seguintes variáveis de acordo com suas informações:

```bash
# Configuração Brevo
EMAIL_API_KEY=Seu_token_da_API_fornecido_pela_Brevo
EMAIL_REMITTER=Seu_email_de_remetente
EMAIL_NAME=Nome_do_remetente

# Configuração MongoDB
MONGO_URL=Sua_URL_do_MongoDB
```

## 3. Iniciando o Projeto

Inicie o projeto executando o seguinte comando:

```bash
npm run start
```

O servidor estará disponível em http://localhost:3000.

## 4. Enviando um E-mail via API

Você pode enviar e-mails usando o método POST. Utilize a rota http://localhost:3000/email.

```bash
{
    "recipient": "jieff.cavalcanti@gmail.com",
    "subject": "Assunto do E-mail",
    "content": "Olá,\n\nEste é um exemplo de conteúdo de e-mail.\n\nAtenciosamente,\nSeu Nome"
}
```

Observação: Se você não fornecer a chave "content", o cliente receberá um e-mail com um template formatado automaticamente.
