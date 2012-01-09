# Obju

## Installation

    $ npm install obju

Simple yet powerful extension to JavaScript's `Object.prototype`.

## Methods

### Object.spawn(obj)

An `Object.create` wrapper for easily spawning and extending instances of a parent `Object`.

    require('obju');

    var Animal = {
  
      speak: function(word) {
        console.info('animal says:', word);
      },
  
    };

    var Dog = Animal.spawn({
      speak: function(word) {
        // easily call parent methods
        word && animal.speak(word);
    
        console.info('dog says:', 'ruff!');
      }
    });

    var fido = Dog.spawn();

    fido.speak() // dog says: ruff!

### Object.extend(properties)

Extend an `Object` with a set of properties in place.

    require('obju');
    
    function myMethod(options) {
      var defaults = {
        foo: 'foo'
      };
  
      console.info(defaults.extend(options));
    }
    
    myMethod({foo: 'baz', bat: 'baz'}); // {foo: 'baz', bat: 'baz'}
    
    

