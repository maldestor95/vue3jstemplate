export default {
    RecipePath: () => {
        // return import.meta.env.VITE_APP_RECETTE_SERVER_DEV ? import.meta.env.VITE_APP_RECETTE_SERVER_DEV : 'https://raw.githubusercontent.com/maldestor95/recipebook/master'
        // return import.meta.env.VITE_APP_RECETTE_SERVER_DEV ? import.meta.env.VITE_APP_RECETTE_SERVER_DEV : "../recipebook/recipe"
        return "https://raw.githubusercontent.com/maldestor95/recipebook/master/recipe/"
    },
};
// 'https://raw.githubusercontent.com/maldestor95/recipebook/master',
