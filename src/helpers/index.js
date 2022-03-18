// export const <nome da função> significa que toda vez que importarem este arquivo
// Precisa ser pedido explicitamente essa função
export const calculateCowProduction = (cowPlayer) => {
    return cowPlayer.alleles.male.reduce((production, allele) => allele.production + production, 0) +
        cowPlayer.alleles.female.reduce((production, allele) => allele.production + production, 0)
}