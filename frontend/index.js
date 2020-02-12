    //ok but I need to get rid of this script from HTML
    function draw() {
        const canvas = document.getElementById('tutorial');

        //this will let me access the drawing context
        const ctx = canvas.getContext('2d');

        // triangle shape 

        ctx.fillStyle = 'Purple'

        ctx.beginPath();
        ctx.moveTo(250, 0);
        ctx.lineTo(0, 500);
        ctx.lineTo(500, 500);
        ctx.fill();

        // row 1 circle shape

        ctx.fillStyle = 'Black'

        ctx.beginPath()
        ctx.arc(75, 35, 10, 0, Math.PI * 2, true);
        ctx.fill();

        // row 2 circle shapes

        ctx.beginPath()
        ctx.arc(60, 70, 10, 0, Math.PI * 2, true);
        ctx.fill();

        ctx.beginPath()
        ctx.arc(90, 70, 10, 0, Math.PI * 2, true);
        ctx.fill();

        //row 3 circle shapes

        ctx.beginPath()
        ctx.arc(50, 105, 10, 0, Math.PI * 2, true);
        ctx.fill();

        ctx.beginPath()
        ctx.arc(75, 105, 10, 0, Math.PI * 2, true);
        ctx.fill();

        ctx.beginPath()
        ctx.arc(100, 105, 10, 0, Math.PI * 2, true);
        ctx.fill();
        
        // row 4 circle shapes

        ctx.beginPath()
        ctx.arc(30, 135, 10, 0, Math.PI * 2, true);
        ctx.fill();

        ctx.beginPath()
        ctx.arc(60, 135, 10, 0, Math.PI * 2, true);
        ctx.fill();

        ctx.beginPath()
        ctx.arc(90, 135, 10, 0, Math.PI * 2, true);
        ctx.fill();

        ctx.beginPath()
        ctx.arc(120, 135, 10, 0, Math.PI * 2, true);
        ctx.fill();
    }