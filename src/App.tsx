import './App.css'
import Card from './components/Card'
import useFetchRepositories from './hooks/userRepos'
import {useFavoriteReposStore} from './store/favoriteRepos'

const App = () => {
  const {data, isLoading} = useFetchRepositories()
  const { favoriteReposIds } = useFavoriteReposStore()
 
  if(isLoading) return <div>loading...</div>

  console.log(data);

  return (
    <>
      {
        data?.map(repo => (<Card key={repo.id} repository={repo} isFavorite={favoriteReposIds.includes(repo.id)}/>))
      }
    </>
  )
}

export default App
