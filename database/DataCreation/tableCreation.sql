

CREATE TABLE administrator (
id BIGSERIAL NOT NULL PRIMARY KEY,
username VARCHAR(50) UNIQUE NOT NULL ,
user_email VARCHAR(50) UNIQUE NOT NULL ,
password VARCHAR(50) NOT NULL,
role INT DEFAULT 0,
admin_name VARCHAR(50) NOT NULL ,
permission_level INT NOT NULL 
);

CREATE TABLE company (
id BIGSERIAL NOT NULL PRIMARY KEY,
username VARCHAR(50) UNIQUE NOT NULL ,
user_email VARCHAR(50) UNIQUE NOT NULL ,
password VARCHAR(50) NOT NULL,
role INT DEFAULT 1,
company_name VARCHAR(50) NOT NULL ,
description VARCHAR(500) NOT NULL ,
city_name VARCHAR(50) NOT NULL ,
address VARCHAR(50) NOT NULL 
);

CREATE TABLE intern (
id BIGSERIAL NOT NULL PRIMARY KEY,
username VARCHAR(50) UNIQUE NOT NULL ,
user_email VARCHAR(50) UNIQUE NOT NULL ,
password VARCHAR(50) NOT NULL,
role INT DEFAULT 2,
first_name VARCHAR(50) NOT NULL ,
last_name VARCHAR(50) NOT NULL ,
univiersity_name VARCHAR(50) NOT NULL ,
major VARCHAR(50) NOT NULL ,
gender VARCHAR(50) NOT NULL ,
cGpa NUMERIC (3, 2) NOT NULL 
);

CREATE TABLE internship (
id BIGSERIAL NOT NULL PRIMARY KEY,
company_id INT NOT NULL,
job_function VARCHAR(250) NOT NULL ,
description VARCHAR(500) NOT NULL ,
requirements VARCHAR(250) NOT NULL ,
duration VARCHAR(50) NOT NULL ,
address VARCHAR(50) NOT NULL ,
FOREIGN KEY (company_id) REFERENCES company(id) ON DELETE CASCADE
);
--connect with company connect with app form

CREATE TABLE company_reviews (
id BIGSERIAL NOT NULL PRIMARY KEY,
company_id INT NOT NULL,
intern_id INT NOT NULL,
description VARCHAR(50) NOT NULL ,
prons_description VARCHAR(50) ,
cons_description VARCHAR(50) NOT NULL,
overal_rating INT NOT NULL,
FOREIGN KEY (company_id) REFERENCES company(id) ON DELETE CASCADE,
FOREIGN KEY (intern_id) REFERENCES intern(id) ON DELETE CASCADE
);

CREATE TABLE application_form (
id BIGSERIAL NOT NULL PRIMARY KEY,
intern_id INT NOT NULL,
internship_id INT NOT NULL,
role_name VARCHAR(250) NOT NULL ,
company_name VARCHAR(50) ,
industry VARCHAR(50) NOT NULL ,
start_date timestamp NOT NULL,
end_date timestamp NOT NULL,
description VARCHAR(250) NOT NULL,
FOREIGN KEY (internship_id) REFERENCES internship(id) ON DELETE CASCADE,
FOREIGN KEY (intern_id) REFERENCES intern(id) ON DELETE CASCADE
);
--application status if user creates app applied
--cv should be added
--start date and end date not clear maybe change format

CREATE TABLE experience (
id BIGSERIAL NOT NULL PRIMARY KEY,
intern_id INT NOT NULL,
application_status VARCHAR(50) NOT NULL DEFAULT 'applied' ,
application_date timestamp DEFAULT CURRENT_TIMESTAMP,
comments VARCHAR(250),
FOREIGN KEY (intern_id) REFERENCES intern(id) ON DELETE CASCADE
);

CREATE TABLE projects (
id BIGSERIAL NOT NULL PRIMARY KEY,
intern_id INT NOT NULL,
description VARCHAR(250) NOT NULL,
project_link VARCHAR(250) ,
project_duration Varchar(50) NOT NULL,
FOREIGN KEY (intern_id) REFERENCES intern(id) ON DELETE CASCADE
);

CREATE TABLE skills (
id BIGSERIAL NOT NULL PRIMARY KEY,
skill_type VARCHAR(50) NOT NULL,
skill_level VARCHAR(50) 
);

CREATE TABLE intern_skill (
intern_id INT NOT NULL,
skill_id INT NOT NULL,
PRIMARY KEY (intern_id, skill_id),
FOREIGN KEY (intern_id) REFERENCES intern(id) ON UPDATE CASCADE,
FOREIGN KEY (skill_id) REFERENCES skills(id) ON UPDATE CASCADE
);

CREATE TABLE internship_skill (
internship_id INT NOT NULL,
skill_id INT NOT NULL,
PRIMARY KEY (intership_id, skill_id),
FOREIGN KEY (internship_id) REFERENCES internship(id) ON UPDATE CASCADE,
FOREIGN KEY (skill_id) REFERENCES skills(id) ON UPDATE CASCADE
);



CREATE TABLE liked_internship (
intern_id INT NOT NULL,
internship_id INT NOT NULL,
liked_date timestamp DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY (intern_id, internship_id),
FOREIGN KEY (intern_id) REFERENCES intern(id) ON UPDATE CASCADE,
FOREIGN KEY (internship_id) REFERENCES internship(id) ON UPDATE CASCADE
);
--maybe add stust liked and unliked?

CREATE TABLE intern_management (
intern_id INT NOT NULL,
administrator_id INT NOT NULL,
action_type VARCHAR[50] NOT NULL,
comment VARCHAR[250],
PRIMARY KEY (intern_id, administrator_id),
FOREIGN KEY (intern_id) REFERENCES intern(id) ON UPDATE CASCADE,
FOREIGN KEY (administrator_id) REFERENCES administrator(id) ON UPDATE CASCADE
);

CREATE TABLE company_management (
company_id INT NOT NULL,
administrator_id INT NOT NULL,
action_type VARCHAR[50] NOT NULL,
comment VARCHAR[250],
PRIMARY KEY (company_id, administrator_id),
FOREIGN KEY (company_id) REFERENCES company(id) ON UPDATE CASCADE,
FOREIGN KEY (administrator_id) REFERENCES administrator(id) ON UPDATE CASCADE
);

CREATE TABLE review_management (
company_reviews_id INT NOT NULL,
administrator_id INT NOT NULL,
action_type VARCHAR[50] NOT NULL,
comment VARCHAR[250],
PRIMARY KEY (company_reviews_id, administrator_id),
FOREIGN KEY (company_reviews_id) REFERENCES company_reviews(id) ON UPDATE CASCADE,
FOREIGN KEY (administrator_id) REFERENCES administrator(id) ON UPDATE CASCADE
);
