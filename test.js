const { expect } = require('chai')
const { test1, test2 } = require('./')

describe('Test1 function', () => {
  it('test1([1, 2, 3]) === 6', () => {
    const result = test1([1, 2, 3]);
    expect(result).to.equal(6);
  });
  
  it('test1([1, "one", 2, "two", 3, "three"]) === 6', () => {
    const result = test1([1, "one", 2, "two", 3, "three"]);
    expect(result).to.equal(6);
  });
  
  it('test1(["4", "5", "6"]) === 15', () => {
    const result = test1(["4", "5", "6"]);
    expect(result).to.equal(15);
  });

  it('test1([4, 5, "test", "", "6"]) === 15', () => {
    const result = test1([4, 5, "test", "", "6"]);
    expect(result).to.equal(15);
  });
});


describe('Test2 function', () => {
    it('test2() === 0', () => {
    expect(test2()).to.equal(0);
  });
  
  it('test2(1)() === 1', () => {
    expect(test2(0)()).to.equal(0);
  });
  
  it('test2(1)(2)(3)(4)() === 10', () => {
    expect(test2(1)(2)(3)(4)()).to.equal(10);
  });
  
  it('const t2 = test2(1)(2); t2(3)() === 6; test2(4)() === 7', () =>{
    const t2 = test2(1)(2);
    
    expect(t2(3)()).to.equal(6);
    expect(t2(4)()).to.equal(7);
  })
});
