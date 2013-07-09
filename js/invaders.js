$(document).on('ready', function() {
    
	var stage = $("#stage")[0];
	var context = stage.getContext("2d");
 
	var width = $("#stage").width();
	var height = $("#stage").height();
    var minlenght = Math.min(width,height);
    
    var fooColor = 'black';
    var pixelLenght = 5;
    var gridSize = minlenght / pixelLenght;
    console.log(gridSize);
    
    var grid = draw2dArray(gridSize);
    console.log("Grid : ",grid);
    
    var invaders = [
                        [
                            {x:2,y:0},{x:8,y:0},
                            {x:3,y:1},{x:7,y:1},
                            {x:2,y:2},{x:3,y:2},{x:4,y:2},{x:5,y:2},{x:6,y:2},{x:7,y:2},{x:8,y:2},
                            {x:1,y:3},{x:2,y:3},{x:4,y:3},{x:5,y:3},{x:6,y:3},{x:8,y:3},{x:9,y:3},
                            {x:0,y:4},{x:1,y:4},{x:2,y:4},{x:3,y:4},{x:4,y:4},{x:5,y:4},{x:6,y:4},{x:7,y:4},{x:8,y:4},{x:9,y:4},{x:10,y:4},
                            {x:0,y:5},{x:2,y:5},{x:3,y:5},{x:4,y:5},{x:5,y:5},{x:6,y:5},{x:7,y:5},{x:8,y:5},{x:10,y:5},
                            {x:0,y:6},{x:2,y:6},{x:8,y:6},{x:10,y:6},
                            {x:3,y:7},{x:4,y:7},{x:6,y:7},{x:7,y:7}
                        ],
                        [
                            {x:2,y:0},{x:8,y:0},
                            {x:0,y:1},{x:3,y:1},{x:7,y:1},{x:10,y:1},
                            {x:0,y:2},{x:2,y:2},{x:3,y:2},{x:4,y:2},{x:5,y:2},{x:6,y:2},{x:7,y:2},{x:8,y:2},{x:10,y:2},
                            {x:0,y:3},{x:1,y:3},{x:2,y:3},{x:4,y:3},{x:5,y:3},{x:6,y:3},{x:8,y:3},{x:9,y:3},{x:10,y:3},
                            {x:0,y:4},{x:1,y:4},{x:2,y:4},{x:3,y:4},{x:4,y:4},{x:5,y:4},{x:6,y:4},{x:7,y:4},{x:8,y:4},{x:9,y:4},{x:10,y:4},
                            {x:2,y:5},{x:3,y:5},{x:4,y:5},{x:5,y:5},{x:6,y:5},{x:7,y:5},{x:8,y:5},
                            {x:2,y:6},{x:8,y:6},
                            {x:1,y:7},{x:9,y:7}
                        ],
                        [
                            {x:4,y:0},{x:5,y:0},{x:6,y:0},
                            {x:1,y:1},{x:2,y:1},{x:3,y:1},{x:4,y:1},{x:5,y:1},{x:6,y:1},{x:7,y:1},{x:8,y:1},{x:9,y:1},
                            {x:0,y:2},{x:1,y:2},{x:2,y:2},{x:3,y:2},{x:4,y:2},{x:5,y:2},{x:6,y:2},{x:7,y:2},{x:8,y:2},{x:9,y:2},{x:10,y:2},
                            {x:0,y:3},{x:1,y:3},{x:2,y:3},{x:5,y:3},{x:8,y:3},{x:9,y:3},{x:10,y:3},
                            {x:0,y:4},{x:1,y:4},{x:2,y:4},{x:3,y:4},{x:4,y:4},{x:5,y:4},{x:6,y:4},{x:7,y:4},{x:8,y:4},{x:9,y:4},{x:10,y:4},
                            {x:3,y:5},{x:4,y:5},{x:6,y:5},{x:7,y:5},
                            {x:2,y:6},{x:3,y:6},{x:5,y:6},{x:7,y:6},{x:8,y:6},
                            {x:0,y:7},{x:1,y:7},{x:9,y:7},{x:10,y:7}
                        ],
                        [
                            {x:3,y:0},{x:4,y:0},
                            {x:2,y:1},{x:3,y:1},{x:4,y:1},{x:5,y:1},
                            {x:1,y:2},{x:2,y:2},{x:3,y:2},{x:4,y:2},{x:5,y:2},{x:6,y:2},
                            {x:0,y:3},{x:1,y:3},{x:3,y:3},{x:4,y:3},{x:6,y:3},{x:7,y:3},
                            {x:0,y:4},{x:1,y:4},{x:2,y:4},{x:3,y:4},{x:4,y:4},{x:5,y:4},{x:6,y:4},{x:7,y:4},
                            {x:2,y:5},{x:5,y:5},
                            {x:1,y:6},{x:3,y:6},{x:4,y:6},{x:6,y:6},
                            {x:0,y:7},{x:2,y:7},{x:5,y:7},{x:7,y:7}
                        ],
                        [
                            {x:5,y:0},{x:6,y:0},{x:7,y:0},{x:8,y:0},{x:9,y:0},{x:10,y:0},
                            {x:3,y:1},{x:4,y:1},{x:5,y:1},{x:6,y:1},{x:7,y:1},{x:8,y:1},{x:9,y:1},{x:10,y:1},{x:11,y:1},{x:12,y:1},
                            {x:2,y:2},{x:3,y:2},{x:4,y:2},{x:5,y:2},{x:6,y:2},{x:7,y:2},{x:8,y:2},{x:9,y:2},{x:10,y:2},{x:11,y:2},{x:12,y:2},{x:13,y:2},
                            {x:1,y:3},{x:2,y:3},{x:4,y:3},{x:5,y:3},{x:7,y:3},{x:8,y:3},{x:10,y:3},{x:11,y:3},{x:13,y:3},{x:14,y:3},
                            {x:0,y:4},{x:1,y:4},{x:2,y:4},{x:3,y:4},{x:4,y:4},{x:5,y:4},{x:6,y:4},{x:7,y:4},{x:8,y:4},{x:9,y:4},{x:10,y:4},{x:11,y:4},{x:12,y:4},{x:13,y:4},{x:14,y:4},{x:15,y:4},
                            {x:2,y:5},{x:3,y:5},{x:4,y:5},{x:7,y:5},{x:8,y:5},{x:11,y:5},{x:12,y:5},{x:13,y:5},
                            {x:3,y:6},{x:12,y:6}
                        ]
                    ];
    
    function fillInvader(id,x,y)
    {
        for (var i = 0; i < invaders[id].length; i++)
        {
            var p = invaders[id][i];
            grid[x+p.x][y+p.y] =1;
        }
    }
    
    function drawPoint(x, y)
    {
		context.fillStyle = fooColor;
		context.fillRect(x * pixelLenght, y * pixelLenght, pixelLenght, pixelLenght);
	}
    
    function drawInvaders()
    {
        if(grid === null && grid[0] === null && grid[0][0] === null)
        {
            return false;
        }
        for (var i = 0; i < grid.length; i++) 
        {
            for (var j = 0; j < grid[i].length; j++)
            {
                if(grid[i][j] == 1)
                {
                    drawPoint(i, j);
                }
            }    
        }
        return true;
    }
    
    function cleanGrid()
    {
        if(grid === null && grid[0] === null && grid[0][0] === null)
        {
            return false;
        }
        for (var i = 0; i < grid.length; i++) 
        {
            for (var j = 0; j < grid[i].length; j++)
            {
                grid[i][j] = 0;
            }    
        }
        return true;
    }
    
    function draw2dArray(l)
    {
        var arr = new Array(l);
        for (var i = 0; i < l; i++) 
        {
            arr[i] = new Array(l);
            for (var j = 0; j < l; j++)
            {
                arr[i][j] = 0;
            }    
        }
        return arr;
    }
    
    cleanGrid();
    fillInvader(0,0,0);
    fillInvader(1,12,0);
    fillInvader(2,24,0);
    fillInvader(3,36,0);
    fillInvader(4,45,0);
    drawInvaders();
    
});