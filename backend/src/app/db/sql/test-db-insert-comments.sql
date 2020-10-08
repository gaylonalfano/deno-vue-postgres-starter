/* https://vnegrisolo.github.io/postgresql/generate-fake-data-using-sql */
INSERT INTO comments(user_id, post_id, body)
WITH expanded AS (
  SELECT RANDOM(), seq, u.id AS user_id, p.id AS post_id
  FROM GENERATE_SERIES(1, 200) seq, users u, posts p
), shuffled AS (
  SELECT e.*
  FROM expanded e
  INNER JOIN (
    SELECT ei.seq, MIN(ei.random) FROM expanded ei GROUP BY ei.seq
  ) em ON (e.seq = em.seq AND e.random = em.min)
  ORDER BY e.seq
)
SELECT
  s.user_id,
  s.post_id,
  'Here some comment ' || s.seq AS body
FROM shuffled s;

SELECT * FROM comments LIMIT 10;
