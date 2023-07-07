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
    - [**5. Listas**](#5-listas)
    - [**6. Tabelas**](#6-tabelas)
    - [**7. Formulários**](#7-formulários)
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

|   Tag    | Finalidade                                                       |
| :------: | ---------------------------------------------------------------- |
| \<head>  | Container dos metadados                                          |
| \<meta>  | Elemento genérico para agregar metadados                         |
| \<title> | Título interno do documento                                      |
| \<style> | Estilização dos conteúdos da página                              |
| \<link>  | Acessar e pré-carregar conteúdos externos \[como CSSs e Scripts] |

<br>

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

<!--Espaço de conteúdo oculto/detalhado-->
<details>Seção de conteúdo oculto, mas que pode ser expandido</details>
<summary>Palavra ou frase que serivrá de cabeçalho para esse conteúdo</summary>
```

<br>

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
<br>

#### **4. Elementos textuais**

O principal foco do HTML é a estruturação, e mais do que uma estrutura de espaços e conteúdos, ele também estrutura os textos em si, através das [TAGs de semântica textual](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element#sem%C3%A2nticas_textuais_inline).

Esse grupo de tags pode ser subdividido em:

***Conteúdos textuais***

TAGs dedicadas a estruturar grupos de textos com um mesmo propósito

Exemplos são:

|                                  TAG                                  | Finalidade                                                                                                          |
| :-------------------------------------------------------------------: | ------------------------------------------------------------------------------------------------------------------- |
|                                 \<p>                                  | Parágrafo simples                                                                                                   |
|                             \<blockquote>                             | Citação em bloco                                                                                                    |
|                          \<dl>, \<dt>, \<dd>                          | Itens de [definição de dicionário](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/dl)                    |
|                     \<menu>, \<ol>, \<ul>, \<li>                      | Elementos de [tabulação simples](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element#conte%C3%BAdo_tabulado)  |
| \<caption>, \<table>, \<thead>, \<tbody>, \<col>, \<td>, \<th>, \<tr> | Elementos de [tabulação avançada](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element#conte%C3%BAdo_tabulado) |


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

<br>

#### **5. Listas**

Listas são formas rápidas de organizar conteúdos, onde os elementos da lista são valores que devem ser destacados como numa lista de compras: pontuados, ordenados e aninhados.

No HTML uma lista é representada de 2 maneiras principais: Uma **lista ordenada**, marcada pela tag `<ol>`, e uma **lista desordenada**, representada pela tag `<ul>`. A diferença entre os dois é a forma de marcação entre os dois, onde a lista ordenada segue uma sequência lógico-numérica, enquano a desorneda é mais uma "pontuação" de elementos variados.

Por exemplo:

```html
<strong>Lista ordenada</strong>
<ol>
  <li>Item ordenado 1</li>
  <li>Item ordenado 2</li>
  <li>Item ordenado 3</li>
  <li>Item ordenado 4</li>
</ol>
```
---

<strong>Lista ordenada</strong>
<ol>
  <li>Item ordenado 1</li>
  <li>Item ordenado 2</li>
  <li>Item ordenado 3</li>
  <li>Item ordenado 4</li>
</ol>

---

Bem como:

```html
<strong>Lista desordenada</strong>
<ul>
  <li>Item desordenado 1</li>
  <li>Item desordenado 2</li>
  <li>Item desordenado 3</li>
  <li>Item desordenado 4</li>
</ul>
```

---

<strong>Lista desordenada</strong>
<ul>
  <li>Item desordenado 1</li>
  <li>Item desordenado 2</li>
  <li>Item desordenado 3</li>
  <li>Item desordenado 4</li>
</ul>

---

Para **aninhar elementos** numa lista, basicamente adiciona-se um novo `<ul>//<ol>` na linha da lista, assim ela é representada como um **aninhamento**.

Por exemplo:

```html
<strong>Lista aninhada</strong>
<ol>
  <li>Item 1</li>
    <ul>
      <li>Item 1.1</li>
      <li>Item 1.2</li>
    </ul>
  <li>Item 2</li>
  <li>Item 3</li>
    <ol>
      <li>Item 3.1</li>
      <li>Item 3.2</li>
        <ul>
          <li>Item 3.2.1</li>
          <li>Item 3.2.2</li>
          <li>Item 3.2.3</li>
        </ul>
      <li>Item 3.3</li>
    </ol>
  <li>Item 4</li>
</ol>
```

---

<strong>Lista aninhada</strong>
<ol>
  <li>Item 1</li>
    <ul>
      <li>Item 1.1</li>
      <li>Item 1.2</li>
    </ul>
  <li>Item 2</li>
  <li>Item 3</li>
    <ol>
      <li>Item 3.1</li>
      <li>Item 3.2</li>
        <ul>
          <li>Item 3.2.1</li>
          <li>Item 3.2.2</li>
          <li>Item 3.2.3</li>
        </ul>
      <li>Item 3.3</li>
    </ol>
  <li>Item 4</li>
</ol>

---

<br>

#### **6. Tabelas**

Tabelas são formas de **representar uma densidade de elementos**, de modo que vários dados podem ser relacionados facilmente ao se comparar a posição deles em uma tabela em relação aos demais.


No HTML, as tabelas são usadas para armazenar dados de forma estruturada, bem como servir de base para gráficos, tabulações e requisições baseadas em estrutura.

As principais tags envolvidas são:

```html
<table> - Inicializa a tabela
<tr> - Linha da tabela
<td> - Coluna da tabela
<th> - Cabeçalho semântico da coluna
<!--
  OBS: No cabeçalho é interessante adicionar o ESCOPO que ele representa, através do atributo "scope", assim, os navegadores podem otimizar a geração da tabela.
  P.Ex.: <th scope="col">//<th scope="row">
-->
```
Um exemplo rápido:

```html
<table border="">
  <tr>
    <th scope="col">Atividade</th>
    <th scope="col">Responsável</th>
  </tr>
  <tr>
    <td>Fazer café</td>
    <td>Stallone</td>
  </tr>
  <tr>
    <td>Buscar bugs</td>
    <td>Shie</td>
  </tr>
  <tr>
    <td>Criar algotirmos</td>
    <td>HL</td>
  </tr>
</table>
```

---

<table border="">
  <tr>
    <th scope="col">Atividade</th>
    <th scope="col">Responsável</th>
  </tr>
  <tr>
    <td>Fazer café</td>
    <td>Stallone</td>
  </tr>
  <tr>
    <td>Buscar bugs</td>
    <td>Shie</td>
  </tr>
  <tr>
    <td>Criar algotirmos</td>
    <td>HL</td>
  </tr>
</table>

---

Um detalhe interessante é a **ordem de aninhamento dos elementos**, que facilita a leitura e construção da tabela; essa ordem deve ser: `<tr> => <td>` e não o contrário, assim os dados são primeiro reunidos em linhas, e depois em colunas.

**Melhorando as tabelas:**

Algo comum em tablelas é a categorização de conteúdos, que pode ser feita a nível de dados, repetindo um mesmo valor a cada linha, ou a nível visual, compilando as linhas num mesmo bloco. Para fazer isso utiliza-se o atributo `rowspan` ou `colspan` para o caso de colunas.

Por exemplo:

```html
<table border>
  <tr>
    <th scope = "col">Categoria</th>
    <th scope = "col">Item</th>
    <th scope = "col" colspan=2>Preço</th>
  </tr>
  <tr>
    <td rowspan = 3>Finanças</td>
    <td>Aluguel</td>
    <td>R$ 500,00</td>
    <td>50%</td>
  </tr>
  <tr>
    <td>Água</td>
    <td>R$ 120,00</td>
    <td>20%</td>
  </tr>
  <tr>
    <td>Luz</td>
    <td>R$ 180,00</td>
    <td>30%</td>
  </tr>
  <tr>
    <td colspan = 2>Alimentação</td>
    <td>R$ 700,00</td>
    <td>100%</td>
  </tr>
<table>
```

---

<table border>
  <tr>
    <th scope = "col">Categoria</th>
    <th scope = "col">Item</th>
    <th scope = "col" colspan=2>Preço</th>
  </tr>
  <tr>
    <td rowspan = 3>Finanças</td>
    <td>Aluguel</td>
    <td>R$ 500,00</td>
    <td>50%</td>
  </tr>
  <tr>
    <td>Água</td>
    <td>R$ 120,00</td>
    <td>20%</td>
  </tr>
  <tr>
    <td>Luz</td>
    <td>R$ 180,00</td>
    <td>30%</td>
  </tr>
  <tr>
    <td colspan = 2>Alimentação</td>
    <td>R$ 700,00</td>
    <td>100%</td>
  </tr>
<table>

---

**Importante:** para o "*col/row-span*" funcionar, é necessário que a coluna/linha seguinte seja retirada da tabela, para não causar desalinhamento dos dados.

**Sobre a semântica adequada**

Além dos elementos visuais, existem tags específicas de semântica no HTML, sendo elas:

```html
<thead> - Semântica de cabeçalho
<tbody> - Semântica de corpo
<tfoot> - Semântica de rodépe
<caption> - Título semântico-visual da tabela
```

Exemplo:

<table border = "">
<caption>Tabela de notas dos alunos</caption>

<thead>
  <tr>
    <th scope="col">Matéria</th>
    <th scope="col">Aluno</th>
    <th scope="col" colspan=2>Nota</th>
  </tr>
</thead>

<tbody>
<tr>
  <td rowspan=3>Matemática</td>
  <td>Stallone</td>
  <td>70</td>
</tr>
<tr>
  <td>HL</td>
  <td>20</td>
</tr>
<tr>
  <td>Shie</td>
  <td>100</td>
</tr>
<tr>
  <td rowspan=3>Português</td>
  <td>Stallone</td>
  <td>40</td>
</tr>
<tr>
  <td>HL</td>
  <td>90</td>
</tr>
<tr>
  <td>Shie</td>
  <td>100</td>
</tr>
<tr>
  <td rowspan=3>Programação</td>
  <td>Stallone</td>
  <td>20</td>
</tr>
<tr>
  <td>HL</td>
  <td>70</td>
</tr>
<tr>
  <td>Shie</td>
  <td>100</td>
</tr>
</tbody>

<tfoot>
<tr>
  <th scope="row" colspan=2>Média global</th>
  <td>67,7</td>
</tr>
</tfoot>

</table>

<br>

#### **7. Formulários**

Formulários são elementos que possibilitam o usuário injetar dados para o front-end através de **"inputs" interativos**, como caixas de diálogo, botões, barrinhas e caixas de seleção.

Todos esses elementos fazem parte do conjunto de ferramentas que potencializa o poder dos usuários dentro de uma página web, uma vez que formulários, sejam eles explícitos ou implícitos (*através de listeners*), e servem de gatilho para desencadear ações e fluxos de dados.

***Estrutura do formulário***

Um formulário é construído dentro do container `<form> </form>`, que representa o espaço semântio do formulário.

Dentro do formulário, os principais elementos podem ser divididos em 4 grupos principais:

|    tag     | Propósito                  |
| :--------: | -------------------------- |
| `<input>`  | Entrada principal de dados |
| `<label>`  | "Título" do input          |
| `<select>` | Seleção de opção           |
| `<button>` | Botão de seleção           |

Dentro da tag `<input>` pode-se adicionar alguns atributos para enriquecer os dados coletados, para isso, adicona-se a tag `type = ""` para informar o tipo do input desejado. 
São atributos comuns:

| Atributo do type | Propósito                                           | Exemplo     |
| :--------------: | --------------------------------------------------- | ----------- |
|      `text`      | Caixa de texto-curto padrão                         | abcde       |
|     `number`     | Caixa de texto para números                         | 12345       |
|     `search`     | Caixa de texto otimizado para pesquisas             | google      |
|     `email`      | Otimização para e-mails (com validação)             | a@b.com     |
|      `tel`       | Otimização para números de telefone (sem validação) | +55 83 9    |
|      `date`      | Otimização para datas (com validação)               | 01/01/23    |
|     `color`      | Otimização para cores                               | red         |
|    `password`    | Caixa de texto especial para SENHAS                 | \*\*\*\**   |
|     `range`      | Barra de seleção de valores                         | \|--X----\| |

Além do atributo "type", existem outros atributos interessantes com funcionalidades específicas, por exemplo:

```html
<input type="range" min=0 max=100> <!-- Atributos 'min' e 'max' determinam a faixa de valores para os types 'number' e 'range' -->

```

***Entrando na parte de botões do formulário***

No HTML, um tipo de atributo importante da tag "input" é o tipo "botões", que são elementos selecionáveis que representam uma escolha, ou conjunto de escolhas.

São representados por caixinhas marcáveis, como os famosos **to-do's**, caixas de decisão única, como as "**opções**" e botões em si, como o botão "enviar" ou "**increver-se**"

São exemplos de usos dos botões:

```html
<fieldset>
  <legend>Título do campo do formulário</legend>

  <!--Exemplo do tipo "radio", comumente usado para seleção de opção única-->
  <input type="radio" value="ok" name="qt_1" id="qt_1_id_1" checked>
  <label for="qt_1_id_1">Opção 1</label>
  <input type="radio" value="not_ok" name="qt_1" id="qt_1_id_2">
  <label for="qt_1_id_2">Opção 2</label>
  <!--É atraveś do atributo "name" que a seleção marca a atual e desmarca as demais-->

  <!--Exemplo do tipo "checkbox", usado para selecionar vários elementos-->
  <input type="checkbox" name="check" id="check_1" value="ok1">
  <label for="check_1">Selecao 1</label>
  <input type="checkbox" name="check" id="check_2" value="ok2">
  <label for="check_2">Selecao 2</label>
  <input type="checkbox" name="check" id="check_3" value="ok3" checked>
  <label for="check_3">Selecao 3</label>

  <!--Exemplo de botão de envio e reset de formulário-->
  <input type="submit" value="Enviar">
  <input type="reset" value="Recomeçar">

</fieldset>
```
---

<fieldset>
  <legend>Título do campo do formulário</legend>

  <!--Exemplo do tipo "radio", comumente usado para seleção de opção única-->
  <input type="radio" value="ok" name="qt_1" id="qt_1_id_1" checked>
  <label for="qt_1_id_1">Opção 1</label>
  <input type="radio" value="not_ok" name="qt_1" id="qt_1_id_2">
  <label for="qt_1_id_2">Opção 2</label>
  <!--É atraveś do atributo "name" que a seleção marca a atual e desmarca as demais-->

  <!--Exemplo do tipo "checkbox", usado para selecionar vários elementos-->
  <input type="checkbox" name="check" id="check_1" value="ok1">
  <label for="check_1">Selecao 1</label>
  <input type="checkbox" name="check" id="check_2" value="ok2">
  <label for="check_2">Selecao 2</label>
  <input type="checkbox" name="check" id="check_3" value="ok3" checked>
  <label for="check_3">Selecao 3</label>

  <!--Exemplo de botão de envio e reset de formulário-->
  <input type="submit" value="Enviar">
  <input type="reset" value="Recomeçar">
</fieldset>

---

***Além da criação do input, também é importante validá-lo***

A validação do input ocorre através do atributo `pattern` junto de um `RegEx`, utilizado para validar dados que o usuário preenche manualmente, como textos, senhas, url, número e/ou data.

Exemplo:

```html
<fieldset>
  <legend>Exemplo de pattern</legend>

  <label>Insira a senha:</label>
  <input type="password" pattern=".{8,}" title="Insira 8 ou mais digitos">
  <input type="submit" value="Enviar">
</fieldset>
```

<fieldset>
  <legend>Exemplo de pattern</legend>

  <label>Insira a senha:</label>
  <input type="password" pattern=".{8,}" title="Insira 8 ou mais digitos">
  <input type="submit" value="Enviar">
</fieldset>

<br>

### Exemplos de uso das tags

- [Exemplo geral](./../examples/ex_html_basico_exemplo_geral.html)
- [Estrutura textual básica](./../examples/ex_html_basico_elementos_textuais.html)
- [Estrutura de mídia básica](./../examples/ex_html_basico_midia.html)
- [Estrutura de containers básica](./../examples/ex_html_basico_containers.html)
- [Estrutura de listas básica](./../examples/ex_html_basico_listas.html)
- [Estrutura de formulário básica](./../examples/ex_html_basico_formulario.html)

---

## 🔗 - Referências

- [Elementos HTML - Mozilla docs](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element)
- [HTML e CSS: desenvolvimento web básico - Conquer Plus](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwibuKqartz_AhUDIrkGHeesBekQFnoECBAQAQ&url=https%3A%2F%2Fconquer.plus%2F&usg=AOvVaw1URGGN62PlBub1xxFFlxo7&opi=89978449)