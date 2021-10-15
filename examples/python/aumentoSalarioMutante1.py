
SALARIO_MINIMO = 1000 #1 #mutação original:1500
SALARIO_MAXIMO = 10000 #1

print("Informe o salário do funcionário:")#1
salario = input ()#1

if not salario.isnumeric():#1
     print("O salário informado não é válido.")#2  
else:#3
    salario = float(salario)#4
    if salario < SALARIO_MINIMO:#4
        print("O salário do funcionário não pode ser menor que o mínimo, que é {0}.".format(SALARIO_MINIMO))#5 
    
    else:#6
        if salario > SALARIO_MAXIMO:#6
            print("O salário do funcionário não pode ser maior que o máximo, que é {0}.".format(SALARIO_MAXIMO)) #7 
        else:#8
            if salario <= 3000:#08
                salario = salario*1.09;#09
            elif salario <= 5000:#10
                salario = salario*1.07;#11
            elif salario <= 8000:#12
                salario = salario*1.05;#13    
            else:#14
                salario = salario*1.03;#16 
            print("O novo salário do funcionário é: {0}.".format(salario))#17