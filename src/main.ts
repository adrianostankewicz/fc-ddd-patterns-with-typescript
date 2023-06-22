import Address from './entities/address';
import Customer from './entities/customer';
import Order from './entities/order';
import OrderItem from './entities/order_item';

let customer = new Customer("123", "Fulano de Tal");
const address = new Address("Rua de fachada", 2, "12345-678", "Curitiba");
customer.Address = address;
customer.activate();

const item1 = new OrderItem("1", "Item 1", 10);
const item2 = new OrderItem("2", "Item 2", 20);

const order = new Order("1", "123", [item1, item2]);