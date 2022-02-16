CREATE TABLE IF NOT EXISTS contacts (
  id VARCHAR(64) PRIMARY KEY,
  firstname VARCHAR(128) NOT NULL,
  lastname VARCHAR(128) NOT NULL,
  company VARCHAR(128) NOT NULL,
  favorite BOOLEAN DEFAULT FALSE,
  phones TEXT,
  emails TEXT,
  addresses TEXT
);

INSERT INTO contacts (id, firstname, lastname, company, favorite, phones, emails, addresses)
VALUES
('7hd90as', 'Tyrion', 'Lannister', '', TRUE, '', '', ''),
('9uhg6av', 'Geralt', 'of Rivia', '', TRUE, '', '', ''),
('16ft22a', 'Gandalf', 'the Grey', '', TRUE, '', '', '');