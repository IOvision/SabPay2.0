export const createOrder = /* GraphQL */ `
  mutation createOrder(
    $input: CreateOrderInput!
  ) {
    createOrder(input: $input) {
      GS1_PK
      LS1_SK
      SK
      PK
      deliveryType
      discount
      items {
        PK
        SK
        image
        name
        originalPrice
        price
        quantity
        variant
        variantKey
      }
      merchant {
        address
        name
        phone
      }
      status
      total
      user {
        address
        name
        phone
      }
    }
  }
`;