const Mock = require("mockjs")
/** mockjs start */
var mockObj = {
    //初始化
    init() {
        //loginIn
        Mock.mock('/api/shiro-api/login', 'post', this.loginIn);
    },
    //模拟登陆接口
    loginIn: ({ body }) => {
        var result = {
            "status": "SUCCESS",
            "message": "登陆成功",
            "dataList": [
            ],
            "data": {
                "userInfo": {
                    "userId": 1,
                    "userName": "ycy",
                    "userNo": "1",
                    "loginName": "ycy",
                    "orgId": null,
                    "orgName": null,
                    "salt": null,
                    "password": null,
                    "email": "",
                    "loginTime": "2019-11-11 10:06:58",
                    "orgParentId": null,
                    "orgParentName": null,
                    "positionName": null,
                    "token": "49DBD6010E41AEDD02959BEAC497DD68"
                },
                "sysRoleVoList": [
                    {
                        "roleName": "管理员"
                    }
                ],
                "rolePermissionVoList": [
                    {
                        "resoureName": "添加",
                        "permission": "liuyan_add"
                    },
                    {
                        "resoureName": "查询",
                        "permission": "liuyan_select"
                    }
                ],
                "sysMenuVoList": [
                    {
                        "id": 2,
                        "menuCode": null,
                        "menuName": "基础模块",
                        "menuIcon": "el-icon-tickets",
                        "menuUrl": null,
                        "parentId": "0",
                        "orderBy": "2",
                        "isShow": 1,
                        "resoure_url": null,
                        "resoure_type": "module",
                        "permission": "2",
                        "sysMenuVoChild": [
                            {
                                "id": 7,
                                "menuCode": null,
                                "menuName": "标签选项卡",
                                "menuIcon": "0",
                                "menuUrl": null,
                                "parentId": "2",
                                "orderBy": "2",
                                "isShow": 1,
                                "resoure_url": "FlowMonitor/index",
                                "resoure_type": "url",
                                "permission": "tabpage",
                                "sysMenuVoChild": [

                                ]
                            },
                            {
                                "id": 34,
                                "menuCode": null,
                                "menuName": "Travel Info Board",
                                "menuIcon": "",
                                "menuUrl": null,
                                "parentId": "2",
                                "orderBy": "",
                                "isShow": 1,
                                "resoure_url": "",
                                "resoure_type": "url",
                                "permission": "travelinfoboard",
                                "sysMenuVoChild": [
                                ]
                            }
                        ]
                    },
                ]
            },
            "count": null,
            "sucess": true
        };
        return result;
    }
}
//初始化mock数据和接口
mockObj.init();

/** mockjs end */