    //ok but I need to get rid of this script from HTML
    function draw() {
        const canvas = document.getElementById('tutorial');

        //this will let me access the drawing context
        const ctx = canvas.getContext('2d');

        ctx.beginPath();
        ctx.moveTo(75, 25);
        ctx.lineTo(25, 150);
        ctx.lineTo(125, 150);

        const img = new Image();
        img.src = 'https://images.app.goo.gl/ZdCkkymqDNpu3Tr59'
        img.onload = function() {
            const pattern = ctx.createPattern(img, 'repeat');
            ctx.fillStyle = pattern
        }
    }