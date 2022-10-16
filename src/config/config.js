const publicRuntimeConfig = {
    NODE_ENV: process.env.NODE_ENV || 'production',
    API_URL: process.env.REACT_APP_API_URL,
    LOCAL_STORAGE_TOKEN: 'token',
};

export const { NODE_ENV, API_URL, LOCAL_STORAGE_TOKEN } = publicRuntimeConfig;

export default publicRuntimeConfig.NODE_ENV;
