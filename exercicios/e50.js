const prompt = require('prompt-sync')();

console.clear();

let hoteis = Array();
let reservas = Array();

opcao = -1;

do{
    console.log('Opções:');
    console.log(`1 - Adicionar hotel
2 - Buscar Hotel Por Cidade
3 - Fazer Reserva
4 - Cancelar Reserva
5 - Listar Reservas
`);
    console.log('0      - Sair');
    opcao = parseInt(prompt('Digite a opção desejada: '));
    console.clear();
    console.log(`####### Opção Escolhida: ${opcao} #######`);
    
    switch (opcao) {
        case 1:
            let nomeHotel = prompt("Digite o nome do Hotel: ");
            let cidade = prompt("Digite a cidade do Hotel: ");
            let qtotal = parseInt(prompt("Digite a quantidade de quartos do hotel: "));
            let qtd_disponivel = parseInt(prompt("Digite a quantidade de quartos disponíveis: "));
            AdicionarHotel(nomeHotel, cidade, qtotal, qtd_disponivel);
            break;
        case 2:
            let cidadeb = prompt("Digite a cidade pesquisada: ");
            let busca = filtrarHoteis(cidadeb);
            busca.forEach(hotel => {
                if(hotel.qtd_disponivel > 0){
                    console.log(`
Id Hotel  : ${hotel.id}
Nome Hotel: ${hotel.nome}
Cidade    : ${hotel.cidade}
Quartos Disponíveis: ${hotel.qtd_disponivel}
`)
                }
            })
            break;
        case 3:
            let idHotel = parseInt(prompt("Digite o ID do Hotel: "));
            let nomeCliente = prompt("Digite o nome do solicitante da reserva: ")
            fazerReserva(idHotel, nomeCliente);
            break;
        case 4:
            let idReserva = parseInt(prompt("Digite o ID da Reserva: "));
            cancelarReserva(idReserva);
            break;
        case 5:
            listarReservas();
            break;
        case 0:
            console.clear();
            console.log('> Saindo...');
            break;
        default:
            console.log('> Opção inválida!');
    }

    console.log();
}while(opcao != 0);

function AdicionarHotel(nome, cidade, total, disponivel){
    hoteis.push({
        id: Math.floor(Math.random() * 10000),
        nome: nome,
        cidade: cidade,
        qtd_total: total,
        qtd_disponivel: disponivel
    })
    return 1;
}

function filtrarHoteis(cidade){
    let filtrado = hoteis.filter(item => item.cidade.toLowerCase() == cidade.toLowerCase())
    return filtrado;
}

function fazerReserva(idHotel, nomeCliente){
    let hotel = hoteis.filter(item => item.id == idHotel)[0];

    if (hotel.qtd_disponivel > 0){
        reservas.push({
            idReserva: Math.floor(Math.random() * 10000),
            idHotel: hotel.id,
            nomeCliente: nomeCliente
        })

        for (let i = 0; i < hoteis.length; i++){
            if(hoteis[i].id == hotel.id){
                hoteis[i].qtd_disponivel--
            }
        }
        console.log("Reserva Feita Com Sucesso!")
    } else {
        console.log("Não existem quartos disponíveis!")
    }
}

function cancelarReserva(idReserva){
    let verReserva = reservas.filter(item => item.idReserva == idReserva)[0];
    reservas = reservas.filter(item => item.idReserva != idReserva);

    for (let i = 0; i < hoteis.length; i++){
        if(hoteis[i].id == verReserva.idHotel){
            hoteis[i].qtd_disponivel++
        }
    }

    console.log("Reserva cancelada com sucesso!")

}

function listarReservas(){
    reservas.forEach(reserva => {
        let hotel = hoteis.filter(item => item.id == reserva.idHotel)[0];
        console.log(`
Id Reserva  : ${reserva.idReserva}
Nome Cliente: ${reserva.nomeCliente}
Id Hotel    : ${reserva.idHotel}
Nome Hotel  : ${hotel.nome}
Cidade Hotel: ${hotel.cidade}
`)
    })
}