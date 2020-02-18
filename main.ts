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
    export function getRGB(_colourVal: RGB): number{

       return 0;
    }
  }