let fs = require('fs');

class DBConnector {

    constructor(data) {
        let that = this;

        fs.readFile('./templates/dbmock.json', 'utf-8', function readData(err, file){
            if(err) {
                console.log(err);
            } else {
                try {
                    that.data = JSON.parse(file);
                } catch (err) {
                    console.log(err);
                }
            }
        });
    }

    getCounters(input) {
        let res = [];
        if (this.data[input]) {
            res.push(this.data[input]);
        }
        return res;
    }
}


module.exports =  new DBConnector();;