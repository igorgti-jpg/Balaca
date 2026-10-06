"""
Testes unitários para validar a verificação de horários da barbearia.
Utiliza o framework padrão 'unittest' do Python.
"""

import unittest
from agendamento import horario_disponivel


class TestHorarioDisponivel(unittest.TestCase):

    def test_horario_disponivel(self):
        """Testa se a função retorna True para um horário que não está na lista."""
        horarios_ocupados = ["10:00", "11:00", "14:00"]

        resultado = horario_disponivel("15:00", horarios_ocupados)

        # Espera-se True, pois 15:00 está livre
        self.assertTrue(resultado)

    def test_horario_ocupado(self):
        """Testa se a função retorna False para um horário que já está na lista."""
        horarios_ocupados = ["10:00", "11:00", "14:00"]

        resultado = horario_disponivel("14:00", horarios_ocupados)

        # Espera-se False, pois 14:00 já está ocupado
        self.assertFalse(resultado)


if __name__ == "__main__":
    unittest.main()
