# Node.js 开放接口框架选择

现在有很多 Node.js 框架可以选择，有个困惑：到底应该选择哪个给开放接口（Rest API）项目使用呢？下面是对诸多流行框架做的测试，走过路过千万不要错过。

# 上下文

- *系统*: CentOS Linux release 7.3.1611 (Core)
- *CPU 核心数量*: 2
- *内存(gb)*: 2
- *固态硬盘(gb)*: 60
- *NODE*: 8.1.3
- *NPM*: 5.0.4

# Httpd 测试结果

> ab -k -n 50000 -c 10 -t 20 http://127.0.0.1:8000/

框架              | 版本   | 请求/秒  | 请求/分钟 | 请求/小时  | 请求/天     | 点赞
------------------|--------|----------|-----------|------------|-------------|-------
**raw http node** | 8.1.3  | 11309.84 | 678,600   | 40,716,000 | 977,184,000 | 36,602
**total.js**      | 2.6.2  | 7596.63  | 455,820   | 27,349,200 | 656,380,800 | 3,204
**koa2**          | 2.3.0  | 7385.68  | 443,260   | 26,595,600 | 638,294,400 | 16,183
**express**       | 4.15.3 | 6180.50  | 370,860   | 22,251,600 | 534,038,400 | 32,638
**restify**       | 5.0.0  | 5641.30  | 338,460   | 20,307,600 | 487,382,400 | 6,897
**hapi**          | 16.4.3 | 1572.54  | 94,380    | 5,662,800  | 135,907,200 | 7,989

# Wrk 测试结果

> wrk -t2 -c1000 -d10s -T30s --latency http://127.0.0.1:8000/

**koa2** v2.3.0
```shell
Running 10s test @ http://127.0.0.1:8000/
  2 threads and 1000 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    27.74ms   33.82ms 826.47ms   97.78%
    Req/Sec     3.51k     1.38k    6.81k    73.44%
  Latency Distribution
     50%   22.69ms
     75%   30.50ms
     90%   39.36ms
     99%  148.98ms
  69789 requests in 10.04s, 9.85MB read
Requests/sec:   6949.18
Transfer/sec:      0.98MB
```


**hapi** v16.4.3
```shell
Running 10s test @ http://127.0.0.1:8000/
  2 threads and 1000 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   163.72ms   85.24ms   1.62s    94.19%
    Req/Sec   777.96    350.02     1.59k    63.74%
  Latency Distribution
     50%  169.40ms
     75%  185.06ms
     90%  201.05ms
     99%  570.23ms
  14575 requests in 10.09s, 3.02MB read
Requests/sec:   1444.98
Transfer/sec:    306.21KB
```



**express** v4.15.3
```shell
Running 10s test @ http://127.0.0.1:8000/
  2 threads and 1000 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    37.97ms   27.45ms 834.09ms   95.28%
    Req/Sec     2.79k   733.63     5.10k    74.61%
  Latency Distribution
     50%   34.35ms
     75%   44.96ms
     90%   54.67ms
     99%  147.80ms
  55498 requests in 10.07s, 11.17MB read
Requests/sec:   5513.19
Transfer/sec:      1.11MB
```



**node** v8.1.3
```shell
Running 10s test @ http://127.0.0.1:8000/
  2 threads and 1000 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    19.55ms   21.53ms 436.37ms   96.43%
    Req/Sec     4.57k     1.74k   10.04k    71.88%
  Latency Distribution
     50%   15.62ms
     75%   22.55ms
     90%   31.79ms
     99%  107.92ms
  91561 requests in 10.09s, 9.34MB read
Requests/sec:   9073.24
Transfer/sec:      0.93MB
```



**restify** v5.0.0
```shell
Running 10s test @ http://127.0.0.1:8000/
  2 threads and 1000 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    45.36ms   30.87ms 824.53ms   96.46%
    Req/Sec     2.65k     0.93k    5.23k    73.71%
  Latency Distribution
     50%   42.22ms
     75%   50.75ms
     90%   59.19ms
     99%  196.25ms
  52842 requests in 10.07s, 7.96MB read
Requests/sec:   5247.08
Transfer/sec:    809.61KB
```



**total.js** v2.6.2
```shell
Running 10s test @ http://127.0.0.1:8000/
  2 threads and 1000 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    93.49ms   19.57ms 431.27ms   92.83%
    Req/Sec     5.16k     0.87k    7.14k    72.82%
  Latency Distribution
     50%   91.59ms
     75%   97.61ms
     90%  104.54ms
     99%  171.07ms
  102430 requests in 10.09s, 23.64MB read
Requests/sec:  10156.62
Transfer/sec:      2.34MB
```
