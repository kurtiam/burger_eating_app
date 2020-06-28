USE burgers_db;

INSERT INTO burgers
    (burger_name, devoured)
VALUES
    ("Big Kahuna Burger", false),
    ("Whammy Burger", false),
    ("Yummy Burger", true),
    ("Krusty Burger", false);

SELECT *
FROM burgers;