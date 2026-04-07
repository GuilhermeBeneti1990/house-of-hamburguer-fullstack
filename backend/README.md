# Backend - Casa do Hambúrguer

## Requisitos

- Node.js 20+ (ou versão compatível com `tsx` e ESM)
- npm
- PostgreSQL rodando localmente ou em um banco acessível
- Variáveis de ambiente definidas em `.env`

## Instalação

1. Instale as dependências:

```bash
npm install
```

2. Crie um arquivo `.env` com as variáveis necessárias. Exemplo:

```env
DATABASE_URL="postgresql://postgres:root@localhost:5432/casa-do-hamburguer?schema=public"
JWT_SECRET="seu-segredo-aqui"
```

> Ajuste `postgres`, `root`, `localhost`, `5432` e `casa-do-hamburguer` conforme o seu ambiente.

## Criar o banco de dados

### Opção 1: Usando Prisma

```bash
npx prisma db create
```

### Opção 2: Usando PostgreSQL diretamente

```bash
createdb casa-do-hamburguer
```

ou, se preferir usar `psql`:

```bash
psql -U postgres -c "CREATE DATABASE \"casa-do-hamburguer\";"
```

## Rodar migrações

Com o banco configurado e a variável `DATABASE_URL` no `.env`:

```bash
npx prisma migrate dev --name init
```

> Se as migrações já existirem e você só precisar aplicar no banco, use:
>
> ```bash
> npx prisma migrate deploy
> ```

## Gerar o Prisma Client

Execute:

```bash
npx prisma generate
```

O cliente gerado será escrito em `generated/prisma` conforme definido em `prisma/schema.prisma`.

## Rodar o servidor em modo de desenvolvimento

```bash
npm run dev
```

Ele inicia o servidor usando `tsx` e irá recarregar automaticamente quando o código mudar.

## Observações

- O arquivo `prisma.config.ts` já carrega variáveis do `.env` usando `dotenv/config`.
- Caso precise reiniciar o banco e recriar tudo em desenvolvimento, use:

```bash
npx prisma migrate reset
```

- Se a rota `/healthcheck` não responder, verifique se ela retorna um `res.send(...)` ou `res.json(...)` no código.
