"""
Módulo de agendamento de horários para a barbearia.
Este módulo contém funções para verificar a disponibilidade de horários.
"""

def horario_disponivel(horario, horarios_ocupados):
    """
    Verifica se um horário está disponível para agendamento.

    Parâmetros:
        horario (str): O horário que se deseja consultar (ex: "15:00").
        horarios_ocupados (list): Lista de horários que já estão ocupados (ex: ["10:00", "14:00"]).

    Retorno:
        bool: Retorna True se o horário estiver livre (não estiver na lista de ocupados),
              ou False se o horário já estiver ocupado.
    """
    # O operador 'not in' verifica se o item NÃO está presente na lista.
    # Se o horário não estiver na lista de ocupados, significa que está livre (True).
    return horario not in horarios_ocupados


if __name__ == "__main__":
    # Exemplo prático de uso conforme a especificação:
    horarios_ocupados = ["10:00", "11:00", "14:00"]

    print("--- Demonstração do Agendamento ---")
    print("Horários ocupados:", horarios_ocupados)

    # Consulta 1: Horário disponível
    resultado_15 = horario_disponivel("15:00", horarios_ocupados)
    print(f"horario_disponivel('15:00', horarios_ocupados) -> {resultado_15} (Disponível)")

    # Consulta 2: Horário ocupado
    resultado_14 = horario_disponivel("14:00", horarios_ocupados)
    print(f"horario_disponivel('14:00', horarios_ocupados) -> {resultado_14} (Ocupado)")
