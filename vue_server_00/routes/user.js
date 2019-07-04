const express=require("express")
const router=express.Router();

const pool=require("../pool")

//账号登录接口
router.get("/login",(req,res)=>{
    var uname=req.query.uname;
    var upwd=req.query.upwd;
    var sql="SELECT * FROM yp_user WHERE uname=? AND upwd=?";
    pool.query(sql,[uname,upwd],(err,result)=>{
        if(err) throw err;
        if(result.length==0){
            res.send({code:-1,msg:"手机号或密码不正确！"});
        }else{ 
			var uid=result[0].uid;
			var realname=result[0].realname
            res.send({code:1,msg:"登录成功",uid:uid,realname:realname});
        }
    })
})



//注册接口
router.get("/reg",(req,res)=>{
    var uname=req.query.uname;
	var upwd=req.query.upwd;
	console.log(uname,upwd)
    var sql="SELECT * FROM yp_user WHERE uname=?";
    pool.query(sql,[uname],(err,result)=>{
        if(err) throw err;
        //console.log(result)
        if(result.length>0){
            res.send({code:-1,msg:"该账户已存在,请更换用户名输入!"});
        }else{
			console.log(uname,upwd)
            var sql1="INSERT INTO yp_user(uid, uname, upwd,realname) VALUES (null,?,?,null)";
            pool.query(sql1,[uname,upwd],(err,result)=>{
               if(err) throw err;
                if( result.affectedRows>0){
                    res.send({code:1,msg:"注册成功"});
                }
            })
        }
    })
})



module.exports=router;



