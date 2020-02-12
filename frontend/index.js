    //ok but I need to get rid of this script from HTML
    function draw() {
        const canvas = document.getElementById('tutorial');

        //this will let me access the drawing context
        const ctx = canvas.getContext('2d');

        ctx.fillStyle = 'Purple'

        ctx.beginPath();
        ctx.moveTo(75, 25);
        ctx.lineTo(25, 150);
        ctx.lineTo(125, 150);
        ctx.fill();
    }