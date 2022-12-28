--Create account Table
CREATE TABLE IF NOT EXISTS account (
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    nickname VARCHAR(255) NOT NULL UNIQUE
);