import Axios from "axios";

export default {
    add: function ({ id, gender, birthYear, totalMile, totalTime }) {
        var param = {
            id: id,
            gender: gender,
            birthYear: birthYear,
            totalMile: totalMile,
            totalTime: totalTime
        };
        return Axios.post('/travel-api/travels', param);
    },
    update: function ({ id, gender, birthYear, totalMile, totalTime }) {
        var param = {
            gender: gender,
            birthYear: birthYear,
            totalMile: totalMile,
            totalTime: totalTime
        };
        return Axios.put('/travel-api/travels/' + id, param);
    },
    delete: function ({ id }) {
        return Axios.delete('/travel-api/travels/' + id);
    },
    // deleteBatch: function ({ ids }) {
    //     var param = {
    //         ids: ids
    //     };
    //     return Axios.post('/api/msg-api/deleteBatch', param);
    // },
    getList({ startBirthYear, endBirthYear, startMile, endMile, startTime, endTime, currentPage, pageSize }) {
        var param = {
            pageSize: pageSize,
            pageNum: currentPage - 1,
            startBirthYear: startBirthYear,
            endBirthYear: endBirthYear,
            startMile: startMile,
            endMile: endMile,
            startTime: startTime,
            endTime: endTime
        };
        return Axios.get('/travel-api/travels', { params: param });
    }
}
