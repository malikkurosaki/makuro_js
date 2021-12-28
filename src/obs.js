const $ = require('jquery');

/**
 * 
 * @param {String} value
 * @returns {{key: String, value: String}}
 */
 function Obs(value){
    return {
        _value: value,
        key: Math.floor(Math.random() * 1000).toString(),
        get value(){
            return this._value;
        },
        set value(value){
            this._value = value;
            $(document).trigger(this.key, this.value)
        }
    }
}

module.exports = Obs;

