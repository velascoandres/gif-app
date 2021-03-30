import { IGiphyResponse } from '../interfaces/api-response.interface';

export const getGifs = async (category: string) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=ellosIXkWQTUkPvCR5qalQYT1ct1rs1f&q=${encodeURI(category)}&limit=10`;
    const response = await fetch(url);
    const { data }: IGiphyResponse = await response.json();

    return data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url,
    }));
};