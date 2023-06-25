---
title: Introdução ao HTML
author: Stallone L. de Souza
description: Minhas anotações sobre o HTML básico
start_study: 22/06/23
finish_study: 24/06/23
---

# Introdução ao HTML <!-- omit from toc -->

## 🔖 - Índice <!-- omit from toc -->
- [👀 - Conclusões pessoais](#---conclusões-pessoais)
- [🔨 - Utilitários](#---utilitários)
- [📝 - Anotações gerais](#---anotações-gerais)
  - [O que é HTML?](#o-que-é-html)
  - [Como são organizadas as TAGs?](#como-são-organizadas-as-tags)
    - [**1. Metadados**](#1-metadados)
    - [**2. Containers de conteúdo**](#2-containers-de-conteúdo)
    - [**3. Agregadores de mídia**](#3-agregadores-de-mídia)
    - [**4. Elementos textuais**](#4-elementos-textuais)
    - [**5. Formulários**](#5-formulários)
  - [Exemplos de uso das tags](#exemplos-de-uso-das-tags)
- [🔗 - Referências](#---referências)


---

## 👀 - Conclusões pessoais

---

## 🔨 - Utilitários

---

## 📝 - Anotações gerais

### O que é HTML?

O HTML é uma lingaguem de estruturação e marcação de elementos, ele por si só **não processa** nem agrega funções dinâmicas à página, mas serve de base para receber essas funcionalidades.

O funcionamento do HTML se baseia no uso de TAGS, como estas:
```html
 <h4>titulo 4</h4>
 <hr> <!--Linha divisória -->
 <p>Parágrafo comum</p>
```
*Resultado*:

\----------------------------

<h4>titulo 4</h4> <!-- omit from toc -->
 <hr> <!--Linha horizonal // Comentário -->
 <p>Parágrafo comum</p>

\----------------------------

Essas tags servem de *esqueleto* para os sites na web, sendo a partir desse esqueleto que se aplica os estilos do CSS e as funcionalidades do JavaScript.

### Como são organizadas as TAGs?

As TAGS do HTML podem ser divididas em 4 categorias:

#### **1. Metadados**

[Metadados são informações sobre o documento em si](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element#metadados_do_documento) presentes dentro da tag `<head>`, cuja finalidade é pré-carregar os dados que a máquina precisa para carregar o conteúdo por completo.

São elas:

| Tag      | Finalidade                                                       |
| :------: | ---------------------------------------------------------------- |
| \<head>  | Container dos metadados                                          |
| \<meta>  | Elemento genérico para agregar metadados                         |
| \<title> | Título interno do documento                                      |
| \<style> | Estilização dos conteúdos da página                              |
| \<link>  | Acessar e pré-carregar conteúdos externos \[como CSSs e Scripts] |


#### **2. Containers de conteúdo**

São TAGs que servem para agrupar conteúdos em "espaços no documento", servindo para organizar e padronizar grupos de informações.

Originalmente esse grupo de TAGs se resumia a somente 2:

```html
<div></div> <!--Container genérico-->

<h1></h1> <!--Tags de título-->
```
Porém, se viu a necessidade de se ter tags mais *"semânticas"*, mais descritivas sobre o conteúdo existente nelas. Foi aí que passou a existir as [tags de espaços semânticos](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element#separa%C3%A7%C3%A3o_de_conte%C3%BAdo):

```html
<!--Espaços de descrição-->
<header>Cabeçalho</header>
<footer>Rodapé</footer>

<!--Espaços de navegação-->
<aside>Barra lateral</aside>
<nav>Barra de navegação</nav>

<!--Espaços de conteúdo-->
<section>Seção da página</section>
<main>Seção principal da página</main>
<article>Seção complementar/reutilizável</article>
<span>Seção dentro de uma linha</span>
```

#### **3. Agregadores de mídia**

São tags dedicadas a [incluir novas mídias dentro do arquivo](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element#imagem_e_multim%C3%ADdia), como imagens, áudios, vídeos e espaços interativos

São elas:

```html
<img>Imagem</img>
<audio>Áudio</audio>

<video>Vídeo</video>
<track>Pedaço de um áudio/vídeo</track>

<map>Espaço interativo</map>
<area>Itens dentro do espaço interativo</area>
```

Além dessas, há também [TAGs de integração de conteúdo](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element#conte%C3%BAdo_integrado) externo que não se configura nas categorias acima, como o [Google Maps](https://www.google.com/maps) e o [YouTube](https://www.youtube.com/watch?v=4dQtz1PpY9A)

São elas:

```html
<embed>Inclusão de conteúdo externo</embed>

<iframe>Interação com conteúdo externo</iframe>

<picture>Adequador de conteúdo ao layout atual</picture>

<source>Seção de múltiplos conteúdos externos</source>

<script>Scripts de JavaScript</script>
```

#### **4. Elementos textuais**

O principal foco do HTML é a estruturação, e mais do que uma estrutura de espaços e conteúdos, ele também estrutura os textos em si, através das [TAGs de semântica textual](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element#sem%C3%A2nticas_textuais_inline).

Esse grupo de tags pode ser subdividido em:

***Conteúdos textuais***

TAGs dedicadas a estruturar grupos de textos com um mesmo propósito

Exemplos são:

| TAG                 | Finalidade                         |
| :-----------------: | ---------------------------------- |
| \<p>                | Parágrafo simples                  |
| \<blockquote>       | Citação em bloco                   |
| \<dl>, \<dt>, \<dd> | Itens de [definição de dicionário](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/dl)|
|\<menu>, \<ol>, \<ul>, \<li>|Elementos de [tabulação simples](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element#conte%C3%BAdo_tabulado)|
|\<caption>, \<table>, \<thead>, \<tbody>, \<col>, \<td>, \<th>, \<tr>|Elementos de [tabulação avançada](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element#conte%C3%BAdo_tabulado)|


***Conteúdos textuais inline***

TAGs dedicadas a estruturar [conteúdos internos à linha](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element#sem%C3%A2nticas_textuais_inline).

Exemplos são:

```html
<!--Espaços especiais-->
<span>Espaço genérico inline</span>
<code>Códigos de programação</code>
<br>Quebra de linha</br>
<q>Citação inline</q>
<a>Link para conteúdo externo</a>

<!--Destaques visuais-->
<strong>Enfatização, parecido com Negrito</strong>
<em>Enfatização, parecido com Itálico</em>
<mark>Enfatização, parecido com Marcador</mark>
<del>Enfatização, parecido com Tachado</del>
```

#### **5. Formulários**

Formulários são elementos que o usuário pode interagir de modo a **inserir de dados dentro da página**, dados que podem ser capturados e tratados por Scripts.

As [TAGS de formulário](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element#formul%C3%A1rios) também são divididas em 2 sub-grupos:

***Espaços de formulário***

Agrupamentos que definem a região do formulário e as regiões internas ao formulário

São elas:

```html
<form>Região do formulário</form>
<fieldset>sub-região do formulário</fieldset>
<datalist>Grupo de opções</datalist>
```

***Elementos de formulário***

Elementos do formulário que são interativos para o usuário da página

```html
<button>Botão cliclável</button>
<input>Entrada de dados genérica</input>
<meter>Faixa de valores</meter>
<select>Botão de seleção de 1 item</select>
<option>Itens dentro da seleção</option>
<textarea>Região dedicada a textos grandes</textarea>
```

### Exemplos de uso das tags

- [Exemplo geral](./../examples/ex_html_basico_exemplo_geral.html)
- [Estrutura textual básica](./../examples/ex_html_basico_elementos_textuais.html)
- [Estrutura de mídia básica](./../examples/ex_html_basico_midia.html)
- [Estrutura de containers básica](./../examples/ex_html_basico_containers.html)
- [Estrutura de metadados básica](./../examples/ex_html_basico_metadados.html)
- [Estrutura de formulário básica](./../examples/ex_html_basico_formulario.html)

---

## 🔗 - Referências

- [Elementos HTML - Mozilla docs](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element)
- [HTML e CSS: desenvolvimento web básico - Conquer Plus](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwibuKqartz_AhUDIrkGHeesBekQFnoECBAQAQ&url=https%3A%2F%2Fconquer.plus%2F&usg=AOvVaw1URGGN62PlBub1xxFFlxo7&opi=89978449)