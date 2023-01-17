--Create account Table
CREATE TABLE IF NOT EXISTS account(
    ID serial NOT NULL PRIMARY KEY,
    account_Info json NOT NULL
);