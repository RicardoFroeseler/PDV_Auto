# 🧱 Estrutura do Projeto com Prisma e PostgreSQL

vamos estruturar o nosso projeto definindo os elementos que vamos utilizar no nosso banco de dados.  
vamos utilizar um banco de dados relacional, **PostgreSQL 5.2**

*convetional commits este site ajuda a padronizar os commits no git*

## 🏢 Estrutura principal

- vamos ter a tabela **restaurantes**, podendo ter varios restaurantes lá dentro  
- cada restaurante tem suas **categorias de comida** e também seus **produtos**  
- mas essa categoria é vinculada a cada restaurante, então teríamos um vínculo assim:  
  `restaurante → categoria → produtos`

- também vamos armazenar os **pedidos** dentro do banco, com a relação:  
  `restaurante → pedidos → produtos`

---

## 🍽️ Modelo de dados

### 🔸 Restaurante

1. `id = string pk`  
   _Você usa `@default(uuid())` para que o Prisma gere esse valor automaticamente ao criar um registro._

2. `nome = string`  
3. `slug = string`  
   _Slug é uma versão simplificada de um texto, geralmente usada em URLs amigáveis._  
   Ex: `Churrascaria do Zé & Filhos!` → `churrascaria-do-ze-e-filhos`

4. `descricao = string`  
5. `avatarImageURL = string`  
6. `coverImageURL = string`  
7. `createdAt = DateTime` → `@default(now())`  
8. `updatedAt = DateTime` → `@updatedAt`

### 🔸 Categoria

1. `id = string pk`  
2. `restauranteId = string fk`  
3. `nome = string`  
4. `createdAt = DateTime`  
5. `updatedAt = DateTime`

### 🔸 Produto

1. `id = string pk`  
2. `nome = string`  
3. `descricao = string`  
4. `preco = float`  
5. `imageUrl = string`  
6. `ingredientes = string[]`  
7. `restauranteId = string fk`  
8. `menuCategoriaId = string fk`  
9. `createdAt = DateTime`  
10. `updatedAt = DateTime`

### 🔸 Pedido

1. `id = string pk`  
2. `total = float`  
3. `status = OrderStatus`  
4. `consumptionMethod = OrderConsumptionMethod`  
5. `createdAt = DateTime`  
6. `updatedAt = DateTime`

### 🔸 PedidoProduto (relacionamento)

1. `id = string pk`  
2. `produtoId = string fk`  
3. `quantidade = int`  
4. `preco = float`  
5. `createdAt = DateTime`  
6. `updatedAt = DateTime`  
7. `orderId = string fk`

---

## 🔧 Instalação e Setup do Prisma para o nosso BD


```bash
npm install prisma@6.2.1
```
- para instalar o prisma

```bash
npm install @prisma/client@6.2.1
```
- para instalar o prisma client



```bash
npx prisma init
```
- para criar o arquivo de configuracao do prisma
dentro deste schema.prisma vamos definir o nosso banco de dados colocando as informacoes de conexao da nossa base de dados


```bash
npx prisma format
```
- para formatar o arquivo schema.prisma e deixar ele no padrao

Vamos utilizar o [NeonDB](https://neon.tech/) como nosso banco de dados PostgreSQL rodando na nuvem.

### 🧱 Criando tabelas com migration
```bash
npx prisma migrate dev
```
 para criar as tabelas no banco de dados levando a estrutura do nosso banco de dados local para a base de dados na nuvem.
apos rodar o comando vou adicionar o nome desta migracao.
[add_initial_tables] vamos sempre tentar utilizar _ para separar as palavras como uma convenção de nomes



# 🧪 Seed do Banco de Dados com Prisma
tambem vamos importar o pacote abaixo para criar o slug automaticamente em nosso banco de dados  
isso acelera o processo de criacao e é uma modificacao que fizemos fora do projeto original do curso

## 📦 Instalando o slugify

```bash
npm install slugify
```

---

## 🔁 Rodando migrations

sempre que mudar algo no arquivo `schema.prisma`, vamos rodar o comando abaixo para gerar o arquivo de migrations:

```bash
npx prisma migrate dev
```

---

## 🌱 Executando o seed

agora vamos rodar o script **seed.js** para popular o banco de dados com alguns dados de teste  
como optei por não usar TypeScript nesse seed, não preciso instalar o `ts-node`

---

## 🛠️ Configurando o package.json

no meu arquivo `package.json`, adicionei esse bloco depois do `"scripts"`:

```json
"prisma": {
  "seed": "node prisma/seed.js"
}
```

isso aqui informa ao Prisma qual é o script que vai popular o banco com dados de teste  
então quando rodar o seed, ele já sabe que é esse arquivo `.js` que deve ser executado

---

## ▶️ Comando para rodar o seed

```bash
npx prisma db seed
```

se der tudo certo, vai aparecer essa mensagem no terminal:

```
The seed command has been executed.
```
---
## Vamos utilizar o tailwind para estilizar nossa aplicação

Neste link voce tem acesso a toda a documentacao do [tailwindcss](https://tailwindcss.com/).

versão do tailwindcss que estamos utilizando:
```
tailwindcss: 3.4.1
```

---
## Vamos utilizar o shadcn para agilizar a estilização da nossa aplicação com components prontos para uso

Neste link voce tem acesso a toda a documentacao do [shadcn](https://ui.shadcn.com/).

Para Instalar o shadcn na versão 2.3.0
```bash
npx shadcn@2.3.0 init
```
<br>

**ATENÇÃO**
`abaixo vou deixar a lista de componentes que vamos utilizar em nosso projeto para facilitar o desenvolvimento e ate mesmo o reaproveitamento de codigo para outros projetos.`

```bash
npx shadcn@2.3.0 add button


```
---

