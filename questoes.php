// Filtrar somente as tarefas com o "status" CON e "habilitar" ativo
$tarefas = [
  [ "id_tarefa" =>  1, "status" => 'NCON', "habilitar" => 'ativo', "situacao" => 'IM'],
  [ "id_tarefa" =>  2, "status" => 'CON', "habilitar" => 'ativo', "situacao" => ''],
  [ "id_tarefa" =>  3, "status" => 'CON', "habilitar" => 'ativo', "situacao" => ''],
  [ "id_tarefa" =>  4, "status" => 'CON', "habilitar" => 'ativo', "situacao" => ''],
  [ "id_tarefa" =>  5, "status" => 'CON', "habilitar" => 'ativo', "situacao" => ''],
];
var_dump($tarefasAtivas);

// Nullish Coalescing operator - Remover o erro de undefined do codigo abaixo sem remover o que já está escrito
define ("usuario", [
	"nome" => "Fulano",
  "idade" => 25
]
);
$endereco = usuario['endereco'];
var_dump($endereco);

// Utilizar destructuring para atribuir valor às variaveis que estão no console.log
define("dados_usuario", ['Diego', '1989-04-07', '32']);
var_dump($nome, $nascimento, $idade);

// Juntar os dois arrays para criar um array novo chamado usuario_completo, com os dados de endereco, contato e usuario
$endereco_do_usuario = [
	"rua" => 'Salgado Filho',
  "cidade" => 'Porto Alegre'
];

$contato = [
	"telefone" => '519999999',
  "operadora" => 'vivo'
];
var_dump($usuario_completo);

// Calcular o preço total dos produtos no carrinho utilizando Array.reduce
$carrinho = [
	 [ "produto" => 'Caneta', "preco" => 1.5 ],
   [ "produto" => 'Papel', "preco" => 3.5 ],
   [ "produto" => 'Tinta', "preco" => 5]
];
var_dump($total);
