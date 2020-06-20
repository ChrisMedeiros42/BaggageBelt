// JavaScript Document

// DEBUG
console.log("scene_play.js loaded successfully");

//   - Images
game.playBackground = {
    // Get handle to image
    image: document.getElementById("playBackground"),
    // Declare object transform information
    org_width: 1920 * game.scale,
    org_heigth: 1080 * game.scale,
    width: 0,
    height: 0,
    posX: 0,
    posY: 0,
    // Adjust the object's transform
    resize: function () {
        this.width = engine.width;
        this.height = engine.height;
    },
    // Draw the object
    draw: function () {
        this.resize();
        engine.context.drawImage(this.image, this.posX, this.posY, this.width, this.height);
    }
};

game.playSponsoredTimer = {
    // Get handle to image
    image: document.getElementById("timer"),
    // Declare object transform information
    org_width: 450 * game.scale,
    org_heigth: 130 * game.scale,
    width: 0,
    height: 0,
    posX: 0,
    posY: 0,
    org_posY: 50,
    // Adjust the object's transform
    resize: function () {
        this.width = this.org_width * (1 - Math.max(engine.widthProportion, engine.heightProportion));
        this.height = this.org_heigth * (1 - Math.max(engine.widthProportion, engine.heightProportion));
        
        this.posX = engine.width / 3 - this.width / 2;
        this.posY = Math.max(40, Math.min(50, this.org_posY * (1 - Math.max(engine.widthProportion, engine.heightProportion))));
    },
    // Draw the object
    draw: function () {
        this.resize();
        engine.context.drawImage(this.image, this.posX, this.posY, this.width, this.height);
    }
};

game.playScoreBox = {
    // Get handle to image
    image: document.getElementById("scoreBox"),
    // Declare object transform information
    org_width: 450 * game.scale,
    org_heigth: 160 * game.scale,
    width: 0,
    height: 0,
    posX: 0,
    posY: 0,
    org_posY: 50,
    // Adjust the object's transform
    resize: function () {
        this.width = this.org_width * (1 - Math.max(engine.widthProportion, engine.heightProportion));
        this.height = this.org_heigth * (1 - Math.max(engine.widthProportion, engine.heightProportion));
        
        this.posX = (engine.width / 3 * 2) - this.width / 2;
        this.posY = Math.max(40, Math.min(50, this.org_posY * (1 - Math.max(engine.widthProportion, engine.heightProportion))));
    },
    // Draw the object
    draw: function () {
        this.resize();
        engine.context.drawImage(this.image, this.posX, this.posY, this.width, this.height);
    }
};

game.playLargePlaneLeft = {
    // Get handle to image
    image: document.getElementById("largePlaneTailLeft"),
    // Declare object transform information
    org_width: 924 * game.scale,
    org_heigth: 345 * game.scale,
    width: 0,
    height: 0,
    posX: 0,
    posY: 0,
    org_posY: 50,
    // Adjust the object's transform
    resize: function () {
        this.width = this.org_width * (1 - Math.max(engine.widthProportion, engine.heightProportion));
        this.height = this.org_heigth * (1 - Math.max(engine.widthProportion, engine.heightProportion));
        
        this.posX = 0;
        this.posY = Math.max(160, Math.min(50, this.org_posY * (1 - Math.max(engine.widthProportion, engine.heightProportion))));
    },
    // Draw the object
    draw: function () {
        this.resize();
        engine.context.drawImage(this.image, this.posX, this.posY, this.width, this.height);
    }
};

game.playLargePlaneRight = {
    // Get handle to image
    image: document.getElementById("largePlaneTailRight"),
    // Declare object transform information
    org_width: 924 * game.scale,
    org_heigth: 345 * game.scale,
    width: 0,
    height: 0,
    posX: 0,
    posY: 0,
    org_posY: 50,
    // Adjust the object's transform
    resize: function () {
        this.width = this.org_width * (1 - Math.max(engine.widthProportion, engine.heightProportion));
        this.height = this.org_heigth * (1 - Math.max(engine.widthProportion, engine.heightProportion));
        
        this.posX = engine.width - this.width;
        this.posY = Math.max(160, Math.min(50, this.org_posY * (1 - Math.max(engine.widthProportion, engine.heightProportion))));
    },
    // Draw the object
    draw: function () {
        this.resize();
        engine.context.drawImage(this.image, this.posX, this.posY, this.width, this.height);
    }
};

game.playSmallPlaneLeft = {
    // Get handle to image
    image: document.getElementById("smallPlaneTailLeft"),
    // Declare object transform information
    org_width: 645 * game.scale,
    org_heigth: 271 * game.scale,
    width: 0,
    height: 0,
    posX: 0,
    posY: 0,
    org_posY: 50,
    // Adjust the object's transform
    resize: function () {
        this.width = this.org_width * (1 - Math.max(engine.widthProportion, engine.heightProportion));
        this.height = this.org_heigth * (1 - Math.max(engine.widthProportion, engine.heightProportion));
        
        this.posX = 0;
        this.posY = Math.max(400, Math.min(50, this.org_posY * (1 - Math.max(engine.widthProportion, engine.heightProportion))));
    },
    // Draw the object
    draw: function () {
        this.resize();
        engine.context.drawImage(this.image, this.posX, this.posY, this.width, this.height);
    }
};

game.playSmallPlaneRight = {
    // Get handle to image
    image: document.getElementById("smallPlaneTailRight"),
    // Declare object transform information
    org_width: 645 * game.scale,
    org_heigth: 271 * game.scale,
    width: 0,
    height: 0,
    posX: 0,
    posY: 0,
    org_posY: 50,
    // Adjust the object's transform
    resize: function () {
        this.width = this.org_width * (1 - Math.max(engine.widthProportion, engine.heightProportion));
        this.height = this.org_heigth * (1 - Math.max(engine.widthProportion, engine.heightProportion));
        
        this.posX = engine.width - this.width;
        this.posY = Math.max(400, Math.min(50, this.org_posY * (1 - Math.max(engine.widthProportion, engine.heightProportion))));
    },
    // Draw the object
    draw: function () {
        this.resize();
        engine.context.drawImage(this.image, this.posX, this.posY, this.width, this.height);
    }
};

game.playLuggageCartLvl1 = {
    // Get handle to image
    image: document.getElementById("luggageCartLvl1"),
    // Declare object transform information
    org_width: 491 * game.scale,
    org_heigth: 170 * game.scale,
    width: 0,
    height: 0,
    posX: 0,
    posY: 0,
    org_posY: 50,
    // Adjust the object's transform
    resize: function () {
        this.width = this.org_width * (1 - Math.max(engine.widthProportion, engine.heightProportion));
        this.height = this.org_heigth * (1 - Math.max(engine.widthProportion, engine.heightProportion));
        
        this.posX = (engine.width / 2) - this.width / 2;
        this.posY = engine.height - this.height;
    },
    // Draw the object
    draw: function () {
        this.resize();
        engine.context.drawImage(this.image, this.posX, this.posY, this.width, this.height);
    }
};

let luggage = [
    'url(images/luggage_blue.png)',
    'url(images/luggage_green.png)',
    'url(images/luggage_red.png)',
    'url(images/luggage_purple.png)',
    'url(images/luggage_yellow.png)'
];


game.luggageDiv1 = {
    //get handle to div
    div: document.getElementById("luggageDiv1"),
    //declare objects transform information
    org_width: 491 * game.scale,
    org_heigth: 170 * game.scale,
    width: 0,
    height: 0,
    posX: 0,
    posY: 0,
    org_posY: 50,
    //Adjust the object's transform
    resize: function () {
        this.width = 50 * (1 - Math.max(engine.widthProportion, engine.heightProportion));
        this.height = 50 * (1 - Math.max(engine.widthProportion, engine.heightProportion));

        //Attach to Cart
        this.posX = game.playLuggageCartLvl1.posX+20;
        this.posY = game.playLuggageCartLvl1.posY+30;
    },
    //Draw object
    draw: function () {
        this.adjustStyle();
    },
    //Apply changes via CSS
    adjustStyle: function () {
        var randomLuggage = Math.floor(Math.random() * luggage.length);
        this.resize();
        this.div.draggable = "true";
        this.div.ondragstart = "drag(event)";
        this.div.style.position = "absolute";
        this.div.style.display = "block";
        this.div.style.left = this.posX.toString() + "px";
        this.div.style.top = this.posY.toString() + "px";
        this.div.style.width = this.width + "px";
        this.div.style.height = this.height + "px";
        this.div.style.backgroundImage = luggage[randomLuggage];
        this.div.style.backgroundRepeat = 'no-repeat';
        this.div.style.backgroundSize = 'contain';
        this.div.style.zIndex = 4;
    }

}

game.luggageDiv2 = {
    //get handle to div
    div: document.getElementById("luggageDiv2"),
    //declare objects transform information
    org_width: 491 * game.scale,
    org_heigth: 170 * game.scale,
    width: 0,
    height: 0,
    posX: 0,
    posY: 0,
    org_posY: 50,
    //Adjust the object's transform
    resize: function () {
        this.width = 50 * (1 - Math.max(engine.widthProportion, engine.heightProportion));
        this.height = 50 * (1 - Math.max(engine.widthProportion, engine.heightProportion));

        //Attach to Cart
        this.posX = game.luggageDiv1.posX+game.luggageDiv1.width;
        this.posY = game.luggageDiv1.posY;
    },
    //Draw object
    draw: function () {
        this.adjustStyle();
    },
    //Apply changes via CSS
    adjustStyle: function () {
        var randomLuggage = Math.floor(Math.random() * luggage.length);
        this.resize();
        this.div.draggable = "true";
        this.div.style.position = "absolute";
        this.div.style.display = "block";
        this.div.style.left = this.posX.toString() + "px";
        this.div.style.top = this.posY.toString() + "px";
        this.div.style.width = this.width + "px";
        this.div.style.height = this.height + "px";
        this.div.style.backgroundImage = luggage[randomLuggage];
        this.div.style.backgroundRepeat = 'no-repeat';
        this.div.style.backgroundSize = 'contain';
        this.div.style.zIndex = 4;
    }

}

game.luggageDiv3 = {
    //get handle to div
    div: document.getElementById("luggageDiv3"),
    //declare objects transform information
    org_width: 491 * game.scale,
    org_heigth: 170 * game.scale,
    width: 0,
    height: 0,
    posX: 0,
    posY: 0,
    org_posY: 50,
    //Adjust the object's transform
    resize: function () {
        this.width = 50 * (1 - Math.max(engine.widthProportion, engine.heightProportion));
        this.height = 50 * (1 - Math.max(engine.widthProportion, engine.heightProportion));

        //Attach to Cart
        this.posX = game.luggageDiv2.posX + game.luggageDiv2.width;
        this.posY = game.luggageDiv1.posY;
    },
    //Draw object
    draw: function () {
        this.adjustStyle();
    },
    //Apply changes via CSS
    adjustStyle: function () {
        var randomLuggage = Math.floor(Math.random() * luggage.length);
        this.resize();
        this.div.draggable = "true";
        this.div.style.position = "absolute";
        this.div.style.display = "block";
        this.div.style.left = this.posX.toString() + "px";
        this.div.style.top = this.posY.toString() + "px";
        this.div.style.width = this.width + "px";
        this.div.style.height = this.height + "px";
        this.div.style.backgroundImage = luggage[randomLuggage];
        this.div.style.backgroundRepeat = 'no-repeat';
        this.div.style.backgroundSize = 'contain';
        this.div.style.zIndex = 4;
    }

}

game.luggageDiv4 = {
    //get handle to div
    div: document.getElementById("luggageDiv4"),
    //declare objects transform information
    org_width: 491 * game.scale,
    org_heigth: 170 * game.scale,
    width: 0,
    height: 0,
    posX: 0,
    posY: 0,
    org_posY: 50,
    //Adjust the object's transform
    resize: function () {
        this.width = 50 * (1 - Math.max(engine.widthProportion, engine.heightProportion));
        this.height = 50 * (1 - Math.max(engine.widthProportion, engine.heightProportion));

        //Attach to Cart
        this.posX = game.luggageDiv3.posX + game.luggageDiv3.width;
        this.posY = game.luggageDiv1.posY;
    },
    //Draw object
    draw: function () {
        this.adjustStyle();
    },
    //Apply changes via CSS
    adjustStyle: function () {
        var randomLuggage = Math.floor(Math.random() * luggage.length);
        this.resize();
        this.div.draggable = "true";
        this.div.style.position = "absolute";
        this.div.style.display = "block";
        this.div.style.left = this.posX.toString() + "px";
        this.div.style.top = this.posY.toString() + "px";
        this.div.style.width = this.width + "px";
        this.div.style.height = this.height + "px";
        this.div.style.backgroundImage = luggage[randomLuggage];
        this.div.style.backgroundRepeat = 'no-repeat';
        this.div.style.backgroundSize = 'contain';
        this.div.style.zIndex = 4;
    }

}

game.largePlaneLeftDiv = {
    //get handle to div
    div: document.getElementById("largePlaneLeftBelt"),
    //declare objects transform information
    org_width: 491 * game.scale,
    org_heigth: 170 * game.scale,
    width: 0,
    height: 0,
    posX: 0,
    posY: 0,
    org_posY: 50,
    //Adjust the object's transform
    resize: function () {
        this.width = 50 * (1 - Math.max(engine.widthProportion, engine.heightProportion));
        this.height = 50 * (1 - Math.max(engine.widthProportion, engine.heightProportion));

        //Attach to Plane Belt
        this.posX = game.playLargePlaneLeft.posX;
        this.posY = game.playLargePlaneLeft.posY;
    },
    //Draw object
    draw: function () {
        this.adjustStyle();
    },
    //Apply changes via CSS
    adjustStyle: function () {
        this.resize();
        this.div.ondrop = "drop(event)";
        this.div.ondragover = "allowDrop(event)";
        this.div.style.position = "absolute";
        this.div.style.display = "block";
        this.div.style.left = this.posX.toString() + "px";
        this.div.style.top = this.posY.toString() + "px";
        this.div.style.width = this.width + "px";
        this.div.style.height = this.height + "px";
        this.div.style.borderStyle = "solid";
        this.div.style.zIndex = 4;
    }
}

//   - Buttons
