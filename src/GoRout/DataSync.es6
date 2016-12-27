/**
 * Created by jayde on 12/26/2016.
 */

import EventEmitter from 'wolfy87-eventemitter';
import toImmutable from './../../node_modules/copykitten/copykitten';



const syncData = function syncData(name){
  "use strict";
  window.localStorage.setItem(name,JSON.stringify(privateData()));
};



const privateData = ((function(){
  let data = {};

  return function privateData(){return data;};
})());


const copyOfData = function copyOfData(){
  let data = toImmutable(privateData());

  return data;
}

export class DataSync extends EventEmitter{

  constructor(name){
    super();
    this.name = name;
  }

  sync(){
    syncData(this.name);
    this.emit('updated')
  }
  getData(){
    return copyOfData();
  }
}
