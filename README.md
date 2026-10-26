<div align="center">

# 📸 Marilia Manzatto Furlan
### Fotografia & Vídeo · Bio de links

**A vida passa. A memória fica.**

Uma página para conectar histórias, apresentar ensaios e facilitar o primeiro contato.

![HTML5](https://img.shields.io/badge/HTML5-40372F?style=for-the-badge&logo=html5&logoColor=F7F4ED)
![CSS3](https://img.shields.io/badge/CSS3-672E37?style=for-the-badge&logo=css&logoColor=F7F4ED)
![JavaScript](https://img.shields.io/badge/JavaScript-897862?style=for-the-badge&logo=javascript&logoColor=FFFFFF)
![Licença MIT](https://img.shields.io/badge/Licença-MIT-40372F?style=for-the-badge)

**Santa Bárbara d’Oeste · SP**  
*27 anos eternizando histórias, abraços e os detalhes que fazem a vida especial.*

</div>

---

## ✨ Sobre o projeto

Bio de links desenvolvida para **Marilia Manzatto Furlan Fotografia & Vídeo**, reunindo os principais canais de contato em uma página com identidade visual delicada e foco na leitura.

A apresentação destaca os ensaios de **gestante**, **acompanhamento** e **corporativo**, além de reservar um espaço especial para as **memórias de Natal**.

## 🔗 O que a página oferece

| Recurso | Comportamento |
| --- | --- |
| **Agendamento pelo WhatsApp** | Abre uma conversa com a mensagem inicial “Olá! Quero agendar um ensaio.” |
| **Facebook** | Direciona para a página configurada do estúdio. |
| **Especial de Natal** | Destaca os ensaios natalinos e leva ao site da campanha. |
| **Mensagem personalizada** | Permite escrever até 1.500 caracteres e abrir o texto no WhatsApp. |
| **Validação do campo** | Impede mensagens vazias e apresenta orientações na própria página. |
| **Rodapé dinâmico** | Atualiza automaticamente o ano com JavaScript. |

> O formulário prepara a conversa no WhatsApp. O envio da mensagem é concluído pelo visitante dentro do aplicativo.

## 🎨 Identidade visual

O layout combina fundo claro com textura sutil, tons terrosos e um destaque em vinho para a campanha de Natal. A tipografia **Italiana** aparece nos títulos, enquanto **DM Sans** organiza os textos e controles.

| Cor | Código | Uso |
| --- | --- | --- |
| Papel | `#F7F4ED` | Fundo da página |
| Tinta | `#40372F` | Textos e botão de envio |
| Texto secundário | `#8A8074` | Descrições e informações de apoio |
| Linha | `#DED8CB` | Bordas e divisórias |
| Vinho | `#672E37` | Card de Natal e destaques |

A interface inclui efeitos de hover, ajustes para telas menores e um botão de envio que ocupa toda a largura em dispositivos de até 400 px.

## 🛠️ Tecnologias

- **HTML5:** estrutura semântica, navegação, formulário e metadados em português.
- **CSS3:** variáveis de cor, Flexbox, Grid, media queries e textura SVG incorporada ao CSS.
- **JavaScript puro:** eventos, validação, montagem dos links e atualização do ano.
- **Google Fonts:** carregamento das fontes Italiana e DM Sans.

O projeto utiliza arquivos estáticos, sem framework, backend ou etapa de compilação.

## 📂 Organização dos arquivos

| Arquivo | Responsabilidade |
| --- | --- |
| [index.html](index.html) | Apresentação do estúdio, links, destaque natalino e formulário de contato. |
| [style.css](style.css) | Identidade visual, tipografia, responsividade e estados de interação. |
| [script.js](script.js) | Contatos, abertura de links, validação da mensagem e ano do rodapé. |
| [LICENSE](LICENSE) | Termos da licença MIT. |

## ⚙️ Como os links funcionam

Os destinos ficam centralizados no objeto `CONFIG`, em [script.js](script.js). Os elementos com o atributo `data-link` identificam qual canal abrir.

O código também lê a chave `marilia-links` do `localStorage`, cujos valores, quando presentes, substituem os contatos padrão. A interface atual não apresenta um painel de configuração.

Para mensagens, `encodeURIComponent` prepara o texto na URL do WhatsApp. Os destinos de Facebook e Natal passam por uma verificação de protocolo que aceita apenas HTTP e HTTPS. As novas abas usam `noopener,noreferrer`.

## ♿ Cuidados de interface

- Idioma da página definido como `pt-BR`.
- Campo de mensagem com rótulo associado e preenchimento obrigatório.
- Botão de envio com nome acessível.
- Região de status com `role="status"`.
- Elementos decorativos ocultos de tecnologias assistivas.
- Indicadores de foco para links, botões e campos.
- Respeito à preferência `prefers-reduced-motion`.

## 👨‍💻 Desenvolvimento

Desenvolvido por [Giovani Manzatto](https://github.com/gmanzattodev).

## 📄 Licença

Distribuído sob a [licença MIT](LICENSE).  
Copyright © 2026 Giovani Manzatto.

---

<div align="center">

*Feito para guardar o que importa.* 🤎

</div>
