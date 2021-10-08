// Filtrar somente as tarefas com o "status" CON e "habilitar" ativo
const tarefas = [
    { id_tarefa: 1, status: 'NCON', habilitar: 'ativo', situacao: 'IM'},
    { id_tarefa: 2, status: 'CON', habilitar: 'ativo', situacao: ''},
    { id_tarefa: 3, status: 'CON', habilitar: 'ativo', situacao: ''},
    { id_tarefa: 4, status: 'CON', habilitar: 'ativo', situacao: ''},
    { id_tarefa: 5, status: 'CON', habilitar: 'ativo', situacao: ''},
  ]
  
  var filtred = tarefas.filter(tar=>{
    return tar.status == 'CON' && tar.habilitar == 'ativo' ? tar : ""
  })

  console.log(filtred);
  
  // Nullish Coalescing operator - Remover o erro de undefined do codigo abaixo sem remover o que já está escrito
  const usuario = {
      nome: "Fulano",
    idade: 25
  }
  const endereco = usuario.endereco
  console.log(endereco)
  
  
  // // Utilizar destructuring para atribuir valor às variaveis que estão no console.log
  const dados_usuario = ['Diego', '1989-04-07', '32']

  var [nome,nascimento,idade] = dados_usuario;
  console.log(nome, nascimento, idade)
  
  
  // // Utilizar o spread operator para criar um objeto novo chamado usuario_completo, com os dados de endereco, contato e usuario
  const endereco_do_usuario = {
      rua: 'Salgado Filho',
    cidade: 'Porto Alegre'
  }
  
  const contato = {
      telefone: '519999999',
    operadora: 'vivo'
  }
  
  console.log(usuario_completo)
  
  
  // // Calcular o preço total dos produtos no carrinho utilizando Array.reduce
  const carrinho = [
      { produto: 'Caneta', preco: 1.5 },
    { produto: 'Papel', preco: 3.5 },
    { produto: 'Tinta', preco: 5 }
  ]
  console.log(total)