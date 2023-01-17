-- SELECT 'nickname, items' FROM 'account' Table
SELECT account_info -> 'nickname' AS nickname
FROM account;

SELECT account_info -> 'items' ->> 'email' AS email
FROM account;