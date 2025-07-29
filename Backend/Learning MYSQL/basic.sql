create database college;
USE college;

create table if not exists student (
roll_no INT PRIMARY KEY,
name VARCHAR(20) NOT NULL,
subject VARCHAR(20),
email VARCHAR (20) unique,
age INT check (age>=13)
);

create table if not exists teacher (
t_id INT PRIMARY KEY,
t_name VARCHAR(20) NOT NULL,
s_id INT,
foreign key (s_id) references student (roll_no)
);

insert into student (roll_no, name, subject, email, age)
values 
(1,"vedant","NEXT_JS","vedant@gmail.com",16),
(2,"tejas","java","tejas@gmail.com",15),
(3,"sarthak","nodejs","sarthak@gmail.com",14);

insert into student (roll_no, name, subject, email, age)
values 
(4,"sahil","react_JS","sahil@gmail.com",14);

select distinct age FROM  student;
select * from student;


insert into teacher (t_id, t_name, s_id)
values 
(102, 'Mr. Sharma', 5),
(103, 'Ms. Kapoor', 6),
(104, 'Mr. Verma', 7),
(105, 'Ms. Das', 8),
(106, 'Dr. Mehta', 9),
(107, 'Mr. Joshi', 10),
(108, 'Ms. Singh', 11),
(109, 'Mr. Rao', 12);


select * from teacher;


INSERT INTO student (roll_no, name, subject, email, age) VALUES
(5, 'Rahul', 'Maths', 'rahul@example.com', 18),
(6, 'Priya', 'Science', 'priya@example.com', 17),
(7, 'Aman', 'English', 'aman@example.com', 19),
(8, 'Sneha', 'History', 'sneha@example.com', 20),
(9, 'Raj', 'Geography', 'raj@example.com', 16),
(10, 'Meena', 'Biology', 'meena@example.com', 15),
(11, 'Ankit', 'Physics', 'ankit@example.com', 18),
(12, 'Divya', 'Chemistry', 'divya@example.com', 17),
(13, 'Neha', 'Maths', 'neha@example.com', 16),
(14, 'Kiran', 'Civics', 'kiran@example.com', 19);

select * FROM student where roll_no > 10 AND age <17;
select * FROM student where age between 18  AND 19;
select * FROM student where email IN ("neha@example.com" , "kiran@example.com");
select * FROM student where age NOT IN (15,11);

SELECT MAX(age) FROM student;

SELECT COUNT(age) FROM 	student;

SELECT subject, MAX(age) FROM student GROUP BY subject;
