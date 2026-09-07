// Função para salvar formulário no localStorage
function salvarFormulario() {
    const formulario = document.getElementById('formulario-caps');
    const dadosFormulario = new FormData(formulario);
    const dados = {};

    // Converter FormData em objeto
    for (let [chave, valor] of dadosFormulario.entries()) {
        dados[chave] = valor;
    }

    // Salvar no localStorage
    localStorage.setItem('formulario-caps-iii', JSON.stringify(dados));
    
    // Mostrar mensagem de sucesso
    mostrarMensagem('Formulário salvo com sucesso!', 'success');
}

// Função para carregar formulário do localStorage
function carregarFormulario() {
    const dadosSalvos = localStorage.getItem('formulario-caps-iii');
    
    if (dadosSalvos) {
        const dados = JSON.parse(dadosSalvos);
        const formulario = document.getElementById('formulario-caps');

        // Preencher os campos do formulário
        for (let [chave, valor] of Object.entries(dados)) {
            const campo = formulario.elements[chave];
            
            if (campo) {
                if (campo.type === 'radio') {
                    // Para radio buttons
                    const radios = formulario.querySelectorAll(`input[name="${chave}"]`);
                    radios.forEach(radio => {
                        radio.checked = radio.value === valor;
                    });
                } else {
                    // Para outros campos
                    campo.value = valor;
                }
            }
        }
    }
}

// Função para mostrar mensagens
function mostrarMensagem(texto, tipo) {
    // Remover mensagens anteriores
    const mensagensAnteriores = document.querySelectorAll('.message');
    mensagensAnteriores.forEach(msg => msg.remove());

    // Criar nova mensagem
    const mensagem = document.createElement('div');
    mensagem.className = `message ${tipo}`;
    mensagem.textContent = texto;
    
    // Inserir no início do formulário
    const formulario = document.getElementById('formulario-caps');
    formulario.insertBefore(mensagem, formulario.firstChild);

    // Remover mensagem após 5 segundos
    setTimeout(() => {
        mensagem.remove();
    }, 5000);
}

// Função para validar CPF
function validarCPF(cpf) {
    // Remover caracteres especiais
    cpf = cpf.replace(/\D/g, '');
    
    // Verificar se tem 11 dígitos
    if (cpf.length !== 11) {
        return false;
    }
    
    // Verificar se não é sequência repetida
    if (/^(\d)\1{10}$/.test(cpf)) {
        return false;
    }
    
    return true;
}

// Função para validar formulário
function validarFormulario() {
    const formulario = document.getElementById('formulario-caps');
    const camposObrigatorios = formulario.querySelectorAll('[required]');
    let valido = true;

    camposObrigatorios.forEach(campo => {
        if (!campo.value.trim()) {
            campo.style.borderColor = 'var(--error-color)';
            valido = false;
        } else {
            campo.style.borderColor = 'var(--border-color)';
        }
    });

    // Validar CPF se preenchido
    const cpfInput = document.getElementById('cpf');
    if (cpfInput.value && !validarCPF(cpfInput.value)) {
        mostrarMensagem('CPF inválido! Verifique o número digitado.', 'error');
        cpfInput.style.borderColor = 'var(--error-color)';
        valido = false;
    }

    return valido;
}

// Função para imprimir formulário
function imprimirFormulario() {
    window.print();
}

// Função para limpar formulário
function limparFormulario() {
    if (confirm('Tem certeza que deseja limpar todos os campos?')) {
        const formulario = document.getElementById('formulario-caps');
        formulario.reset();
        localStorage.removeItem('formulario-caps-iii');
        mostrarMensagem('Formulário limpo com sucesso!', 'success');
    }
}

// Função para exportar dados como JSON
function exportarJSON() {
    const dadosSalvos = localStorage.getItem('formulario-caps-iii');
    
    if (!dadosSalvos) {
        mostrarMensagem('Nenhum dado salvo para exportar!', 'error');
        return;
    }

    const dados = JSON.parse(dadosSalvos);
    const dataAtual = new Date().toLocaleDateString('pt-BR');
    const nomeArquivo = `formulario-caps-iii-${dataAtual.replace(/\//g, '-')}.json`;

    // Criar blob com os dados
    const blob = new Blob([JSON.stringify(dados, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    // Criar link e baixar
    const link = document.createElement('a');
    link.href = url;
    link.download = nomeArquivo;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    mostrarMensagem('Dados exportados com sucesso!', 'success');
}

// Função para formatar CPF
function formatarCPF(cpf) {
    cpf = cpf.replace(/\D/g, '');
    if (cpf.length > 11) cpf = cpf.substring(0, 11);
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    return cpf;
}

// Função para formatar telefone
function formatarTelefone(telefone) {
    telefone = telefone.replace(/\D/g, '');
    if (telefone.length > 11) telefone = telefone.substring(0, 11);
    telefone = telefone.replace(/(\d{2})(\d)/, '($1) $2');
    telefone = telefone.replace(/(\d{4})(\d)/, '$1-$2');
    return telefone;
}

// Listener para submissão do formulário
document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('formulario-caps');

    // Carregar dados ao abrir a página
    carregarFormulario();

    // Submissão do formulário
    formulario.addEventListener('submit', function(e) {
        e.preventDefault();

        if (validarFormulario()) {
            salvarFormulario();
        } else {
            mostrarMensagem('Por favor, preencha todos os campos obrigatórios corretamente.', 'error');
        }
    });

    // Salvar automaticamente a cada 30 segundos
    setInterval(function() {
        const formulario = document.getElementById('formulario-caps');
        const dadosFormulario = new FormData(formulario);
        if (dadosFormulario.entries().next().value) {
            salvarFormulario();
            console.log('Formulário salvo automaticamente');
        }
    }, 30000);

    // Formatação automática de CPF
    const cpfInput = document.getElementById('cpf');
    if (cpfInput) {
        cpfInput.addEventListener('input', function() {
            this.value = formatarCPF(this.value);
        });
    }

    // Formatação automática de telefone
    const telefones = document.querySelectorAll('input[type="tel"]');
    telefones.forEach(telefone => {
        telefone.addEventListener('input', function() {
            this.value = formatarTelefone(this.value);
        });
    });

    // Aviso ao sair da página com dados não salvos
    window.addEventListener('beforeunload', function(e) {
        const formulario = document.getElementById('formulario-caps');
        const dadosFormulario = new FormData(formulario);
        let temDados = false;

        for (let [chave, valor] of dadosFormulario.entries()) {
            if (valor.trim()) {
                temDados = true;
                break;
            }
        }

        if (temDados) {
            e.preventDefault();
            e.returnValue = '';
        }
    });
});

// Função para gerar relatório em PDF (simples)
function gerarRelatorio() {
    const dadosSalvos = localStorage.getItem('formulario-caps-iii');
    
    if (!dadosSalvos) {
        mostrarMensagem('Nenhum dado salvo para gerar relatório!', 'error');
        return;
    }

    mostrarMensagem('Preparando relatório para impressão...', 'success');
    setTimeout(() => {
        window.print();
    }, 500);
}

// Função para limpar localStorage
function limparDadosSalvos() {
    if (confirm('Tem certeza que deseja deletar todos os dados salvos?')) {
        localStorage.removeItem('formulario-caps-iii');
        mostrarMensagem('Dados deletados com sucesso!', 'success');
    }
}
