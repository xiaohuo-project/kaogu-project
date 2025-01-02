// netlify/functions/visit-count.js
const fs = require('fs');
const path = require('path');

// 访问次数文件路径
const VISIT_COUNT_FILE = path.join(__dirname, 'visit_count.txt');

// 初始化访问次数文件
if (!fs.existsSync(VISIT_COUNT_FILE)) {
    fs.writeFileSync(VISIT_COUNT_FILE, '0');
}

exports.handler = async (event, context) => {
    try {
        // 读取当前访问次数
        let count = parseInt(fs.readFileSync(VISIT_COUNT_FILE, 'utf8').trim());
        
        // 增加访问次数
        count += 1;
        
        // 写回文件
        fs.writeFileSync(VISIT_COUNT_FILE, count.toString());
        
        // 返回访问次数
        return {
            statusCode: 200,
            body: JSON.stringify({ visit_count: count }),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: '无法获取访问次数' }),
        };
    }
};