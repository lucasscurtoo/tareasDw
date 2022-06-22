export const getMorty = async () => {
    return await fetch('https://rickandmortyapi.com/api/character/2')
    .then((response) => response.json())
}

export const getRick = () => {
    return fetch('https://rickandmortyapi.com/api/character/1')
    .then((response) => response.json())
}
