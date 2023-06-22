---
title: Exemplo de Markdown básico aplicado - Diário
author: Stallone L. de Souza
comment: Exemplo de um diário escrito em Markdown 
start_code: 21/06/23
finish_code: 21/06/23
---

# Exemplo de Markdown aplicado <!-- omit from toc -->

### Cenário: <!-- omit from toc -->
> Anotações em um diário

---

## Diário pessoal - SLS <!-- omit from toc -->

### Índice <!-- omit from toc -->
- [**Terça, 20 de Junho de 2023** - *Sobre a internet...*](#terça-20-de-junho-de-2023---sobre-a-internet)
- [**Quarta, 21 de Junho de 2023** - *Sobre meus estudos...*](#quarta-21-de-junho-de-2023---sobre-meus-estudos)
- [**Quinta, 22 de Junho de 2023** - *Uma manhã interessante...*](#quinta-22-de-junho-de-2023---uma-manhã-interessante)


---

### **Terça, 20 de Junho de 2023** - *Sobre a internet...*

Ultimamente sinto que estou vivendo no "automático" com mais frequencia do que gostaria: dia após dia eu chego em casa, me deito na cama e imediatamente pego o celular e abro um ***shorts*** no YouTube. Mesmo não tendo a intenção, basta se deitar que de imediato estou olhando algum [vídeo aleatório de ciência envolvendo gatinhos](https://youtu.be/RCj2z4fqls4).

Não sei até onde estou "domesticado", mas vou colocar alguns alarmes e alertas para reduzir esse vício...

---

### **Quarta, 21 de Junho de 2023** - *Sobre meus estudos...*

...enfim decidi qual será a estrutura-base dos meus arquivos, talvez seja um pouco bagunçado, talvez um pouco redundante, mas bem que alguma redundância ajuda bastante. Decidi que vai ser assim:

- Será estruturado por "**núcleos**" ou "**macro-assuntos**"
- Dentro dos núcleos, haverá as **temáticas centrais**, dimensionadas para o núcleo em que estão inseridas
- Dentro das temáticas, um padrão de pastas redundantes que acondiconarão os documentos de fato, sendo elas:
  - ***Docs*** (Textos e conteúdos)
  - ***Assets*** (Imagens e PDFs auxiliares)
  - ***Examples*** (exemplos de aplicação dos conceitos descritos)
  - ***README.md*** (arquivo Markdown-mestre que servirá de índice para os demais)
- Além disso, os arquivos em si terão um formato padrão de ***nomeclatura***:
  - Docs
    - **{tema}_{nível}.md**
  - Assets
    - **ast_{tema}\_{nível}\_{descricao}**
  - Examples
    - **ex{número}_{tema}\_{nível}**

Assim, acredito que ficará fácil de me localizar no futuro.

---

### **Quinta, 22 de Junho de 2023** - *Uma manhã interessante...*

Só para registrar, a estrutura que montei ontem ficou assim:

![Resultado estrutura arquivos](../assets/ast_ex1_markdown_basico_print_estrutura.png)

E bem, lá vamos nós para mais um dia...