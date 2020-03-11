// 云函数入口文件
const cloud = require('wx-server-sdk')

const {
  ImageClient
} = require('image-node-sdk');

cloud.init()

let AppId = '1300921752'; // 腾讯云 AppId
let SecretId = 'AKIDu5DC0grP1WM3dAqowteHl6HJBwWw7NPI'; // 腾讯云 SecretId
let SecretKey = 'tX4XpzzrZBYowslXBez9SnAQXWQJl7JQ'; // 腾讯云 SecretKey

// 云函数入口函数
exports.main = async (event, context) => {


  let idCardImageUrl =event.src;

  let imgClient = new ImageClient({ AppId, SecretId, SecretKey });
  let result;
  try{ 
    result = await imgClient.ocrBizCard({
      data: {
        url_list: [idCardImageUrl]
      }
    })
  }catch(e){
    return {'error': true}
  }
   
  return result.body

}


 
// let idCardImageUrl = 'http://images.cnitblog.com/blog/454646/201306/07090518-029ff26fac014d72a7786937e8319c78.jpg';
// let imgClient = new ImageClient({ AppId, SecretId, SecretKey });
// imgClient.ocrIdCard({
//   data: {
//     url_list: [idCardImageUrl]
//   }
// }).then((result) => {
//   console.log(result.body)
// }).catch((e) => {
//   console.log(e);
// });