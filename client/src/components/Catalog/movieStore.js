import {create} from 'zustand';

const useMovieStore = create((set) => ({
  movies: [],
  searchResult: [],
  filterValue: '',
  isLoading: false,

  setSearchResult: (result) => set({ searchResult: result }),
  setFilterValue: (value) => set({ filterValue: value }),
  setIsLoading: (loading) => set({ isLoading: loading }),
  setMovies: (movies) => set({ movies: movies }),

  searchMovies: async (formValues, movieService) => {
    try {
      set({ isLoading: true });
      const data = await movieService.search(formValues); // Update this line with your actual searchMovie logic
      set({ searchResult: data, filterValue: '' });
    } catch (err) {
      console.error(err);
    } finally {
      set({ isLoading: false });
    }
  },

  loadAllMovies: async (movieService) => {
    try {
      set({ isLoading: true });
      const data = await movieService.get('/all');
      set({ movies: data });
    } catch (err) {
      console.error(err);
    } finally {
      set({ isLoading: false });
    }
  },
}));

export default useMovieStore;
