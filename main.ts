 /**
  * Colour sensor utilities
  */

enum RGB{
    //% block="Red"
    Red,
    //% block="Green"
    Green,
    //% block="Blue"
    Blue
}

  //% color=#5b99a5 weight=100 icon="\uf009" block="colour_artec"
  namespace colour {

    //% blockId=getRGB block="get colour value %_colourVal"
    export function getRGB(_colour: RGB): number{
        
        

        const red = 2;
        const green = 0;
        const blue = 0;

        switch (_colour){
            case RGB.Red: return red;
            case RGB.Green: return green;
            case RGB.Blue: return blue;
        }

        return 0;
    }
  }