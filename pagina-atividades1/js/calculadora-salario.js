let salarioBruto = 4200
const dependentes = 1

function calcular() {
    let inss = 0
    if (salarioBruto <= 1412) {
        inss = inss + (salarioBruto * 0.075)
    } else {
        inss = inss + (1412 * 0.075)
        if (salarioBruto <= 2666.68) {
            inss = inss + (salarioBruto - 1412)  * 0.09
        } else {
            inss = inss + (2666.68 - 1412.01) * 0.09
            if (salarioBruto <= 4000.03) {
                inss = inss + (salarioBruto - 2666.69) * 0.12
            } else {
                inss = inss + (4000.03 - 2666.69) * 0.12
                if (salarioBruto <= 7786.02) {
                    inss = inss + (salarioBruto - 4000.03) * 0.14
                } else {
                    inss = inss + (7786.02 - 4000.03) * 0.14
                }
            }
        }
    }
    //console.log(inss)
    const descontoDependentes = dependentes * 189.59
    let salarioSemINSS = salarioBruto - inss - descontoDependentes
    let irrf = 0
    if (salarioSemINSS <= 2112) {
        irrf = salarioSemINSS = 0
    } else if (salarioSemINSS > 2112 && salarioSemINSS <= 2826.65) {
        irrf = salarioSemINSS = salarioSemINSS *  0.075 - 158.4
    } else if (salarioSemINSS >= 2826.66 && salarioSemINSS <= 3751.05) {
        irrf = salarioSemINSS = salarioSemINSS * 0.15 - 370.4
    } else if (salarioSemINSS >= 3751.06 && salarioSemINSS <= 4664.68) {
        salarioSemINSS * 0.225 - 651.73
    } else {
        irrf = salarioSemINSS * 0.275 - 884.96
    }

    const salarioLiquido = salarioBruto - inss - irrf
    console.log(salarioLiquido)
}
calcular()