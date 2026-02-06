# 📋 ESTRUTURA E DOCUMENTAÇÃO - LANDING PAGE FISIOTERAPIA

## 📁 ARQUIVOS E PASTAS PRINCIPAIS

### 📄 index.html
**Descrição:** Arquivo principal HTML com toda a estrutura da página.

**Seções Principais:**
- `<!-- ========== META TAGS E CONFIGURAÇÕES ========== -->` - Configurações do documento
- `<!-- ========== CABEÇALHO / NAVEGAÇÃO ========== -->` - Header com logo e menu de navegação
- `<!-- ========== SEÇÃO HERO / INTRODUÇÃO ========== -->` - Banner principal com apresentação
- `<!-- ========== SEÇÃO SERVIÇOS ========== -->` - Cards com 4 serviços oferecidos
- `<!-- ========== SEÇÃO SOBRE NÓS ========== -->` - Informações sobre a clínica
- `<!-- ========== SEÇÃO CTA - CHAMADA PARA AÇÃO ========== -->` - Seção de agendamento
- `<!-- ========== RODAPÉ / FOOTER ========== -->` - Informações de contato
- `<!-- ========== BOTÃO FLUTUANTE DO WHATSAPP ========== -->` - Botão chat WhatsApp
- `<!-- ========== SCRIPTS JAVASCRIPT ========== -->` - Scripts externos

---

### 📁 assets/css/style.css
**Descrição:** Arquivo de estilos CSS com todos os estilos visuais.

**Principais Seções de Estilo:**
- `/* ========== CABEÇALHO / NAVEGAÇÃO ========== */` - Estilos do header
- `/* ========== SEÇÃO HERO / INTRODUÇÃO ========== */` - Estilos da seção principal
- `/* ========== SEÇÃO SERVIÇOS ========== */` - Estilos dos cards de serviços
- `/* ========== SEÇÃO SOBRE NÓS ========== */` - Estilos da seção sobre
- `/* ========== SEÇÃO CTA - CHAMADA PARA AÇÃO ========== */` - Estilos CTA
- `/* ========== BOTÃO FLUTUANTE DO WHATSAPP ========== */` - Estilos do botão flutuante
- `/* ========== RESPONSIVIDADE - BREAKPOINTS ========== */` - Media queries

**Breakpoints Responsivos:**
- Desktop: 1024px+
- Tablets: 768px - 1024px
- Celulares médios: 480px - 768px
- Celulares pequenos: até 380px

---

### 📁 assets/js/script.js
**Descrição:** Arquivo JavaScript com funcionalidades interativas.

**Funcionalidades:**
- `/* ========== FORMULÁRIO DE AGENDAMENTO WHATSAPP ========== */` 
  - Captura dados do formulário de contato
  - Envia mensagem personalizada via WhatsApp
  - Abre chat no WhatsApp em nova aba

---

### 📁 assets/images/
**Descrição:** Pasta contendo todas as imagens do site.

**Imagens Necessárias:**
- `logo.png` - Logo da clínica (32px de altura ideal)
- `1.jpg` - Imagem principal/hero
- `servico1.jpg` - Imagem Fisioterapia Ortopédica
- `servico2.jpg` - Imagem Reabilitação Pós-Cirúrgica
- `servico3.jpg` - Imagem Tratamento de Dores
- `servico4.jpg` - Imagem Fisioterapia Esportiva
- `cta1.jpg`, `cta2.jpg`, `cta3.jpg` - Imagens da seção CTA

---

## 🎨 CORES PRINCIPAIS
```css
--green: #1f6f4a;      /* Verde principal da marca */
--light: #f6f9f8;      /* Cinza claro para fundos */
```

---

## 📱 CLASSES CSS IMPORTANTES

### Componentes Reutilizáveis
- `.container` - Contêiner com largura máxima
- `.btn-center` - Botão padrão central
- `.btn-about` - Botão da seção sobre
- `.card` - Cards dos serviços (com efeito hover)

### Animações
- `fadeInLeft` - Entrada pela esquerda
- `fadeInRight` - Entrada pela direita
- `fadeInUp` - Entrada de baixo pra cima
- `pulse-whatsapp` - Animação de pulso do botão WhatsApp

---

## 🔧 COMO CUSTOMIZAR

### Alterar Número do WhatsApp
**Locais:**
1. `index.html` - Linha com `.btn-whats` (header)
2. `index.html` - Seção CTA
3. `index.html` - Botão flutuante
4. `assets/js/script.js` - Variável `numeroClinica`

**Formato:** `5518997260229` (55 = Brasil, 18 = área, resto = número)

### Alterar Cores Principais
**Arquivo:** `assets/css/style.css`
- Linhas 1-2: Alteras as variáveis `--green` e `--light`

### Adicionar Novas Seções
1. Adicione o comentário de seção em HTML
2. Crie classe CSS correspondente
3. Adicione regras responsivas para todos os breakpoints

---

## ✅ CHECKLIST ANTES DE PUBLICAR

- [ ] Todas as imagens foram adicionadas à pasta `assets/images/`?
- [ ] Número do WhatsApp foi corrigido em todos os locais?
- [ ] Textos foram adaptados para sua clínica?
- [ ] Página foi testada no desktop, tablet e celular?
- [ ] Links de redes sociais funcionam?
- [ ] Formulário envia mensagens corretamente?
- [ ] Botão WhatsApp flutuante funciona em mobile?

---

## 📞 SEÇÕES E SUAS FUNCIONALIDADES

| Seção | ID | Função |
|-------|----|----|
| Header | - | Navegação principal |
| Hero | `#inicio` | Apresentação e chamada à ação |
| Serviços | `#servicos` | Lista de 4 serviços |
| Sobre | `#sobre` | Informações da clínica |
| CTA | - | Agendamento com WhatsApp |
| Footer | `#contato` | Rodapé e copyright |

---

**Última atualização:** 05 de fevereiro de 2026
**Status:** ✅ Site responsivo e funcional
