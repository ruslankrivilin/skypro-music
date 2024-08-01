import { TrackType } from "@/Types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type playlistStateType = {
  currentTrack: null | TrackType;
  playlist: TrackType[];
  shuffledPlaylist: TrackType[];
  isShuffle: boolean;
  isPlaying: boolean;
  filterOptions: {
    author: string[],
    genre: string[];
    order: string;
    searchValue: string,
  };
  filteredTracks: TrackType[];
  initialTracks: TrackType[];
};

const initialState: playlistStateType = {
  currentTrack: null,
  playlist: [],
  shuffledPlaylist: [],
  isShuffle: false,
  isPlaying: false,
  filterOptions: {
    author: [],
    genre: [],
    order: "По умолчанию",
    searchValue: "",
  },
  filteredTracks: [],
  initialTracks: [],
};

const playlistSlice = createSlice({
  name: "playlist",
  initialState,
  reducers: {
    setInitialTracks: (state, action: PayloadAction<{ initialTracks: TrackType[] }>) => {
      state.initialTracks = action.payload.initialTracks;
      state.filteredTracks = action.payload.initialTracks;
    },
    setCurrentTrack: (
      state,
      action: PayloadAction<{
        track: TrackType;
        tracksData: TrackType[];
        isPlaying: boolean;
      }>
    ) => {
      state.currentTrack = action.payload.track;
      state.playlist = action.payload.tracksData;
      state.isPlaying = action.payload.isPlaying || state.isPlaying;
      state.shuffledPlaylist = [...action.payload.tracksData].sort(
        () => 0.5 - Math.random()
      );
    },
    setNextTrack: (state) => {
      const playlist = state.isShuffle
        ? state.shuffledPlaylist
        : state.playlist;
      const currentTrackIndex = playlist.findIndex(
        (track) => track.id === state.currentTrack?.id
      );
      const newTrack = playlist[currentTrackIndex + 1];
      if (newTrack) {
        state.currentTrack = newTrack;
      }
    },
    setPreviousTrack: (state) => {
      const playlist = state.isShuffle
        ? state.shuffledPlaylist
        : state.playlist;
      const currentTrackIndex = playlist.findIndex(
        (track) => track.id === state.currentTrack?.id
      );
      const newTrack = playlist[currentTrackIndex - 1];
      if (newTrack) {
        state.currentTrack = newTrack;
      }
    },
    setIsShuffle: (state, action: PayloadAction<boolean>) => {
      state.isShuffle = action.payload;
    },
    setIsPlaying: (state, action: PayloadAction<boolean>) => {
      state.isPlaying = action.payload;
    },
    nextTrack: changeTrack(1),
    prevTrack: changeTrack(-1),
    setFilters: (state, 
      action: PayloadAction<{
      author?: string[];
      genre?: string[];
      order?: string;
      searchValue?: string
    }>) => {
      state.filterOptions = {
        author: action.payload.author || state.filterOptions.author,
        genre: action.payload.genre || state.filterOptions.genre,
        order: action.payload.order || state.filterOptions.order,
        searchValue:
          typeof action.payload.searchValue === "string"
            ? action.payload.searchValue
            : state.filterOptions.searchValue,
      };
      let filteredTracks = state.initialTracks.filter((track) => {
        const hasAuthors = state.filterOptions.author.length !== 0;
        const hasGenres = state.filterOptions.genre.length !== 0;
        const isAuthors = hasAuthors
          ? state.filterOptions.author.includes(track.author)
          : true;
          const isGenres = hasGenres
          ? state.filterOptions.genre.includes(track.genre)
          : true;
          const hasSearchValue =
          track.name
            .toLowerCase()
            .includes(state.filterOptions.searchValue.toLowerCase()) ||
          track.author
            .toLowerCase()
            .includes(state.filterOptions.searchValue.toLowerCase());
        return isAuthors && isGenres && hasSearchValue;
      });

      switch (state.filterOptions.order) {
        case "Сначала новые":
          filteredTracks.sort(
            (a, b) =>
              new Date(b.release_date).getTime() -
              new Date(a.release_date).getTime()
          );
          break;
        case "Сначала старые":
          filteredTracks.sort(
            (a, b) =>
              new Date(a.release_date).getTime() -
              new Date(b.release_date).getTime()
          );
          break;
        default:
          filteredTracks;
          break;
      }
      state.filteredTracks = filteredTracks;
    },
  },
});

function changeTrack(direction: number) {
  return (state: playlistStateType) => {
    const currentTracks = state.isShuffle
      ? state.shuffledPlaylist
      : state.playlist;
    let newIndex =
      currentTracks.findIndex((item) => item.id === state.currentTrack?.id) +
      direction;

    // Циклическое переключение
    newIndex = (newIndex + currentTracks.length) % currentTracks.length;

    state.currentTrack = currentTracks[newIndex];
    state.isPlaying = true;
  };
}

export const { 
  setCurrentTrack, 
  setNextTrack, 
  setPreviousTrack, 
  setIsShuffle, 
  setIsPlaying,
  nextTrack,
  prevTrack, 
  setFilters, 
  setInitialTracks } =
  playlistSlice.actions;
export const playlistReducer = playlistSlice.reducer;
