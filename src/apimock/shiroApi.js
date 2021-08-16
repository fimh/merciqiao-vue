const Mock = require("mockjs")
/** mockjs start */
var mockObj={
    //初始化
    init(){
        //loginIn
        Mock.mock('/api/shiro-api/login', 'post', this.loginIn);
    },
    //模拟登陆接口
    loginIn:({body})=>{
        var result={
            "status":"SUCCESS",
            "message":"登陆成功",
            "dataList":[
            ],
            "data":{
                "userInfo":{
                    "userId":1,
                    "userName":"ycy",
                    "userNo":"1",
                    "loginName":"ycy",
                    "orgId":null,
                    "orgName":null,
                    "salt":null,
                    "password":null,
                    "email":"",
                    "loginTime":"2019-11-11 10:06:58",
                    "orgParentId":null,
                    "orgParentName":null,
                    "positionName":null,
                    "token":"49DBD6010E41AEDD02959BEAC497DD68"
                },
                "sysRoleVoList":[
                    {
                        "roleName":"管理员"
                    }
                ],
                "rolePermissionVoList":[
                    {
                        "resoureName":"添加",
                        "permission":"liuyan_add"
                    },
                    {
                        "resoureName":"查询",
                        "permission":"liuyan_select"
                    }
                ],
                "sysMenuVoList":[
                    {
                        "id":1,
                        "menuCode":null,
                        "menuName":"系统首页",
                        "menuIcon":"el-icon-tickets",
                        "menuUrl":null,
                        "parentId":"0",
                        "orderBy":"1",
                        "isShow":1,
                        "resoure_url":"index",
                        "resoure_type":"module",
                        "permission":"index",
                        "sysMenuVoChild":[
                            {
                                "id":24,
                                "menuCode":null,
                                "menuName":"系统首页",
                                "menuIcon":"",
                                "menuUrl":null,
                                "parentId":"1",
                                "orderBy":"1",
                                "isShow":1,
                                "resoure_url":"",
                                "resoure_type":"url",
                                "permission":"index",
                                "sysMenuVoChild":[
        
                                ]
                            },
                            // {
                            //     "id":26,
                            //     "menuCode":null,
                            //     "menuName":"建议留言",
                            //     "menuIcon":"",
                            //     "menuUrl":null,
                            //     "parentId":"1",
                            //     "orderBy":"2",
                            //     "isShow":1,
                            //     "resoure_url":"",
                            //     "resoure_type":"url",
                            //     "permission":"msg",
                            //     "sysMenuVoChild":[
        
                            //     ]
                            // }
                        ]
                    },
                    {
                        "id":2,
                        "menuCode":null,
                        "menuName":"基础模块",
                        "menuIcon":"el-icon-view",
                        "menuUrl":null,
                        "parentId":"0",
                        "orderBy":"2",
                        "isShow":1,
                        "resoure_url":null,
                        "resoure_type":"module",
                        "permission":"2",
                        "sysMenuVoChild":[
                            // {
                            //     "id":6,
                            //     "menuCode":null,
                            //     "menuName":"查询输入页",
                            //     "menuIcon":"0",
                            //     "menuUrl":null,
                            //     "parentId":"2",
                            //     "orderBy":"1",
                            //     "isShow":1,
                            //     "resoure_url":"WorkPiece/index",
                            //     "resoure_type":"url",
                            //     "permission":"searchinput",
                            //     "sysMenuVoChild":[
        
                            //     ]
                            // },
                            {
                                "id":7,
                                "menuCode":null,
                                "menuName":"标签选项卡",
                                "menuIcon":"0",
                                "menuUrl":null,
                                "parentId":"2",
                                "orderBy":"2",
                                "isShow":1,
                                "resoure_url":"FlowMonitor/index",
                                "resoure_type":"url",
                                "permission":"tabpage",
                                "sysMenuVoChild":[
        
                                ]
                            },
                            // {
                            //     "id":22,
                            //     "menuCode":null,
                            //     "menuName":"表单页",
                            //     "menuIcon":"",
                            //     "menuUrl":null,
                            //     "parentId":"2",
                            //     "orderBy":"4",
                            //     "isShow":1,
                            //     "resoure_url":"",
                            //     "resoure_type":"url",
                            //     "permission":"formpage",
                            //     "sysMenuVoChild":[
        
                            //     ]
                            // },
                            // {
                            //     "id":23,
                            //     "menuCode":null,
                            //     "menuName":"树组件页",
                            //     "menuIcon":"",
                            //     "menuUrl":null,
                            //     "parentId":"2",
                            //     "orderBy":"5",
                            //     "isShow":1,
                            //     "resoure_url":"",
                            //     "resoure_type":"url",
                            //     "permission":"treepage",
                            //     "sysMenuVoChild":[
        
                            //     ]
                            // },
                            // {
                            //     "id":27,
                            //     "menuCode":null,
                            //     "menuName":"综合表单页",
                            //     "menuIcon":"",
                            //     "menuUrl":null,
                            //     "parentId":"2",
                            //     "orderBy":"1",
                            //     "isShow":1,
                            //     "resoure_url":"",
                            //     "resoure_type":"url",
                            //     "permission":"messageboard",
                            //     "sysMenuVoChild":[
                            //         {
                            //             "id":29,
                            //             "menuCode":null,
                            //             "menuName":"详情页",
                            //             "menuIcon":"",
                            //             "menuUrl":null,
                            //             "parentId":"27",
                            //             "orderBy":"",
                            //             "isShow":0,
                            //             "resoure_url":"",
                            //             "resoure_type":"url",
                            //             "permission":"detail",
                            //             "sysMenuVoChild":[
        
                            //             ]
                            //         }
                            //     ]
                            // },
                            // {
                            //     "id":30,
                            //     "menuCode":null,
                            //     "menuName":"富文本编辑器",
                            //     "menuIcon":"",
                            //     "menuUrl":null,
                            //     "parentId":"2",
                            //     "orderBy":"",
                            //     "isShow":1,
                            //     "resoure_url":"",
                            //     "resoure_type":"url",
                            //     "permission":"ckeditor",
                            //     "sysMenuVoChild":[
        
                            //     ]
                            // },
                            {
                                "id":33,
                                "menuCode":null,
                                "menuName":"综合表单页2",
                                "menuIcon":"",
                                "menuUrl":null,
                                "parentId":"2",
                                "orderBy":"",
                                "isShow":1,
                                "resoure_url":"",
                                "resoure_type":"url",
                                "permission":"messageboard2",
                                "sysMenuVoChild":[
        
                                ]
                            },
                            {
                                "id":34,
                                "menuCode":null,
                                "menuName":"Travel Info Board",
                                "menuIcon":"",
                                "menuUrl":null,
                                "parentId":"2",
                                "orderBy":"",
                                "isShow":1,
                                "resoure_url":"",
                                "resoure_type":"url",
                                "permission":"travelinfoboard",
                                "sysMenuVoChild":[
        
                                ]
                            },
                            // {
                            //     "id":35,
                            //     "menuCode":null,
                            //     "menuName":"左导航切换效果",
                            //     "menuIcon":"",
                            //     "menuUrl":null,
                            //     "parentId":"2",
                            //     "orderBy":"",
                            //     "isShow":1,
                            //     "resoure_url":"",
                            //     "resoure_type":"url",
                            //     "permission":"transition",
                            //     "sysMenuVoChild":[
        
                            //     ]
                            // }
                        ]
                    },
                    // {
                    //     "id":3,
                    //     "menuCode":null,
                    //     "menuName":"系统管理",
                    //     "menuIcon":"el-icon-setting",
                    //     "menuUrl":null,
                    //     "parentId":"0",
                    //     "orderBy":"3",
                    //     "isShow":1,
                    //     "resoure_url":null,
                    //     "resoure_type":"module",
                    //     "permission":"3",
                    //     "sysMenuVoChild":[
                    //         {
                    //             "id":8,
                    //             "menuCode":null,
                    //             "menuName":"机构管理",
                    //             "menuIcon":"0",
                    //             "menuUrl":null,
                    //             "parentId":"3",
                    //             "orderBy":"1",
                    //             "isShow":0,
                    //             "resoure_url":"Admin/OrganizationTree",
                    //             "resoure_type":"url",
                    //             "permission":"organizationTree",
                    //             "sysMenuVoChild":[
        
                    //             ]
                    //         },
                    //         {
                    //             "id":9,
                    //             "menuCode":null,
                    //             "menuName":"用户管理",
                    //             "menuIcon":"0",
                    //             "menuUrl":null,
                    //             "parentId":"3",
                    //             "orderBy":"2",
                    //             "isShow":1,
                    //             "resoure_url":"Admin/SysUser",
                    //             "resoure_type":"url",
                    //             "permission":"sysUser",
                    //             "sysMenuVoChild":[
        
                    //             ]
                    //         },
                    //         {
                    //             "id":11,
                    //             "menuCode":null,
                    //             "menuName":"角色管理",
                    //             "menuIcon":"0",
                    //             "menuUrl":null,
                    //             "parentId":"3",
                    //             "orderBy":"4",
                    //             "isShow":1,
                    //             "resoure_url":"Admin/SysRole",
                    //             "resoure_type":"url",
                    //             "permission":"sysRole",
                    //             "sysMenuVoChild":[
        
                    //             ]
                    //         },
                    //         // {
                    //         //     "id":12,
                    //         //     "menuCode":null,
                    //         //     "menuName":"资源管理",
                    //         //     "menuIcon":"0",
                    //         //     "menuUrl":null,
                    //         //     "parentId":"3",
                    //         //     "orderBy":"5",
                    //         //     "isShow":1,
                    //         //     "resoure_url":"Admin/SysResource",
                    //         //     "resoure_type":"url",
                    //         //     "permission":"sysResource",
                    //         //     "sysMenuVoChild":[
        
                    //         //     ]
                    //         // },
                    //         // {
                    //         //     "id":14,
                    //         //     "menuCode":null,
                    //         //     "menuName":"菜单管理",
                    //         //     "menuIcon":"0",
                    //         //     "menuUrl":null,
                    //         //     "parentId":"3",
                    //         //     "orderBy":"7",
                    //         //     "isShow":1,
                    //         //     "resoure_url":"Admin/SysMenu",
                    //         //     "resoure_type":"url",
                    //         //     "permission":"sysMenu",
                    //         //     "sysMenuVoChild":[
        
                    //         //     ]
                    //         // },
                    //         // {
                    //         //     "id":15,
                    //         //     "menuCode":null,
                    //         //     "menuName":"角色资源授权",
                    //         //     "menuIcon":"0",
                    //         //     "menuUrl":null,
                    //         //     "parentId":"3",
                    //         //     "orderBy":"8",
                    //         //     "isShow":1,
                    //         //     "resoure_url":"Admin/SysAcl",
                    //         //     "resoure_type":"url",
                    //         //     "permission":"sysAcl",
                    //         //     "sysMenuVoChild":[
                    //         //     ]
                    //         // }
                    //     ]
                    // }
                ]
            },
            "count":null,
            "sucess":true
        };
        return result;
    }
}
//初始化mock数据和接口
mockObj.init();

/** mockjs end */