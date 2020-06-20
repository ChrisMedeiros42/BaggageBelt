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
        this.posY = 0;
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
        this.posY = 0;
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
        this.posY = engine.height / 2 + this.height / 2;
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
        this.posY = engine.height / 2 + this.height / 2;
    },
    // Draw the object
    draw: function () {
        this.resize();
        engine.context.drawImage(this.image, this.posX, this.posY, this.width, this.height);
    }
};

game.playLuggageBlue = {
    // Get handle to image
    image: document.getElementById("luggageBlue"),
    // Declare object transform information
    org_width: 93 * game.scale,
    org_heigth: 157 * game.scale,
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
        this.posY = (engine.height - this.height) - 190;
    },
    // Draw the object
    draw: function () {
        this.resize();
        engine.context.drawImage(this.image, this.posX, this.posY, this.width, this.height);
    }
};

game.playLuggageGreen = {
    // Get handle to image
    image: document.getElementById("luggageGreen"),
    // Declare object transform information
    org_width: 93 * game.scale,
    org_heigth: 144 * game.scale,
    width: 0,
    height: 0,
    posX: 0,
    posY: 0,
    org_posY: 50,
    // Adjust the object's transform
    resize: function () {
        this.width = this.org_width * (1 - Math.max(engine.widthProportion, engine.heightProportion));
        this.height = this.org_heigth * (1 - Math.max(engine.widthProportion, engine.heightProportion));
        
        this.posX = (engine.width / 2) - (this.width / 2) - 95;
        this.posY = (engine.height - this.height) - 190;
    },
    // Draw the object
    draw: function () {
        this.resize();
        engine.context.drawImage(this.image, this.posX, this.posY, this.width, this.height);
    }
};

game.playLuggagePurple = {
    // Get handle to image
    image: document.getElementById("luggagePurple"),
    // Declare object transform information
    org_width: 93 * game.scale,
    org_heigth: 157 * game.scale,
    width: 0,
    height: 0,
    posX: 0,
    posY: 0,
    org_posY: 50,
    // Adjust the object's transform
    resize: function () {
        this.width = this.org_width * (1 - Math.max(engine.widthProportion, engine.heightProportion));
        this.height = this.org_heigth * (1 - Math.max(engine.widthProportion, engine.heightProportion));
        
        this.posX = (engine.width / 2) - (this.width / 2) - 190;
        this.posY = (engine.height - this.height) - 190;
    },
    // Draw the object
    draw: function () {
        this.resize();
        engine.context.drawImage(this.image, this.posX, this.posY, this.width, this.height);
    }
};

game.playLuggageRed = {
    // Get handle to image
    image: document.getElementById("luggageRed"),
    // Declare object transform information
    org_width: 93 * game.scale,
    org_heigth: 157 * game.scale,
    width: 0,
    height: 0,
    posX: 0,
    posY: 0,
    org_posY: 50,
    // Adjust the object's transform
    resize: function () {
        this.width = this.org_width * (1 - Math.max(engine.widthProportion, engine.heightProportion));
        this.height = this.org_heigth * (1 - Math.max(engine.widthProportion, engine.heightProportion));
        
        this.posX = (engine.width / 2) - (this.width / 2) + 95;
        this.posY = (engine.height - this.height) - 190;
    },
    // Draw the object
    draw: function () {
        this.resize();
        engine.context.drawImage(this.image, this.posX, this.posY, this.width, this.height);
    }
};

game.playLuggageYellow = {
    // Get handle to image
    image: document.getElementById("luggageYellow"),
    // Declare object transform information
    org_width: 93 * game.scale,
    org_heigth: 157 * game.scale,
    width: 0,
    height: 0,
    posX: 0,
    posY: 0,
    org_posY: 50,
    // Adjust the object's transform
    resize: function () {
        this.width = this.org_width * (1 - Math.max(engine.widthProportion, engine.heightProportion));
        this.height = this.org_heigth * (1 - Math.max(engine.widthProportion, engine.heightProportion));
        
        this.posX = (engine.width / 2) - (this.width / 2) + 190;
        this.posY = (engine.height - this.height) - 190;
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

game.playLuggageCartLvl2 = {
    // Get handle to image
    image: document.getElementById("luggageCartLvl2"),
    // Declare object transform information
    org_width: 780 * game.scale,
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

game.playLuggageCartLvl3 = {
    // Get handle to image
    image: document.getElementById("luggageCartLvl3"),
    // Declare object transform information
    org_width: 1065 * game.scale,
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

game.playLuggageCartLvl4 = {
    // Get handle to image
    image: document.getElementById("luggageCartLvl4"),
    // Declare object transform information
    org_width: 1370 * game.scale,
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
//   - Buttons
