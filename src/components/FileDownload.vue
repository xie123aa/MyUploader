<template>
  <div>
    <template>
      <el-table
          :data="fileList"
          style="width: 100%">
        <el-table-column
            prop="name"
            label="文件名称"
            width="180">
        </el-table-column>
        <el-table-column
            prop="path"
            label="下载路径"
            width="180">
        </el-table-column>
        <el-table-column
            prop="uploadTime"
            label="上传时间">
        </el-table-column>
        <el-table-column
            fixed="right"
            label="操作"
            width="100">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">下载</el-button>
            <el-button type="text" size="small">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </template>
  </div>
</template>
<script>
 export default {
   name: "FileDownload",
   data() {
     return{
       server_config: this.global.server_config,
       name:"",
       fileList:[]
     }},
   methods:{
     handleClick(row) {
       this.axios.get(this.server_config.url+"/File/download/"+row.id).then(function(response){
       }).catch(function(err){
         console.log(err);
       });
       console.log(row.id);
     }
   },
   created(){
     //获取数据
     let _this = this;
     this.axios.get(this.server_config.url+"/File/getFileList").then(function(response){
       _this.fileList =response.data;
       console.log(response.data);
     }).catch(function(err){
       console.log(err);
     });
   },
 }
</script>
<style>

</style>