{
  /* <script type="text/paperscript" canvas="canvas"> */
}
var count = 150;

var path = new Path.Circle({
  center: new Point(0, 0),
  radius: 70,
  fillColor: "white",
  strokeColor: "black",
});

var symbol = new SymbolDefinition(path);

for (var i = 0; i < count; i++) {
  var center = Point.random() * view.size;
  var placed = symbol.place(center);
  var scale = (i + 1) / count / 30;
  placed.scale(scale);
  placed.data.vector = new Point({
    angle: Math.random() * 360,
    length: (scale * Math.random()) / 5,
  });
}

var vector = new Point({
  angle: 45,
  length: 0,
});

var mouseVector = vector.clone();

function onMouseMove(event) {
  mouseVector = view.center - event.point;
}

function onFrame(event) {
  vector = vector + (mouseVector - vector) / 30;

  for (var i = 0; i < count; i++) {
    var item = project.activeLayer.children[i];
    var size = item.bounds.size;
    var length = ((vector.length / 10) * size.width) / 10;
    item.position += vector.normalize(length) + item.data.vector;
    keepInView(item);
  }
}

function keepInView(item) {
  var position = item.position;
  var itemBounds = item.bounds;
  var bounds = view.bounds;
  if (itemBounds.left > bounds.width) {
    position.x = -item.bounds.width;
  }

  if (position.x < -itemBounds.width) {
    position.x = bounds.width + itemBounds.width;
  }

  if (itemBounds.top > view.size.height) {
    position.y = -itemBounds.height;
  }

  if (position.y < -itemBounds.height) {
    position.y = bounds.height + itemBounds.height / 2;
  }
}
// </script>
