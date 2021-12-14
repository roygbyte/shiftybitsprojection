
Array.prototype.prepareImages = function(width,height) {
  for(var i = 0; i < this.length; i++) {
    this[i].createImage(width,height,0,0);
  }
};

Array.prototype.prepareColors = function(width,height) {
  for(var i = 0; i < this.length; i++) {
    this[i].createSquare(width,height,0,0);
  }
};

Array.prototype.prepareZoom = function(width,height,x,y) {
  for(var i = 0; i < this.length; i++) {
    this[i].createSquare(width,height,x,y);
  }
};

/**************************/
/**************************/

var Pop = function(data,text) {
  this.x = null;
  this.y = null;
  this.win = null;
  this.data = data;
  if(text != null)
    this.text = text;
};

Pop.prototype.setImage = function(data) {
  this.data = data;
};

Pop.prototype.createImage = function(width,height,x,y) {
  x = (x == null) ? 0 : x;
  y = (y == null) ? 0 : y;
  this.win = window.open("./first.html", "", "width= " + width + ", height= " + height + ", top= " + y + ", left= " + x + "");
  this.win.document.write("<div id='image'><img src='"+this.data+"' width='auto ' height='"+height+"'></div>");
  this.win.blur();
  window.focus();
};

Pop.prototype.createSquare = function(width, height, x, y) {
  this.win = window.open("./first.html","", "width= " + width + ", height= " + height + ", top= " + y + ", left= " + x + " titlebar=no, menubar=no, Location=no");
  if(this.text == null)
    this.win.document.write("<style>body,html {padding:0; margin:0;}</style><div id='color' style='width:100%; height:100%;background:"+ this.data +"'></div>");
  else
    this.win.document.write("<div id='color' style='margin:0;width:100%; height:100%;background:"+ this.data +"'><h1 style='font-family: Roboto-Condensed; text-align: center; font-size:36px; color:black;'>"+this.text+"</h1></div>");
  //this.win.blur();
  //window.focus();
};

Pop.prototype.setDimensions = function(width, height, x, y) {
  this.win.innerHeight = height;
  this.win.innerWidth = width;
  this.win.screenX = x;
  this.win.screenY = y;
  this.win.resizeTo(width, height);
  this.win.moveTo(x, y);
};

Pop.prototype.setExpiry = function(time) {
  setTimeout(this.remove(), time);
};

Pop.prototype.moveTo = function(x,y) {
  this.x = x;
  this.y = y;
  this.win.moveTo(this.x, this.y);
};

Pop.prototype.moveBy = function(x,y) {
  this.win.moveBy(x, y);
}

Pop.prototype.hide = function() {
  this.win.hide();
};

Pop.prototype.restore = function() {
  this.win.show();
};

Pop.prototype.destroy = function() {
  this.win.close();
};
