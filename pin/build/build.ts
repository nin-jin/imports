import * as $ from './index.js'

export class $pin_build {
    root = new $.$pin_file
}

setTimeout( ()=> console.log( new $pin_build().root ) )
