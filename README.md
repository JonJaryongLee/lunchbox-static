# 경대도시락 v0.1.0  

## 만든사람: 조교행님  

### No Framework!  
Client: HTML 5, CSS 3, JS(ES6)  
Server: PHP 8  
Database: MariaDB 15  
  
이 프로그램은 모바일 환경에 최적화되어있습니다.  
서버에 올리기위한 도커파일과 SQL 초기샘플파일 포함  

프론트엔드:  
- html: 525Line  
- css: 323Line  
- js: 453Line  

백엔드:  
- php: 409Line  
- sql: 15Line  
- docker: 4Line  

├── db.sql  
├── Dockerfile  
├── html  
│   ├── cancelComplete.html  
│   ├── join.html  
│   ├── login.html  
│   ├── main.html  
│   ├── myorder.html  
│   ├── orderComplete.html  
│   └── order.html  
├── images  
│   ├── favicon.ico  
│   ├── lunchbox-icon.png  
│   └── menu  
│       ├── japanese-curry.jpg  
│       ├── sandwich.jpg  
│       └── shrimp-spaghetti.jpg  
├── index.html  
├── js  
│   ├── cancelComplete.js  
│   ├── firstPage.js  
│   ├── join.js  
│   ├── login.js  
│   ├── main.js  
│   ├── myorder.js  
│   ├── orderComplete.js  
│   └── order.js  
├── php  
│   ├── dbconfig.php  
│   ├── fixOrder.php  
│   ├── getFixOrderInfo.php  
│   ├── getMenu.php  
│   ├── getMyOrder.php  
│   ├── getUserAddressAndDemand.php  
│   ├── getUserSelectedMenu.php  
│   ├── join.php  
│   ├── login.php  
│   ├── logout.php  
│   ├── menuCancel.php  
│   ├── sessionCheck.php  
│   ├── setMenuToSession.php  
│   ├── setOrder.php  
│   └── setOrderTimeToSession.php  
├── README.md  
└── styles  
    ├── allPages.css  
    ├── cancelComplete.css  
    ├── firstPage.css  
    ├── footer.css  
    ├── join.css  
    ├── login.css  
    ├── main.css  
    ├── myorder.css  
    ├── orderComplete.css  
    └── order.css  