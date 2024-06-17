const apiUrl = 'https://skypro-music-api.skyeng.tech/catalog/track/all/';
const apiUrlPlaylist ="https://skypro-music-api.skyeng.tech/catalog/selection/";
const appUrlCategory ="https://skypro-music-api.skyeng.tech/catalog/selection/";

export async function getTracks() {
    const res = await fetch(apiUrl);
  
    if (!res.ok) {
      throw new Error('Ошибка при получении данных');
    }
  
    return res.json();
  }
  
  export async function getPlaylist(id: string) {
    const res = await fetch(apiUrlPlaylist + id);
  
    if (!res.ok) {
      throw new Error("Ошибка при получении данных");
    }
  
    const data = await res.json();
    return data.items;
  }

  export async function getCategoryTracks(id: string) {
    const res = await fetch(appUrlCategory + id, {
      method: "GET",
      cache: "no-cache",
    });
  
    if (!res.ok) {
      throw new Error("Ошибка при получении данных");
    }
  
    const data = await res.json();
    return data.items;
  }