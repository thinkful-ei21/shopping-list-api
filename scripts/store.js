'use strict';
/* global Item */

// eslint-disable-next-line no-unused-vars
const store = (function(){
  const addItem = function(item) {
    this.items.push(item);
  };

  const findById = function(id) {
    return this.items.find(item => item.id === id);
  };
  
  const findAndDelete = function(id) {
    this.items = this.items.filter(item => item.id !== id);
  };
  
  const toggleCheckedFilter = function() {
    this.hideCheckedItems = !this.hideCheckedItems;
  };

  const setSearchTerm = function(term) {
    this.searchTerm = term;
  };

  const findAndUpdate = function(id, newData){      
    let itemFound = this.items.find(item => {
      if(item.id === id){
        return item;
      }
    });    
    Object.assign(itemFound,newData);
  };

  return {
    items: [],
    hideCheckedItems: false,
    searchTerm: '',

    addItem,
    findById,    
    findAndDelete,    
    toggleCheckedFilter,
    setSearchTerm,
    findAndUpdate,
  };
  
}());
