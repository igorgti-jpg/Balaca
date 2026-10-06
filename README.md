# Sistema de Agendamento da Barbearia

Sistema simples em Python para verificação de disponibilidade de horários em uma barbearia, desenvolvido com foco didático para iniciantes em TI.

## Estrutura do Projeto

- `agendamento.py`: Contém a função `horario_disponivel`, responsável por verificar se um horário está livre.
- `test_agendamento.py`: Contém os testes automatizados utilizando o módulo `unittest`.
- `index.html`: Interface web moderna da barbearia para testar horários visualmente no navegador.
- `style.css`: Estilização elegante em modo escuro com acentos dourados e animações.
- `script.js`: Implementação da lógica de disponibilidade e agendamento em JavaScript.

## Como Abrir o Site

Basta dar dois cliques no arquivo `index.html` ou abri-lo no seu navegador favorito (Chrome, Edge, Firefox).

## Como Executar os Testes

No terminal, navegue até a pasta do projeto e execute:

```bash
python -m unittest test_agendamento.py
```

Ou de forma detalhada (modo verboso):

```bash
python test_agendamento.py -v
```

## Dúvidas para Futuras Versões (Backlog)

As seguintes questões foram levantadas para reflexão e possíveis melhorias futuras, mas não fazem parte desta versão inicial:

1. Os horários serão sempre informados no formato `"14:00"`?
2. Todos os atendimentos terão a mesma duração?
3. Cada barbeiro poderá atender apenas um cliente por horário?
4. Os horários serão armazenados em memória ou em um banco de dados?
5. O cliente poderá fazer o próprio agendamento no futuro?
