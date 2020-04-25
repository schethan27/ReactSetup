const API_VER = 'https://jsonplaceholder.typicode.com'
const GET_ALL_POST =  API_VER.concat('/posts');

/**
 * Method returns all the posts
 */
export function  getAllPosts(){
    return fetch(GET_ALL_POST)
    .then(response =>{
        if(!response.ok){
            throw new Error(errorMessage(response.status));
        }
        return response.json();
    });
};
