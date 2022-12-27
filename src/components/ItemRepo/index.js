import React from 'react'

import { ItemContainer } from './styles';


function ItemRepo({repo ,remover}) {
  return (
    <ItemContainer >
        <h3>Repositório: {(repo.name.replaceAll("-", " ").replaceAll("_", " "))}  <span>#{repo.id}</span> </h3>
      
        <p>Repositório Completo: {(repo.full_name)}</p>
        <p>Criado em: {(repo.created_at).slice(0,10)}</p>
        <p className='language'>{repo.language}</p>

        <a href={repo.html_url} rel="noreferrer" target="_blank">        
        <button className='btn-4'>
          <span>Ver Repositório</span>
        </button>
        </a>

        <button className='btn-3'onClick={() => remover(repo.id)}>
          Remover
        </button>
    </ItemContainer>
  )
}

export default ItemRepo;
