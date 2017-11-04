
    // initial user object 
    var user = {
        username: ""
    };

    var userInput = document.getElementById('username');
    var userView = document.getElementById('viewer');

    /**
        watch and get, set property of object
    */
    var watch = function(object, property, callback){
        var val = object[property];
        delete object[property];
        Object.defineProperty(object, property, {
            configurable: false,
            enumerable: false,
            get: function(){
                return val;
            },
            set: function(newVal){
                val = newVal;
                callback(newVal);
            }
        });
    }
    

    // Update object property with new value.
    watch(user, 'username', function(newValue){
        userInput.value = newValue;
        userView.textContent = newValue;
    });

    // bind event listener 
    userInput.addEventListener('keyup', function(){
        user.username = userInput.value;
    });