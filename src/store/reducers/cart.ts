import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { CardapioItem, Restaurant } from '../../pages/Home';
// import { ModalState } from '../../components/PratosList';

export type CardapioItem = {
  id: number;
  foto: string;
  preco: number;
  nome: string;
  descricao: string;
  porcao: string;
};

type Product = {
  id: number;
  price: number;
};

type clientAddress = {
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
};

type clientCard = {
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

type CartState = {
  items: CardapioItem[];
  clientAddress: clientAddress;
  clientCard: clientCard;
  cartIsOpen: boolean;
  adressOpen: boolean;
  paymentOpen: boolean;
  thanksOpen: boolean;
};

const initialState: CartState = {
  items: [],
  clientAddress: {
    products: [],
    delivery: {
      receiver: '',
      address: {
        description: '',
        city: '',
        zipCode: '',
        number: 0,
        complement: ''
      }
    }
  },
  clientCard: {
    payment: {
      card: {
        name: '',
        number: '',
        code: 0,
        expires: {
          month: 0,
          year: 0
        }
      }
    }
  },
  cartIsOpen: false,
  adressOpen: false,
  paymentOpen: false,
  thanksOpen: false
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<CardapioItem>) => {
      const prato = state.items.find((item) => item.id === action.payload.id);
      if (!prato) {
        state.items.push(action.payload);
      } else {
        alert('Este prato já está no carrinho');
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },

    clear: (state) => {
      state.items = [];
    },

    openCart: (state) => {
      state.cartIsOpen = true;
    },
    closeCart: (state) => {
      state.cartIsOpen = false;
    },

    openAddress: (state) => {
      state.adressOpen = true;
    },

    closeAddress: (state) => {
      state.adressOpen = false;
    },
    openPayment: (state) => {
      state.paymentOpen = true;
    },

    closePayment: (state) => {
      state.paymentOpen = false;
    },
    /*************  ✨ Codeium Command 🌟  *************/
    openThanks: (state) => {
      state.thanksOpen = true;
    },
    /******  25ff72dd-13d0-4896-9848-cf356ce3a6b0  *******/

    closeThanks: (state) => {
      state.thanksOpen = false;
    },

    addAddressInfos: (state, action: PayloadAction<clientAddress>) => {
      state.clientAddress = action.payload;
    },
    addCardInfos: (state, action: PayloadAction<clientCard>) => {
      state.clientCard = action.payload;
    }
  }
});

export const {
  add,
  remove,
  clear,

  openCart,
  closeCart,
  openAddress,
  closeAddress,
  openPayment,
  closePayment,
  openThanks,
  closeThanks,

  addAddressInfos,
  addCardInfos
} = cartSlice.actions;
export default cartSlice.reducer;
