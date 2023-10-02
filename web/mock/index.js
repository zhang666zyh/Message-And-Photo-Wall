let Mock = require('mockjs')

// 留言node
export const note = Mock.mock({
  "data|20": [{
    "moment": new Date(),// 创建时间
    "id|+1": 1,// id
    "userId|+1": 10, // userId
    "message|24-96": "@cword", // 内容
    "label|0-10": 0, // 标签
    "name": "@cname", // name
    "like|0-120": 0,// like
    "comment|0-120": 0, // 评论 
    "imgurl|0-4": 0, // 背景色
    "revoke|0-20": 0, // 是否撤销
    "report|0-20": 0, // 是否举报
    "type": 0,//类型  
  }]
})

// 评论
export const comment = Mock.mock({
  "data|19": [{
    "moment": new Date(),// 创建时间
    "id|+1": 1,// id
    "userId|+1": 10, // userId
    "message|24-96": "@cword", // 内容
    "name": "@cname", // name
    "imgurl|0-13": 0, // 背景色 
  }]
})
