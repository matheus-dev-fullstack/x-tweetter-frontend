import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { Restaurant } from '../pages/Home';
import { CardapioItem } from '../store/reducers/cart';

type GetHero = Restaurant;

export type Restaurant = {
  id: number;
  titulo: string;
  destacado: boolean;
  tipo: string;
  avaliacao: number;
  descricao: string;
  capa: string;
  cardapio: CardapioItem[];
};

type Product = {
  id: number;
  price: number;
};

type PurchasePayload = {
  products: Product[];
  delivery: {
    receiver: string;
    address: {
      description: string;
      city: string;
      zipCode: string;
      number: number;
      complement: string;
    };
  };
  payment: {
    card: {
      name: string;
      number: string;
      code: number;
      expires: {
        month: number;
        year: number;
      };
    };
  };
};

type PurchaseResponse = {
  orderId: string;
};

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getRestaurants: builder.query<Restaurant[], void>({
      query: () => 'restaurantes'
    }),
    getHeroRestaurant: builder.query<GetHero, number>({
      query: (id) => `restaurantes/${id}`
    }),
    getRestaurantsById: builder.query<Restaurant, number>({
      query: (id) => `restaurantes/${id}`
    }),
    getPratos: builder.query<CardapioItem[], number>({
      query: (id) => `restaurantes/${id}`
    }),
    purchase: builder.mutation<PurchaseResponse, PurchasePayload>({
      query: (body) => ({
        url: '/checkout',
        method: 'POST',
        body
      })
    })
  })
});

export const {
  useGetRestaurantsQuery,
  useGetPratosQuery,
  useGetHeroRestaurantQuery,
  useGetRestaurantsByIdQuery,
  usePurchaseMutation
} = api;
export default api;
