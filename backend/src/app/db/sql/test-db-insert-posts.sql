INSERT INTO posts(user_id, title)
WITH expanded AS (
  SELECT RANDOM(), seq, u.id AS user_id
  FROM GENERATE_SERIES(1, 50) seq, users u
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
  'It is ' || s.seq || ' ' || (
    CASE (RANDOM() * 2)::INT
      WHEN 0 THEN 'sql'
      WHEN 1 THEN 'elixir'
      WHEN 2 THEN 'ruby'
    END
  ) as title
FROM shuffled s;

SELECT * FROM posts LIMIT 10;
