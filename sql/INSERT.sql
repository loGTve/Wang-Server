--Input Test Value to account Table
INSERT INTO account (nickname, email)
VALUES (
     'loGTve',
     'loGTve@naver.com'
) RETURNING nickname, email;