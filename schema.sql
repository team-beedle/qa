CREATE TABLE questions (
 id BIGSERIAL NOT NULL,
 product_id INTEGER NOT NULL,
 question_body VARCHAR(1000) NOT NULL,
 question_date BIGINT NOT NULL,
 asker_name VARCHAR(60) NOT NULL,
 asker_email VARCHAR(60) NOT NULL,
 reported BIT NOT NULL,
 helpfulness INTEGER NOT NULL
);


ALTER TABLE questions ADD CONSTRAINT questions_pkey PRIMARY KEY (id);

CREATE TABLE answers (
 id BIGSERIAL NOT NULL,
 question_id INTEGER NOT NULL,
 answer_body VARCHAR(1000) NOT NULL,
 answer_date BIGINT NOT NULL,
 answerer_name VARCHAR(60) NOT NULL,
 answerer_email VARCHAR(60) NOT NULL,
 reported BIT NOT NULL,
 helpfulness INTEGER NOT NULL
);


ALTER TABLE answers ADD CONSTRAINT answers_pkey PRIMARY KEY (id);

CREATE TABLE answers_photos (
 id BIGSERIAL NOT NULL,
 answer_id INTEGER NOT NULL,
 url VARCHAR NOT NULL
);


ALTER TABLE answers_photos ADD CONSTRAINT answers_photos_pkey PRIMARY KEY (id);

ALTER TABLE answers ADD CONSTRAINT answers_question_id_fkey FOREIGN KEY (question_id) REFERENCES questions(id);
ALTER TABLE answers_photos ADD CONSTRAINT answers_photos_answer_id_fkey FOREIGN KEY (answer_id) REFERENCES answers(id);