const keys = [];

export class KeyManager {
  tick() {
    this.up = keys[38];
    this.down = keys[40];
    this.left = keys[37];
    this.right = keys[39];
    this.h = keys[72];
    this.j = keys[74];
    this.k = keys[75];
    this.l = keys[76];
  }
}

window.onkeydown = function(e){
  keys[e.keyCode] = true;
};

window.onkeyup = function(e){
  keys[e.keyCode] = false;
};
