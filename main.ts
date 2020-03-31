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

enum ON_OFF {
    //% block="ON"
    ON,
    //% block="OFF"
    OFF
}

//% color=#5b99a5 weight=100 icon="\uf009" block="colour sensor_artec"
namespace colour {

    pins.i2cWriteNumber(41, 178, NumberFormat.Int8LE, true);
    pins.i2cWriteNumber(41, 179, NumberFormat.Int8LE, true);
    pins.i2cWriteNumber(41, 182, NumberFormat.Int8LE, true);

    let _red = pins.i2cReadNumber(41, NumberFormat.UInt16BE, false)
    pins.i2cWriteNumber(41, 184, NumberFormat.Int8LE, true);
    let _green = pins.i2cReadNumber(41, NumberFormat.UInt16BE, false)
    pins.i2cWriteNumber(41, 186, NumberFormat.Int8LE, true);
    let _blue = pins.i2cReadNumber(41, NumberFormat.UInt16BE, false)

    let _rVal = Math.round(Math.map(_red, 0, 65535, 0, 1023));
    let _gVal = Math.round(Math.map(_green, 0, 65535, 0, 1023));
    let _bVal = Math.round(Math.map(_blue, 0, 65535, 0, 1023));

    if (_rVal > 255)
        _rVal = 255;
    else if (_rVal < 0)
        _rVal = 0;

    if (_gVal > 255)
        _gVal = 255;
    else if (_gVal < 0)
        _gVal = 0;

    if (_bVal > 255)
        _bVal = 255;
    else if (_bVal < 0)
        _bVal = 0;

    //% blockId=getRGB block="get colour sensor value %_colourVal"
    export function getRGB(_colour: RGB): number {
        switch (_colour) {
            case RGB.Red: return _rVal;
            case RGB.Green: return _gVal;
            case RGB.Blue: return _bVal;
        }
    }

    //% blockId=getColour block="get colour sensor colour"
    export function getColour(): string {

        if ((_rVal >= 0 && _rVal <= 10)) {
            if ((_gVal >= 0 && _gVal <= 10)) {
                if ((_bVal >= 0 && _bVal <= 10)) {
                    return "Bk"; // Black
                }
            }
        }

        if ((_rVal >= 245 && _rVal <= 255)) {
            if ((_gVal >= 0 && _gVal <= 10)) {
                if ((_bVal >= 0 && _bVal <= 10)) {
                    return "R"; // Red
                }
            }
        }

        if ((_rVal >= 0 && _rVal <= 10)) {
            if ((_gVal >= 245 && _gVal <= 255)) {
                if ((_bVal >= 0 && _bVal <= 10)) {
                    return "G"; // Green
                }
            }
        }

        if ((_rVal >= 0 && _rVal <= 10)) {
            if ((_gVal >= 0 && _gVal <= 10)) {
                if ((_bVal >= 245 && _bVal <= 255)) {
                    return "B"; // Blue
                }
            }
        }

        if ((_rVal >= 245 && _rVal <= 255)) {
            if ((_gVal >= 245 && _gVal <= 255)) {
                if ((_bVal >= 0 && _bVal <= 10)) {
                    return "Y"; // Yellow
                }
            }
        }

        if ((_rVal >= 245 && _rVal <= 255)) {
            if ((_gVal >= 0 && _gVal <= 10)) {
                if ((_bVal >= 245 && _bVal <= 255)) {
                    return "M"; // Magenta
                }
            }
        }

        if ((_rVal >= 0 && _rVal <= 10)) {
            if ((_gVal >= 245 && _gVal <= 255)) {
                if ((_bVal >= 245 && _bVal <= 255)) {
                    return "C"; // Cyan
                }
            }
        }

        if ((_rVal >= 245 && _rVal <= 255)) {
            if ((_gVal >= 245 && _gVal <= 255)) {
                if ((_bVal >= 245 && _bVal <= 255)) {
                    return "W"; // White
                }
            }
        }

        return "OC";
    }

    //% blockId=isColour block="Door is %doorStatus"
    export function isColour(_status: ON_OFF): boolean {

        return true;
    }
}