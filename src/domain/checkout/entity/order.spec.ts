import Order from "./order";
import OrderItem from "./order_item";

describe('Order unit tests', () => {

  it('should throw error when id is empty', () => {
    expect(() => {
      let order = new Order("", "123", []);
    }).toThrowError('Id is required');
  });

  it('should throw error when customerId is empty', () => {
    expect(() => {
      let order = new Order("123", "", []);
    }).toThrowError('CustomerId is required');
  });

  it('should throw error when items is empty', () => {
    expect(() => {
      let order = new Order("123", "123", []);
    }).toThrowError('Items are required');
  });

  it('should calculate total', () => {
    const item1 = new OrderItem('i1', 'Item 1', 100, 'p1', 2);
    const item2 = new OrderItem('i2', 'Item 2', 200, 'p2', 2);
    const order1 = new Order('o1', 'c1', [item1]);
    let total1 = order1.total();

    expect(total1).toBe(200);

    const order2 = new Order('o2', 'c2', [item1, item2]);
    let total2 = order2.total();

    expect(total2).toBe(600);
  });

  it('should throw error if the quantity item is less or equal zero', () => {
    expect(() => {
      const item = new OrderItem('i1', 'Item 1', 100, 'p1', 0);
      const order = new Order('o1', 'c1', [item]);
    }).toThrowError('Quantity must be greater than zero');
  });
});