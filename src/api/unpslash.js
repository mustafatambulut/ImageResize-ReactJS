import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization:'Client-ID 9bdde6f2c54ad485a672b9c58c402158c97069815d241820eb39b1edcfd97f26'
    }
});