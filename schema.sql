CREATE TABLE questions (
 question_id BIGSERIAL NOT NULL,
 product_id INTEGER NOT NULL,
 question_body VARCHAR(1000) NOT NULL,
 question_date BIGINT NOT NULL DEFAULT EXTRACT(EPOCH FROM NOW()) * 1000,
 asker_name VARCHAR(60) NOT NULL,
 asker_email VARCHAR(60) NOT NULL,
 reported INTEGER NOT NULL DEFAULT 0,
 question_helpfulness INTEGER NOT NULL DEFAULT 0
);


ALTER TABLE questions ADD CONSTRAINT questions_pkey PRIMARY KEY (question_id);

CREATE TABLE answers (
 answer_id BIGSERIAL NOT NULL,
 question_id INTEGER NOT NULL,
 body VARCHAR(1000) NOT NULL,
 "date" BIGINT NOT NULL DEFAULT EXTRACT(EPOCH FROM NOW()) * 1000,
 answerer_name VARCHAR(60) NOT NULL,
 answerer_email VARCHAR(60) NOT NULL,
 reported INTEGER NOT NULL DEFAULT 0,
 helpfulness INTEGER NOT NULL DEFAULT 0
);


ALTER TABLE answers ADD CONSTRAINT answers_pkey PRIMARY KEY (answer_id);

CREATE TABLE answers_photos (
 id BIGSERIAL NOT NULL,
 answer_id INTEGER NOT NULL,
 url VARCHAR NOT NULL
);


ALTER TABLE answers_photos ADD CONSTRAINT answers_photos_pkey PRIMARY KEY (id);

ALTER TABLE answers ADD CONSTRAINT answers_question_id_fkey FOREIGN KEY (question_id)
REFERENCES questions(question_id);
ALTER TABLE answers_photos ADD CONSTRAINT answers_photos_answer_id_fkey FOREIGN KEY (answer_id)
REFERENCES answers(answer_id);