let obj = {
  name: "Hiba",

  printName: function () {
    console.log(this.name);
  },

  printSecond: function () {
    setTimeout(function () {
      obj.printName.call(obj);
    }, 1000);
    return this.name;
  },
};

console.log(obj.printSecond());
