import { create } from 'zustand';

export const useSlider = create((set) => ({
  curSlide: 0,
  direction: 'start',
  items: [
    {
      id: 4,
      year: 2018,
      country: 'Sahara',
      img: './Sahara.jpg',
    },
    {
      id: 3,
      year: 2019,
      country: 'Lisbon',
      img: './Porto.jpg',
    },
    {
      id: 1,
      year: 2017,
      country: 'Zurich',
      img: './hakan_about.jpg',
    },
    {
      id: 2,
      year: 2020,
      country: 'Marrakech',
      img: './Marrakech.jpg',
    },

    {
      id: 5,
      year: 2023,
      country: 'Berlin',
      img: './hakan2023.jpg',
    },
  ],
  nextSlide: () =>
    set((state) => ({
      curSlide: (state.curSlide + 1) % state.items.length,
      direction: 'next',
    })),
  prevSlide: () =>
    set((state) => ({
      curSlide: (state.curSlide - 1 + state.items.length) % state.items.length,
      direction: 'prev',
    })),
}));
