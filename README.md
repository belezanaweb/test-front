## Feedback

Boa tarde, fiz esse codigo dentro do periodo de 4h(5h se contar o tempo de setup).
Não consegui terminar todos os requisitos e todas as funcionalidades e não quis extender mais que 4h
por julgar que a limitação no tempo faz parte do teste.
Vou deescrever aqui o que eu fiz dos requisitos, o que eu fiz que não era requisito e o que eu deixei de fazer.

### Requerimentos Cumpridos

-Setup Inicial do projeto em react(webpack).
-Criação e aplicação da store do redux no meu codigo
-Criação de actions async(usando thunk) para fazer o fetch dos dados
-Criação de um reducer para salvar os dados que a action deu fetch
-Criação da primeira tela onde se pode ver os produtos no seu carrinho e o preço.
-Criação de um menu
-Consumir os dados da API

### Tecnologias e padrões que resolvi usar
-Resolvi usar a biblioteca de componentes do material UI
-Resolvi fazer o fetch nas actions por questão de divisão de responsabilidade, usei o middleware redux-thunk pra isso
-A organização das pastas seguem um padrão bem comum em react, com alguns outros padrões opcionais
-Usei redux
-Usei style in line por questão do tempo e de css não ser minha maior prioridade

### Requerimentos e afazeres não cumpridos
-Não consegui terminar as outras 2 paginas a tempo
-Não consegui por tempo aplicar o sistema de rotas ao qual pretendia usar react-router
-Não consegui fazer unit test
-Não consegui conferir o css e deixar a pagina pixel perfect
-Não consegui fazer a troca de paginas no menu(por não haver outras paginas)
-Não consegui criar arquivos de css separados inves de usar style inline
-Não consegui testar a aplicação para todas as resoluções, mesmo tendo programado de forma a aceitar a responsividade

