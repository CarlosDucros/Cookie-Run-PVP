let teams = [
    {
        name: "White Lily Hypercarry",
        treasures: ["Scroll", "Watch", "Whistle"],
        comp: [
            {
                cookie: "Fettuccine",
                toppings: [
                    { combination: "5 Almonds", substats: "Dmg Resist > Cd" },
                    { combination: "5 Chocolates", substats: "Dmg Resist > Cd" }
                ]
            },
            {
                cookie: "Financier",
                toppings: [
                    { combination: "5 Chocolates", substats: "Dmg Resist > Cd" }
                ]
            },
            {
                cookie: "White Lily",
                toppings: [
                    { combination: "5 Raspberries", substats: "Dmg Resist > Cd" }
                ]
            },
            {
                cookie: "Black Pearl",
                toppings: [
                    { combination: "5 Almonds", substats: "Dmg Resist > Cd" }
                ]
            },
            {
                cookie: "Snapdragon",
                toppings: [
                    { combination: "5 Chocolates", substats: "Cd > Atk > Crit" }
                ]
            }
        ]
    },
    {
        name: "Almond Scam",
        treasures: ["Scroll", "Paper Charm", "Whistle"],
        comp: [
            {
                cookie: "Yeti",
                toppings: [
                    { combination: "5 Chocolate", substats: "Cd > Atk > Crit (the topping set I used)" },
                    { combination: "5 Raspberry", substats: "Atk > Crit (e2005pe's set)" }
                ]
            },
            {
                cookie: "Burnt Cheese",
                toppings: [
                    { combination: "5 Chocolate", substats: "2 Second Start, Dmg Res, Atk Spd, Cd" }
                ]
            },
            {
                cookie: "Golden Cheese",
                toppings: [
                    { combination: "5 Raspberry or 4 Raspberry 1 Chocolate", substats: "3 Second Start, Cd, Dmg Res, Atk, Crit" }
                ]
            },
            {
                cookie: "Frost Queen",
                toppings: [
                    { combination: "5 Raspberry", substats: "Dmg Res, Atk, Crit, Cd" }
                ]
            },
            {
                cookie: "Almond",
                toppings: [
                    { combination: "5 Almond", substats: "Dmg Res, Debuff Resist, Amplify Buff" }
                ]
            }
        ]
    },
    {
        name: "White Lily Scam",
        treasures: ["Scroll", "Paper Charm", "Whistle"],
        comp: [
            {
                cookie: "Rebel",
                toppings: [
                    { combination: "5 Almond", substats: "Tankiness, Dmg Res, Cd" },
                    { combination: "Mix of Almond and Chocolate", substats: "High Cooldown, Dmg Res, Cd" }
                ]
            },
            {
                cookie: "Jellyfish",
                toppings: [
                    { combination: "5 Raspberry", substats: "Dmg Res, Atk, Crit" }
                ]
            },
            {
                cookie: "Golden Cheese",
                toppings: [
                    { combination: "5 Raspberry", substats: "Dmg Res, Atk, Crit" }
                ]
            },
            {
                cookie: "White Lily",
                toppings: [
                    { combination: "5 Chocolate", substats: "3 Second Start, Dmg Res, Cd" }
                ]
            },
            {
                cookie: "Frost Queen",
                toppings: [
                    { combination: "5 Raspberry", substats: "Dmg Res, Atk, Crit, Cd" }
                ]
            }
        ]
    },
    {
        name: "Cremee Brulee",
        treasures: ["Robes", "Watch", "Whistle"],
        comp: [
            {
                cookie: "Fettuccine",
                toppings: [
                    { combination: "5 Almond", substats: "Dmg Res, Cd" }
                ]
            },
            {
                cookie: "Burnt Cheese",
                toppings: [
                    { combination: "5 Almond", substats: "Dmg Res, Cd" }
                ]
            },
            {
                cookie: "Financier",
                toppings: [
                    { combination: "5 Chocolate", substats: "Dmg Res, Cd" }
                ]
            },
            {
                cookie: "Creme Brulee",
                toppings: [
                    { combination: "5 Raspberry", substats: "Dmg Res, Atk Spd, Cd, Needs Robe Buff" }
                ]
            },
            {
                cookie: "Snapdragon",
                toppings: [
                    { combination: "5 Chocolate", substats: "Cd, Atk, Crit, Preferably has Robe Buff" }
                ]
            }
        ]
    },
    {
        name: "Burnt TRI DPS",
        treasures: ["Scroll", "Paper Charm", "Whistle"],
        comp: [
            {
                cookie: "Burnt Cheese",
                toppings: [
                    { combination: "5 Chocolate", substats: "2 Second Start, Dmg Res, Atk Spd, Cd" }
                ]
            },
            {
                cookie: "Golden Cheese",
                toppings: [
                    { combination: "5 Raspberry or 4 Raspberry 1 Chocolate", substats: "3 Second Start, Cd, Dmg Res, Atk, Crit" }
                ]
            },
            {
                cookie: "White Lily",
                toppings: [
                    { combination: "5 Raspberry", substats: "Dmg Res, Atk, Crit, Cd" }
                ]
            },
            {
                cookie: "Frost Queen",
                toppings: [
                    { combination: "5 Raspberry", substats: "Dmg Res, Atk, Crit, Cd" }
                ]
            },
            {
                cookie: "Snapdragon",
                toppings: [
                    { combination: "5 Chocolate", substats: "Cd, Atk, Crit" }
                ]
            }
        ]
    },
    {
        name: "Caviar",
        treasures: ["Feather", "Vial", "Whistle"],
        comp: [
            {
                cookie: "Coral",
                toppings: [
                    { combination: "5 Chocolate", substats: "Dmg Res, Cd" }
                ]
            },
            {
                cookie: "Golden Cheese",
                toppings: [
                    { combination: "5 Raspberry", substats: "Dmg Res, Atk, Crit, Cd" }
                ]
            },
            {
                cookie: "Captain Caviar",
                toppings: [
                    { combination: "5 Raspberry", substats: "Dmg Res, Atk, Crit, Cd" }
                ]
            },
            {
                cookie: "Black Pearl",
                toppings: [
                    { combination: "5 Chocolate", substats: "Dmg Res, Cd, Atk, Crit" }
                ]
            },
            {
                cookie: "Snapdragon",
                toppings: [
                    { combination: "5 Chocolate", substats: "Cd, Atk, Crit" }
                ]
            }
        ]
    },
    {
        name: "Coral TRI DPS",
        treasures: ["Scroll", "Watch", "Whistle"],
        comp: [
            {
                cookie: "Crimson Coral",
                toppings: [
                    { combination: "5 Chocolate", substats: "Dmg Res, Cd" }
                ]
            },
            {
                cookie: "Golden Cheese",
                toppings: [
                    { combination: "5 Raspberry", substats: "Dmg Res, Atk, Crit, Cd" }
                ]
            },
            {
                cookie: "White Lily",
                toppings: [
                    { combination: "5 Chocolate", substats: "Dmg Res, Cd, Atk, Crit" },
                    { combination: "5 Almond", substats: "Dmg Res, Cd, Atk, Crit" }
                ]
            },
            {
                cookie: "Black Pearl",
                toppings: [
                    { combination: "5 Chocolate", substats: "Dmg Res, Cd, Atk, Crit" },
                    { combination: "5 Almond", substats: "Dmg Res, Cd, Atk, Crit" }
                ]
            },
            {
                cookie: "Frost Queen",
                toppings: [
                    { combination: "5 Chocolate", substats: "Dmg Res, Cd, Atk, Crit" }
                ]
            },
            {
                cookie: "Snapdragon",
                toppings: [
                    { combination: "5 Chocolate", substats: "Cd, Atk, Crit" }
                ]
            }
        ]
    },
    {
        name: "Coral parfait",
        treasures: ["Scroll", "Watch", "Whistle"],
        comp: [
            {
                cookie: "Crimson Coral",
                toppings: [
                    { combination: "5 Chocolate", substats: "Dmg Res, Cd" }
                ]
            },
            {
                cookie: "White Lily",
                toppings: [
                    { combination: "5 Chocolate", substats: "Dmg Res, Cd, Atk, Crit" },
                    { combination: "5 Almond", substats: "Dmg Res, Cd, Atk, Crit" }
                ]
            },
            {
                cookie: "Frost Queen",
                toppings: [
                    { combination: "5 Chocolate", substats: "Dmg Res, Cd, Atk, Crit" }
                ]
            },
            {
                cookie: "Parfait",
                toppings: [
                    { combination: "5 Chocolate", substats: "Dmg Res, Cd" },
                    { combination: "5 Almond", substats: "Worse I think, Dmg Res, Cd" }
                ]
            },
            {
                cookie: "Snapdragon",
                toppings: [
                    { combination: "5 Chocolate", substats: "Cd, Atk, Crit" }
                ]
            }
        ]
    }
]