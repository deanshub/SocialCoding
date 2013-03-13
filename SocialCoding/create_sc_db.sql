CREATE SCHEMA `socialcoding` ;

CREATE  TABLE `socialcoding`.`git_projects` (
  `repo_url` VARCHAR(500) NOT NULL ,
  PRIMARY KEY (`repo_url`) )
COMMENT = 'This table holds information on all the git projects that are registered with social coding.';

