var  all_books  =  new  Array ( ) ;
var  id  =  0 ;

function  openAddScreen ( )  {
    documento . getElementById ( "meuFormulário" ) . estilo . display  =  "bloco" ;
}
  
função  fecharFormulário ( )  {
    documento . getElementById ( "meuFormulário" ) . estilo . display  =  "nenhum" ;
}

função  mostrarLivros ( i ) {
    var  livro  =  documento . consultaSeletor ( 'tabela' ) ;
    var  linha  =  livro . inserirLinha ( i + 1 ) ;
    linha . setAttribute ( "id" ,  id ) ;
    var  cel1  =  linha . inserirCélula ( 0 ) ;
    var  cel2  =  linha . inserirCélula ( 1 ) ;
    var  cel3  =  linha . inserirCélula ( 2 ) ;
    var  cel4  =  linha . inserirCélula ( 3 ) ;
    var  cel5  =  linha . inserirCélula ( 4 ) ;
    célula1 . innerHTML  =  all_books [ i ] . identificação ;
    célula2 . innerHTML  =  all_books [ i ] . título ;
    célula3 . innerHTML  =  all_books [ i ] . autor ;

    var  array  =  [ "Visto" , "Não visto" ] ;

    var  selectList  =  document . createElement ( "selecionar" ) ;
    selecioneLista . setAttribute ( "classe" ,  "statusL" ) ;

    for  ( var  j  =  0 ;  j  <  array . length ;  j ++ )  {
        var  opção  =  documento . createElement ( "opção" ) ;
        opção . valor  =  array [ j ] ;
        opção . texto  =  array [ j ] ;
        if ( all_books [ i ] . status  ==  array [ j ] ) {
            opção . selecionado  =  verdadeiro ;
        }
        selecioneLista . appendChild ( opção ) ;
    }
    selecioneLista . addEventListener ( "alterar" ,  function ( )  {
        if ( this . value  ==  "Visto" )
        {   
            isso . parentElement . parentElement . células [ 1 ] . estilo . textDecoration  =  "line-through" ; 
        }
        outra coisa {
            isso . parentElement . parentElement . células [ 1 ] . estilo . textDecoration  =  "nenhum" ;
        }
    } ) ;
    célula4 . appendChild ( selecionarLista ) ;

    var  btn  =  documento . createElement ( 'botão' ) ;
    var  ícone  =  documento . criarElemento ( 'i' ) ;
    ícone . setAttribute ( "classe" ,  "fa fa-lixo" ) ;
    ícone . setAttribute ( "estilo" ,  "tamanho da fonte:24px;cor:vermelho" ) ;
    btn . tipo  =  "botão" ;
    btn . className  =  "btn" ;

    btn . addEventListener ( 'clique' ,  function ( ) {
        var  livros  =  documento . consultaSeletor ( 'tabela' ) . linhas ;
        for ( var  k = 0 ; k < livros . comprimento ; k ++ ) {
            if ( livros [ k ] . id  ==  this . parentElement . parentElement . id ) {
                all_books = all_books . fatia ( 0 , k - 1 ) . concat ( all_books.slice ( k , all_books.length ) ) ; _ _ _ _
                livros [ k ] . remover ( ) ;
                quebrar ;
            }
        }
    } ) ;

    btn . appendChild ( ícone ) ;
    célula5 . appendChild ( btn ) ;

    documento . corpo . appendChild ( livro ) ;
    
}

função  adicionarLivros ( ) {
    const  tituloLivro  =  documento . getElementById ( 'titleBook' ) . valor ;
    const  autor  =  documento . getElementById ( 'autor' ) . valor ;
    const  status  =  documento . getElementById ( 'status' ) . valor ;

    if ( títuloLivro  ==  "" ) {
        alert ( "Título não encontrado!" ) ;
        retorno ;
    }
    var  livro  =  {
        id : id ,
        titulo : tituloLivro ,
        autor : autor ,
        estado : estado
    } ;
    all_books . empurrar ( livro ) ;
    showBooks ( all_books.length - 1 ) ; _ _
    id += 1 ;
    
}

function  pesquisarLivros ( ) {
    var  livros  =  documento . consultaSeletor ( 'tabela' ) . linhas ;
    const  tituloLivro  =  documento . getElementById ( 'busca' ) . valor ;
    for ( var  i = 1 ; i < livros . comprimento ; i ++ ) {
        if ( all_books [ i - 1 ] . title  !=  titleBook ) {
            livros [ eu ] . estilo . display = "nenhum" ;
        }
        outra coisa {
            livros [ eu ] . estilo . display = "linha da tabela" ;
        }
    }

}
