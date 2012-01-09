require('../');

describe('Object.spawn', function(){
  it('the dog should say ruff', function(done){
    var Animal = {
  
      speak: function(word) {
        console.info('animal says:', word);
      },
  
      lastWord: 'foo'
  
    };

    var Dog = Animal.spawn({
      
      speak: function(word) {
        this.lastWord = word;
      }
      
    });

    var fido = Dog.spawn();

    fido.speak('ruff!');
    
    expect(fido.lastWord).to.equal('ruff!');
  })
})

describe('Object.extend', function(){
  var result;
  
  function myMethod(options) {
    var defaults = {
      foo: 'foo'
    };

    console.info(defaults.extend(options));
  }
  
  myMethod({foo: 'baz', bat: 'baz'});
  
  expect(result).to.equal({foo: 'baz', bat: 'baz'});
})