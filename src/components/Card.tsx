import { Repository } from '../hooks/types'
import { useFavoriteReposStore } from '../store/favoriteRepos'


type CardProps = {
    repository: Repository,
    isFavorite: boolean
}

const Card = ({repository, isFavorite}:CardProps) => {


    const addFavoriteRepo = useFavoriteReposStore(state => state.addFavoriteRepo)
    const removeFavoriteRepo = useFavoriteReposStore(state => state.removerFavoriteRepo)

    const toggleFavorite = (e) => {
        e.preventDefault()
        if(isFavorite) {
            removeFavoriteRepo(repository.id)
            return;
        } else addFavoriteRepo(repository.id) 


    }

    return (
        <div>
            <h1>{repository.name}</h1>
            <button onClick={toggleFavorite}>
                {
                    isFavorite ? 'dislike' : 'like'
                }
            </button>
        </div>
    )
}



export default Card