# CAPS III - Ficha de Acolhimento Inicial 🏥

## 📋 Sobre o Projeto

Este é um **site interativo e responsivo** para preenchimento da **Ficha de Acolhimento Inicial do CAPS III** da plataforma **cândidoferreira**. O formulário foi digitalizado e otimizado para uso em navegadores web, com funcionalidades de salvamento automático, validação de dados e impressão.

## ✨ Funcionalidades

- ✅ **Formulário Completo** - Todas as 10 seções do formulário original
- 💾 **Salvamento Automático** - Os dados são salvos a cada 30 segundos no navegador
- 📱 **Responsivo** - Funciona perfeitamente em desktop, tablet e celular
- 🎨 **Design Moderno** - Interface limpa e profissional com cores acessíveis
- ✔️ **Validação de Dados** - Valida CPF e campos obrigatórios
- 🖨️ **Impressão** - Botão para imprimir o formulário preenchido
- 📥 **Exportar JSON** - Baixe seus dados em formato JSON
- 🔄 **Auto-formatação** - Formata automaticamente CPF e telefone
- 🌐 **Português** - Interface totalmente em português brasileiro

## 📂 Estrutura do Projeto

```
formulario-caps-iii/
├── index.html       # Estrutura do formulário
├── style.css        # Estilos e responsividade
├── script.js        # Funcionalidades e interatividade
└── README.md        # Este arquivo
```

## 🚀 Como Usar

### 1. Abrir o formulário
Simplesmente abra o arquivo `index.html` no seu navegador web.

### 2. Preencher os dados
- Preencha os campos conforme necessário
- Os dados são salvos automaticamente a cada 30 segundos
- Campos obrigatórios devem ser preenchidos antes de salvar

### 3. Salvar
Clique no botão **"Salvar Formulário"** para confirmar o salvamento. Uma mensagem de sucesso aparecerá.

### 4. Imprimir
Clique no botão **"Imprimir"** para gerar uma versão impressa do formulário preenchido.

### 5. Limpar
Clique em **"Limpar Campos"** para resetar todos os dados (será solicitada confirmação).

## 📋 Seções do Formulário

1. **Dados do Acolhimento/Recolhimento** - Data e tipo de atendimento
2. **Dados Pessoais** - Nome, CPF, telefone, endereço, etc.
3. **Benefício e Rede de Apoio** - Informações de benefício e contatos de suporte
4. **Histórico Atual da Doença** - Queixa inicial e características do quadro
5. **Tratamentos Anteriores** - Histórico de tratamentos em saúde mental
6. **Comportamento Suicida** - Ideação, planejamento, tentativa
7. **Substâncias e Medicamentos** - Uso de SPAs, alergias e fármacos
8. **Exame Psíquico** - Avaliação de aspectos gerais, consciência, orientação, etc.
9. **Avaliações Complementares** - Testes e avaliações adicionais
10. **Plano Inicial** - Descrição do plano terapêutico

## 💡 Recursos Técnicos

### Armazenamento de Dados
- Os dados são armazenados no **localStorage** do navegador
- Não há envio de dados para servidores externos
- Os dados persistem mesmo após fechar o navegador

### Validações
- CPF é validado automaticamente
- Campos obrigatórios são destacados se vazios
- Telefone e CPF são formatados automaticamente

### Responsividade
- Breakpoints: Desktop (>768px), Tablet (768px), Mobile (<480px)
- Todos os elementos se adaptam ao tamanho da tela
- Otimizado para impressão

## 🛠️ Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Estilos responsivos e modernos
- **JavaScript (Vanilla)** - Funcionalidades e interatividade
- **LocalStorage** - Persistência de dados no navegador

## 📱 Navegadores Suportados

- ✅ Chrome/Chromium
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Opera

## 🎯 Como Usar com GitHub Pages (Opcional)

Se quiser disponibilizar o formulário online:

1. Vá para as **Settings** do repositório
2. Role até **GitHub Pages**
3. Selecione a branch `main` como fonte
4. Seu site estará disponível em: `https://seu-usuario.github.io/formulario-caps-iii`

## 📝 Notas Importantes

- Os dados são salvos apenas no navegador local (não são enviados para nenhum servidor)
- Para compartilhar dados com outro computador, use a exportação em JSON
- É recomendável fazer backup dos dados regularmente
- O formulário pode ser impresso diretamente do navegador (Ctrl+P ou Cmd+P)

## 🔒 Privacidade e Segurança

- Nenhum dado é enviado para servidores
- Todos os dados ficam localmente no navegador do usuário
- Recomenda-se usar em ambiente seguro
- Para uso em produção, considere adicionar autenticação e banco de dados

## 🚀 Melhorias Futuras

- [ ] Integração com banco de dados
- [ ] Autenticação de usuários
- [ ] Exportação em PDF
- [ ] Sincronização em nuvem
- [ ] Histórico de versões
- [ ] Assinatura digital

## 📞 Suporte

Para dúvidas ou sugestões sobre o projeto, abra uma **Issue** no repositório.

## 📄 Licença

Este projeto é de código aberto e está disponível para uso livre.

---

**Desenvolvido com ❤️ para a plataforma cândidoferreira**

Última atualização: Setembro de 2026
