var fashionstyles = {
    athletic: {
        name: "Athletic",
        img: ""
    },
    basic: {
        name: "Basic",
        img: ""
    },
    casual: {
        name: "Casual",
        img: ""
    },
    nice: {
        name: "Nice",
        img: ""
    },
    fancy: {
        name: "Fancy",
        img: ""
    },
};

var neckline_types = {
    asymmetric: {
        name: "Asymmetric",
        img: ""
    },
    boat: {
        name: "Boat",
        img: ""
    },
    halter: {
        name: "Halter",
        img: ""
    },
    offshoulder: {
        name: "Off Shoulder",
        img: ""
    },
    scoop: {
        name: "Scoop",
        img: ""
    },
    square: {
        name: "Square",
        img: ""
    },
    straight: {
        name: "Straight",
        img: ""
    },
    sweetheart: {
        name: "Sweatheart",
        img: ""
    },
    turtle: {
        name: "Turtle",
        img: ""
    },
    vneck: {
        name: "V-neck",
        img: ""
    }
};

var sleeve_types = {
    strapless: {
        name: "Strapless",
        img: ""
    },
    spaghetti: {
        name: "Spaghetti",
        img: ""
    },
    sleeveless: {
        name: "Sleeveless",
        img: ""
    },
    cap: {
        name: "Cap",
        img: ""
    },
    short: {
        name: "Short",
        img: ""
    },
    threequarter: {
        name: "3/4",
        img: ""
    },
    long: {
        name: "long",
        img: ""
    }
};

var clothes = {
    dress: {
        name: "Dress",
        img: "",
        attributes: {
            subtype: {
                name: "Types",
                options: dress_subtypes
            },
            necklines: {
                name: "Necklines",
                options: neckline_types
            },
            sleevelengths: {
                name: "Sleeve Length",
                options: sleeve_types
            }
        }
    },
    pants: {
        name: "Pants",
        img: "",
        attributes: {
            subtype: {
                name: "Types",
                options: pants_subtypes
            },
        }
    },
    romper: {
        name: "Romper",
        img: "",
        attributes: {}
    },
    shorts: {
        name: "Shorts",
        img: "",
        attributes: {
            subtypes: {
                name: "Types",
                options: {}
            },
        }
    },
    skirt: {
        name: "Skirt",
        img: "",
        attributes: {
            subtypes: {
                name: "Types",
                options: {}
            },
        }
    },
    top: {
        name: "Top",
        img: "",
        attributes: {
            subtypes: {
                name: "Types",
                options: {}
            },
            necklines: {
                name: "Necklines",
                options: neckline_types
            },
            sleevelengths: {
                name: "Sleeve Length",
                options: sleeve_types
            }
        }
    }
}

var dress_subtypes = {
    aline: {
        name: "A-line",
        img: ""
    },
    dropwaist: {
        name: "Drop Waist",
        img: ""
    },
    empire: {
        name: "Empire",
        img: ""
    },
    hightwaist: {
        name: "High Waist",
        img: ""
    },
    maxi: {
        name: "Maxi",
        img: ""
    },
    sheath: {
        name: "Sheath",
        img: ""
    },
    shift: {
        name: "Shift",
        img: ""
    },
    tent: {
        name: "Tent",
        img: ""
    },
};

var pants_subtypes = {
    capri: {
        name: "Capri",
        img: ""
    },
    dress: {
        name: "Dress",
        img: ""
    },
    jeans: {
        name: "Jeans",
        img: ""
    },
    leggings: {
        name: "Leggings",
        img: ""
    },
};