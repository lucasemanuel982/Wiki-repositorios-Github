
import { useState } from 'react';
import gitLogo from '../assets/github.png'
import Input from '../components/Input';
import Button from '../components/Button';
import ItemRepo from '../components/ItemRepo';
import { api } from '../services/api';
import { Container,Image } from './styles';


function App() {

  const [currentRepo, setCurrentRepo] = useState('');
  const [repos, setRepos] = useState([]);

  const handleSearchRepo = async () => {
    try {
      const {data} = await api.get(`repos/${currentRepo}`)
      if(data.id){
        const isExist = repos.find(repo => repo.id === data.id);
        if(!isExist){
          setRepos(prev => [...prev, data]);
          setCurrentRepo('');
          return
        }else{
          alert('Repositório Já se encontra Cadastrado!');
          return
        }
      }
    } catch (error) {
      alert('Repositório Não Encontrado!');
      
    }
  }

  
  const remover = (id) => {
    setRepos((repo) => {
      return repo.filter((repo) => repo.id !== id);
    });
    alert("Removido com sucesso!");
  };
  return (
    <Container>
      <Image img src={gitLogo} width={72} height={72} alt="github logo"/>
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)}  />
      <Button onClick={handleSearchRepo}/>
      {repos.map(repo => <ItemRepo remover={remover} repo={repo}/>)}
    </Container>
  );
}

export default App;
