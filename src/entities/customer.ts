import Address from "./address";

class Customer {

  _id: string;
  _name: string = "";
  _address!: Address;
  _active: boolean = true;

  constructor(id: string, name: string){
    this._id = id;
    this._name = name;
  }

  validate(){
    if(this._id.length === 0){
      throw new Error('Id is required');
    }
    if(this._name.length === 0){
      throw new Error('Name is required');
    }
  }

  activate(){
    if(this._address === undefined){
      throw new Error("Address is mandatory to activate a customer");
    }
    this._active = true;
  }

  deactivate(){
    this._active = false;
  }

  setAddress(address: Address){
    this._address = address;
  }
}