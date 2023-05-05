import axios from "axios";

export const getEpisodesFromSeason = async (season: number) => {
    const url = `https://6akqh3xn3b.execute-api.us-east-1.amazonaws.com/api/v1/tracks/season/${season}`;
    return axios.get(url, {headers:{'Access-Control-Allow-Origin': '*'}})
        .then(function (response: any) {
            if (response && response.data)
                return response.data;
        })
        .catch(function (error: any) {
            console.log(error);
        })
        .finally(function () {
            // always executed
        });
};

export const getEpisode = async (episodeId: string) => {
    const url = `https://6akqh3xn3b.execute-api.us-east-1.amazonaws.com/api/v1/tracks/${episodeId}`;
    return axios.get(url, {headers:{'Access-Control-Allow-Origin': '*'}})
        .then(function (response: any) {
            if (response)
                return response;
        })
        .catch(function (error: any) {
            console.log(error);
        })
        .finally(function () {
            // always executed
        });
};

