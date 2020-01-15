<template>
    <div class="nav">
        <div class="small-nav">
            <span>银豹</span>
            <span>银豹商城</span>
            <span>博客</span>
        </div>
        <div class="large-nav">
            <div>合作伙伴学院</div>
            <div class="title">
                <span v-for="(item,index) in title"  @click="titleClick(index)" :key="index">{{item}}</span>
            </div>
            <form action="">
                <input type="search" placeholder="搜索课程"/>
            </form>
            <el-button type="text" @click="dialogVisible = true">登录</el-button>

            <el-dialog title="合作伙伴学院登录" :visible.sync="dialogVisible" width="30%">
                <el-form ref="form" :model="form" label-width="80px">
                    <el-form-item>
                        <el-input v-model="form.name" placeholder="合作伙伴学习账号"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-input v-model="form.number" placeholder="密码"></el-input>
                    </el-form-item>
                </el-form>
                <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
                </span>
            </el-dialog>
        </div>

    </div>
</template>

<script>
    export default {
        name: "NavBar",
        components:{
        },
        data(){
            return{
                title:['首页','课程中心','新手专区','资料社区'],
                path:['/home','/class','/newhand','/datacommunity'],
                dialogVisible:false,
                form: {
                    name: '',
                    number:''
                }
            }
        },
        methods:{
            titleClick(index){
                this.$router.replace(this.path[index])
            }
        }
        }
</script>

<style scoped>
    .nav{
        width:100%;
        height:70px;
        background-color: rgb(242,242,242);
}
    .small-nav span{
        padding:10px 30px;
        line-height:30px;
        }
    .large-nav{
        display:flex;
        align-items: center;
        }
    .large-nav div{
        margin:10px 30px;
    }
    .title span{
        padding:20px;
    }
    button{
        margin-left:100px;
    }
</style>
