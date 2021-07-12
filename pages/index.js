import Box from '../src/components/Box'
import MainGrid from '../src/components/MainGrid'
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AluraCommons'
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations'


function ProfileSideBar(propriedades) {
  console.log(propriedades)

  return (
    <Box>
      <img src={`https://github.com/${propriedades.githubUser}.png`} style={{ borderRadius: '8px'}}/>
    </Box>
  )
}


export default function Home() {
  const user = 'rmmariano'
  const pessoasFavoritas = [
    'juunegreiros',
    'omariosouto',
    'peas',
    'rafaballerini',
    'marcobrunodev',
    'felipefialho'
  ]

  return (
    // <></> não tem valor semantico, é apenas organizacional
    <>
      <AlurakutMenu/>
      <MainGrid>
        test :)

        {/* <Box style="grid-area: profileArea;"> */}
        <div className='profileArea' style={{ gridArea: 'profileArea'}}>
          <ProfileSideBar githubUser={user}/>
        </div>

        <div className='welcomeArea' style={{ gridArea: 'welcomeArea'}}>
          <Box>
            <h1 className="title">
              Bem vindo
            </h1>

            <OrkutNostalgicIconSet/>
          </Box>
        </div>

        <div className='profileRelationsArea' style={{ gridArea: 'profileRelationsArea'}}>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Pessoas da comunidade ({pessoasFavoritas.length})
            </h2>

            <ul>
              {pessoasFavoritas.map((itemAtual) => {
                return (
                  <li>
                    <a href={`/users/${itemAtual}`} key={itemAtual}>
                      <img src={`https://github.com/${itemAtual}.png`} />
                      <span>{itemAtual}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
          <Box>
            Amigos
          </Box>
        </div>

      </MainGrid>
    </>
  )
}
