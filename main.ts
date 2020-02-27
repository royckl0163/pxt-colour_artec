/**
 * Colour sensor utilities
 */

enum RGB {
    //% block="Red"
    Red,
    //% block="Green"
    Green,
    //% block="Blue"
    Blue
}

//% color=#5b99a5 weight=100 icon="\uf009" block="colour_artec"
namespace colour {

    pins.i2cWriteNumber(41, 178, NumberFormat.Int8LE, true);
    pins.i2cWriteNumber(41, 179, NumberFormat.Int8LE, true);
    pins.i2cWriteNumber(41, 182, NumberFormat.Int8LE, true);

    let _red = pins.i2cReadNumber(41, NumberFormat.UInt16BE, false)
    pins.i2cWriteNumber(41, 184, NumberFormat.Int8LE, true);
    let _green = pins.i2cReadNumber(41, NumberFormat.UInt16BE, false)
    pins.i2cWriteNumber(41, 186, NumberFormat.Int8LE, true);
    let _blue = pins.i2cReadNumber(41, NumberFormat.UInt16BE, false)

    //% blockId=getRGB block="get colour value %_colourVal"
    export function getRGB(_colour: RGB): number {
        switch (_colour) {
            case RGB.Red: return Math.round(Math.map(_red, 0, 65535, 0, 1023));
            case RGB.Green: return Math.round(Math.map(_green, 0, 65535, 0, 1023));
            case RGB.Blue: return Math.round(Math.map(_blue, 0, 65535, 0, 1023));
        }
    }

    //% blockId=getColour block="get colour"
    export function getColour(): string {
        return "Hi";
    }
}