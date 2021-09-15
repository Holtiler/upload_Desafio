function criarEstadoDosJogadores(Q) {
    let jogadores = []
    for (let i=0; i<Q; i++) {
        jogadores.push({comBola:false, segundosDePosicionamento:0})
    }
    return jogadores
}

function contarJogadoresAptosParaReceberUmPasse(jogadores) {
    let total = 0
    for (indice in jogadores) {
        if (!jogadores[indice].comBola && jogadores[indice].segundosDePosicionamento === 0) {
            total++
        }
    }
    return total
}

function encontrarJogadorComBola(jogadores) {
    for (indice in jogadores) {
        if (jogadores[indice].comBola) {
            return jogadores[indice]
        }
    }
}

function encontrarJogadorParaReceberBola(jogadores) {
    for (indice in jogadores) {
        if (!jogadores[indice].comBola && jogadores[indice].segundosDePosicionamento === 0) {
            return jogadores[indice]
        }
    }
}

function avancarTempoDePosicionamento(jogadores) {
    for (indice in jogadores) {
        if (jogadores[indice].segundosDePosicionamento > 0) {
            jogadores[indice].segundosDePosicionamento--
        }
    }
}

function desafioDev(T,Q,X) {
    let jogadoresAcumulados = 0
    let jogadores = criarEstadoDosJogadores(Q)

    let primeiroReceberBola = encontrarJogadorParaReceberBola(jogadores)
    primeiroReceberBola.comBola = true;

    for (let t=0; t<T; t++) {
        avancarTempoDePosicionamento(jogadores)
        jogadoresAcumulados += contarJogadoresAptosParaReceberUmPasse(jogadores)
        let jogadorComBola = encontrarJogadorComBola(jogadores)
        let jogadorAptoReceberBola = encontrarJogadorParaReceberBola(jogadores)

        //Realização do passe de jogadorComBola para jogadorAptoReceberBola
        jogadorComBola.comBola = false
        jogadorComBola.segundosDePosicionamento = X
        jogadorAptoReceberBola.comBola = true
    }

    return jogadoresAcumulados
}

console.log(desafioDev(3,3,2))
console.log(desafioDev(7,5,3))
console.log(desafioDev(10,2,1))
console.log(desafioDev(12,4,3))
console.log(desafioDev(24,3,2))