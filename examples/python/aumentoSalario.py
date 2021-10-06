
SALARIO_MINIMO = 1500
SALARIO_MAXIMO = 10000

print("Informe o salário do funcionário:")
salario = input ()

if not salario.isnumeric():
     print("O salário informado não é válido.")  
else:
    salario = float(salario)
    if salario < SALARIO_MINIMO:
        print("O salário do funcionário não pode ser menor que o mínimo, que é {0}.".format(SALARIO_MINIMO))  
    
    else:
        if salario > SALARIO_MAXIMO:
            print("O salário do funcionário não pode ser maior que o máximo, que é {0}.".format(SALARIO_MAXIMO))  
        else:
            if salario <= 3000:
                salario = salario*1.09;
            elif salario <= 5000:
                salario = salario*1.07;
            elif salario <= 8000:
                salario = salario*1.05;    
            else:
                salario = salario*1.03; 
            print("O novo salário do funcionário é: {0}.".format(salario))