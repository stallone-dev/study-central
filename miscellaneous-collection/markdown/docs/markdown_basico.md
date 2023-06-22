---
title: Introdução ao Markdown
author: Stallone L. de Souza
comment: Minhas anotações pessoais sobre introdução ao Markdown.
start_annotations: 20/06/23
finish_annotations: 21/06/23
---

# Introdução ao Markdown <!-- omit from toc -->

## 🔖 - Links rápidos <!-- omit from toc -->
- [👀 - Conclusão pessoal](#---conclusão-pessoal)
- [🔨 - Utilitários](#---utilitários)
- [📝 - Anotações gerais](#---anotações-gerais)
  - [**O que é markdown?**](#o-que-é-markdown)
  - [**Como utilizar o Markdown?**](#como-utilizar-o-markdown)
  - [**Lista de tags Markdown**](#lista-de-tags-markdown)
  - [**Exemplos de uso**](#exemplos-de-uso)
    - [Título de exemplo](#título-de-exemplo)
- [🔗 - Referências](#---referências)

---

## 👀 - Conclusão pessoal
*O Markdown é uma excelente ferramenta para se introduzir às estruturas fundamentais da web, dos documentos virtuais e dos editores de texto.*

*Como ferramenta para construção em definitivo, talvez utilizar o HTML junto ao Markdown, incorporando tags complexas junto da sintaxe simples que ele oferece.*

*Neste momento, me parece uma boa ferramenta para fazer minhas anotações neste centro de estudos.*

---

## 🔨 - Utilitários
- Para formatação rápida no VS Code:
  - [Markdown All in One](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one)
- Para melhor visualização no VS Code:
  - [MDX](https://marketplace.visualstudio.com/items?itemName=unifiedjs.vscode-mdx)
- Para seleção de emojis:
  - [Emojipédia](https://emojipedia.org/pt/smileys)

---

## 📝 - Anotações gerais
### **O que é markdown?**
Markdown é uma linguagem de marcação de texto, cujo principal objetivo é estruturar um arquivo de texto / página para WEB de modo semântico, ficando à cargo do motor de renderização o papel de formatar visualmente a página.

Exemplos de linguagens/ferramentas com o mesmo propósito são:
- HTML -- (estruturador semântico)
- LaTeX -- (estruturador semântico focado em matemática)
- Microsoft Work (formatador de documentos não-semântico)

Por conta de sua sintaxe simples, o Markdown se tornou popular no âmbito da documentação de códigos de programação *(através do GitHub)* e no âmbito do "diário de anotações", através de ferramentas como *Notion* e *Obsidian*.

### **Como utilizar o Markdown?**
1. Criar um arquivo com extensão `.md`
   - Ex: `README.md`
2. Começar a escrever utilizando os símbolos semânticos

### **Lista de tags Markdown**
Os principais símbolos semânticos utilizados são estes:


|        TAG        |  EQUIVALÊNCIA HTML  | DESCRIÇÃO                  |
| :---------------: | :-----------------: | :------------------------- |
|         #         |        \<H1>        | Título 1                   |
|        ##         |        \<H2>        | Título 2                   |
|        \**        |      \<strong>      | Ênfase negrito             |
|        \*         |        \<em>        | Ênfase itálico             |
|         -         |        \<ul>        | Lista desordenada          |
|        1.         |        \<ol>        | Lista ordenada             |
|       \- [ ]      |      \<input>       | To-do simplificado         |
|         >         |    \<blockquote>    | Citação de conteúdo        |
|        ```        |       \<code>       | Exemplo de código          |
|        ---        |         \<>         | Linha divisória horizontal |
|  \[ zz ]( link )  |    \<a href="">     | Link para conteúdo         |
| \!\[ zz ]( link ) |   \<img href="">    | Link para imagem           |
|     \:emoji\:     | \<p> &#XXXXXX \<\p> | Emojis 😂                  |


### **Exemplos de uso**
**# -- Títulos**

#### Título de exemplo
---
**\*\* -- Ênfase strong**

**Texto em negrito**

---

**\* -- Ênfase itálico**

*Texto em itálico*

---

**\*\*\* -- Ênfase strong + itálico**

***Texto em negrito e itálico***

---

**- -- Lista não-ordenada**

- Item 1
- Item 2
  - Item 2.1
  - Item 2.2
    - Item 2.2.1

---

**1. -- Lista ordenada**
2. Item 1
3. Item 2
   1. Item 2.1
   2. Item 2.2
      1. Item 2.2.1

---

**- [ ] -- To-do**

- [ ] Item 1
- [ ] Item 2
- [x] Item 3

---

**> -- Bloco de citação**

> Esta é uma citação
>> Esta citação está aninhada

---

**``` -- Bloco de código**

```
msg = "Este é um bloco de código
print(msg)
```

```javascript
const msg = "Este é um bloco formatado para JavaScrit"
console.log(msg)
```
---

**--- -- Linha de divisão horizontal**

---

**\[ zz ]( link ) -- Link externo**

[Exemplo de link](https://www.w3schools.com/html/html_emojis.asp)

[Exemplo de link com texto auxiliar](https://emojipedia.org/face-with-tears-of-joy "Rindo para não chorar")

---

**\!\[ zz ]( link ) -- Imagem linkada**

![Exemplo de imagem](../assets/emoji_arrogante.png)
![Exemplo de imagem com texto auxiliar](../assets/emoji_tranquilo.png "Bixo tranquilo")

---

## 🔗 - Referências

- [GitHub Docs - Sintaxe básica de formatação](https://docs.github.com/pt/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)
- [Markdown Guide - Basic Syntax](https://www.markdownguide.org/basic-syntax/)