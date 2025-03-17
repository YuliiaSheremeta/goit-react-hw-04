import axios from "axios";


export const fetchImagesWithSearch = async (image, currentPage) => {

    const response = await axios.get(`https://api.unsplash.com/search/photos`, {
        params: {
            query: image,
            per_page: 6,
            page: currentPage,
            client_id: 'Z9jVQDRBlyL_g9dl05CLN1H76YpBoBAhL1lEhm63P-U',
        },
    });
    
    return response.data.results;
    
};