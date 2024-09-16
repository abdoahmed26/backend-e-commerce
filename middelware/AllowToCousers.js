
export const AllowToCousers = (...roles)=>{
    return (req,res,next)=>{
        if(!roles.includes(req.user.role)){
            return res.status(403).json({status: "fail", message: "this process is not allowed"});
        }
        next();
    }
} 