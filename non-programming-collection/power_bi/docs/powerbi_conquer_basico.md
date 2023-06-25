---
title: Introdução ao Power BI - Conquer - Anotações pessoais
author: Stallone L. de Souza
description: Minhas anotações sobre o curso da Conquer de introdução ao Power BI
start_study: 24/06/23
finish_study: XX/06/23
---

# Introdução ao PowerBI - Curso da Conqer <!-- omit from toc -->

## 🔖 - Índice <!-- omit from toc -->
- [👀 - Conclusões pessoais](#---conclusões-pessoais)
- [🔨 - Utilitários](#---utilitários)
- [📝 - Anotações gerais](#---anotações-gerais)
  - [**Módulo 1 - Mundo dos dados**](#módulo-1---mundo-dos-dados)
    - [*📌 Dados são o novo petróleo, por quê?*](#-dados-são-o-novo-petróleo-por-quê)
    - [*📌 Como os dados geram valor?*](#-como-os-dados-geram-valor)
    - [*📌 Como começar a explorar os dados?*](#-como-começar-a-explorar-os-dados)
  - [**Módulo 2 - Pensamento analítico**](#módulo-2---pensamento-analítico)
    - [*📌 Como pensar sobre dados?*](#-como-pensar-sobre-dados)
    - [*📌 O que a análise busca responder?*](#-o-que-a-análise-busca-responder)
    - [*📌 Quais fontes de dados vou utilizar?*](#-quais-fontes-de-dados-vou-utilizar)
  - [**Módulo 3 - Integridade dos dados**](#módulo-3---integridade-dos-dados)
    - [*📌 Por que a integridade de dados é importante?*](#-por-que-a-integridade-de-dados-é-importante)
    - [*📌 Estatística essencial para análise de dados*](#-estatística-essencial-para-análise-de-dados)
    - [*📌 Limpando a base de dados*](#-limpando-a-base-de-dados)
  - [**Módulo 4 - Fundamentos de BI**](#módulo-4---fundamentos-de-bi)
    - [*📌O que é Business Inteligence?*](#o-que-é-business-inteligence)
    - [*📌 Hierarquia das informações*](#-hierarquia-das-informações)
    - [*📌 Ferramentas de BI*](#-ferramentas-de-bi)
  - [**Módulo 5 e 6 - Jornada PowerBI**](#módulo-5-e-6---jornada-powerbi)
  - [**Módulo 7 - Lab 1**](#módulo-7---lab-1)
  - [**Módulo 8 - Lab 2**](#módulo-8---lab-2)
  - [**Módulo 9 - Visualização de dados**](#módulo-9---visualização-de-dados)
  - [**Módulo 10 - O analista fora da curva**](#módulo-10---o-analista-fora-da-curva)
- [🔗 - Referências](#---referências)


---

## 👀 - Conclusões pessoais

---

## 🔨 - Utilitários

---

## 📝 - Anotações gerais

### **Módulo 1 - Mundo dos dados**

#### *📌 Dados são o novo petróleo, por quê?*

Quando uma empresa se lança no mercado, o maior desafio é conquistar clientes, expandir sua frente de mercado e fidelizar os que já aceitaram a marca. Fazer isso envolve **entender a fundo o que o cliente quer** e entregar, no momento certo, o que ele deseja. 

Os dados do mundo moderno servem justamente para isso: **Descobrir o que o cliente quer antes mesmo que ele saiba o que quer**.

Saber extrair, limpar e analisar dados com objetivo de encontrar soluções, encontrar o que o cliente quer, é algo que toda empresa precisa e valoriza, pois com essas informações ela pode **maximizar os lucros** e **minimzar os custos** envolvidos.

Por exemplo: A **Netflix** captura e analisa um grande volume de dados dos usuários para descobrir os momentos certos que atiçam a atenção nos filmes, quais séries são mais reassistidas e quais momentos ganham maior destaque. Tudo isso para prever o que o usuário vai querer na próxima temporada, na próxima grande série.

---

#### *📌 Como os dados geram valor?*

Quando se reúnem muitos dados sobre um mesmo contexto, nota-se que alguns padrões começam a surgir, algumas são mais óbvias, mas outras são muito discretas, só aparecem quando existe um volume muito grande de dados coletados.

Por exemplo: **A posição dos proutos numa prateleira de supermercado** tende a ser decidida pelo público-alvo que cada produto tenta atingir: Uma caixa de cereais estará mais baixa, bem colorida e na altura dos olhos da criança; A ordem dos produtos sempre deixará os mais caros nos pontos mais fáceis de enxergar e acessar, enquanto os mais baratos ficam mais baixos, mais fundos ou com mais difícil acesso.

Essas pequenas mudanças, quando atingem centenas, milhares ou até milhões de clientes, fazem diferença no momento de decisão do que será comprado, alugado, locado ou contratado. Fazendo com que as empresas que souberem explorar melhor isso, se destaquem rapidamente.

***Os dados permitem ver aquilo que é grande demais para os olhos enxergarem.***

---

#### *📌 Como começar a explorar os dados?*

Para começar a pensar sobre dados, é importante dividí-los:

- Dados **Qualitativos**
  - Não são diretamente mensuráveis
  - Envolvem perguntas abertas e abstratas
  - Visam entender o "por quê"
- Dados **Quantitativos**
  - Mensuráveis
  - Baseados em fatos
  - Visam entender o "como" e o "com que frequência"

> **Dica:**
> 
> Para lidar com dados qualitativos, é interessante categorizá-los em grupos padronizados, assim, pode-se ao menos medir a frequência com que ocorrem.

Além disso, os dados podem ser divididos pelo grupo temporal que vai ser analisado:

- Dados **Passados**
  - Visa compilar o que já aconteceu
  - São exemplos:
    - Dashboards
    - Relatórios
    - Resultados de vendas
  - Em geral, são simples de fazer e demandam pouco tempo
- Dados **Futuros**
  - Visa prever o que pode acontecer para se prevenir
  - São exemplos:
    - Gerenciamento de risco
    - Estimativa de vendas num período
    - Estimativa de crescimento empresarial
  - Em geral, são análises complexas com muitos cruzamentos de dados

Para começar a analisar os dados, é preciso ter um norte para onde esses dados devem apontar. Esse norte pode ser extraído do **D.A.I.L.A.S.**:

- **D - Definir objetivos**
  - Quais perguntas os dados visam responder?
  - Essas perguntas são claras, mensuráveis e **relevantes para o negócio?**
- **E - Escolher métricas**
  - Quais indicadores serão utilizados?
  - Somente indicadores **quantiativos** basta?
  - Vale a pena investir em indicadores **qualitativos**?
- **I - Identificar fontes**
  - Existem fontes já formadas?
  - É possível cruzar dados com os já existentes?
  - Há margem para buscar novos dados?
- **L - Limpar as bases**
  - Eliminar dados ausentes
  - Definir padrões para os dados
  - Buscar inconsistências e ajustá-las
- **A - Analisar dados**
  - Utilizar ferramentas de análise
  - Manter sempre o objetivo da análise em mente
- **S - Sugerir decisões**
  - Encontrar soluções aplicáveis a partir das análise obtidas
  - O objetivo maior é: **dar luz à soluções**

> **Dica:**
>
> Nossa mente possui dois tipos de pensamento: Rápido e Devagar. O **rápido** toma decisões instantâneas, instintivas, que visam resolver o problema com base no que já se conhece. O **devagar** analisa com calma várias situações possíveis, e tira disso decisões complexas e duradouras.
> 
> *Daniel Kahneman - Rápido e Devagar, duas formas de pensar*

<br>
<br>

### **Módulo 2 - Pensamento analítico**

#### *📌 Como pensar sobre dados?*

Fazer a pergunta certa levará à resposta certa.

Ao pensar sobre os dados, é importante ter calma e um pensamento devagar, que vise questionar: *Eu sei de todo o contexto dessa situação?*; *Há alguma informação faltando que eu deva analisar?*; ***Tenho todos os dados necessários?***

Todas essas perguntas podem descobertas através de uma única mais simples: ***"Qual o resultado buscado com essa pergunta?"***

Ao se ter a pergunta certa, ao saber do contexto e do resultado esperado, pode-se começar a entender quais dados de fato **são necessários**, e quais não são

---

#### *📌 O que a análise busca responder?* 

Além da pergunta certa para entender o que de fato se quer, determinar onde aquela análise se encaixa para **gerar valor para a empresa**, é um passo fundamental para o pensamento analítico.

Uma técnica que pode auxiliar nisso é o **O.K.R.**:

- **O - Objectives**
  - "Onde eu quero chegar com essa análise?"
- **K - Key**
  - "O que estou usando para medir meu resultado?"
- **R - Results**
  - "Os meus indicadores-chave estão alinhados com meus resultados?"

**ORK's visam filtrar**, dentre todos os dados e técnicas utilizadas, queles que de fato estão alinhados com o objetivo maior da empresa, com a **missão do negócio** buscada, de modo que seja possível ver os objetivos em cascata, por exemplo:

![Exemplo de OKR em cascata - Conquer](./../assets/powerbi_conquer_basico_ex_okr.png)

> **Dica:**
>
> Os objetivos atuais estão alinhados com os objetivos superiores? Se alinham com a missão e visão da empresa?

Para melhorar o uso dos OKRs, é necessário avaliar os KPIs (**Key-processor Indicatores**): São os principais indicadores que determinam o avanço dos objetivos frente ao OKR.

Um KPI deve ser simples e claro, como um "ponto de checagem" que avalie o resultado daquela tarefa/processo em relação ao objetivo estabelecido.

Por exemplo:

No contexto da qualidade de um serviço, temos:

- **Objetivo:** Reduzir as falhas operacionais mensais
- **KPI:** A cada 1000 operações, ter no máximo 10 falhas operacionais
  - "No mês de Junho o KPI foi atingido? Se sim, o objetivo geral foi atingido"
- **Objetivo:** Melhorar o tempo das operações dentro de indústrias
- **KPI:** O tempo médio das operações semanais deve ser, no máximo, de 2h10 min
  - "Esta semana o objetivo foi atingido? Se não, buscar intervenções mais intensas"

---

#### *📌 Quais fontes de dados vou utilizar?*

Assim como a OKR, assim como os KPIs, a fonte de dados deve estar alinhada aos objetivos do negócio estabelecidos lá atrás, no DAILAS.

Uma boa fonte de dados é aquela que consegue responder às perguntas que o KPI visa medir.

> **Dica:**
>
> Desenhar o gráfico esperado após a análise de dados ajuda a determinar quais dados precisam ser priorizados na coleta

Além de pensar nas fontes de dados que já existem na empresa, é interessante **buscar outras fontes**, ou até mesmo construir novas fontes, que ajudem a enriquecer os dados coletados, através de:

|       Técnica       | Resultado esperado                                |
| :-----------------: | ------------------------------------------------- |
| Cruzamento de dados | Unir novos dados aos já existentes                |
|    Questionário     | Coletar novos dados                               |
|    Web Scrapping    | Vasculhar na internet novos dados úteis           |
|  Análise de campo   | Observar diretamente o comportamento dos clientes |

> **DICA:**
>
> É interessante criar um identificador único para que as ferramentas de análise de dados possam identificar uma nova "linha" de dados única.

Após coletar os dados, surge a pergunta: ***Esses dados são confiáveis?***

Para se ter bons resultados, os dados além de estarem alinhados aos KPIs, também precisam ser confiáveis e organizados, para isso é importante analisar como eles estão no momento e se a forma como estão distribúidos é organizada de modo a entender os fatos.

Alguns requisitos para uma ***boa base de dados:***

1. Colunas e linhas com informações únicas
2. Todos os dados relevantes estão na mesma acaba (do excel)
3. Todos os dados estão em uma base única de dados (1 arquivo)

> **Dica:**
>
> Idealmente, as ferramentas de análise trabalham melhor quando os dados estão organizados de modo a priorizar colunas, deste modo:
>
> ![Exemplo de organização por colunas - Conquer](./../assets/powerbi_conquer_basico_ex_cols.png)

<br>
<br>

### **Módulo 3 - Integridade dos dados**

#### *📌 Por que a integridade de dados é importante?*

Três perguntas rápidas:
- Quais informações faltam na base de dados?
- Quais dados estão incompletos?
- Quais análises poderiam ser feitas com mais dados?

Para se criar uma base dados íntegra, é preciso tratar do **ecossistema analítico** onde esses dados vão ser inseridos, através de 3 fatores centrais:
- Existência de dados qualificados
  - Verificar se os dados que andam sendo coletados estão de acordo com o modelo ideal que foi imaginado quando começou-se a construir a análise
- Modelagem estatística
  - Aplicar técnicas estatísticas para extrair novas informações dos dados coletados
- Digitalização + inovação no processo
  - Construir/reforçar uma cultura analítica, baseada na demanda por dados, desde o coração da empresa, de modo que todos os agentes se alinhem em prol de melhorar a coleta e obtenção de dados confiáveis e valorosos

---

#### *📌 Estatística essencial para análise de dados*

Para começar a trabalhar com estatística dentro de análise de dados, alguns conceitos iniciais são necessários:

**População**: Todos os elementos do universo analisado que são relevantes para o estudo
- Exemplo: CENSO do IBGE - Coleta dados de TODOS os domicílios do país

**Amostra**: Quantidade parcial dos elementos do universo analisado, de modo que seja representativo do conjunto total
- Exemplo: PNAD - Amostragem dos domicílios do país

No contexto emrpesarial, a amostragem serve para definir uma quantidade mínima de pessoas, produtos, elementos analisados (linhas) que são necessárias para que o estudo dos dados seja confiável. 

Para isso é preciso recorrer à ***Amostragem mínima***:
- Tipos de amostra:
  - Por variável:
    - Utilizada quando já se tem uma base que mostra o desvo-padrão da informação
    - Ex: Ao analisar a PNAD, tem-se o dado do último CENSO feito, portanto, determina-se um desvio-padrão entre a PNAD coletada e o CENSO anterior
  - Por poulação:
    - Utilizada quando se sabe o tamanho da população
    - Ex: Em uma locadora de carros, sabe-se que a empresa possui 500 veículos ao todo, então, é possível determinar uma amostra mínima considerando que a população total não passará de 500 veículos
  - Por proporção:
    - Utilizada quando a proporção entre a amostra e a população é conhecida
    - Ex: Sabe-se que a proproção entre a quantidade de clientes que compram refrigerante e a quantidade de clientes diários é, em média, 3/7. A partir disso é possível determinar quantos clientes vale a pena entrevistar para se ter uma amostragem releante

Além da amostragem mínima, é interessante sempre medir a **margem de erro** e o **grau de confiança**:
- A ***margem de erro*** avalia o resultado da amostra em comparação com o resultado da população
  - Ex: "Tenho 95% de confiança que entre 51 e 53% dos clientes preferem o produto A"
- O ***grau de confiança*** avalia o nível de certeza que os dados representa a população

Outras análises importantes e fundamentais:

|   Análise    | Finalidade                                           |
| :----------: | ---------------------------------------------------- |
| Curva normal | Verificar a distribuição dos dados ao redor da média |
| Desvio padão | Mede a dispersão dos valores da amostra              |

---

#### *📌 Limpando a base de dados*

Para identificar dados "sujos" dentro da base de dados, é interessante observar alguns indícios de que aquela informação não condiz com a realidade:

- **Dados ilógicos**
  - São dados que são clarametne muito discrepantes do esperado para aquele grupo de informações, para aquela coluna.
  - Ex: No relatório de vendas de produtos, na coluna de "filé bovino", que geralmente varia entre R$ 30,00 e R$ 70,00, aparece um dado de **R$ 12.000,00**
  - Ex2: No relatório de "horas-trabalhadas", na coluna do horário de entrada do colaborador, no lugar de aparecer algo como "06:00:00", aparece "João", um **dado ilógico**
- **Dados não-padronizados**
  - Pode ocorrer do preenchimento de um dado não seguir o padrão dos demais, contaminando a análise com uma informação que resultará em "erro".
  - Ex: Uma data que é padronizada no formato "dd/mm/yyyy", quando preenchida como "dd-mm-yy" resultará em erro, pois não segue o padrão definido

Outros indícios indícios mais sutís que podem indicar que o dado está "sujo" é:
- **O tempo que levou para o formulário ser peenchido**
  - Se em média um formulário leva 5 min para ser preenchido, aparecer um preenchimento que levou somente 3 segundos é algo suspeito que indica que o dado não é confiável.

Certo, mas o que fazer diante disso?

Fazer a limpeza dos dados é um processo essencial para que a análise seja confiável e traga bons resultados, mas fazer isso manualmente demanda muito tempo, recursos e esforços humanos.

Para um cenário de poucos dados, algumas centenas de linhas em uma única planilha, talvez esse processo possa não ter um impacto significativo, porém, em um contexto de dezenas de milhares de linhas, ou até milhões, é inviável utilizar o esforço humano.

> **Dica:**
>
> Para lidar melhor com isso, o caminho está na **automação aliada à estratégia**:
> - Ao lidar com a base de dados pura, é interessante adicionar colunas que identifiquem **inconsistências esperadas**
>   - Ex: Identificar se um produto foi registrado com preço mais baixo ou mais alto do que a faixa de preço real do produto
>   - Ex: Identificar se um preenchimento foi rápido ou demorado demais
> - **Ferramentas que atendem à essa demanda são:**
>   - Fórmulas do Excel como "Se, E, Ou, Esquerda, Direita e Seerro"
>   - Formatação condicional para destacar inconsistências
>   - Limpeza automática de linhas em branco
>   - Códigos de programação que avaliem minuciosamente cada aspecto do dado conforme desejado

<br>
<br>

### **Módulo 4 - Fundamentos de BI**

#### *📌O que é Business Inteligence?*

O BI não é uma ferramenta por si só, mas um conjunto de técnicas e ideias que ajudam as empresas a reunirem dados e tomarem decisões de forma mais assertiva.

Os passos fundamentais do BI são:
- Coletar e organizar os dados
- Visualizar e analisar os dados prontos
- Diagnosticar a situação da empresa
- Construir estratégias e planos de ação
- Monitorar os dados e o desenvolvimento das ações

As ideias do BI possui alguns pontos a se observar:

| Vantagem                                   | Desvantagem                                                                              |
| ------------------------------------------ | ---------------------------------------------------------------------------------------- |
| Integra dados de vários sistemas           | Alto custo de implantação                                                                |
| Melhora a consistência dos dados           | Pode ficar rapidamente defasado                                                          |
| Torna o histórico dos dados mais acessível | Não compensa em alguns contextos específicos p/c/do treinamento e nova operacionalização |
| Garante a segurança no acesso aos dados    | Compete com sistemas já existentes e pode causar duplicações de informação               |

Embora a implantação de um sistema de BI seja custosa no início, a manutenção e os resultados que se obtém com ele agregam muito valor a empresa, auxiliando na tomada de decisões mais assertivas, na redução de custos, na elevação do valor do produto e no melhor controle sobre o futuro da empresa.

---

#### *📌 Hierarquia das informações*

O principal objetivo do BI é agregar valor aos dados isolados, resultando normalmente em resultados financeiros melhores. Para visualizar esse valor, se utiliza a pirâmide informacional:

![Pirâmide informacional - Conquer](./../assets/powerbi_conquer_basico_piramide_infos.png)

Essa pirâmide descreve o quão limpos, alinhados e descritivos estão os dados que a empresa está coletando e analisando em relação aos objetivos e missões que ela busca.

Um dado "inteligente" é aquele que consegue trazer melhores insights para tomada de decisão assertiva e lucrativa.

***Para extrair isso, é preciso implantar BI:***

A implantação desse sistema demanda 4 etapas profundamente alinhadas à cultura, estrutura e disposição da empresa:
- **Definir qual uso será dado ao BI**
  - Identificar todas as necessidades da empresa
  - Mapear todos os objetivos que devem ser atentidos através do BI
  - Se perguntar "Por quê devo utilizar o BI?"
- **Escolher qual solução de BI será utilizada**
  - Verificar quais empresas oferecem solução de BI, se oferem suporte, consultoria e afins
  - Avaliar o nível de satisfação dos clientes dessas empresas de BI
  - Se perguntar "O que vou usar para estrutar um BI na minha empresa?"
- **Construir a solução aplicada ao contexto da empresa**
  - Modelar os dados que serão necessários para a atividade da empresa
  - Definir em detalhes quais indicadores, relatórios e objetivos serão monitorados ativamente através do BI
  - Se perguntar "Como vou aplicar essa solução ao contexto da minha empresa?"
- **Disponibilizar essa solução para os usuários utilizarem ela, capacitando-os**
  - Apresentar toda a construção da solução de BI para os usuários entenderem a relevância
  - Treinar, monitorar e oferecer suporte para a capacitação dos usuários

> **Dica:**
>
> Passado a fase de implantação do BI, é comum que a empresa abandone o desenvolvimento contínuo, evitando de aplicar novos dados/processos/análises que podem enriquecer os resultados por temer um aumento de custos.
>
> O desenvolvimento contínuo da solução de BI aplicada é essencial para que os resultados sejam sempre crescentes e controláveis.

---

#### *📌 Ferramentas de BI*

Além do Power BI da Microsoft, outras ferramentas que oferecem estruturas de BI são:

- **IBM Cognos**
  - Automatização de análises preditivas
  - Enriquece dados através do Twitter
- **Adobe Analytics**
  - Análises em tempo real
  - Segmentação de canais de marketing
  - Descoberta automática de público-alvo
- **Qlik View**
  - Carregamento rápido e fácil dos dados
  - Storytelling de dados
- **Tableau**
  - SImples e fácil de usar
  - Disponível para todas as plataformas
- **Google data Studio**
  - Gratuito
  - Conecta-se facilmente com o Google Planilhas

<br>
<br>

### **Módulo 5 e 6 - Jornada PowerBI**

<br>
<br>

### **Módulo 7 - Lab 1**

<br>
<br>

### **Módulo 8 - Lab 2**

<br>
<br>

### **Módulo 9 - Visualização de dados**

<br>
<br>

### **Módulo 10 - O analista fora da curva**


---

## 🔗 - Referências

- [Análise de dados e Power BI - Conquer Plus](https://conquerplus.com.br)