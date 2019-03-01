const server = require('./apiwidget/server')

const portyMcPortFace = process.env.PORT || 9000;
server.listen(portyMcPortFace, () => console.log(`Hello World.  I is running on port ${portyMcPortFace}`));