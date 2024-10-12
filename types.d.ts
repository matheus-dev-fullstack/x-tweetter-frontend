
type PurchasePayload = {
  products: Product[];
  delivery: {
    receiver: string;
    address: {
      description: 'string';
      city: 'string';
      zipCode: 'string';
      number: 'string';
      complement: 'string';
    };
  };
  payment: {
    card: {
      name: 'string';
      number: 'number';
      code: 'number';
      expires: {
        month: 'number';
        year: 'number';
      };
    };
    installments: number;
  };
};
