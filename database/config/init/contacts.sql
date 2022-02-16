CREATE TABLE IF NOT EXISTS contact (
  id VARCHAR(64) PRIMARY KEY,
  firstname VARCHAR(128) NOT NULL,
  lastname VARCHAR(128) NOT NULL,
  company VARCHAR(128) NOT NULL,
  favorite BOOLEAN DEFAULT FALSE
);

CREATE TABLE IF NOT EXISTS contact_address (
  id INT PRIMARY KEY,
  label VARCHAR(64) NOT NULL,
  value VARCHAR(128) NOT NULL,
  "contactId" VARCHAR(64) NOT NULL REFERENCES contact (id) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS contact_email (
  id INT PRIMARY KEY,
  label VARCHAR(64) NOT NULL,
  value VARCHAR(64) NOT NULL,
  "contactId" VARCHAR(64) NOT NULL REFERENCES contact (id) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS contact_phone (
  id INT PRIMARY KEY,
  label VARCHAR(64) NOT NULL,
  value VARCHAR(64) NOT NULL,
  "contactId" VARCHAR(64) NOT NULL REFERENCES contact (id) ON UPDATE CASCADE ON DELETE CASCADE
);

INSERT INTO contact (id, firstname, lastname, company, favorite)
VALUES
('7hd90as', 'Tyrion', 'Lannister', '', TRUE),
('9uhg6av', 'Geralt', 'of Rivia', '', TRUE),
('16ft22a', 'Gandalf', 'the Grey', '', TRUE);