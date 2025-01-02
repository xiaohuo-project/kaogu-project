// netlify/functions/visit-count.js
exports.handler = async (event, context) => {
    try {
        // 读取当前访问次数
        let count = parseInt(process.env.VISIT_COUNT || '0');
        
        // 增加访问次数
        count += 1;
        
        // 更新环境变量
        process.env.VISIT_COUNT = count.toString();
        
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
