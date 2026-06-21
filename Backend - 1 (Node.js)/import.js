// using import in Node.js (note , you always need to create your own package.json & set type = module to excute import & export, main value should the file name from where export is happening)

import {sum, PI} from "./math2.js"

console.log(sum(1,5));