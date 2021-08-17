const Mock = require("mockjs")
/** mockjs start */
var mockObj={
    dataList:[],
    count:60,
    //初始化
    init(){
        for (let i = 0; i < this.count; i++) {
            var data= Mock.mock({
                            id: Mock.Random.integer(10000, 1000000),
                            gender:Mock.Random.integer(0, 1),
                            birthYear: Mock.Random.integer(1950, 2000),
                            totalMile: Mock.Random.integer(2000, 20000),
                            totalTime: Mock.Random.integer(10, 100)
                        });
            this.dataList.push(data);
        }
        //getList
        Mock.mock('/api/msg-api/queryList', 'post', this.getList);
    },
    getList:({body})=>{
        var param=JSON.parse(body);
        var pageSize=param.pageSize;
        var currentPage=param.currentPage;
        const pageList = mockObj.dataList.filter((item, index) => {
            return index >= pageSize * (currentPage-1)  &&  index < pageSize * currentPage+1
        })
        var result={
            "status":"SUCCESS",
            "message":"执行成功",
            "data":pageList,
            "count":mockObj.dataList.length
        }
        return result;
    }
}
//初始化mock数据和接口
mockObj.init();

/** mockjs end */