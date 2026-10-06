# Luis Buittons | Landing Page em React

Parte 2 individual do trabalho da disciplina Desenvolvimento Frontend II.

## Autor

Regina Beatriz de Oliveira da Fonseca

## Origem

- Repositório do grupo (Parte 1): https://github.com/Regina-Beatriz-dev/Luis-Buittons
- Site original da Parte 1: https://regina-beatriz-dev.github.io/Luis-Buittons/
- Página escolhida para a Landing Page: `novidades.html`
- Outra página desenvolvida por mim na Parte 1: `checkout.html`
- Autora do `index.html` original: Maria Eduarda (Duwarda)
- O carrinho foi integrado ao projeto para conectar os produtos da Landing Page ao Checkout desenvolvido por mim.

## Site publicado

https://luis-buittons-react-regina.netlify.app/

## Tecnologias utilizadas

- React
- Vite
- Bootstrap 5
- React Router DOM
- JavaScript
- CSS
- localStorage

## Como executar

```bash
npm install
npm run dev
npm run build
```

## Seções da Landing Page

| Seção | Origem |
|---|---|
| Navbar | index.html + adaptação para Landing Page |
| Hero | index.html |
| Benefícios | index.html |
| Produtos em Destaque | index.html |
| Novidades | novidades.html |
| Categorias | novidades.html |
| Novidades & Tendências | novidades.html |
| Newsletter | novidades.html |
| Footer | adaptação para a Landing Page |

## Páginas adicionais

Além da Landing Page obrigatória, foram implementadas rotas adicionais em React:

- `carrinho` — integração dos produtos com localStorage
- `checkout` — migração do Checkout desenvolvido na Parte 1

O carrinho foi integrado para permitir o fluxo entre os produtos exibidos na Landing Page e o Checkout.

## Referência HTML

A pasta `referencia-html` contém os arquivos originais utilizados como referência para a migração para React.

## Créditos

O `index.html` utilizado como base na Parte 1 foi desenvolvido por Maria Eduarda (Duwarda).

A página `novidades.html` e o `checkout.html` foram desenvolvidos por Regina Beatriz de Oliveira da Fonseca.

O carrinho foi integrado ao projeto React apenas para conectar os produtos da Landing Page ao Checkout, mantendo o fluxo de compra do projeto.