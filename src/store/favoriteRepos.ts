import create from 'zustand'


type favoriteReposState = {
    favoriteReposIds: number[],
    addFavoriteRepo: (id: number) => void,
    removerFavoriteRepo: (id: number) => void
}

export const useFavoriteReposStore = create<favoriteReposState>((set) => ({
    favoriteReposIds: [],
    addFavoriteRepo: (id:number) => set((state) => ({favoriteReposIds: [...state.favoriteReposIds, id]})),
    removerFavoriteRepo: (id:number) => set(state => ({favoriteReposIds: state.favoriteReposIds.filter(repo => repo !== id)}))
}))


