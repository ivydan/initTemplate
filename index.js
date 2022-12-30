/*
 * @Author: Ju Dandan judandan0608@163.com
 * @Date : 2022-12-29 14:18:44
 * @LastEditors: Ju Dandan judandan0608@163.com
 * @LastEditTime: 2022-12-30 10:52:54
 * @Description: index
 * 
 */


const { mkdir } = require('./utils/mkdir')
const path = require('path')
const readLine = require('readline')
const process = require('process')

mkdir(path.join(__dirname, "src"))

console.log(process.argv)