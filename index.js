const Firmata = require('firmata');
const boardPort = '/dev/ttyACM0'; // must be set with your correct port
const board = new Firmata(boardPort);

board.on('ready', () => {
    // Arduino is ready to communicate
    // Examples ------------------------------------------
    const digitalPin = 2
    board.digitalRead(digitalPin, (value) => {
        console.log("The value of digital pin 2: " + value);
    });
    const analogPin = 0
    board.analogRead(analogPin, (value) => {
        console.log(`The value of pin A0 is ${value}`);
    });

    //----------------------------------------------------
});

board.on('error', (err) => {
    console.log(err)
});