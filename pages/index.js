import Filme from '../components/filme'

const filmes = [
  {
    nome: 'A vaca',
    usuario: 'Hiure',
    sinopse: 'bla  bla bla bla',
    capa: 'https://picsum.photos/200/300',
    url: 'http://https://psp.nohost.me/site/psp-intro.mp4'
  },
  {
    nome: 'A vaca 2',
    usuario: 'Hiure',
    sinopse: 'bla  bla bla bla',
    capa: 'https://picsum.photos/200/300',
    url: 'http://https://psp.nohost.me/site/psp-intro.mp4'
  },
  {
    nome: 'A vaca 3',
    usuario: 'Hiure',
    sinopse: 'bla  bla bla bla',
    capa: 'https://picsum.photos/200/300',
    url: 'http://https://psp.nohost.me/site/psp-intro.mp4'
  },
  {
    nome: 'A vaca 4',
    usuario: 'Hiure',
    sinopse: 'bla  bla bla bla',
    capa: 'https://picsum.photos/200/300',
    url: 'http://https://psp.nohost.me/site/psp-intro.mp4'
  },
  {
    nome: 'A vaca o retorno',
    usuario: 'Hiure',
    sinopse: 'bla  bla bla bla',
    capa: 'https://picsum.photos/200/300',
    url: 'http://https://psp.nohost.me/site/psp-intro.mp4'
  },
]
function Home() {
  return <html>
    <head>
      <title>Souza Flix</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </head>
    <body>
      <div className= "app">
        <div className="cabecalho">
          <h1>Souza Flix</h1>
        </div>
        <div className="introducao">
          <p>Bem vindo ao Souza Flix</p>
        </div>
        <div className="filmes">
          {filmes.map(filme => <Filme {...filme} />)}
        </div>
      </div>
    </body>
    <style jsx>{`
      body{
        text-align:center;
        margin: 0 auto;
        background: black;
        color: red;
      }
      body h1 {
        text-transform: uppercase;
      }
      .introducao{
  
        color: blueviolet;
      }
      .filmes{
        background:orange;
        padding-top: 5px;
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
      }
    `}</style>
  </html>
}

export default Home
