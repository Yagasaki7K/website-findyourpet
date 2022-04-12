import React from 'react'

import Logo from '../../assets/logotipo-white.png'
import SubPages from '../components/SubPages'

const SobreNos = () => {
  return (
    <SubPages>
      <a href="/pets"><img src={Logo} /></a>
      <h2>Carreiras</h2>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis excepturi fuga eligendi iure architecto exercitationem corrupti ratione laborum reprehenderit omnis! Cum, minus ad. Quasi minus natus fuga libero aliquam neque!</p>
    </SubPages>
  )
}

export default SobreNos