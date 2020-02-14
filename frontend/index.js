    //ok but I need to get rid of this script from HTML
    // peg color #FF8552
    function draw() {
        const canvas = document.getElementById('tutorial');

        //this will let me access the drawing context
        const ctx = canvas.getContext('2d');

        // triangle shape 

        ctx.fillStyle = '#39393A'

        ctx.beginPath();
        ctx.moveTo(250, 0);
        ctx.lineTo(0, 435);
        ctx.lineTo(500, 435);
        ctx.fill();

        // row 1 circle shape

        ctx.fillStyle = '#E6E6E6'

        ctx.beginPath()
        ctx.arc(250, 75, 25, 0, Math.PI * 2, true);
        ctx.fill();

        // row 2 circle shapes

        ctx.beginPath()
        ctx.arc(212, 150, 25, 0, Math.PI * 2, true);
        ctx.fill();

        ctx.beginPath()
        ctx.arc(288, 150, 25, 0, Math.PI * 2, true);
        ctx.fill();

        //row 3 circle shapes

        ctx.beginPath()
        ctx.arc(174, 225, 25, 0, Math.PI * 2, true);
        ctx.fill();

        ctx.beginPath()
        ctx.arc(250, 225, 25, 0, Math.PI * 2, true);
        ctx.fill();

        ctx.beginPath()
        ctx.arc(326, 225, 25, 0, Math.PI * 2, true);
        ctx.fill();
        
        // row 4 circle shapes

        ctx.beginPath()
        ctx.arc(136, 300, 25, 0, Math.PI * 2, true);
        ctx.fill();

        ctx.beginPath()
        ctx.arc(210, 300, 25, 0, Math.PI * 2, true);
        ctx.fill();

        ctx.beginPath()
        ctx.arc(290, 300, 25, 0, Math.PI * 2, true);
        ctx.fill();

        ctx.beginPath()
        ctx.arc(364, 300, 25, 0, Math.PI * 2, true);
        ctx.fill();

        // row 5 circles
        ctx.beginPath()
        ctx.arc(98, 375, 25, 0, Math.PI * 2, true);
        ctx.fill();

        ctx.beginPath()
        ctx.arc(174, 375, 25, 0, Math.PI * 2, true);
        ctx.fill();

        ctx.beginPath()
        ctx.arc(250, 375, 25, 0, Math.PI * 2, true);
        ctx.fill();

        ctx.beginPath()
        ctx.arc(326, 375, 25, 0, Math.PI * 2, true);
        ctx.fill();

        ctx.beginPath()
        ctx.arc(402, 375, 25, 0, Math.PI * 2, true);
        ctx.fill();
    }