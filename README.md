# BrowserCache
make a server about browser cache 

pm2 是一个带有负载均衡功能的Node应用的进程管理器，pm2启动后，我们不需要另开一个窗口或停掉服务，便可以进行后续操作 
pm2可以通过配置，启动多个node服务，pm2 list可以查看当前启动的所有node服务
启动服务
pm2 start server/bin/www

关掉进程
pm2 delete ${App name}
