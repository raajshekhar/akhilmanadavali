const config = {
    API_URL: process.env.REACT_APP_API_URL,
    API_URL_CREATE_SERVICE: process.env.REACT_APP_API_CREATE_SERVICE,
    API_URL_GET_SERVICE: process.env.REACT_APP_API_GET_SERVICE || '/getservices',
    API_CREATE_CATEGORY: process.env.REACT_APP_API_CREATE_CATEGORY || '/createcategory',
    API_GET_SERVICE_CATEGORIES: process.env.REACT_APP_API_GET_SERVICE_CATEGORIES || '/getservicecategories',
    API_CREATE_CATEGORY_ITEM: process.env.REACT_APP_API_CREATE_CATEGORY_ITEM || '/createcategoryitem',
};

export default config;