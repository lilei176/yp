const express=require("express")
const router=express.Router();

const pool=require("../pool")

//查询指定商品列表
router.get("/list",(req,res)=>{
    var subject=req.query.subject;
	console.log(subject);
    var sql="SELECT * FROM product WHERE subject=?";
    pool.query(sql,[subject],(err,result)=>{
        if(err) throw err;
        if(result.length==0){
            res.send({code:-1,msg:"该商品不存在"});
        }else{ 
            res.send({code:1,msg:"查询成功",result});
			console.log(result)
        }
    })
})

//主页商品
router.get("/indexprodcut",(req,res)=>{
    var sql="SELECT * FROM index_product";
    pool.query(sql,[],(err,result)=>{
        if(err) throw err;
        res.send({code:1,msg:"查询成功",result});
		console.log(result)
        
    })
})

router.get("/productlist",(req,res)=>{
    var sql="SELECT * FROM product_car";
    pool.query(sql,[],(err,result)=>{
        if(err) throw err;
        res.send({code:1,msg:"查询成功",result});
		console.log(result)
        
    })
})

//商品详情
router.get("/detail",(req,res)=>{
	var pid=req.query.pid
    var sql="SELECT * FROM detail_list WHERE pid=?";
    pool.query(sql,[pid],(err,result)=>{
        if(err) throw err;
        res.send({code:1,msg:"查询成功",result});
		console.log(result)    
    })
})

//taste 页面
router.get("/taste",(req,res)=>{
    var sql="SELECT * FROM taset";
    pool.query(sql,[],(err,result)=>{
        if(err) throw err;
        res.send({code:1,msg:"查询成功",result});
		console.log(result)      
    })
})

//购物车商品
router.get("/cart",(req,res)=>{
	var uid=req.query.uid
    var sql="SELECT * FROM yp_cart WHERE uid=?";
    pool.query(sql,[uid],(err,result)=>{
        if(err) throw err;
        res.send({code:1,msg:"查询成功",result});
		console.log(result)    
    })
})


////按照pid删除指定商品
//router.get("/del_shop",(req,res)=>{
//  var pid=req.query.pid;
//  //console.log(pid)
//  pool.query("DELETE FROM `xm_shop_car` WHERE pid=?",[pid],(err,result)=>{
//    if(err) throw err;
//    res.send({code:1,data:"删除成功"})
// //   console.log(result);
//  })
//})
//
////查询所有商品列表xm_product_car
//router.get("/product_car",(req,res)=>{
//  pool.query("SELECT * FROM xm_product_car",(err,result)=>{
//    if(err) throw err;
//    res.send({code:1,data:result})
//  })
//})
////按cid查询商品列表xm_product_car
//router.get("/shopping",(req,res)=>{
//  var cid=req.query.cid;
// // console.log(cid);
//  pool.query("SELECT * FROM xm_product_car where cid=?",[cid],(err,result)=>{
//	if(err) throw err;
//	res.send(result);
//	//console.log(result);
//  })
//})

//插入指定uid用户的商品到购物车表中
router.get("/addcart",(req,res)=>{
  var uid=req.query.uid;
  var title=req.query.title;
  var price=req.query.price;
  var img=req.query.img;
  var count=req.query.count;
  var cid=req.query.pid;
  //console.log(title,price,img,count,total,pid)
  pool.query("SELECT * FROM yp_cart where uid=? and cid=?",[uid,cid],(err,result)=>{
    if(err)throw err;
    //console.log(result);
    if(result.length>0){
      pool.query("UPDATE yp_cart SET count=count+? WHERE uid=? and cid=?",[count,uid,cid],(err,result)=>{
        if(err) throw err;
        res.send({code:1,msg:"加入成功"})
      })
    }else{
      pool.query("INSERT INTO `yp_cart`(`pid`, `title`, `price`, `img`, `count`, `uid`, `cid`) VALUES (null,?,?,?,?,?,?)",[title,price,img,count,uid,cid],(err,result)=>{
        if(err) throw err;
        if(result.affectedRows>0){
            res.send({code:1,msg:"加入成功"})
        }
      })
    }
  })
})

module.exports=router;



