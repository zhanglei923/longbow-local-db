let localdb = require('./longbow-local-db');

for(let i=0;i<200;i++)
localdb.saveAllData('repo1', 'project1', {a:1})