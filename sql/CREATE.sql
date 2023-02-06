--Create account Table
CREATE TABLE IF NOT EXISTS account(
    id serial NOT NULL PRIMARY KEY,
    nickname VARCHAR(255) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE
);