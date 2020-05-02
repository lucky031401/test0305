    var stage = new Konva.Stage({
        container: 'container',   // id of container <div>
        width: 500,
        height: 500
      });
      
      // then create a layer
      var layer = new Konva.Layer();
      
      // create our shape
      var circle = new Konva.Circle({
        x: 250,   // x position of the center
        y: 250,  // y position of the center
        radius: 50,             // circle radius
        fill: 'lightblue',            // color to fill the area
        stroke: 'white',        // color to draw the line
        strokeWidth: 4                                                   // line width
      });
      
      // add the shape to the layer
      layer.add(circle);
      
      // add the layer to the stage
      stage.add(layer);
      
      // draw the image
      layer.draw();
      