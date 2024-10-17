
# Projeto Front-End - Estrutura e Nomenclatura

Este documento descreve as boas práticas de organização de pastas, nomenclatura de arquivos e estrutura em projetos front-end que utilizam HTML, CSS e JavaScript.

## Estrutura de Pastas

Abaixo está uma estrutura básica sugerida para organização de projetos front-end:

```
/project-root
    /assets
        /images
        /fonts
        /icons
    /css
        main.css
        reset.css
        components.css
    /js
        main.js
        helpers.js
        validation.js
    /components
        header.html
        footer.html
        navbar.html
    /pages
        index.html
        about.html
        contact.html
    /utils
        variables.css
        mixins.css
        config.js
    README.md
    index.html
```

### Explicação das Pastas:
- **/assets**: Recursos estáticos como imagens, fontes e ícones.
- **/css**: Arquivos de estilo, com um arquivo principal `main.css` que importa os outros.
- **/js**: Arquivos JavaScript divididos por funcionalidades específicas.
- **/components**: Componentes reutilizáveis da interface, como cabeçalho, rodapé e barra de navegação.
- **/pages**: Páginas individuais do projeto.
- **/utils**: Arquivos utilitários, como variáveis CSS, mixins e configurações JS.

## Nomenclatura de Arquivos

### HTML
Os arquivos HTML devem ser nomeados de acordo com sua funcionalidade ou a página que representam. Use letras minúsculas e separação por hífen:
- Exemplo: `index.html`, `about-us.html`

### CSS
Utilize convenções como **BEM (Block Element Modifier)** para organizar as classes no CSS, descrevendo a função da classe:
- Exemplo: `.button--primary`, `.header__title`

### JavaScript
Divida o código JavaScript em arquivos menores, nomeados com base na função que desempenham:
- Exemplo: `validation.js`, `helpers.js`, `main.js`

### Snake_case vs Kebab-case vs CamelCase:
- Snake_case (main_file.js): Pouco comum em projetos front-end.
- Kebab-case (main-file.js): Muito utilizado para arquivos e pastas, especialmente em ambientes web. Exemplo: reset-style.css, profile-page.html.
- CamelCase (mainFile.js): Comum em variáveis e funções JavaScript, mas menos usado para arquivos e pastas.

## Boas Práticas

- **Mantenha o código modular**: Separe os componentes em diferentes arquivos para facilitar a manutenção.
- **Variáveis globais no CSS**: Use um arquivo como `variables.css` para centralizar cores, espaçamentos e tipografia.
- **Documentação**: Mantenha um arquivo `README.md` atualizado com a estrutura do projeto.

## Ferramentas Recomendadas

- **Prettier**: Para manter a formatação do código consistente.
- **ESLint**: Para garantir boas práticas no código JavaScript.
- **Git**: Para versionamento de código e colaboração.

## Exemplo de Código

### Estrutura de Pastas do Exemplo:
```
/portfolio
    /assets
        /images
            profile-picture.jpg
    /css
        main.css
        typography.css
        colors.css
    /js
        main.js
        animations.js
    /components
        header.html
        footer.html
    /pages
        index.html
        portfolio.html
```

### CSS (utilizando BEM):
```css
/* BEM Naming Convention */
.header__title {
    font-size: 24px;
    color: var(--primary-color);
}

.button--primary {
    background-color: var(--primary-color);
    color: #fff;
    padding: 10px 20px;
}
```

### JavaScript (exemplo de função de animação):
```javascript
// animations.js
export function fadeIn(element) {
    element.style.opacity = 0;
    element.style.transition = "opacity 0.5s ease-in-out";
    element.style.opacity = 1;
}
```

## HardWork - Vamos lá pessoal 👩‍💻

Manter uma estrutura de pastas organizada e seguir convenções de nomenclatura claras desde o início facilita o trabalho em equipe, melhora a legibilidade do código e torna o projeto escalável.

---

<div align="center">Documentação feita com 💜 por <a href="https://github.com/andressa-l">Andressa Lima</a>.</div>
<br />
